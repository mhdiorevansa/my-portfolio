import Button from "@/components/button";
import Image from "next/image";

const HeroSection = () => {
	return (
		<div className="grid md:grid-cols-3 grid-cols-1 gap-3">
			<div className="md:col-span-2 order-2 md:order-1">
				<h1 className="text-2xl font-medium mb-2">Hey &#128075; I'm Dio</h1>
				<p className="mb-2 text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero veritatis nemo! Non
					accusantium deleniti iste fuga totam unde iusto rem ex rerum vitae, facere beatae, maxime
					soluta quod doloremque.
				</p>
				<Button text={"Curiculum Vitae"} styleButton={"bg-blue-500 mb-2"} />
			</div>
			<div className="h-full md:relative mx-auto md:mx-0 md:col-span-1 order-1 md:order-2">
				<Image
					src={"/people-icon.png"}
					className="md:absolute md:right-[-1.5rem] md:z-10"
					alt="gambar"
					width={180}
					height={180}></Image>
			</div>
		</div>
	);
};

export default HeroSection;
