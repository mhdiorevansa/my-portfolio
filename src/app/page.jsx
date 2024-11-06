import Button from "@/components/button";

export default function Home() {
	return (
		<>
			<section className="my-5">
				<h1 className="flex items-center text-2xl font-medium mb-2">Hey &#128075; I'm Dio</h1>
				<p className="mb-2 text-justify">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vero veritatis nemo! Non
					accusantium deleniti iste fuga totam unde iusto rem ex rerum vitae, facere beatae, maxime
					soluta quod doloremque.
				</p>
				<div className="flex gap-x-2 items-center">
					<Button text={"Curiculum Vitae"} bgButton={"bg-blue-500"} />
					<span className="text-3xl">&#8672;</span>
					<p>Check my cv</p>
				</div>
			</section>
		</>
	);
}
