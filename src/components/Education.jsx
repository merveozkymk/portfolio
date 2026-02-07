import React, { useEffect, useState, useRef } from 'react';

const Education = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                setIsVisible(entry.isIntersecting);
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const getItemStyle = (index) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
        transition: 'all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1)',
        transitionDelay: isVisible ? `${index * 400}ms` : '0ms'
    });

    return (
        <section ref={sectionRef} id="egitim" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">EĞİTİM YOLCULUĞUM</h2>
                    <div className="w-24 h-1 bg-primary-deep mx-auto rounded-full"></div>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 dark:bg-slate-700"></div>
                    <div className="space-y-12">
                        {/* Education Item 1 */}
                        <div style={getItemStyle(0)} className="relative flex items-center justify-between md:justify-normal group">
                            <div className="hidden md:flex w-1/2 pr-12 justify-end">
                                <div className="text-right">
                                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary-deep font-bold rounded-full text-sm mb-2">2022 - 2027</span>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Bilgisayar Mühendisliği</h3>
                                </div>
                            </div>
                            <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg border-4 border-white dark:border-slate-900 group-hover:bg-primary-deep transition-colors">
                                <span className="material-symbols-outlined text-lg">school</span>
                            </div>
                            <div className="flex-1 md:w-1/2 pl-12">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                                    <div className="md:hidden mb-2">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary-deep font-bold rounded-full text-xs">2022 - 2027</span>
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Bilgisayar Mühendisliği</h3>
                                    </div>
                                    <p className="text-primary font-semibold mb-2">İstanbul Üniversitesi Cerrahpaşa</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Ortalama: 3.67 / 4.00 </p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">2022-2023 İngilizce Hazırlık</p>
                                </div>
                            </div>
                        </div>

                        {/* Education Item 2 */}
                        <div style={getItemStyle(1)} className="relative flex items-center justify-between md:justify-normal group">
                            <div className="flex-1 md:w-1/2 pr-12 text-right md:order-1 order-2">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border-r-4 border-primary hover:shadow-md transition-shadow">
                                    <div className="md:hidden mb-2 text-left">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary-deep font-bold rounded-full text-xs">2018 - 2022</span>
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white">Lise</h3>
                                    </div>
                                    <p className="text-primary font-semibold mb-2">Pertevniyal Lisesi</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm"></p>
                                </div>
                            </div>
                            <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg border-4 border-white dark:border-slate-900 group-hover:bg-primary-deep transition-colors md:order-2 order-1">
                                <span className="material-symbols-outlined text-lg">workspace_premium</span>
                            </div>
                            <div className="hidden md:flex w-1/2 pl-12 order-3">
                                <div className="text-left">
                                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary-deep font-bold rounded-full text-sm mb-2">2018 - 2022</span>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300">Lise</h3>
                                </div>
                            </div>
                        </div>

                        {/* Education Item 3 */}
                        <div style={getItemStyle(2)} className="relative flex items-center justify-between md:justify-normal group">
                            <div className="hidden md:flex w-1/2 pr-12 justify-end">
                                <div className="text-right">
                                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary-deep font-bold rounded-full text-sm mb-2">2014 - 2018</span>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white transition-colors duration-300"></h3>
                                </div>
                            </div>
                            <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-lg border-4 border-white dark:border-slate-900 group-hover:bg-primary-deep transition-colors">
                                <span className="material-symbols-outlined text-lg">school</span>
                            </div>
                            <div className="flex-1 md:w-1/2 pl-12">
                                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border-l-4 border-primary hover:shadow-md transition-shadow">
                                    <div className="md:hidden mb-2">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary-deep font-bold rounded-full text-xs">2014 - 2018</span>
                                        <h3 className="text-lg font-bold text-slate-800 dark:text-white"></h3>
                                    </div>
                                    <p className="text-primary font-semibold mb-2">İstanbul Ticaret Odası Bilim Sanat Merkezi</p>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
