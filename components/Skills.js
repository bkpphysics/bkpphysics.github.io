function Skills() {
    const skillCategories = [
        {
            title: "Programming & ML Frameworks",
            skills: ["Python", "PyTorch", "TensorFlow", "Keras"],
            icon: "icon-code"
        },
        {
            title: "Scientific Computing",
            skills: ["Mathematica", "Maplesoft", "Origin 9.1"],
            icon: "icon-calculator"
        },
        {
            title: "Specializations",
            skills: ["Computer Vision", "Deep Learning", "Medical Imaging","NeRF","Agentic AI & LLM", "Quantum ML"],
            icon: "icon-brain"
        }
    ];

    try {
        return (
            <section data-name="skills" data-file="components/Skills.js" className="py-20 bg-section-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
                        Technical Skills
                    </h2>
                    <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
                        Tools and frameworks I lean on to translate ideas into robust experiments, prototypes, and production-ready research assets.
                    </p>
                    
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <div key={index} className="section-card p-6 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center border border-purple-200/60">
                                        <div className={`${category.icon} text-xl text-purple-600`}></div>
                                    </div>
                                    <h3 className="text-lg font-semibold">{category.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill-badge bg-white px-3 py-1 rounded-full text-sm text-[var(--text-secondary)] shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Skills component error:', error);
        return null;
    }
}
