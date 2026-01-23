function Awards() {
    const awards = [
        {
            title: "Best Poster Presentation",
            organization: "BrainKorea21",
            description: "Received 1.5 Million KRW for outstanding research presentation",
            year: "2025",
            icon: "icon-award"
        },
        {
            title: "National Graduate Physics Examination",
            organization: "Government of India",
            description: "State Topper - Qualified multiple times",
            year: "2016",
            icon: "icon-trophy"
        },
        {
            title: "Academic Excellence Award",
            organization: "Government of Odisha",
            description: "Awarded laptop for outstanding performance in Higher Secondary Examination",
            year: "2013",
            icon: "icon-star"
        }
    ];

    try {
        return (
            <section data-name="awards" data-file="components/Awards.js" className="py-20 bg-section-light">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
                        Awards & Achievements
                    </h2>
                    
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                        {awards.map((award, index) => (
                            <div key={index} className="section-card p-6 rounded-2xl shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0 border border-amber-200/60">
                                        <div className={`${award.icon} text-xl text-yellow-600`}></div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-1">{award.title}</h4>
                                        <p className="text-[var(--primary-color)] text-sm mb-2">{award.organization}</p>
                                        <p className="text-[var(--text-secondary)] text-sm">{award.description}</p>
                                        <span className="text-xs text-gray-400 mt-2 inline-block">{award.year}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Awards component error:', error);
        return null;
    }
}
