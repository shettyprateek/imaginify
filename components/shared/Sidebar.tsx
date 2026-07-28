"use client"
import { navLinks } from "@/constants"
import { Show, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavLinks from "./NavLinks"

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="sidebar-logo">
                    <Image src={"/assets/images/logo-text.svg"} alt="logo" width={180} height={28} />
                </Link>

                <nav className="sidebar-nav">
                    <Show when="signed-in">
                        <ul className="sidebar-nav_elements">
                            <NavLinks links={navLinks.slice(0, 6)} />
                        </ul>
                        <ul className="sidebar-nav_elements">
                            <NavLinks links={navLinks.slice(6)} />
                            <li className="flex-center cursor-pointer gap-2 p-4">
                                <UserButton showName />
                            </li>
                        </ul>
                    </Show>
                    <Show when="signed-out">
                        <Button render={<Link href="/sign-in" />} className="button bg-purple-gradient bg-cover" variant="outline">
                            Login
                        </Button>
                    </Show>
                </nav>
            </div >
        </aside >

    )
}

export default Sidebar