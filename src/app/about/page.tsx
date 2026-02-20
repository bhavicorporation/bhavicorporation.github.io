import Image from "next/image";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about BHAVI Consulting Corporation — our philosophy, values, and passion for creating habitable art through architectural design.",
};

const values = [
    {
        title: "Out-of-the-Box Thinking",
        image: "/images/about/out-of-the-box.jpg",
        description:
            'We encourage and practice free thinking and we strive to push boundaries in everything that we do. Being "out of the box" is a way of life for NRB. Our pursuit of creative commercial solutions drives every aspect of our business, from design and research.',
    },
    {
        title: "Partnering",
        image: "/images/about/partnering.jpg",
        description:
            "We always aim for long-term relationships with our clients because we believe in sustaining the value and the advantages that we create. We work together through the challenges and the triumphs. Together we can achieve success.",
    },
    {
        title: "Quality Control",
        image: "/images/about/quality-control.png",
        description:
            "Quality is the hallmark of our firm. We monitor our projects and services at every stage to make sure we meet expectations of the clients.",
    },
    {
        title: "Sustainability",
        image: "/images/about/sustainability.jpg",
        description:
            "With sustainability at the core of our building designs, we pride ourselves on creating innovative solutions that successfully address all project challenges and goals to achieve the highest levels of efficiency and quality imaginable.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <ScrollAnimation>
                        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            Who We Are
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            About Us
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            BHAVI Consulting Corporation Is A Multi-Disciplinary Firm offering innovative architectural solutions for every walk of living.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <Separator className="max-w-5xl mx-auto" />

            {/* Philosophy Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollAnimation animation="slide-in-left">
                            <div className="relative aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/projects/hero/1.PNG"
                                    alt="BHAVI Architecture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="slide-in-right">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        The origin of &quot;BHAVI&quot; is from the Sanskrit language and the meaning is &quot;FUTURE.&quot; At BHAVI Consulting Corporation, we think of the future when we design.
                                    </p>
                                    <p>
                                        BHAVI Consulting Corporation creates unique Habitable Art for every walk of living, spaces that value every experience and every emotion.
                                    </p>
                                    <p>
                                        We believe smart design can enhance your happiness, health and productivity and that it can have a profound impact on our social, physical and mental well-being.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
                <div className="max-w-7xl mx-auto">
                    <ScrollAnimation className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            Our Values
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">What Drives Us</h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, i) => (
                            <ScrollAnimation key={value.title} delay={i * 100}>
                                <div className="bg-card rounded-xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow">
                                    <div className="relative h-48">
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Passion Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <ScrollAnimation className="text-center mb-12">
                        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            Our Passion
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            We See Architecture as an Act of Profound Optimism
                        </h2>
                    </ScrollAnimation>

                    <div className="space-y-6 text-center">
                        <ScrollAnimation delay={100}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We measure the value of our work by the quiet pleasure of the lives lived in our buildings.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={200}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We want to solve problems and we want to transcend solutions.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={300}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We try to work with a thoughtful integrity to make buildings that will last and be loved.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={400}>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We want to leave good marks upon this earth.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation delay={500}>
                            <p className="text-lg text-muted-foreground leading-relaxed italic">
                                This work comes from two voices and many voices.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>
        </>
    );
}
