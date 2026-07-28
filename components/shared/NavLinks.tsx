import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
    route: string;
    label: string;
    icon: string;
};

type NavLinksProps = {
    links: NavLink[];
};

const NavLinks = ({ links }: NavLinksProps) => {
    const pathname = usePathname();
    return (
        <>
            {links.map((link) => {
                const isActive = pathname === link.route;

                return (
                    <li
                        key={link.route}
                        className={`sidebar-nav_element group ${isActive
                            ? "bg-purple-gradient text-white"
                            : "text-gray-700"
                            }`}
                    >
                        <Link href={link.route} className="sidebar-link">
                            <Image
                                src={link.icon}
                                alt={link.label}
                                width={24}
                                height={24}
                                className={isActive ? "brightness-200" : ""}
                            />

                            <p>{link.label}</p>
                        </Link>
                    </li>
                );
            })}
        </>
    );
};

export default NavLinks;