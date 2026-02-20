import { ScrollAnimation } from "@/components/scroll-animation";
import { Separator } from "@/components/ui/separator";
import { Building2, Layers, Lightbulb, Users, Wrench, Globe } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore BHAVI Consulting Corporation's architectural services — design, planning, lean architecture, integrated project delivery, design-build, and outsourcing.",
};

const services = [
    {
        title: "Architecture & Planning",
        icon: Building2,
        items: [
            "Architectural Design",
            "Architectural Planning",
            "Building Design",
            "Interior Design",
            "Exterior Design",
        ],
        description:
            "BHAVI Consulting Corporation understands the environment around you in a way where all elements collide in a perfect harmony of design, form, and function. Our team of architects collaborates with technical and design experts to create innovative architectural designs that integrate best practices and cutting-edge technology. We have successfully completed a wide range of building projects. We believe in an architectural design should be integrated with its place and that the best buildings allow people to fully experience the light and nature of that place.",
    },
    {
        title: "Lean Architecture",
        icon: Lightbulb,
        items: [],
        description:
            "We believe in constantly working to evolve the way we design and engineer buildings, and by applying lean thinking we focus on streamlining processes, schedules, budgets, teams, and infrastructure to eliminate waste and deliver architecture that is efficient and of the highest quality, flexibility, scalability, and longevity for our clients.",
    },
    {
        title: "Integrated Project Delivery",
        icon: Users,
        items: [],
        description:
            "As a collaborative and integrated team, we practiced leading teams in the same way. With the methodology of Integrated Project Delivery, owners, designers, and builders are brought into a contractually collaborative construction process, tying their success to project success and allowing for careful and thoughtful review of all aspects of a project from a transparent point of view where everyone is pulling for the same project goals. Our experience in a diverse and integrated environment helps us to better understand how a collaborative approach can succeed and how to achieve unprecedented building design success.",
    },
    {
        title: "Design-Build",
        icon: Wrench,
        items: [],
        description:
            "At BHAVI Consulting Corporation, our experience has shown that collaboration can drive innovation beyond common boundaries to create buildings that are designed for the future and customized to support current client needs. For years, BHAVI Consulting Corporation's architects, designers, planners, and technical specialists have been collaborating on projects as one expert team, pushing each other's strengths and creativity to find new and better ways to design buildings comprehensively and construct them to the finest detail.",
    },
    {
        title: "Diverse and Experienced Approach",
        icon: Layers,
        items: [],
        description:
            "BHAVI Consulting Corporation integrates a team of multi-experienced experts from diverse backgrounds to create architectural designs that achieve great success due to their combination of established practices and innovative concepts.",
    },
    {
        title: "Outsourcing",
        icon: Globe,
        items: [],
        description:
            "BHAVI Consulting Corporation provides outsourced architectural services. We can handle all of the crucial steps of the Architectural Design Process and will give you reliable, consistent, high-quality results at competitive rates in a timely manner. Our team of qualified, and experienced technical specialists are capable of addressing your specific needs like commercial and residential architectural design services, AutoCAD/Revit drafting, PDF to AutoCAD conversion services, or as-built drawings. We also provide custom designs of user-specific solutions.",
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <ScrollAnimation>
                        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            Services
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            We Design Your Dreams
                        </h1>
                        <p className="text-xl text-muted-foreground italic max-w-xl mx-auto">
                            &quot;Every building is like a person. Single and unrepeatable&quot;
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <Separator className="max-w-5xl mx-auto" />

            {/* How We Think */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <ScrollAnimation className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-6">How We Think</h2>
                    </ScrollAnimation>
                    <ScrollAnimation delay={100}>
                        <p className="text-muted-foreground leading-relaxed text-center mb-6">
                            We believe that smart design can enhance your happiness, health and productivity and that it can have a profound impact on our social, physical and mental well-being. The result of each project is unique; our work leans toward clean lines and simple patterns which are characteristics of modern design. At the same time, we perform to the sensibilities of classic design including use of strong axis, proportion, hierarchy and balance of form within a space.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={200}>
                        <p className="text-muted-foreground leading-relaxed text-center mb-6">
                            Designing is a journey from dot to line. The design has the power to inspire lives, uplift joy, and create good comfort needs. The good design transforms lives. The design begins with thoughtful collaboration between the requirements of the client and our team then gets involved in the vision of solid ideas and keeping in mind financial aspects. Design transition takes shape from micro to macro-level interventions.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={300}>
                        <p className="text-muted-foreground leading-relaxed text-center">
                            We are committed to fully integrated practices and develop innovative solutions for the built environment. Our team focuses on the unique needs of site condition, physically built form, and cultural context. We integrate the building blocks of community, sustainability, and resilience into an innovative approach for specific users.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Service Offerings */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
                <div className="max-w-7xl mx-auto">
                    <ScrollAnimation className="text-center mb-16">
                        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            What We Offer
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Offerings</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Recognizing that projects are dynamic and require a myriad of disciplines and services providing support to be successful, BHAVI Consulting Corporation has an adaptive and flexible list of service opportunities to assist with your ongoing planning, and construction needs.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <ScrollAnimation key={service.title} delay={i * 80}>
                                    <div className="bg-card rounded-xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow h-full">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-semibold pt-2">{service.title}</h3>
                                        </div>

                                        {service.items.length > 0 && (
                                            <ul className="mb-4 space-y-1 ml-16">
                                                {service.items.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="text-sm text-muted-foreground flex items-center gap-2"
                                                    >
                                                        <span className="w-1 h-1 bg-primary rounded-full shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <p className="text-muted-foreground text-sm leading-relaxed ml-16">
                                            {service.description}
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Sustainable Focus */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <ScrollAnimation>
                        <h2 className="text-3xl font-bold mb-6">Sustainable Focus</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            With sustainability at the core of our building designs, we pride ourselves on creating innovative solutions that successfully address all project challenges and goals to achieve the highest levels of efficiency and quality imaginable with maximum client cost savings.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={100}>
                        <p className="text-muted-foreground leading-relaxed text-lg mt-6">
                            We provide a comprehensive range of services designed to optimize the performance, maintenance, and repair of buildings. We don&apos;t strive just to meet minimum code requirements, but rather, to maximize the life cycle of your facility.
                        </p>
                    </ScrollAnimation>
                    <ScrollAnimation delay={200}>
                        <p className="text-muted-foreground leading-relaxed text-lg mt-6">
                            Our architects work alongside the engineers to develop comprehensive building designs that are coordinated across all disciplines and of the highest constructability. Feasibility studies, building programming and planning, sustainable building design, and consulting are some of the available services offered by BHAVI Consulting Corporation that will fulfill your architectural design needs.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    );
}
