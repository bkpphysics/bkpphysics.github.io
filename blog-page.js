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

function BlogHero() {
    return (
        <section className="hero-alt text-white pt-36 pb-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl">
                    <span className="gradient-pill light text-sm uppercase tracking-wide mb-4 inline-flex">
                        Research Notes
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-white drop-shadow-lg">Field Notes & Findings</h1>
                    <p className="text-lg text-white/90 leading-relaxed">
                        Short writeups on experiments, modeling tricks, and results from the lab - focused on medical imaging, generative AI, and quantum ML.
                    </p>
                </div>
            </div>
        </section>
    );
}

function BlogPage() {
    return (
        <ErrorBoundary>
            <div data-name="blog-page" id="top">
                <Header />
                <main>
                    <BlogHero />
                    <Blog />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}

const blogRoot = ReactDOM.createRoot(document.getElementById('root'));
blogRoot.render(<BlogPage />);
