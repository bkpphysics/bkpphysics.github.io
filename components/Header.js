function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navLinks = [
        { label: 'Home', href: 'index.html#top' },
        { label: 'About', href: 'index.html#about' },
        { label: 'Research', href: 'research.html#top' },
        { label: 'Publications', href: 'research.html#publications' },
        { label: 'Blog', href: 'blog.html#top' },
        { label: 'Contact', href: '#contact' }
    ];

    try {
        return (
            <header data-name="header" data-file="components/Header.js" className="nav-glass fixed w-full top-0 z-50">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/60 bg-gradient-to-br from-cyan-100 to-indigo-100 shadow-inner">
                                <img
                                    src="photo/bkp_photo.jpg"
                                    alt="Bikram Keshari Parida"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    style={{ objectPosition: '50% 20%' }}
                                    loading="lazy"
                                />
                            </div>
                            <div>
                                <div className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-indigo-600">
                                    BKP
                                </div>
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">AI Research</p>
                            </div>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <a key={link.label} href={link.href} className="text-slate-700 hover:text-[var(--primary-color)] transition-colors">
                                    {link.label}
                                </a>
                            ))}
                            <a 
                                href="#contact"
                                onClick={() => setIsMenuOpen(false)}
                                className="px-4 py-2 rounded-full bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white font-semibold shadow-md hover:shadow-lg transition-all"
                            >
                                Let's Talk
                            </a>
                        </div>

                        <button 
                            className="md:hidden text-slate-700"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-xl`}></div>
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 space-y-2">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.label} 
                                    href={link.href} 
                                    className="block w-full text-left py-2 text-slate-700 hover:text-[var(--primary-color)]"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a 
                                href="#contact" 
                                className="block w-full text-left py-2 text-[var(--primary-color)] font-semibold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Let's Talk
                            </a>
                        </div>
                    )}
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        return null;
    }
}
