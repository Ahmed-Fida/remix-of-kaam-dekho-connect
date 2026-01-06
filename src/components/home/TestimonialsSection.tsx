import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    role: "Working Mother",
    location: "Lahore",
    avatar: "S",
    rating: 5,
    text: "Kaam Dekho has been a lifesaver! As a working mom, finding a trustworthy nanny was my biggest worry. The verification process gave me peace of mind, and Ayesha has been amazing with my kids.",
    textUrdu: "کام دیکھو نے میری زندگی آسان کر دی۔",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Business Owner",
    location: "Karachi",
    avatar: "A",
    rating: 5,
    text: "We use Kaam Dekho for our office staff hiring. The business dashboard makes it easy to manage multiple hires, and the quality of workers is consistently excellent.",
    textUrdu: "بہترین سروس، قابل اعتماد لوگ۔",
  },
  {
    id: 3,
    name: "Fatima Zahra",
    role: "Homemaker",
    location: "Islamabad",
    avatar: "F",
    rating: 5,
    text: "I was skeptical at first, but the background check reports convinced me. Our driver has been with us for a year now, and we couldn't be happier. Highly recommend!",
    textUrdu: "اب تو صرف کام دیکھو سے ہی لوگ ڈھونڈتے ہیں۔",
  },
  {
    id: 4,
    name: "Muhammad Ali",
    role: "Retired Banker",
    location: "Faisalabad",
    avatar: "M",
    rating: 5,
    text: "At my age, security is paramount. Kaam Dekho's thorough verification process and the ability to read reviews from other employers made my decision easy.",
    textUrdu: "بھروسے کا نام — کام دیکھو۔",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-hero">Users</span> Say
          </h2>
          <p className="text-muted-foreground">
            Join thousands of happy families who found their perfect domestic help through Kaam Dekho
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-3xl p-8 sm:p-12 shadow-card relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-xl sm:text-2xl text-foreground font-medium mb-4 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>
              <p className="text-lg font-urdu text-primary mb-8">
                {testimonials[currentIndex].textUrdu}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground text-xl font-bold">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
