const { put, list, del } = require('@vercel/blob');

const PHOTOS_PREFIX = 'photos/';

module.exports = async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  // GET — list all photos
  if (req.method === 'GET') {
    try {
      const blobs = await list({ prefix: PHOTOS_PREFIX });
      const photos = blobs.blobs.map(b => ({
        name: b.pathname.replace(PHOTOS_PREFIX, ''),
        url: b.url,
        size: b.size,
        uploadedAt: b.uploadedAt,
      }));
      return res.json({ photos });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // POST — upload photo (expects multipart/form-data or raw body with filename query param)
  if (req.method === 'POST') {
    try {
      const filename = req.query.filename;
      if (!filename) {
        return res.status(400).json({ error: 'filename query parameter required' });
      }

      const key = `${PHOTOS_PREFIX}${filename}`;

      // Delete existing file with same name
      try {
        const existing = await list({ prefix: key });
        for (const blob of existing.blobs) {
          await del(blob.url);
        }
      } catch { /* ignore */ }

      const blob = await put(key, req.body, {
        access: 'public',
        addRandomSuffix: false,
        contentType: req.headers['content-type'] || 'image/jpeg',
      });

      return res.json({
        name: filename,
        url: blob.url,
        size: blob.size || 0,
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  // DELETE — delete a photo by name
  if (req.method === 'DELETE') {
    try {
      const { name } = req.body || {};
      if (!name) return res.status(400).json({ error: 'name required' });

      const blobs = await list({ prefix: `${PHOTOS_PREFIX}${name}` });
      for (const blob of blobs.blobs) {
        await del(blob.url);
      }
      return res.json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }

  res.status(405).json({ error: 'Method not allowed' });
};
