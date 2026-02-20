import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">BHAVI Consulting Corporation</h3>
                        <p className="text-primary-foreground/70 text-sm leading-relaxed">
                            Creating Habitable Art — We see architecture as an act of profound optimism,
                            designing spaces that inspire and endure.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Our Process", href: "/our-process" },
                                { name: "Services", href: "/services" },
                                { name: "Projects", href: "/projects" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="tel:4032931544"
                                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                            >
                                <Phone className="h-4 w-4 shrink-0" />
                                (403) 293-1544
                            </a>
                            <a
                                href="mailto:message.bhavicorporation@outlook.com"
                                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                            >
                                <Mail className="h-4 w-4 shrink-0" />
                                message.bhavicorporation@outlook.com
                            </a>
                            <div className="flex items-center gap-3 text-primary-foreground/70 text-sm">
                                <MapPin className="h-4 w-4 shrink-0" />
                                Calgary, Alberta
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-8 bg-primary-foreground/20" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/50">
                    <p>© {new Date().getFullYear()} BHAVI Consulting Corporation. All rights reserved.</p>
                    <Link
                        href="/contact"
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                        Get in Touch →
                    </Link>
                </div>
            </div>
        </footer>
    );
}
