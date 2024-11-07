import HeroSection from "@/components/home/hero-section";
import ProjectSection from "@/components/home/project-section";
import Separator from "@/components/separator";

export default function Home() {
	return (
		<>
			<section className="md:my-6 my-4">
				<HeroSection />
			</section>
			<Separator />
			<section className="md:my-6 my-4">
				<ProjectSection />
			</section>
		</>
	);
}
