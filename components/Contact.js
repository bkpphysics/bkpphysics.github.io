function Contact() {
    try {
        return (
            <section id="contact" data-name="contact" data-file="components/Contact.js" className="py-20 bg-section-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12 text-[var(--text-primary)]">
                        Get In Touch
                    </h2>
                    
                    <div className="max-w-2xl mx-auto text-center section-card rounded-3xl p-10">
                        <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                            I'm always open to discussing research collaborations, speaking opportunities, 
                            or interesting projects in AI and Machine Learning.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                            <a 
                                href="mailto:parida.bikram90.bkp@gmail.com" 
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white px-8 py-4 rounded-full hover:shadow-lg transition-all shadow-md"
                            >
                                <div className="icon-mail text-xl"></div>
                                <span className="font-semibold">Send Email</span>
                            </a>
                            
                            <a 
                                href="https://www.linkedin.com/in/bikram-keshari-parida-10478a285/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[var(--primary-color)]/25 text-[var(--primary-color)] bg-white/80 hover:bg-white transition-all shadow-sm"
                            >
                                <div className="icon-linkedin text-xl"></div>
                                <span className="font-semibold">LinkedIn Profile</span>
                            </a>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-200/70">
                            <p className="text-sm text-[var(--text-secondary)] mb-4">Location</p>
                            <p className="text-lg font-medium">Asan-si, South Korea</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        return null;
    }
}
