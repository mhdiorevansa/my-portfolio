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
		<header className="flex justify-between items-center mb-9">
			<div className="">
				<h1 className="text-2xl font-semibold">My Portfolio</h1>
			</div>
			<div className="flex items-center gap-3">
				<span>
					<FaHome className="text-xl" />
				</span>
				<h1 className="text-xl font-semibold">{namePage}</h1>
			</div>
		</header>
	);
};

export default Header;
