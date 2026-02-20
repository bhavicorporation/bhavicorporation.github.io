"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { categories } from "@/lib/projects";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredCategories =
        activeCategory === "all"
            ? categories
            : categories.filter((c) => c.slug === activeCategory);

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <ScrollAnimation>
                        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            Portfolio
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Our Projects
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            BHAVI Consulting Corporation will help you in a very professional manner to complete your project. It is with this responsibility that we take up projects and make our presence felt in the client&apos;s lives through sensitivity, sensibility, and creativity. We are overwhelmed when they put their faith in us and expect them to give us all the freedom required to create a space, which is unique in its design and precise in its functions.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Category Filter */}
            <section className="sticky top-16 md:top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
                        <button
                            onClick={() => setActiveCategory("all")}
                            className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${activeCategory === "all"
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                }`}
                        >
                            All Projects
                        </button>
                        {categories.map((cat) => (
                            <button
                                key={cat.slug}
                                onClick={() => setActiveCategory(cat.slug)}
                                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${activeCategory === cat.slug
                                        ? "bg-primary text-primary-foreground"
                                        : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {filteredCategories.map((category) => (
                        <div key={category.slug} className="mb-16 last:mb-0">
                            <ScrollAnimation>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    {category.name}
                                    <span className="text-sm font-normal text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                                        {category.projects.length} projects
                                    </span>
                                </h2>
                            </ScrollAnimation>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                                {category.projects.map((project, i) => (
                                    <ScrollAnimation key={project.slug} delay={i * 50}>
                                        <Link
                                            href={`/projects/${project.categorySlug}/${project.slug}`}
                                            className="group block"
                                        >
                                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-2.5 bg-muted">
                                                <Image
                                                    src={project.thumbnail}
                                                    alt={project.name}
                                                    fill
                                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                                    {project.images.length} photos
                                                </div>
                                            </div>
                                            <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                                                {project.name}
                                            </h3>
                                        </Link>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* We take client goals text */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
                <div className="max-w-3xl mx-auto text-center">
                    <ScrollAnimation>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We take the client&apos;s goals and need for strategic design and seamless delivery seriously, connecting our entire team to leverage its creativity, knowledge, and experience.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    );
}
