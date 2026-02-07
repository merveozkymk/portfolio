import React from 'react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center bg-white dark:bg-background-dark transition-colors duration-300">
            <div className="flex justify-center space-x-6 mb-6">
                <span className="material-symbols-outlined text-primary hover:text-primary-deep cursor-pointer transition-colors">terminal</span>
                <span className="material-symbols-outlined text-primary hover:text-primary-deep cursor-pointer transition-colors">database</span>
                <span className="material-symbols-outlined text-primary hover:text-primary-deep cursor-pointer transition-colors">cloud</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400">© 2025 Merve Özkaymak.</p>
        </footer>
    );
};

export default Footer;
