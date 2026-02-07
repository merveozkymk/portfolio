import React, { useRef } from 'react';

const Projects = () => {
    const sliderRef = useRef(null);
    const [selectedProject, setSelectedProject] = React.useState(null);
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0); // Reset to first image
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        e.stopPropagation();
        if (selectedProject?.images) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        }
    };

    const prevImage = (e) => {
        e.stopPropagation();
        if (selectedProject?.images) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    const projects = [
        {
            title: "Çevreci Sosyal Medya",
            desc: "Genç yaşlara geri dönüşümü teşvik eden sosyal medya uygulaması, Teknofest Projesi.",
            details: "Teknofest yarışması için geliştirilen proje, gençlerin geri dönüşüm alışkanlıklarını kazanmalarını sağlamak amacıyla geliştirilmiştir. Kullanıcılar geri dönüştürdükleri atıkların fotoğraflarını çekip paylaşarak puan kazanabilir, arkadaşlarıyla yarışabilir ve çevre bilinci oluşturabilirler. React Native ile geliştirilen mobil uygulama, Node.js ve MongoDB backend'i ile desteklenmektedir.",
            tags: ["React Natıve", "Node.js", "MongoDB"],
            img: "public/images/recycleApp.png",
            images: [
                "public/images/recycleApp.png",
                "public/images/recycleApp.png" // Placeholder until user adds more
            ],
            github: "#",
            demo: "#"
        },
        {
            title: "Görev Yönetim Sistemi",
            desc: "Fullstack modern web sitesi.",
            details: "Kullanıcıların günlük görevlerini organize etmelerine yardımcı olan kapsamlı bir yönetim paneli. Sürükle-bırak (Drag & Drop) özelliği, kategorizasyon ve önceliklendirme gibi özellikler içerir. Güvenli kimlik doğrulama ve veritabanı yönetimi ile tam teşekküllü bir çözümdür.",
            tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
            img: "public/images/taskApp.png",
            images: ["public/images/taskApp.png"],
            github: "#",
            demo: "#"
        },
        {
            title: "Trafik Yoğunluğu Kümeleme Analizi",
            desc: "İstanbul trafik veri kümeleri üzerinde veri kümeleme işlemi gerçekleştirilmesi ve yoğunluk bölgelerinin modellenmesi",
            details: "İstanbul Büyükşehir Belediyesi'nin açık veri portalından alınan trafik verileri kullanılarak, K-Means kümeleme algoritması ile yoğunluk analizi yapılmıştır. Python kütüphaneleri kullanılarak veriler görselleştirilmiş ve trafik yoğunluğunun saatlere ve bölgelere göre değişimi raporlanmıştır.",
            tags: ["Python", "K-Means", "matplotlib", "seaborn"],
            img: "public/images/trafficApp.png",
            images: ["public/images/trafficApp.png"],
            github: "#",
            demo: "#"
        },
        {
            title: "Portfolyo Sitesi",
            desc: "Portfolyo sitesi.",
            details: "Kişisel projelerimi ve yeteneklerimi sergilediğim modern, responsive ve estetik bir portfolyo web sitesi. React ve Tailwind CSS kullanılarak geliştirildi, karanlık mod desteği ve yumuşak geçiş efektleri içeriyor.",
            tags: ["React", "Tailwind CSS", "Framer Motion"],
            img: "public/images/portfolio.png",
            images: ["public/images/portfolio.png"],
            github: "#",
            demo: "#"
        },
        {
            title: "Bayrak Oyunu",
            desc: "Unity ile geliştirilen 2d bayrak yakalama oyunu",
            details: "Unity oyun motoru ve C# dili kullanılarak geliştirilen 2D platform oyunu. Oyuncular, engelleri aşarak ve düşmanlardan kaçarak bayrağı ele geçirmeye çalışırlar. Fizik tabanlı bulmacalar ve akıcı kontrol mekanikleri içerir.",
            tags: ["Unity", "C#"],
            img: "public/images/flagGame.png",
            images: ["public/images/flagGame.png"],
            github: "#",
            demo: "#"
        }
    ];

    // Helper to get current images array (fallback to single img if array missing)
    const currentImages = selectedProject ? (selectedProject.images || [selectedProject.img]) : [];

    return (
        <section id="projeler" className="py-24 bg-white dark:bg-background-dark overflow-hidden transition-colors duration-300 relative">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
                <div className="text-left">
                    <h2 className="font-display text-4xl font-bold mb-4 text-slate-900 dark:text-white transition-colors duration-300">Projeler</h2>
                    <div className="w-16 h-1 bg-primary rounded-full"></div>
                </div>
                <div className="flex space-x-3">
                    <button onClick={scrollLeft} className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center group">
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button onClick={scrollRight} className="w-12 h-12 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all flex items-center justify-center group">
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6">
                <div ref={sliderRef} className="flex overflow-x-auto space-x-8 pb-8 scroll-smooth scrollbar-hide items-stretch">
                    {projects.map((project, index) => (
                        <div key={index} className="min-w-[350px] md:min-w-[400px] group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 flex flex-col">
                            <div className="aspect-video overflow-hidden relative">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="font-bold text-xl mb-3 text-slate-800 dark:text-white transition-colors duration-300">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2 transition-colors duration-300 flex-grow">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary-deep dark:text-primary-soft text-[10px] font-bold uppercase rounded tracking-wider">{tag}</span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => openModal(project)}
                                    className="inline-flex items-center text-primary-deep dark:text-primary-soft font-bold hover:text-primary transition-colors mt-auto"
                                >
                                    Projeyi İncele <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
                        onClick={closeModal}
                    ></div>
                    <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden animate-[fadeIn_0.3s_ease-out] flex flex-col lg:flex-row">
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors z-50"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>

                        {/* Image Section - Left (or Top on Mobile) */}
                        <div className="lg:w-3/5 relative bg-slate-100 dark:bg-slate-900 flex items-center justify-center min-h-[300px] lg:min-h-full">
                            {currentImages.length > 0 ? (
                                <>
                                    <div className="w-full h-full absolute inset-0">
                                        <img
                                            src={currentImages[currentImageIndex]}
                                            alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Navigation Buttons for Carousel */}
                                    {currentImages.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white text-slate-800 transition-colors shadow-lg z-10"
                                            >
                                                <span className="material-symbols-outlined">chevron_left</span>
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white text-slate-800 transition-colors shadow-lg z-10"
                                            >
                                                <span className="material-symbols-outlined">chevron_right</span>
                                            </button>

                                            {/* Dots Indicator */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                                                {currentImages.map((_, idx) => (
                                                    <div
                                                        key={idx}
                                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-primary w-4' : 'bg-slate-300/50'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </>
                            ) : (
                                <div className="text-slate-400">Görsel Yok</div>
                            )}
                        </div>

                        {/* Details Section - Right (or Bottom on Mobile) */}
                        <div className="lg:w-2/5 p-8 lg:p-10 overflow-y-auto max-h-[50vh] lg:max-h-[90vh]">
                            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 pr-12">{selectedProject.title}</h2>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {selectedProject.tags.map((tag, i) => (
                                    <span key={i} className="px-3 py-1 bg-primary/10 text-primary-deep dark:text-primary-soft text-xs font-bold uppercase rounded-full tracking-wider">{tag}</span>
                                ))}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-lg">
                                {selectedProject.details || selectedProject.desc}
                            </p>

                            <div className="flex flex-col gap-4 mt-auto">
                                <a href={selectedProject.github} className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined">code</span>
                                    GitHub
                                </a>
                                <a href={selectedProject.demo} className="w-full bg-primary hover:bg-primary-deep text-white font-bold py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">visibility</span>
                                    Canlı Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
