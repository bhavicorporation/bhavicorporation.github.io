"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right";
    delay?: number;
    threshold?: number;
}

export function ScrollAnimation({
    children,
    className = "",
    animation = "fade-in-up",
    delay = 0,
    threshold = 0.15,
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.remove("scroll-hidden");
                            entry.target.classList.add(`animate-${animation}`);
                        }, delay);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [animation, delay, threshold]);

    return (
        <div ref={ref} className={`scroll-hidden ${className}`}>
            {children}
        </div>
    );
}
