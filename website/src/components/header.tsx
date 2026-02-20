"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Process", href: "/our-process" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
];

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHeaderTransparent = !scrolled && isHomePage;
    const textColor = isHeaderTransparent ? "text-white" : "text-muted-foreground";
    const activeTextColor = isHeaderTransparent ? "text-white" : "text-foreground";

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderTransparent
                ? "bg-transparent"
                : "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/images/branding/logo.png"
                            alt="Bhavi Consulting Corporation"
                            width={659}
                            height={165}
                            priority
                            className="h-10 md:h-14 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-4">
                        <nav className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-accent hover:text-foreground ${pathname === link.href ? activeTextColor : textColor}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact">
                                <Button size="sm" className="ml-2">
                                    Get in Touch
                                </Button>
                            </Link>
                        </nav>

                        {/* Theme Toggle - Far Right */}
                        <div className={`transition-all duration-300 ${scrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                            }`}>
                            {mounted && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="rounded-full w-10 h-10 hover:bg-accent"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? (
                                        <Sun className="h-5 w-5 text-yellow-400" />
                                    ) : (
                                        <Moon className="h-5 w-5 text-slate-700" />
                                    )}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Navigation & Toggle */}
                    <div className="flex items-center gap-2 lg:hidden">
                        <div className={`transition-all duration-300 ${scrolled ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
                            }`}>
                            {mounted && (
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                    className="rounded-full w-9 h-9"
                                    aria-label="Toggle theme"
                                >
                                    {theme === "dark" ? (
                                        <Sun className="h-4 w-4 text-yellow-400" />
                                    ) : (
                                        <Moon className="h-4 w-4 text-slate-700" />
                                    )}
                                </Button>
                            )}
                        </div>
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className={isHeaderTransparent ? "text-white" : "text-foreground"}>
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-72">
                                <SheetTitle className="text-lg font-semibold mb-6">Navigation</SheetTitle>
                                <nav className="flex flex-col gap-1">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                    <Link href="/contact" onClick={() => setOpen(false)} className="mt-4">
                                        <Button className="w-full">Get in Touch</Button>
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
