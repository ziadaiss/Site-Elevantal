import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
const ListItem = React.forwardRef(({
  className,
  title,
  children,
  href,
  onClick,
  ...props
}, ref) => {
  return <li>
      <NavigationMenuLink asChild>
        <Link to={href || '#'} ref={ref} onClick={onClick} className={cn("flex select-none items-start space-x-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
          <div>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1.5">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>;
});
ListItem.displayName = "ListItem";
const Navbar = ({
  handleNotImplemented
}) => {
  const {
    scrollY
  } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const calendlyUrl = "https://calendly.com/contact-elevantal/premier-echange";
  useMotionValueEvent(scrollY, "change", latest => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
  });
  const closeMobileMenu = () => setMobileMenuOpen(false);
  return <>
      <motion.div variants={{
      visible: {
        y: "0%",
        opacity: 1
      },
      hidden: {
        y: "-150%",
        opacity: 0
      }
    }} animate={hidden ? "hidden" : "visible"} transition={{
      duration: 0.35,
      ease: "easeInOut"
    }} className="fixed top-0 w-full z-50">
        <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-b-xl border-b border-gray-200/80 px-4 sm:px-8">
          <div className="flex justify-between items-center h-16 max-w-7xl mx-auto">
            <div className="flex-shrink-0">
              <Link to="/" onClick={closeMobileMenu}>
                <img src="https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/design-sans-titre-57-kU6I1.png" alt="Logo Elevantal" className="h-10 w-auto" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base bg-transparent hover:bg-gray-100 rounded-full">Nos services</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 bg-transparent">
                      <div className="grid grid-cols-1 md:grid-cols-[280px,auto] gap-x-6 w-[750px]">
                        <ul className="grid gap-3 content-center p-4">
                          <ListItem href="/formation-rRevelation" title="La Méthode RHévélation">
                            Réduisez de 30% vos délais de recrutement
                          </ListItem>
                          <ListItem href="/recruitment-experience-boost" title="L'accompagnement RHévélation">
                            Economisez 60 000€ de recrutement raté
                          </ListItem>
                        </ul>
                        <div className="relative w-[400px] h-[225px] hidden md:flex items-center overflow-hidden rounded-md">
                          <Link to="/tableur-experience-candidat" className="absolute inset-0 z-10 block w-full h-full">
                            <img src="https://horizons-cdn.hostinger.com/9fdb5cd6-7395-42e7-a897-ebea996e876c/a786fa429dd414e777549463b67f2e69.png" alt="KPIs expérience candidat" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300"></div>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base bg-transparent hover:bg-gray-100 rounded-full">L'agence Elevantal</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0 bg-transparent">
                      <ul className="grid w-[350px] gap-3 p-4">
                         <ListItem href="/qui-sommes-nous" title="Qui sommes-nous ?">
                          Découvrez ce que nous faisons
                        </ListItem>
                        <ListItem href="/newsletter" title="Newsletter">
                          Conseils et actus RH sous forme d'articles.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button asChild className="bg-brand-blue-gradient text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 transform hover:scale-105 ml-2" // Applied styling to match the reference pill shape
            >
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                  Prenez rendez-vous
                </a>
              </Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: mobileMenuOpen ? 1 : 0,
      y: mobileMenuOpen ? 0 : -20,
      pointerEvents: mobileMenuOpen ? 'auto' : 'none'
    }} transition={{
      duration: 0.3
    }} className="fixed top-16 left-0 w-full bg-white/95 backdrop-blur-lg z-40 p-4 shadow-lg md:hidden">
        <ul className="flex flex-col space-y-4">
           <li>
            <Link to="/tableur-experience-candidat" onClick={closeMobileMenu} className="block py-2 text-lg font-semibold">Tableur Expérience Candidat</Link>
          </li>
          <li>
            <Link to="/formation-rRevelation" onClick={closeMobileMenu} className="block py-2 text-lg font-semibold">La Méthode RHévélation</Link>
          </li>
          <li>
            <Link to="/recruitment-experience-boost" onClick={closeMobileMenu} className="block py-2 text-lg font-semibold">L'accompagnement RHévélation</Link>
          </li>
          <li>
            <Link to="/qui-sommes-nous" onClick={closeMobileMenu} className="block py-2 text-lg font-semibold">Qui sommes-nous ?</Link>
          </li>
          <li>
            <Link to="/newsletter" onClick={closeMobileMenu} className="block py-2 text-lg font-semibold">Newsletter</Link>
          </li>
          <li>
            <Button asChild className="w-full mt-4 bg-brand-blue-gradient text-white px-8 py-4 rounded-full font-semibold text-base" // Applied styling to match the reference pill shape
          >
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center">
                Prenez rendez-vous
              </a>
            </Button>
          </li>
        </ul>
      </motion.div>
    </>;
};
export default Navbar;