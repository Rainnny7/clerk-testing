import type { ReactElement } from "react";
import {OrganizationSwitcher, SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

const HomePage = (): ReactElement => (
    <main className="min-h-screen flex flex-col gap-3 justify-center items-center">
        <h1 className="text-3xl font-bold">Clerk Auth Testing</h1>

        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
            <OrganizationSwitcher />
        </SignedIn>
    </main>
);
export default HomePage;