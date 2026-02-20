"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { categories } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollAnimation } from "@/components/scroll-animation";
import { ArrowLeft, ChevronLeft, ChevronRight, X, Grid3X3, Rows3 } from "lucide-react";

export default function ProjectPage() {
    const params = useParams();
    const categorySlug = params.category as string;
    const projectSlug = params.project as string;

    const category = categories.find((c) => c.slug === categorySlug);
    const project = category?.projects.find((p) => p.slug === projectSlug);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

    if (!project || !category) {
        return (
            <div className="pt-32 pb-16 px-4 text-center">
                <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
                <Link href="/projects">
                    <Button variant="outline" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Button>
                </Link>
            </div>
        );
    }

    const openLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + project.images.length) % project.images.length
        );
    };

    return (
        <>
            {/* Header */}
            <section className="pt-28 pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Projects
                    </Link>

                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
                                {category.name}
                            </p>
                            <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
                            <p className="text-muted-foreground mt-2">
                                {project.images.length} photos
                            </p>
                        </div>

                        <div className="flex items-center gap-2">
                            <Button
                                variant={viewMode === "grid" ? "default" : "outline"}
                                size="icon"
                                onClick={() => setViewMode("grid")}
                            >
                                <Grid3X3 className="h-4 w-4" />
                            </Button>
                            <Button
                                variant={viewMode === "list" ? "default" : "outline"}
                                size="icon"
                                onClick={() => setViewMode("list")}
                            >
                                <Rows3 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {viewMode === "grid" ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                            {project.images.map((image, index) => (
                                <ScrollAnimation key={index} delay={index * 30}>
                                    <button
                                        onClick={() => openLightbox(index)}
                                        className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted cursor-pointer group w-full"
                                    >
                                        <Image
                                            src={image}
                                            alt={`${project.name} - Photo ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </button>
                                </ScrollAnimation>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4 max-w-4xl mx-auto">
                            {project.images.map((image, index) => (
                                <ScrollAnimation key={index} delay={index * 50}>
                                    <button
                                        onClick={() => openLightbox(index)}
                                        className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-muted cursor-pointer group"
                                    >
                                        <Image
                                            src={image}
                                            alt={`${project.name} - Photo ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                                            sizes="100vw"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    </button>
                                </ScrollAnimation>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Dialog */}
            <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95 overflow-hidden [&>button]:hidden">
                    <div className="relative w-full h-[90vh] flex items-center justify-center">
                        {/* Close */}
                        <button
                            onClick={() => setLightboxOpen(false)}
                            className="absolute top-4 right-4 z-50 text-white/70 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>

                        {/* Previous */}
                        {project.images.length > 1 && (
                            <button
                                onClick={prevImage}
                                className="absolute left-4 z-50 text-white/70 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                        )}

                        {/* Image */}
                        <div className="relative w-full h-full p-8">
                            <Image
                                src={project.images[currentImageIndex]}
                                alt={`${project.name} - Photo ${currentImageIndex + 1}`}
                                fill
                                className="object-contain"
                                sizes="95vw"
                            />
                        </div>

                        {/* Next */}
                        {project.images.length > 1 && (
                            <button
                                onClick={nextImage}
                                className="absolute right-4 z-50 text-white/70 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        )}

                        {/* Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/40 px-3 py-1 rounded-full">
                            {currentImageIndex + 1} / {project.images.length}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
