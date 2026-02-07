import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
    const cardRef = useRef(null);
    const textRef = useRef(null);
    const [cardVisible, setCardVisible] = useState(false);
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.target === cardRef.current) {
                    setCardVisible(entry.isIntersecting);
                }
                if (entry.target === textRef.current) {
                    setTextVisible(entry.isIntersecting);
                }
            });
        }, observerOptions);

        if (cardRef.current) observer.observe(cardRef.current);
        if (textRef.current) observer.observe(textRef.current);

        return () => {
            if (cardRef.current) observer.unobserve(cardRef.current);
            if (textRef.current) observer.unobserve(textRef.current);
        };
    }, []);

    return (
        <section id="hakkimda" className="relative pt-20 overflow-hidden hero-container flex flex-col lg:flex-row min-h-screen">
            <div className="lg:w-5/12 hero-gradient relative flex items-center justify-center p-8 lg:p-12 min-h-[550px] lg:min-h-0">
                <div
                    ref={cardRef}
                    className={`relative z-20 w-full max-w-sm bg-dusty-lilac dark:bg-dusty-lilac-dark p-8 rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] border-4 border-primary/20 transition-all duration-1000 ease-out ${cardVisible
                        ? 'opacity-100 translate-x-0 lg:translate-x-1/2'
                        : 'opacity-0 -translate-x-10 lg:translate-x-1/4'
                        }`}
                >
                    <div className="aspect-square rounded-full overflow-hidden border-8 border-white dark:border-slate-700 shadow-xl mb-8 transition-all duration-300">
                        <img src="images/profile.jpg" alt="Merve Özkaymak Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-center">
                        <h2 className="font-display text-2xl font-bold text-slate-800 dark:text-white uppercase tracking-wider transition-colors duration-300">Merve ÖZKAYMAK</h2>
                        <div className="w-16 h-1 bg-primary-deep mx-auto my-4 rounded-full"></div>
                        <p className="text-primary-deep dark:text-primary-soft font-bold tracking-widest text-sm transition-colors duration-300">BİLGİSAYAR MÜHENDİSİ</p>
                    </div>
                    <div className="flex justify-center space-x-6 mt-8">
                        <a href="mailto:merve.ozkaymak04@gmail.com" className="text-primary-deep dark:text-primary-soft hover:scale-110 transition-transform" title="E-posta Gönder">
                            <span className="material-symbols-outlined text-3xl">mail</span>
                        </a>
                        <a href="https://www.linkedin.com/in/merve-ozkaymak" target="_blank" rel="noopener noreferrer" className="text-primary-deep dark:text-primary-soft hover:scale-110 transition-transform" title="LinkedIn Profili">
                            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                        <a href="https://github.com/merveozkymk" target="_blank" rel="noopener noreferrer" className="text-primary-deep dark:text-primary-soft hover:scale-110 transition-transform" title="GitHub Profili">
                            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="lg:w-7/12 bg-white dark:bg-background-dark flex items-center p-8 lg:p-16 xl:pl-20 transition-colors duration-300">
                <div
                    ref={textRef}
                    className={`max-w-2xl transition-all duration-1000 ease-out delay-200 ${textVisible
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-12'
                        }`}
                >
                    <div className="flex items-center space-x-2 mb-6">
                        <div className="w-8 h-px bg-primary"></div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm">Hoş Geldiniz</span>
                    </div>
                    <h1 className="font-display text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">Hakkımda</h1>
                    <h3 className="text-2xl font-semibold text-primary dark:text-primary-soft mb-6 transition-colors duration-300">Dijital Dünyayı Kodlayan Bir Vizyon</h3>
                    <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                        <p>
                            Bilgisayar Mühendisliği alanında kendimi geliştiren, yenilikçi teknolojilere ve yazılım geliştirme süreçlerine tutkuyla bağlı bir mühendis adayıyım. Modern ve ölçeklenebilir web uygulamaları geliştirme konusundaki teknik deneyimimi, projelerimde üstlendiğim takım kaptanlığı rolüyle pekiştiriyorum.
                        </p>
                        <p>
                            Problem çözme yeteneğimi ve analitik düşünme yapımı sadece kod yazarken değil, aynı zamanda ekip koordinasyonu ve süreç yönetimi aşamalarında da aktif olarak kullanıyorum. Kullanıcı deneyimini ön planda tutan çözümler üretirken, bir ekibin parçası olmanın ve ortak bir hedefe liderlik etmenin getirdiği sorumlulukla projelere değer katmayı hedefliyorum.
                        </p>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a href="public/cv.pdf" download className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-deep text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20">
                            CV İndir
                            <span className="material-symbols-outlined ml-2">download</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
