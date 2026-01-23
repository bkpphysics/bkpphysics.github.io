function About() {
    try {
        return (
            <section id="about" data-name="about" data-file="components/About.js" className="py-20 bg-section-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto section-card rounded-3xl p-10">
                        <h2 className="text-4xl font-bold text-center mb-6 text-[var(--text-primary)]">
                            About Me
                        </h2>
                        <p className="text-center text-[var(--text-secondary)] mb-10">
                            Physics-trained AI researcher crafting data-efficient imaging models and generative systems grounded in scientific rigor.
                        </p>
                        
                        <div className="prose prose-lg max-w-none">
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
                                I completed my Ph.D. at Sun Moon University's Artificial Intelligence & Image Processing Lab, 
                                specializing in cutting-edge AI research. My doctoral thesis, <em>"DentAI Dyad: 3D Oral Anatomy 
                                Reconstruction from a Single Panoramic X-Ray Radiograph,"</em> explores innovative applications 
                                of deep learning in medical imaging.
                            </p>
                            
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
                                My research interests span Computer Vision, Generative AI, Physics-Informed Neural Networks (PINN), 
                                and Quantum Machine Learning. I have contributed to multiple high-impact publications in both AI 
                                and theoretical physics domains.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-white/80 border border-[var(--primary-color)]/10 shadow-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                            <div className="icon-graduation-cap text-xl text-blue-600"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold">Education</h3>
                                    </div>
                                    <ul className="space-y-2 text-[var(--text-secondary)]">
                                        <li>Ph.D. Information & Communication Engineering (2026)</li>
                                        <li>M.Sc. Physics, Pondicherry University (2019)</li>
                                        <li>B.Sc. Physics (Hons.), Sambalpur University (2016)</li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-2xl bg-white/80 border border-[var(--primary-color)]/10 shadow-sm">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                                            <div className="icon-map-pin text-xl text-green-600"></div>
                                        </div>
                                        <h3 className="text-xl font-semibold">Location</h3>
                                    </div>
                                    <p className="text-[var(--text-secondary)]">
                                        Currently based in Asan-si, South Korea, conducting research at Sun Moon University's 
                                        AI & Image Processing Laboratory.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        return null;
    }
}
