function Footer() {
    try {
        return (
            <footer data-name="footer" data-file="components/Footer.js" className="bg-[#0b1221] text-white py-12 relative overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-gradient-to-r from-cyan-500/20 via-indigo-500/10 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">Bikram Keshari Parida</h3>
                            <p className="text-gray-300">AI Researcher | Ph.D.</p>
                        </div>

                        <div className="flex justify-center gap-6 mb-8">
                            <a 
                                href="mailto:parida.bikram90.bkp@gmail.com" 
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Email"
                            >
                                <div className="icon-mail text-2xl"></div>
                            </a>
                            <a 
                                href="https://bkpphysics.github.io/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Website"
                            >
                                <div className="icon-globe text-2xl"></div>
                            </a>
                        </div>

                        <div className="border-t border-white/10 pt-8">
                            <p className="text-gray-400 text-sm">
                                © 2026 Bikram Keshari Parida. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        return null;
    }
}
