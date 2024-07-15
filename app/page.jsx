import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
	return (
		<section className="h-full">
			<div className="container mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
					{/* Text */}
					<div className="text-center xl:text-left order-2 xl:order-none">
						<span>Software Developer</span>
						<h1 className="h1 mb-6">
							Hello I&apos;m <br />{" "}
							<span className="text-accent">James Dasher</span>
						</h1>
						<p className="max-w-[500px] mb-9 text-white/80">
							I enjoy learning and sharing the knowledge. My favorite part of
							any endevour is to challenge myself as I work through technical
							problems.
						</p>
						{/* btn and socials */}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<a href="/assets/resume/cv.pdf" download="James_Dasher_CV.pdf">
								<Button
									variant="outline"
									size="lg"
									className="uppercase flex items-center gap-2"
								>
									<span>Download CV</span>
									<FiDownload className="text-xl" />
								</Button>
							</a>

							<div className="mb-8 xl:mb-0">
								<Socials
									containerStyles="flex gap-6"
									iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
								/>
							</div>
						</div>
					</div>

					{/* Photo */}
					<div className="order-1 xl:order-none mb-8 xl:mb-0">
						<Photo />
					</div>
				</div>
			</div>
			<Stats />
		</section>
	);
}
