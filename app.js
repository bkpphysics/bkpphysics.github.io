class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
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

function App() {
    return (
        <ErrorBoundary>
            <div data-name="app" id="top">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Experience />
                    <Skills />
                    <Awards />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ErrorBoundary>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
