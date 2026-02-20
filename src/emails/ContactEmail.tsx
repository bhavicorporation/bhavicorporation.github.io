import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export const ContactEmail = ({
    name,
    email,
    phone,
    subject,
    message,
}: ContactEmailProps) => (
    <Html>
        <Head />
        <Preview>New Message from {name}: {subject}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={section}>
                    <Heading style={h1}>New Contact Form Submission</Heading>
                    <Text style={text}>
                        <strong>Name:</strong> {name}
                    </Text>
                    <Text style={text}>
                        <strong>Email:</strong>{" "}
                        <Link href={`mailto:${email}`} style={link}>
                            {email}
                        </Link>
                    </Text>
                    {phone && (
                        <Text style={text}>
                            <strong>Phone:</strong>{" "}
                            <Link href={`tel:${phone}`} style={link}>
                                {phone}
                            </Link>
                        </Text>
                    )}
                    <Text style={text}>
                        <strong>Subject:</strong> {subject}
                    </Text>
                    <Hr style={hr} />
                    <Section style={messageContainer}>
                        <Text style={messageLabel}>Message:</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Sent from the BHAVI Consulting Corporation website contact form.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default ContactEmail;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "20px 0 48px",
    marginBottom: "64px",
};

const section = {
    padding: "0 48px",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "left" as const,
    margin: "30px 0",
    borderBottom: "2px solid #eee",
    paddingBottom: "10px",
};

const text = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "24px",
    textAlign: "left" as const,
};

const link = {
    color: "#2754C5",
    textDecoration: "underline",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const messageContainer = {
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    padding: "20px",
};

const messageLabel = {
    color: "#666",
    fontSize: "14px",
    fontWeight: "bold",
    textTransform: "uppercase" as const,
    marginBottom: "8px",
};

const messageText = {
    color: "#333",
    fontSize: "16px",
    lineHeight: "24px",
    whiteSpace: "pre-wrap" as const,
    margin: "0",
};

const footer = {
    color: "#8898aa",
    fontSize: "12px",
    lineHeight: "16px",
};
