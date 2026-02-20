"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function FloatingContact() {
    return (
        <Link href="/contact" className="fixed bottom-6 right-6 z-50">
            <Button
                size="lg"
                className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 gap-2 px-5"
            >
                <MessageCircle className="h-5 w-5" />
                <span className="hidden sm:inline">Contact Us</span>
            </Button>
        </Link>
    );
}
