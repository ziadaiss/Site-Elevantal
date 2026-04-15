import React from 'react';

const clients = [
  { name: 'Chanel', src: 'https://logo.clearbit.com/chanel.com' },
  { name: 'Free', src: 'https://logo.clearbit.com/free.fr' },
  { name: 'BPCE', src: 'https://logo.clearbit.com/bpce.fr' },
  { name: 'Publicis', src: 'https://logo.clearbit.com/publicisgroupe.com' },
  { name: 'Porsche', src: 'https://logo.clearbit.com/porsche.com' },
  { name: 'Saint-Gobain', src: 'https://logo.clearbit.com/saint-gobain.com' },
  { name: 'Boulanger', src: 'https://logo.clearbit.com/boulanger.com' },
  { name: 'Orange', src: 'https://logo.clearbit.com/orange.com' },
];

const Clients = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="py-16 bg-white">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[scroll_40s_linear_infinite]">
          {duplicatedClients.map((logo, index) => (
            <li key={index}>
              <img src={logo.src} alt={logo.name} className="h-8 md:h-10 w-auto" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;