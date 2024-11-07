"use client";

import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

const Header = () => {
	const pathName = usePathname();
	let namePage;
	if (pathName === "/") {
		namePage = "Home";
	} else {
		namePage = pathName;
	}
	return (
		<header className="flex justify-between items-center mb-9 md:mb-12">
			<h1 className="text-2xl font-semibold">My Portfolio</h1>
			<div className="flex items-center gap-2 text-xl font-semibold">
				<span>
					<FaHome />
				</span>
				<h2>{namePage}</h2>
			</div>
		</header>
	);
};

export default Header;
