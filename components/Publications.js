const FALLBACK_PUBLICATIONS = [];

function normalizePublications(list) {
    if (!Array.isArray(list)) return [];
    return list.map((item, index) => ({
        title: item.title || `Untitled ${index + 1}`,
        venue: item.venue || item.journal || item.publisher || "—",
        year: item.year || item.date || "—",
        category: item.category || item.field || "general",
        authors: item.authors || item.author || item.creator || "",
        volume: item.volume || "",
        number: item.number || item.issue || "",
        pages: item.pages || "",
        doi: item.doi || "",
        publisher: item.publisher || "",
        citation: item.citation || "",
        link: item.link || item.url || item.citation_link || item.doi_url || null
    }));
}

function formatAuthors(authors) {
    if (!authors) return "";
    if (Array.isArray(authors)) return authors.join(", ");
    return authors;
}

function formatMeta(pub) {
    const parts = [];
    if (pub.authors) parts.push(formatAuthors(pub.authors));
    if (pub.venue) parts.push(pub.venue);
    if (pub.volume && pub.number) {
        parts.push(`${pub.volume}(${pub.number})`);
    } else if (pub.volume) {
        parts.push(pub.volume);
    }
    if (pub.pages) parts.push(`pp. ${pub.pages}`);
    if (pub.year) parts.push(pub.year);
    if (pub.publisher) parts.push(pub.publisher);
    return parts.filter(Boolean).join(". ");
}

function doiLink(doi) {
    if (!doi) return null;
    const trimmed = doi.replace(/^https?:\/\/(dx\.)?doi\.org\//i, "");
    return `https://doi.org/${trimmed}`;
}

function CitationsChart({ data }) {
    const max = Math.max(...data.map(item => item.count || 0), 1);
    return (
        <div className="flex items-end gap-2">
            {data.map(({ year, count }) => {
                const height = `${(count / max) * 120}px`;
                return (
                    <div key={year} className="flex-1 flex flex-col items-center gap-1">
                        <div
                            className="w-full max-w-[32px] rounded-md bg-gradient-to-t from-[var(--secondary-color)] to-[var(--primary-color)]"
                            style={{ height }}
                            title={`${count || 0} citations in ${year}`}
                        ></div>
                        <div className="text-[11px] text-[var(--text-secondary)]">{year}</div>
                        <div className="text-[10px] text-[var(--text-secondary)]">{count || 0}</div>
                    </div>
                );
            })}
        </div>
    );
}

function Publications({ total, citations }) {
    const [selectedCategory, setSelectedCategory] = React.useState('all');
    const [publications, setPublications] = React.useState(FALLBACK_PUBLICATIONS);
    const [status, setStatus] = React.useState('loading');

    const feedUrl = (typeof window !== 'undefined' && window.PUBLICATIONS_FEED_URL) ? window.PUBLICATIONS_FEED_URL : 'data/publications.json';

    React.useEffect(() => {
        let isMounted = true;
        async function load() {
            try {
                setStatus('loading');
                const res = await fetch(feedUrl, { cache: 'no-store' });
                if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
                const data = await res.json();
                if (!isMounted) return;
                setPublications(normalizePublications(data));
                setStatus('ready');
                window.dispatchEvent(new CustomEvent('publications:count', { detail: { total: data.length } }));
            } catch (err) {
                console.warn('Publications feed unavailable', err);
                if (!isMounted) return;
                setPublications([]);
                setStatus('error');
                window.dispatchEvent(new CustomEvent('publications:count', { detail: { total: 0 } }));
            }
        }
        load();
        return () => { isMounted = false; };
    }, [feedUrl]);

    const categories = React.useMemo(() => {
        const unique = Array.from(new Set(publications.map((pub) => pub.category || 'general')));
        return ['all', ...unique];
    }, [publications]);

    const filteredPublications = React.useMemo(() => {
        if (selectedCategory === 'all') return publications;
        return publications.filter((pub) => (pub.category || 'general') === selectedCategory);
    }, [publications, selectedCategory]);

    try {
        return (
            <section id="publications" data-name="publications" data-file="components/Publications.js" className="py-20 bg-section-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                        <div>
                            <h2 className="text-4xl font-bold text-[var(--text-primary)]">
                                Publications
                            </h2>
                            <p className="text-[var(--text-secondary)] max-w-2xl mt-2">
                                A blend of medical imaging, generative modeling, and theoretical physics papers exploring how intelligent systems can learn from sparse, noisy, or structured data.
                            </p>
                        </div>
                        <div className="flex items-stretch gap-3 w-full md:w-auto">
                            <div className="px-4 py-3 rounded-2xl bg-white border border-[var(--primary-color)]/10 shadow-sm text-center flex-1">
                                <div className="text-2xl font-bold text-[var(--text-primary)]">{typeof total === 'number' ? total : '—'}</div>
                                <div className="text-xs uppercase tracking-wide text-[var(--text-secondary)]">Total Papers</div>
                            </div>
                            {Array.isArray(citations) && citations.length > 0 && (
                                <div className="flex-1 min-w-[240px] rounded-2xl bg-white border border-[var(--primary-color)]/10 shadow-sm p-3">
                                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-[var(--text-secondary)] mb-2">
                                        <span>Citations / Year</span>
                                        <span className="text-[var(--text-primary)] font-semibold">
                                            Total: {citations.reduce((sum, c) => sum + (c.count || 0), 0)}
                                        </span>
                                    </div>
                                    <CitationsChart data={citations} />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex justify-center gap-3 mb-12 flex-wrap">
                        {categories.map((cat) => (
                            <button 
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white shadow-md' : 'bg-white/70 text-[var(--text-secondary)] border border-[var(--primary-color)]/15 hover:text-[var(--primary-color)]'}`}
                            >
                                {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-5xl mx-auto space-y-4">
                        {filteredPublications.map((pub, index) => {
                            const doiHref = doiLink(pub.doi);
                            const linkHref = pub.link || doiHref;
                            const secondary = pub.citation || formatMeta(pub);
                            return (
                                <div key={index} className="section-card p-6 rounded-2xl">
                                    <div className="flex items-start gap-2 mb-2">
                                        <span className="text-sm text-[var(--text-secondary)]">[{index + 1}]</span>
                                        <h3 className="text-lg font-semibold text-[var(--text-primary)] leading-snug">{pub.title}</h3>
                                    </div>
                                    <div className="text-sm text-[var(--text-secondary)] flex items-start gap-2 flex-wrap">
                                        <span className="icon-book-open text-base text-[var(--primary-color)] mt-[1px]"></span>
                                        <span className="leading-relaxed">{secondary}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm mt-3 flex-wrap">
                                        {doiHref && (
                                            <a 
                                                href={doiHref} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-[var(--primary-color)] hover:underline"
                                            >
                                                <span className="icon-link-2 text-base"></span>
                                                DOI: {pub.doi.replace(/^https?:\/\//, '')}
                                            </a>
                                        )}
                                        {linkHref && !doiHref && (
                                            <a 
                                                href={linkHref} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-[var(--primary-color)] hover:underline"
                                            >
                                                <span className="icon-external-link text-base"></span>
                                                View
                                            </a>
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                        {status === 'loading' && (
                            <div className="text-center text-[var(--text-secondary)] mt-6">Loading publications…</div>
                        )}
                        {status === 'error' && (
                            <div className="text-center text-[var(--text-secondary)] mt-6 text-sm">
                                Live feed unavailable.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Publications component error:', error);
        return null;
    }
}
