import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ArrowRight, Building2, Compass, Ruler } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Image Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <Image
          src="/images/hero/calgary-skyline.jpg"
          alt="Calgary Skyline"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="animate-fade-in">
            <Image
              src="/images/branding/logo.png"
              alt="BHAVI"
              width={659}
              height={165}
              className="h-16 md:h-24 w-auto object-contain mx-auto mb-6 drop-shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up tracking-tight">
            Creating Habitable Art
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Architecture &amp; Planning · Design &amp; Build · Calgary, Alberta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link href="/projects">
              <Button size="lg" variant="secondary" className="text-base px-8 gap-2">
                View Our Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-white/20 border-white/50 text-white hover:bg-white/30 hover:text-white backdrop-blur-sm"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-fade-in" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Welcome to Bhavi
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Creating Habitable Art
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={100}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-6">
              BHAVI Consulting Corporation Is A Multi-Disciplinary Firm. The Origin Of &quot;BHAVI&quot; Is From The Sanskrit Language And The Meaning Is &quot;FUTURE.&quot;
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mb-6">
              At BHAVI Consulting Corporation, We Think Of The Future When We Design. BHAVI Consulting Corporation Creates Unique Habitable Art For Every Walk Of Living, Spaces That Value Every Experience And Every Emotion.
            </p>
          </ScrollAnimation>
          <ScrollAnimation delay={300}>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              We believe smart design can enhance your happiness, health and productivity and that it can have a profound impact on our social, physical and mental well-being.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Our Expertise</h2>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation delay={0}>
              <div className="bg-card rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Architecture & Planning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Comprehensive architectural design, planning, building design, interior and exterior design solutions.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={150}>
              <div className="bg-card rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Compass className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrated Delivery</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Collaborative design-build approach bringing owners, designers, and builders into a transparent partnership.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={300}>
              <div className="bg-card rounded-xl p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Ruler className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lean Architecture</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Streamlined processes and budgets to deliver efficient buildings of the highest quality and longevity.
                </p>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation delay={400} className="text-center mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg" className="gap-2">
                Explore All Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take the client&apos;s goals and need for strategic design and seamless delivery seriously,
              connecting our entire team to leverage its creativity, knowledge, and experience.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Bergen Multi-Family",
                image: "/images/projects/multi-family/bergen-multi-family/BergenPicture1.png",
                category: "Multi-Family",
                href: "/projects/multi-family/bergen-multi-family",
              },
              {
                name: "Seaman Stadium",
                image: "/images/projects/commercial/seaman-stadium/Seaman%20stadium%20Picture1.png",
                category: "Commercial",
                href: "/projects/commercial/seaman-stadium",
              },
              {
                name: "Casa Catrina Restaurant",
                image: "/images/projects/hospitality/casa-catrina-restaurant/Casa%20Catrina%2020220623_202533.jpg",
                category: "Hospitality",
                href: "/projects/hospitality/casa-catrina-restaurant",
              },
              {
                name: "Wolfden Multi-Family",
                image: "/images/projects/multi-family/wolfden-multi-family/Wolfden%20Picture1.png",
                category: "Multi-Family",
                href: "/projects/multi-family/wolfden-multi-family",
              },
              {
                name: "Code Ninja - Okotoks",
                image: "/images/projects/institutional/code-ninja---okotoks/Code%20Ninja%20-1.PNG",
                category: "Institutional",
                href: "/projects/institutional/code-ninja---okotoks",
              },
              {
                name: "Pittsburgh House",
                image: "/images/projects/residential/pittsburgh-house/6568ec451075fe4b3626edae_CH-6-1-1536x854.jpg",
                category: "Residential",
                href: "/projects/residential/pittsburgh-house",
              },
            ].map((project, i) => (
              <ScrollAnimation key={project.name} delay={i * 100}>
                <Link href={project.href} className="group block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {project.category}
                  </p>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                </Link>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Let us bring your architectural vision to life. Our team is ready to collaborate with you on your next project.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="text-base px-8 gap-2"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </>
  );
}
