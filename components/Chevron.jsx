"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Chevron = () => {
	return (
		<div className="w-full h-full relative">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeIn" },
				}}
			>
				{/* Image  */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
					}}
					className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
				>
					<motion.svg
						className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] "
						fill="transparent"
						viewBox="0 0 506 506"
						xmlns="http://www.w3.org/2000/svg"
					>
						{/* Outer Circle */}
						<motion.circle
							cx="253"
							cy="253"
							r="250"
							stroke="#00ff99"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
							initial={{ strokeDasharray: "24 10 0 0 " }}
							animate={{
								strokeDasharray: [
									"15 120 25 25 ",
									"16 25 92 72",
									"4 250 22 22",
								],
								rotate: [120, 360],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>

						{/* Middle Circle  */}
						<motion.circle
							cx="253"
							cy="253"
							r="175"
							stroke="#00ff99"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
							initial={{ strokeDasharray: "24 10 0 0 " }}
							animate={{
								strokeDasharray: [
									"15 120 25 25 ",
									"16 25 92 72",
									"4 250 22 22",
								],
								rotate: [320, 160],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
						{/* Inner Circle  */}
						<motion.circle
							cx="253"
							cy="253"
							r="125"
							stroke="#00ff99"
							strokeWidth="4"
							strokeLinecap="round"
							strokeLinejoin="round"
							initial={{ strokeDasharray: "24 10 0 0 " }}
							animate={{
								strokeDasharray: [
									"15 120 25 25 ",
									"16 25 92 72",
									"4 250 22 22",
								],
								rotate: [160, 320],
							}}
							transition={{
								duration: 20,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						/>
					</motion.svg>
				</motion.div>

				{/* Circle */}
				<motion.svg
					className="w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] "
					fill="transparent"
					viewBox="0 0 506 506"
					xmlns="http://www.w3.org/2000/svg"
				></motion.svg>
			</motion.div>
		</div>
	);
};

export default Chevron;
