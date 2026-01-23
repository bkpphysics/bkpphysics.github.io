function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "UX Designer",
            content: "The AI-generated portfolio perfectly captured my design style. I landed three client projects within a week! The customization options are incredible.",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Software Developer",
            content: "This tool saved me hours of portfolio building. The AI suggestions were spot-on for showcasing my projects. The built-in database feature is a game-changer.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
            rating: 5
        },
        {
            name: "Emma Williams",
            role: "Photographer",
            content: "I was amazed by how well the AI understood my photography style and created a stunning portfolio. The image optimization is perfect for my high-res photos.",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
            rating: 5
        },
        {
            name: "David Rodriguez",
            role: "Interior Designer",
            content: "The 3D rendering support and gallery layouts are perfect for showcasing my interior design projects. My clients love the interactive features.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
            rating: 4
        },
        {
            name: "Lisa Zhang",
            role: "Art Director",
            content: "Finally found a portfolio platform that understands creative work. The AI-powered layout suggestions are brilliant and save me so much time.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150",
            rating: 5
        },
        {
            name: "James Wilson",
            role: "Freelance Writer",
            content: "The content organization features are fantastic. My writing portfolio has never looked more professional. Great for showcasing different types of content.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
            rating: 4
        }
    ];

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, index) => (
            <i 
                key={index}
                className={`fas fa-star ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            ></i>
        ));
    };

    return (
        <section data-name="testimonials" id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 data-name="testimonials-title" className="text-3xl font-bold mb-4">
                        What Our Users Say
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Join thousands of professionals who have transformed their online presence with our AI portfolio generator.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={index}
                            data-name={`testimonial-${index}`}
                            className="testimonial-card bg-white p-6 rounded-lg flex flex-col"
                        >
                            <div className="flex items-start mb-4">
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                            <div className="mb-4 flex">
                                {renderStars(testimonial.rating)}
                            </div>
                            <p className="text-gray-600 italic flex-grow">"{testimonial.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
