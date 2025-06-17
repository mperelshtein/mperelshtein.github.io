
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Helsinki",
      text: "Moving to Finland felt impossible until I found this community. Finally, I have people who understand the struggle.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Marcus K.",
      location: "Tampere",
      text: "The practical support saved me months of frustration. More importantly, I found friends who became my chosen family.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stories of{" "}
            <span className="text-transparent bg-clip-text gradient-warmth">
              Transformation
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warmth text-warmth" />
                ))}
              </div>
              
              <Quote className="w-8 h-8 text-muted-foreground/30 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
