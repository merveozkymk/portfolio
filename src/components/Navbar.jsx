import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('hakkimda');

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
                nav.classList.add('border-primary/10');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.remove('border-primary/10');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ScrollSpy implementation
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: "-20% 0px -50% 0px" // Trigger when section is in the upper middle of the viewport
        });

        sections.forEach(section => observer.observe(section));

        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const navLinkClass = (sectionId) =>
        `text-sm font-semibold transition-all duration-300 border-b-2 ${activeSection === sectionId
            ? 'text-primary dark:text-primary-soft border-primary'
            : 'text-slate-700 dark:text-slate-200 border-transparent hover:text-primary-deep dark:hover:text-primary hover:border-primary/50'
        }`;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-3 group cursor-pointer">
                    <img src="images/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
                    <span className="font-display font-bold text-xl tracking-tight text-slate-900 dark:text-white">Merve Özkaymak</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#hakkimda" className={navLinkClass('hakkimda')}>Hakkımda</a>
                    <a href="#egitim" className={navLinkClass('egitim')}>Eğitim</a>
                    <a href="#projeler" className={navLinkClass('projeler')}>Projeler</a>
                    <a href="#iletisim" className={navLinkClass('iletisim')}>İletişim</a>
                    <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-primary/10 transition-colors">
                        {darkMode ? (
                            <span className="material-symbols-outlined block text-primary-soft">light_mode</span>
                        ) : (
                            <span className="material-symbols-outlined block text-primary">dark_mode</span>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
