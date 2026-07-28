"use client";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Show, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import NavLinks from "./NavLinks"
import { navLinks } from "@/constants"
import { Button } from "../ui/button";

const MobileNav = () => {
    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src={"/assets/images/logo-text.svg"} alt="logo" width={180} height={28} />
            </Link>
            <nav className="flex gap-2">
                <Show when="signed-in">
                    <UserButton />
                    <Sheet>

                        <SheetTrigger><Image src={"/assets/icons/menu.svg"} alt="logo" width={32} height={32} /></SheetTrigger>
                        <SheetContent className="p-4 sm:w-64">
                            <>
                                <Image src={"/assets/images/logo-text.svg"} alt="logo" width={152} height={23} />

                                <ul className="sidebar-nav_elements">
                                    <NavLinks links={navLinks} />
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </Show>
                <Show when="signed-out">
                    <Button render={<Link href="/sign-in" />} className="button bg-purple-gradient bg-cover" variant="outline">
                        Login
                    </Button>
                </Show>
            </nav>
        </header>
    )
}

export default MobileNav