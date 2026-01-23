class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div className="p-8 text-center">Something went wrong.</div>;
        }
        return this.props.children;
    }
}

function PublicationsHero() {
    return (
        <section className="hero-alt text-white pt-36 pb-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <span className="gradient-pill light text-sm uppercase tracking-wide mb-4 inline-flex">
                        Publications
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                        Papers, Preprints, and Benchmarks
                    </h1>
                    <p className="text-lg text-white/90 leading-relaxed">
                        Peer-reviewed work and datasets across computer vision, generative AI, and quantum-inspired modeling.
                    </p>
                </div>
            </div>
        </section>
    );
}

function PublicationsPage() {
    return (
        <ErrorBoundary>
            <div data-name="publications-page" id="top">
                <Header />
                <main>
                    <PublicationsHero />
                    <Publications />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}

const publicationsRoot = ReactDOM.createRoot(document.getElementById('root'));
publicationsRoot.render(<PublicationsPage />);
