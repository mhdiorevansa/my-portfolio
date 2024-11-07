import { FaArrowRightLong } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";

const ProjectSection = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data/projects.json`);
	if (!response.ok) {
		throw new Error("Failed to fetch data");
	}
	const projects = await response.json();
	const limitProjects = projects.data ? projects.data.slice(0, 2) : [];
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="font-medium flex items-center gap-2 text-xl">
					<h2>Featured Work</h2>
					<span>
						<IoGrid />
					</span>
				</div>
				<div className="flex items-center gap-2 text-md">
					<h2>Lihat Semua</h2>
					<span>
						<FaArrowRightLong />
					</span>
				</div>
			</div>
			<div className="grid md:grid-cols-2 grid-cols-1 gap-3">
				{limitProjects.map((project) => {
					return (
						<div className="card w-full shadow-md" key={project.id}>
							<div className="card-body">
								<h2 className="card-title">Card title!</h2>
								<p>If a dog chews shoes whose shoes does he choose?</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default ProjectSection;
