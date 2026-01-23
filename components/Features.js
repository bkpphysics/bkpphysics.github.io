function Features() {
    const features = [
        {
            icon: "fa-wand-magic-sparkles",
            title: "AI-Powered Design",
            description: "Our AI analyzes your content and creates the perfect layout to showcase your work."
        },
        {
            icon: "fa-bolt",
            title: "Lightning Fast",
            description: "Generate your portfolio in minutes, not hours. Save time and focus on your work."
        },
        {
            icon: "fa-cloud",
            title: "Free Hosting",
            description: "Host your portfolio for free on our secure cloud infrastructure with 99.9% uptime."
        },
        {
            icon: "fa-database",
            title: "Built-in Database",
            description: "Store and manage your portfolio content with our integrated database solution."
        },
        {
            icon: "fa-palette",
            title: "Customizable Themes",
            description: "Choose from various themes or let AI suggest the best design for your industry."
        },
        {
            icon: "fa-mobile-screen",
            title: "Mobile Responsive",
            description: "Your portfolio looks great on all devices, from smartphones to desktop computers."
        }
    ];

    return (
        <section data-name="features" id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 data-name="features-title" className="text-3xl font-bold mb-4">
                        Powerful Features for Your Portfolio
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Everything you need to create and host your professional portfolio, powered by cutting-edge AI technology.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            data-name={`feature-card-${index}`}
                            className="feature-card bg-white p-6 rounded-lg shadow-sm text-center group hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50"
                        >
                            <div className="feature-icon-wrapper mb-4 transition-transform group-hover:scale-110">
                                <i className={`fas ${feature.icon} text-4xl text-indigo-600`}></i>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
