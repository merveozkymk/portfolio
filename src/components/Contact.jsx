import React, { useEffect, useState, useRef } from 'react';

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false); // Reset for repeat animation
                }
            });
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="iletisim" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6">
                <div
                    className={`bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100 dark:border-slate-700 transition-all duration-1000 ease-out ${isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-20'
                        }`}
                >
                    <div className="md:w-1/2 hero-gradient p-12 text-white">
                        <h2 className="font-display text-4xl font-bold mb-6">İletişime Geçin</h2>
                        <p className="mb-12 opacity-90 leading-relaxed">Yeni projeler, iş teklifleri veya sadece kahve içip teknoloji konuşmak için bana ulaşabilirsiniz.</p>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                <span className="material-symbols-outlined text-primary-soft">mail</span>
                                <span>merve.ozkaymak04@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4 bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                <span className="material-symbols-outlined text-primary-soft">location_on</span>
                                <span>İstanbul, Türkiye</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 p-12">
                        <form className="space-y-5"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const name = e.target.name.value;
                                const email = e.target.email.value;
                                const message = e.target.message.value;

                                const subject = `Portfolyo İletişim: ${name}`;
                                const body = `Merhaba Merve,\n\n${message}\n\nİletişim: ${email}`;

                                window.location.href = `mailto:merve.ozkaymak04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                            }}>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Ad Soyad</label>
                                <input name="name" type="text" placeholder="Adınız" className="w-full bg-slate-50 dark:bg-slate-700 border-2 border-transparent focus:border-primary-soft rounded-xl p-3 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">E-posta</label>
                                <input name="email" type="email" placeholder="email@example.com" className="w-full bg-slate-50 dark:bg-slate-700 border-2 border-transparent focus:border-primary-soft rounded-xl p-3 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" required />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Mesajınız</label>
                                <textarea name="message" rows="4" placeholder="Mesajınızı buraya yazın..." className="w-full bg-slate-50 dark:bg-slate-700 border-2 border-transparent focus:border-primary-soft rounded-xl p-3 outline-none transition-all placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary hover:bg-primary-deep text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 transform hover:-translate-y-1">
                                Gönder
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
