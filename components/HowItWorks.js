function HowItWorks() {
    const steps = [
        {
            number: "1",
            title: "Upload Your Content",
            description: "Share your work samples, experience, and achievements with our AI system."
        },
        {
            number: "2",
            title: "AI Analysis",
            description: "Our AI analyzes your content and determines the best way to present it."
        },
        {
            number: "3",
            title: "Generate Portfolio",
            description: "Get a professionally designed portfolio tailored to your industry and style."
        },
        {
            number: "4",
            title: "Customize Portfolio",
            description: "Fine-tune your portfolio with custom themes, layouts, and personal branding elements."
        }
    ];

    return (
        <section data-name="how-it-works" id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
                <h2 data-name="how-it-works-title" className="text-3xl font-bold text-center mb-12">
                    How It Works
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            data-name={`step-${index}`}
                            className="text-center"
                        >
                            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
