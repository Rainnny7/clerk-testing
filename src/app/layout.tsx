import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "~/styles/globals.css";

export const metadata: Metadata = {
    title: "Clerk Auth Testing",
    description: "A test application for testing Clerk Auth",
};

/**
 * The primary layout for this app.
 */
const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode;
}>): ReactElement => (
    <html lang="en" className={`${GeistSans.variable}`}>
        <body>
            <ClerkProvider>{children}</ClerkProvider>
        </body>
    </html>
);
export default RootLayout;
