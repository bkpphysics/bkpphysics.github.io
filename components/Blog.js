function Blog() {
    const posts = [
        {
            title: "Kolmogorov-Arnold Networks for Dental CBCT",
            date: "Jan 2026",
            tags: ["K-A Networks", "Medical Imaging", "3D Reconstruction"],
            summary: "A deep dive into how K-A networks accelerate volumetric reconstructions and stabilize training on sparse panoramic X-rays.",
            link: "#"
        },
        {
            title: "Vision Transformers as Radiology Priors",
            date: "Dec 2025",
            tags: ["ViT", "Radiology", "Transfer Learning"],
            summary: "Exploring hybrid ViT backbones that balance global context with fine-grained dental structures for robust inference.",
            link: "#"
        },
        {
            title: "Physics-Informed NeRFs for Oral Anatomy",
            date: "Nov 2025",
            tags: ["NeRF", "PINN", "Generative"],
            summary: "Bringing physical constraints into neural radiance fields to reduce hallucinations and improve geometric fidelity.",
            link: "#"
        }
    ];

    try {
        return (
            <section id="blog" data-name="blog" data-file="components/Blog.js" className="py-20 bg-section-light">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-6 text-[var(--text-primary)]">
                        Research Notes
                    </h2>
                    <p className="text-center text-[var(--text-secondary)] max-w-3xl mx-auto mb-12">
                        Field reports, experiments, and reflections from ongoing work in medical imaging, generative AI, and quantum-inspired modeling.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {posts.map((post, index) => (
                            <article key={index} className="section-card p-6 rounded-2xl flex flex-col">
                                <div className="flex items-center justify-between text-sm text-[var(--text-secondary)] mb-3">
                                    <span className="flex items-center gap-2">
                                        <span className="icon-pen-square text-[var(--primary-color)]"></span>
                                        {post.date}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-white/70 text-[var(--primary-color)] text-xs font-semibold border border-[var(--primary-color)]/20">
                                        Blog
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">{post.title}</h3>
                                <p className="text-[var(--text-secondary)] flex-1 leading-relaxed mb-4">{post.summary}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="skill-badge px-3 py-1 rounded-full text-sm text-[var(--text-primary)] bg-white/80">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={post.link} className="inline-flex items-center gap-2 text-[var(--primary-color)] font-semibold hover:text-[var(--secondary-color)] transition">
                                    Read note
                                    <span className="icon-arrow-right"></span>
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Blog component error:', error);
        return null;
    }
}
