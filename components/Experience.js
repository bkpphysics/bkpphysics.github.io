function Experience() {
    const experiences = [
        {
            role: "Research Assistant",
            organization: "AI & Image Processing Lab, Sun Moon University",
            period: "March 2023 - Present",
            location: "South Korea",
            icon: "icon-flask"
        },
        {
            role: "Data Science Trainer",
            organization: "AI Club (Online)",
            period: "July 2023 - Dec 2023",
            location: "Remote",
            icon: "icon-presentation"
        },
        {
            role: "Guest Faculty",
            organization: "Shree Education Scholars' Residential College",
            period: "June 2019 - Dec 2022",
            location: "Odisha, India",
            icon: "icon-school"
        }
    ];

    try {
        return (
            <section data-name="experience" data-file="components/Experience.js" className="py-20 bg-section-light">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
                        Experience
                    </h2>
                    <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-10">
                        Teaching, research, and mentoring roles that shaped a practical, collaborative approach to building AI systems.
                    </p>
                    
                    <div className="max-w-3xl mx-auto space-y-6">
                        {experiences.map((exp, index) => (
                            <div key={index} className="section-card p-6 rounded-2xl shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-200/60">
                                        <div className={`${exp.icon} text-xl text-emerald-600`}></div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                                        <p className="text-[var(--primary-color)] mb-2">{exp.organization}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)]">
                                            <span className="flex items-center gap-1">
                                                <div className="icon-calendar text-base"></div>
                                                {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <div className="icon-map-pin text-base"></div>
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Experience component error:', error);
        return null;
    }
}
