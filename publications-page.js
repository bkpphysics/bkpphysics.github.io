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

// Fallback citation counts; override via data/citations.json
const CITATIONS_FALLBACK = [
    { year: 2022, count: 6 },
    { year: 2023, count: 10 },
    { year: 2024, count: 14 },
    { year: 2025, count: 22 },
    { year: 2026, count: 4 }
];

function PublicationsHero({ total, citations }) {
    return (
        <section className="hero-alt text-white pt-36 pb-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
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
    const [count, setCount] = React.useState(null);
    const [citations, setCitations] = React.useState(CITATIONS_FALLBACK);

    React.useEffect(() => {
        // Listen for publication data from Publications component
        function handleCount(evt) {
            if (evt.detail && typeof evt.detail.total === 'number') {
                setCount(evt.detail.total);
            }
        }
        window.addEventListener('publications:count', handleCount);
        return () => window.removeEventListener('publications:count', handleCount);
    }, []);

    React.useEffect(() => {
        let active = true;
        async function load() {
            try {
                const res = await fetch('data/citations.json', { cache: 'no-store' });
                if (!res.ok) throw new Error(`status ${res.status}`);
                const data = await res.json();
                if (!Array.isArray(data)) throw new Error('invalid citations data');
                if (!active) return;
                setCitations(data);
            } catch (err) {
                console.warn('Using fallback citations data', err);
                if (!active) return;
                setCitations(CITATIONS_FALLBACK);
            }
        }
        load();
        return () => { active = false; };
    }, []);

    return (
        <ErrorBoundary>
            <div data-name="publications-page" id="top">
                <Header />
                <main>
                    <PublicationsHero total={count} citations={citations} />
                    <Publications total={count} citations={citations} />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}

const publicationsRoot = ReactDOM.createRoot(document.getElementById('root'));
publicationsRoot.render(<PublicationsPage />);
