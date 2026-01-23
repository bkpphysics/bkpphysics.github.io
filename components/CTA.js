function CTA() {
    return (
        <section data-name="cta" className="py-20 hero-gradient text-white">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 data-name="cta-title" className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Create Your Professional Portfolio?
                    </h2>
                    <p data-name="cta-description" className="text-lg md:text-xl mb-8">
                        Join thousands of professionals who are already using AI to showcase their work. Get started for free today!
                    </p>
                    <div className="flex justify-center">
                        <a 
                            href="https://app.trickle.so" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            data-name="cta-start-btn"
                            className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-transform duration-200"
                        >
                            Get Started Now
                        </a>
                    </div>
                    <p data-name="cta-no-credit-card" className="mt-6 text-sm text-white/80">
                        No credit card required • Free trial available
                    </p>
                </div>
            </div>
        </section>
    );
}
