import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const articles = [
  {
    id: 2,
    title: "#2 - Le vrai coût d'un refus impersonnel 😬",
    category: "Les incontournables",
    categoryColor: "text-blue-600",
    imageUrl: "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/52edae4d2d6d0b76ce883739c56ee0e7.png",
    description: "Chaque point de contact avec un candidat est un point de bascule : pour l’image, la réputation et l’engagement. Et parmi ces points de contact, il y en a un que beaucoup sous-estime encore trop : le message de refus.",
    date: "07 Août, 2025",
    readingTime: "5 min",
    link: "/blog/experience-candidat-incontournable-2025",
  },
  {
    id: 1,
    title: "#1 - L'expérience candidat : incontournable en 2025 ?",
    category: "Les incontournables",
    categoryColor: "text-blue-600",
    imageUrl: "https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/c79cbed83de57836cf956e14f7bff3dc.jpg",
    description: "L'expérience candidat est devenue un pilier de la stratégie RH. Ignorer son importance, c'est prendre le risque de perdre les meilleurs talents et de ternir sa marque employeur. Découvrez pourquoi et comment en faire une force.",
    date: "31 Juil, 2025",
    readingTime: "5 min",
    link: "/blog/experience-candidat-incontournable-2025",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const ArticleCard = ({ article, index }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300 border border-gray-100"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    custom={index}
  >
    <div className="overflow-hidden">
      <Link to={article.link}>
        <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
      </Link>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <p className={`text-sm font-bold mb-2 ${article.categoryColor}`}>{article.category}</p>
      <h3 className="text-xl font-bold text-brand-dark mb-3 flex-grow">
        <Link to={article.link} className="hover:text-brand-purple transition-colors duration-300">{article.title}</Link>
      </h3>
      <p className="text-gray-600 text-sm mb-4">{article.description}</p>
      <div className="flex items-center text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
        <Calendar className="w-4 h-4 mr-1.5" />
        <span>{article.date}</span>
        <span className="mx-2">|</span>
        <Clock className="w-4 h-4 mr-1.5" />
        <span>{article.readingTime}</span>
      </div>
    </div>
  </motion.div>
);

const BlogGrid = ({ handleNotImplemented }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;