function UseCases() {
    const cases = [
        {
            title: "Interior Designer Portfolio",
            description: "Showcase your interior design projects with immersive galleries, before-and-after comparisons, and detailed project descriptions. Perfect for highlighting your unique style and design philosophy.",
            image: "https://app.trickle.so/storage/public/images/usr_0907357e40000001/f695d48e-4718-4580-98e2-e11efc08d087.jpeg",
            features: ["Project galleries", "3D renders", "Client testimonials", "Design process"],
            imageRight: false,
            exampleUrl: "https://www.trickle.so/template/interior-designer-portfolio"
        },
        {
            title: "Journalist Portfolio",
            description: "Build a compelling portfolio featuring your published articles, investigative pieces, and multimedia content. Ideal for showcasing your writing expertise and journalistic achievements.",
            image: "https://app.trickle.so/storage/public/images/usr_0907357e40000001/9f092fda-8279-4062-8a4b-5dd086fb77d9.jpeg",
            features: ["Article showcase", "Publication timeline", "Media coverage", "Writing samples"],
            imageRight: true,
            exampleUrl: "https://www.trickle.so/template/journalist-portfolio"
        },
        {
            title: "Bio Page",
            description: "Create an engaging personal biography page that tells your story. Perfect for authors, speakers, and professionals looking to establish their personal brand online.",
            image: "https://app.trickle.so/storage/public/images/usr_0907357e40000001/a3acd6c5-dba2-44a8-bd7d-ecec1e90eb7f.jpeg",
            features: ["Personal story", "Achievement timeline", "Speaking engagements", "Media kit"],
            imageRight: false,
            exampleUrl: "https://www.trickle.so/template/bio-page"
        },
        {
            title: "Art Portfolio",
            description: "Display your artwork in a stunning gallery with customizable layouts. Ideal for artists wanting to showcase their collections, exhibitions, and creative journey.",
            image: "https://app.trickle.so/storage/public/images/usr_0907357e40000001/80c16543-2da8-4de3-9961-b062982d7573.jpeg",
            features: ["Art galleries", "Exhibition history", "Artist statement", "Artwork details"],
            imageRight: true,
            exampleUrl: "https://www.trickle.so/template/art-portfolio"
        }
    ];

    return (
        <section data-name="use-cases" id="use-cases" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 data-name="use-cases-title" className="text-3xl font-bold text-center mb-12">
                    Portfolio Examples
                </h2>
                <div className="space-y-16">
                    {cases.map((useCase, index) => (
                        <div 
                            key={index}
                            data-name={`use-case-${index}`}
                            className="grid md:grid-cols-2 gap-8 items-center"
                        >
                            {!useCase.imageRight && (
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <img 
                                        src={useCase.image} 
                                        alt={useCase.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold text-gray-800">{useCase.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {useCase.description}
                                </p>
                                <div className="grid grid-cols-2 gap-3 mt-6">
                                    {useCase.features.map((feature, featureIndex) => (
                                        <div 
                                            key={featureIndex}
                                            className="flex items-center space-x-2"
                                        >
                                            <i className="fas fa-check text-green-500"></i>
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <a 
                                    href={useCase.exampleUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold transition-colors duration-200"
                                >
                                    View Example
                                    <i className="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                            {useCase.imageRight && (
                                <div className="relative overflow-hidden rounded-xl shadow-lg">
                                    <img 
                                        src={useCase.image} 
                                        alt={useCase.title}
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
