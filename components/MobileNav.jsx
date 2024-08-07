"use client";

import { usePathname } from "next/navigation";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "projects",
		path: "/projects",
	},
	{
		name: "contact",
		path: "/contact",
	},
];
const MobileNav = () => {
	const pathName = usePathname();
	return (
		<Sheet>
			<SheetTrigger
				className="flex justify-center items-center"
				aria-label="Open Nav"
			>
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				<VisuallyHidden asChild>
					<SheetHeader>
						<SheetTitle>Nav</SheetTitle>
						<SheetDescription>
							Mobile navigation menu: links to home, resume, projects, and
							contact pages
						</SheetDescription>
					</SheetHeader>
				</VisuallyHidden>
				{/* Logo  */}
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							jDasher
							<span className="text-accent">.</span>
						</h1>
					</Link>
				</div>
				{/* nav */}
				<nav className="flex flex-col justify-center items-center gap-8">
					{links.map((link, index) => {
						return (
							<Link
								href={link.path}
								key={index}
								className={`${
									link.path === pathName &&
									"text-accent border-b-2 border-accent"
								} text-xl capitalize hover:text-accent transition-all`}
							>
								{link.name}
							</Link>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
