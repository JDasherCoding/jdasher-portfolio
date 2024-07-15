"use client";

import { Description } from "@radix-ui/react-dialog";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
} from "react-icons/fa";
import {
	SiTailwindcss,
	SiNextdotjs,
	SiPython,
	SiAuth0,
	SiStrapi,
	SiSanity,
	SiLinux,
} from "react-icons/si";

// about Data
const about = {
	title: "About me",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quaerat nisi accusantium, alias eius cupiditate voluptates obcaecati?",
	info: [
		{ fieldName: "Name", fieldValue: "James Dasher" },
		{ fieldName: "Phone", fieldValue: "(+40) 321 654 678" },
		{ fieldName: "Experience", fieldValue: "12+ Years" },
		{ fieldName: "Skype", fieldValue: "skypeAdress" },
		{ fieldName: "Email", fieldValue: "jdasher.dev@gmail.com" },
		{ fieldName: "Freelance", fieldValue: "Available" },
		{ fieldName: "Languages", fieldValue: "English, Norwegian" },
	],
};

// Experience data
const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My experience",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum eum quam! Cumque culpa nobis hic asperiores!",
	items: [
		{
			company: "Tech Solutions Inc.",
			position: "Full Stack Developer",
			duration: "2022 - Present",
		},
		{
			company: "Web Design Studio.",
			position: "Front-End Developer Intern",
			duration: "Summer 2021",
		},
		{
			company: "E-commerce Startup",
			position: "Freelance Web Developer",
			duration: "2021 - 2022",
		},
		{
			company: "Tech Academy",
			position: "Teaching Assistant",
			duration: "2019 - 2020",
		},
		{
			company: "Digital Agency",
			position: "UI/UX Designer",
			duration: "2019 - 2020",
		},
		{
			company: "Software Development Firm",
			position: "Junior Developer",
			duration: "2017 - 2019",
		},
	],
};

// education data
const education = {
	icon: "/assets/resume/cap.svg",
	title: "My education",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum eum quam! Cumque culpa nobis hic asperiores!",
	items: [
		{
			institution: "Online Course Platform",
			degree: "Fullstack Web Development Bootcamp",
			duration: "2023",
		},
		{
			institution: "Code Academy",
			degree: "Front-end Track",
			duration: "2022",
		},
		{
			institution: "Online Course",
			degree: "Programming Course",
			duration: "2020-2021",
		},
		{
			institution: "Tech Institute",
			degree: "Certified Web Developer",
			duration: "2019",
		},
		{
			institution: "Design School",
			degree: "Diploma in Graphic Design",
			duration: "2019",
		},
		{
			institution: "Design School",
			degree: "Diploma in Graphic Design",
			duration: "2019",
		},
		{
			institution: "Design School",
			degree: "Diploma in Graphic Design",
			duration: "2019",
		},
	],
};

// Skills data
const skills = {
	title: "My Skills",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum eum quam! Cumque culpa nobis hic asperiores!",

	skillsList: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaCss3 />,
			name: "css 3",
		},
		{
			icon: <FaJs />,
			name: "JavaScript",
		},
		{
			icon: <FaReact />,
			name: "React",
		},
		{
			icon: <SiNextdotjs />,
			name: "Next.js",
		},
		{
			icon: <SiTailwindcss />,
			name: "Tailwind.css",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		{
			icon: <FaFigma />,
			name: "Figma",
		},
		{
			icon: <SiPython />,
			name: "Python",
		},
		{
			icon: <SiAuth0 />,
			name: "Auth0",
		},
		{
			icon: <SiSanity />,
			name: "Sanity.io",
		},
		{
			icon: <SiStrapi />,
			name: "Strapi",
		},
		{
			icon: <SiLinux />,
			name: "Linux",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-centerpy-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About Me</TabsTrigger>
					</TabsList>

					{/* Content  */}
					<div className="min-h-[70vh] w-full">
						{/* Experience  */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1 "
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot   */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* Education  */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1 "
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot   */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* Skills  */}
						<TabsContent value="skills" className="w-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 max-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillsList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300 group">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>

						{/* About  */}
						<TabsContent value="about" className="w-full">
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
