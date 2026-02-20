"use client";

import { useState } from "react";
import { ScrollAnimation } from "@/components/scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState("sending");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            subject: formData.get("subject") as string,
            message: formData.get("message") as string,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setFormState("success");
                (e.target as HTMLFormElement).reset();
            } else {
                const result = await res.json();
                setErrorMessage(result.error || "Something went wrong. Please try again.");
                setFormState("error");
            }
        } catch {
            setErrorMessage("Failed to send message. Please try again later.");
            setFormState("error");
        }
    };

    return (
        <>
            {/* Hero */}
            <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <ScrollAnimation>
                        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                            Contact
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            Ready to start your next project? We&apos;d love to hear from you. Reach out and let&apos;s create something remarkable together.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            <Separator className="max-w-5xl mx-auto" />

            {/* Contact Content */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <ScrollAnimation animation="slide-in-left">
                                <h2 className="text-2xl font-bold mb-6">
                                    BHAVI Consulting Corporation
                                </h2>

                                <div className="space-y-6">
                                    <a
                                        href="tel:4032931544"
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-0.5">
                                                Phone
                                            </p>
                                            <p className="font-medium group-hover:text-primary transition-colors">
                                                (403) 293-1544
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:message.bhavicorporation@outlook.com"
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-0.5">
                                                Email
                                            </p>
                                            <p className="font-medium group-hover:text-primary transition-colors">
                                                message.bhavicorporation@outlook.com
                                            </p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-muted-foreground mb-0.5">
                                                Location
                                            </p>
                                            <p className="font-medium">Calgary, Alberta</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <ScrollAnimation animation="slide-in-right">
                                <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                                    <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>

                                    {formState === "success" ? (
                                        <div className="text-center py-12">
                                            <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
                                            <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                                            <p className="text-muted-foreground mb-6">
                                                Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                                            </p>
                                            <Button
                                                variant="outline"
                                                onClick={() => setFormState("idle")}
                                            >
                                                Send Another Message
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">
                                                        Full Name <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Input
                                                        id="name"
                                                        name="name"
                                                        placeholder="John Doe"
                                                        required
                                                        disabled={formState === "sending"}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">
                                                        Email <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        placeholder="john@example.com"
                                                        required
                                                        disabled={formState === "sending"}
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone</Label>
                                                    <Input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        placeholder="(403) 555-0123"
                                                        disabled={formState === "sending"}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="subject">
                                                        Subject <span className="text-destructive">*</span>
                                                    </Label>
                                                    <Input
                                                        id="subject"
                                                        name="subject"
                                                        placeholder="Project Inquiry"
                                                        required
                                                        disabled={formState === "sending"}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">
                                                    Message <span className="text-destructive">*</span>
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    name="message"
                                                    placeholder="Tell us about your project..."
                                                    rows={5}
                                                    required
                                                    disabled={formState === "sending"}
                                                />
                                            </div>

                                            {formState === "error" && (
                                                <div className="flex items-center gap-2 text-destructive text-sm bg-destructive/10 p-3 rounded-lg">
                                                    <AlertCircle className="h-4 w-4 shrink-0" />
                                                    {errorMessage}
                                                </div>
                                            )}

                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full gap-2"
                                                disabled={formState === "sending"}
                                            >
                                                {formState === "sending" ? (
                                                    "Sending..."
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="h-4 w-4" />
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
