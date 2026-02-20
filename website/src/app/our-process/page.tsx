import Image from "next/image";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Process",
    description:
        "Learn about BHAVI Consulting Corporation's 6-step architectural process from single point of contact through project completion.",
};

const processSteps = [
    {
        number: "01",
        title: "Single Point of Contact",
        icon: "/images/process/single-point.png",
        description:
            "In this first step, the assigned Project Manager will organize a kick-off meeting with the client and our team to establish a clear framework for the project.",
    },
    {
        number: "02",
        title: "Field Work",
        icon: "/images/process/field-work.png",
        description:
            "Our team will travel to the project area and take site measurements, photos, and any other observational data. Each team member then produces a report specific to their discipline.",
    },
    {
        number: "03",
        title: "ASMEP Design",
        icon: "/images/process/asmep-design.png",
        description:
            "Our team of architects and engineers will collaboratively prepare a design plan using the data gathered during our Field Work.",
    },
    {
        number: "04",
        title: "Code Verification",
        icon: "/images/process/code-verification.png",
        description:
            "All building codes are evaluated — both on the municipal and national level. The design plans are then revised as needed.",
    },
    {
        number: "05",
        title: "Construction Administration",
        icon: "/images/process/construction-admin.png",
        description:
            "Once the building permit is obtained, our team performs Field Reviews to ensure the design is being implemented as planned.",
    },
    {
        number: "06",
        title: "Project Completion",
        icon: "/images/process/project-completion.png",
        description:
            "At this final stage, our team performs a complete review of the building and produces a final project report.",
    },
];

export default function OurProcessPage() {
    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <ScrollAnimation>
                        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            How We Work
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our Process
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Through our integrated and comprehensive process, our team of specialists will ensure an efficient journey from concept to project completion.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <Separator className="max-w-5xl mx-auto" />

            {/* Process Steps */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-8">
                        {processSteps.map((step, i) => (
                            <ScrollAnimation
                                key={step.number}
                                delay={i * 80}
                                animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                                    {/* Step Number & Icon */}
                                    <div className="flex flex-col items-center shrink-0">
                                        <span className="text-4xl font-bold text-primary/20 mb-3">
                                            {step.number}
                                        </span>
                                        <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                                            <Image
                                                src={step.icon}
                                                alt={step.title}
                                                width={40}
                                                height={40}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="text-center md:text-left">
                                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Overview Image */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
                <div className="max-w-4xl mx-auto">
                    <ScrollAnimation className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8">Process At A Glance</h2>
                        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-md border border-border">
                            <Image
                                src="/images/process/process-steps.png"
                                alt="BHAVI Process Steps Overview"
                                fill
                                className="object-contain bg-card"
                            />
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    );
}
