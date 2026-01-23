function Hero() {
    try {
        return (
            <section data-name="hero" data-file="components/Hero.js" className="hero-gradient text-white pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <LaserFlow 
                        className="w-full h-full"
                        color="#3b82f6"
                        wispDensity={1.2}
                        flowSpeed={0.35}
                        fogIntensity={0.45}
                        verticalSizing={2.0}
                        horizontalSizing={0.5}
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <span className="gradient-pill light text-sm uppercase tracking-wide">
                                <span className="icon-brain text-base"></span>
                                Computer Vision · Generative AI · Quantum ML
                            </span>

                            <div>
                                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-white">
                                    Bikram Keshari Parida
                                </h1>
                                <p className="text-xl md:text-2xl text-white/90 mb-2">AI Researcher · Ph.D. (AI & Image Processing)</p>
                                <p className="text-lg text-white/80">Sun Moon University · South Korea</p>
                            </div>

                            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                                Bridging computer vision, generative modeling, and physics-informed learning to build intelligent imaging systems and expressive scientific tools.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a 
                                    href="mailto:parida.bikram90.bkp@gmail.com" 
                                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-5 py-3 rounded-full font-semibold shadow-lg shadow-cyan-900/30 hover:-translate-y-0.5 transition"
                                >
                                    <span className="icon-mail text-xl"></span>
                                    Get in touch
                                </a>
                                <a 
                                    href="cv/CV_Bikram.pdf" 
                                    download
                                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-semibold shadow-lg shadow-indigo-900/30 hover:-translate-y-0.5 transition"
                                >
                                    <span className="icon-file-text text-xl"></span>
                                    Download CV
                                </a>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
                                {[
                                    { label: 'Publications', value: '15+' },
                                    { label: 'Ph.D. CGPA', value: '4.42/4.5' },
                                    { label: 'Years Research', value: '3+' }
                                ].map((item, index) => (
                                    <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                                        <div className="text-3xl font-bold mb-1">{item.value}</div>
                                        <div className="text-sm text-white/70">{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-24 h-24 bg-cyan-400/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
                            
                            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                                <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-white/70 mb-4">
                                    <span className="icon-cpu text-base"></span>
                                    Current Thesis
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">DentAI Dyad</h3>
                                <p className="text-white/80 leading-relaxed mb-6">
                                    3D oral anatomy reconstruction from a single panoramic X-ray using Kolmogorov-Arnold Networks and NeRF-inspired vision transformers.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    {[
                                        { title: 'Faster Training', copy: '2x speedup over baselines with K-A Networks' },
                                        { title: 'Implant Robust', copy: 'Reliable detection with complex CBCT data' }
                                    ].map((item, index) => (
                                        <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                            <div className="text-sm text-white/70">{item.title}</div>
                                            <div className="text-base font-semibold text-white mt-1">{item.copy}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {['Vision Transformers', 'Physics-Informed ML', 'Generative Imaging'].map((tag, index) => (
                                        <span key={index} className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        return null;
    }
}
