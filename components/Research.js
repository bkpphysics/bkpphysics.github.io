function Research() {
    const projects = [
        {
            title: "K-U-KAN: 3D CBCT Reconstruction",
            description: "Developed a pipeline using Kolmogorov-Arnold Networks and Koopman dynamics to reconstruct 3D CBCT volumes from single panoramic X-rays, achieving 2x faster training than baselines.",
            icon: "icon-cpu"
        },
        {
            title: "3D Oral Anatomy Reconstruction",
            description: "Created a Vision Transformer and NeRF-based algorithm to reconstruct anatomy from a single X-ray without needing prior dental arch information.",
            icon: "icon-scan"
        },
        {
            title: "Automatic Jaw Detection",
            description: "Developed an algorithm for jaw detection from CBCT data effective for patients with heavy metal implants or without teeth.",
            icon: "icon-search"
        },
        {
            title: "Quantum Systems Modeling",
            description: "Used Temporal Convolutional Networks (TCN) to model high-dimensional quantum systems and measure system complexity.",
            icon: "icon-atom"
        }
    ];

    const interests = [
        "Computer Vision & Image Processing",
        "Generative AI & Agentic AI",
        "Large Language Models (LLMs)",
        "Physics Informed Neural Networks",
        "Quantum Machine Learning",
        "Probabilistic Machine Learning"
    ];

    try {
        return (
            <section id="research" data-name="research" data-file="components/Research.js" className="py-20 bg-section-light">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
                        Research & Projects
                    </h2>
                    <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
                        Translating complex medical imaging challenges into deployable AI systems, from data-efficient 3D reconstruction to quantum-inspired modeling.
                    </p>

                    <div className="max-w-6xl mx-auto mb-16">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Key Projects</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {projects.map((project, index) => (
                                <div key={index} className="section-card p-6 rounded-2xl shadow-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center flex-shrink-0 border border-[var(--primary-color)]/20">
                                            <div className={`${project.icon} text-xl text-[var(--primary-color)]`}></div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                                            <p className="text-[var(--text-secondary)]">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Research Interests</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {interests.map((interest, index) => (
                                <span key={index} className="skill-badge px-4 py-2 rounded-full text-[var(--text-primary)] shadow-sm bg-white/80">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Research component error:', error);
        return null;
    }
}
