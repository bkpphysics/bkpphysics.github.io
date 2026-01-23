function Publications() {
    const [selectedCategory, setSelectedCategory] = React.useState('all');

    const publications = [
        {
            category: "ai",
            title: "K-U-KAN: Kolmogorov-Arnold Networks for 3D CBCT Reconstruction",
            venue: "Ready for ICML",
            year: "2025"
        },
        {
            category: "ai",
            title: "Hybrid Vision Transformers for Medical Imaging",
            venue: "IEEE Access",
            year: "2025"
        },
        {
            category: "ai",
            title: "Generative Machine Learning Solutions for Optics",
            venue: "Physical Review Research",
            year: "2024"
        },
        {
            category: "physics",
            title: "Anisotropic Compact Stars in General Relativity",
            venue: "Chinese Journal of Physics",
            year: "2024"
        },
        {
            category: "physics",
            title: "Koopman-von Neumann Mechanics and Quantum Dynamics",
            venue: "European Physical Journal C",
            year: "2023"
        },
        {
            category: "physics",
            title: "Tidal Love Numbers in Compact Objects",
            venue: "International Journal of Modern Physics D",
            year: "2023"
        }
    ];

    const filteredPublications = selectedCategory === 'all' 
        ? publications 
        : publications.filter(pub => pub.category === selectedCategory);

    try {
        return (
            <section id="publications" data-name="publications" data-file="components/Publications.js" className="py-20 bg-section-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-8 text-[var(--text-primary)]">
                        Publications
                    </h2>
                    <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
                        A blend of medical imaging, generative modeling, and theoretical physics papers exploring how intelligent systems can learn from sparse, noisy, or structured data.
                    </p>
                    
                    <div className="flex justify-center gap-3 mb-12 flex-wrap">
                        <button 
                            onClick={() => setSelectedCategory('all')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'all' ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-md' : 'bg-white/70 text-[var(--text-secondary)] border border-[var(--primary-color)]/15 hover:text-[var(--primary-color)]'}`}
                        >
                            All
                        </button>
                        <button 
                            onClick={() => setSelectedCategory('ai')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'ai' ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-md' : 'bg-white/70 text-[var(--text-secondary)] border border-[var(--primary-color)]/15 hover:text-[var(--primary-color)]'}`}
                        >
                            AI
                        </button>
                        <button 
                            onClick={() => setSelectedCategory('physics')}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'physics' ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-md' : 'bg-white/70 text-[var(--text-secondary)] border border-[var(--primary-color)]/15 hover:text-[var(--primary-color)]'}`}
                        >
                            Physics
                        </button>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-4">
                        {filteredPublications.map((pub, index) => (
                            <div key={index} className="section-card p-6 rounded-2xl">
                                <h3 className="text-lg font-semibold mb-2 text-[var(--text-primary)]">{pub.title}</h3>
                                <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] flex-wrap">
                                    <span className="flex items-center gap-2">
                                        <div className="icon-book-open text-base text-[var(--primary-color)]"></div>
                                        {pub.venue}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <div className="icon-calendar text-base text-[var(--primary-color)]"></div>
                                        {pub.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Publications component error:', error);
        return null;
    }
}
