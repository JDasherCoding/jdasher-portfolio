"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "Full-stack",
		title: "JSM Livedocs",
		description:
			"Markdown editor with live collaboration built in Next.js, with ShadCn and Tailwind for styling. Using Typescript and Sentry.io for quality control, Authentication using Clerk.",
		stack: [
			{ name: "Next.js" },
			{ name: "Sentry.io" },
			{ name: "Liveblocks" },
			{ name: "Clerk" },
		],
		image: "/assets/work/project-livedocs.png",
		live: "https://jsm-live-docs-psi.vercel.app/",
		github: "https://github.com/JDasherCoding/jsm_live_docs",
	},
	{
		num: "02",
		category: "ReactNative FullStack",
		title: "Aora - Video hosting & sharing App",
		description:
			"ReactNative App made with Expo, using NativeWind for styling, AppWrite for auth, and content management. Followed tutorial to learn React Native and Expo basics, for use in my own mobile application. ",
		stack: [
			{ name: "React Native" },
			{ name: "Expo" },
			{ name: "NativeWind" },
			{ name: "Appwrite" },
		],
		image: "/assets/work/project-aora.png",
		live: "",
		github: "https://github.com/JDasherCoding/react_native_crashcourse",
	},
	{
		num: "03",
		category: "Full-stack",
		title: "Booky - Fullstack hotel booking App",
		description:
			"Seamless hotel reservation management. Built with Next.js and Tailwind CSS, on Front-End. Strapi Back-End, and integrated Kinde Auth for user authentication, and ShadCn for Ui components.",
		stack: [
			{ name: "Next.js" },
			{ name: "Tailwind CSS" },
			{ name: "Strapi.io" },
			{ name: "Kinde Auth" },
		],
		image: "/assets/work/project-booky.png",
		live: "",
		github: "https://github.com/JDasherCoding/booky-fullstack-nextjs",
	},

	{
		num: "04",
		category: "Front-End",
		title: "Zenbrew",
		description:
			"A modern coffee shop built with Next and Tailwind Css with framer motion and gsap. Followed a guide by Michael Mihai to work on best practices. Especially liked the sideways scroll in the about section.",
		stack: [
			{ name: "Next.js" },
			{ name: "Tailwind CSS" },
			{ name: "Framer-motion" },
		],
		image: "/assets/work/project-zenbrew.png",
		live: "https://zenbrew-delta.vercel.app/",
		github: "https://github.com/JDasherCoding/zenbrew",
	},
	{
		num: "05",
		category: "Front-End",
		title: "Music Player",
		description:
			"A Music player with manually implemented controls in HTML, CSS, and JavaScript",
		stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
		image: "/assets/work/project-music-player.png",
		live: "https://jdashercoding.github.io/music-player-html/",
		github: "https://github.com/JDasherCoding/music-player-html",
	},
	{
		num: "06",
		category: "Front-End",
		title: "Math Sprint Game",
		description:
			"A Math Sprint game implemented with HTML, CSS, and JavaScript, utilizing localStorage to maintain and display high scores.",
		stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
		image: "/assets/work/project-math-sprint.png",
		live: "https://jdashercoding.github.io/math-sprint-game-html/",
		github: "https://github.com/JDasherCoding/math-sprint-game-html",
	},
	{
		num: "07",
		category: "Front-End",
		title: "Dad Jokes Generator",
		description:
			"Dad Jokes and an opportunity to work with an API. What's not to love? Admittedly, they're not the best jokes, but Dad jokes tend to be hit and miss.",
		stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
		image: "/assets/work/project-dad-jokes.png",
		live: "https://jdashercoding.github.io/Dad-Jokes/",
		github: "https://github.com/JDasherCoding/Dad-Jokes",
	},
	{
		num: "99",
		category: "Placeholder Project",
		title: "project 3",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis at illo, ab beatae ipsam iusto veritatis nemo?",
		stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
		image: "/assets/work/thumb3.png",
		live: "",
		github: "/",
	},
];

const Projects = () => {
	const [project, setProject] = useState(projects[0]);
	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.activeIndex;
		// update project state based on current index
		setProject(projects[currentIndex]);
	};
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[30px] h-[50%]">
							{/* Outline num  */}
							<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
								{project.num}
							</div>
							{/* project category  */}
							<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{project.category} project
							</h2>
							{/* project description */}
							<p className="text-white/60">{project.description}</p>
							{/* Stack  */}
							<ul className="flex gap-4">
								{project.stack.map((tech, index) => {
									return (
										<li key={index} className="text-xl text-accent">
											{tech.name}
											{/* remove last comma */}
											{index !== project.stack.length - 1 && ","}
										</li>
									);
								})}
							</ul>
							{/* Border  */}
							<div className="border border-white/20"></div>
							{/* Buttons */}
							<div className="flex items-center gap-4">
								{/* Live Project Button  */}
								<a
									href={project.live}
									target="_blank"
									rel="noopener noreferrer"
								>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live Project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</a>

								{/* Github Project Button */}
								<a
									href={project.github}
									target="_blank"
									rel="noopener noreferrer"
								>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Github repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</a>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50">
											{/* overlay  */}
											<div className="absolute top-0 bottom-0 h-full w-full bg-black/10 z-10"></div>
											{/* image  */}
											<div className="relative w-full h-full">
												<Image
													src={project.image}
													fill
													className="object-cover"
													alt=""
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/* // Slider buttons */}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Projects;
