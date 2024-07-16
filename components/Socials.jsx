import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
	{
		name: "Github profile",
		icon: <FaGithub />,
		path: "https://github.com/JDasherCoding",
	},
	{
		name: "Linkedin profile",
		icon: <FaLinkedin />,
		path: "https://www.linkedin.com/in/james-dasher-b331ab249/",
	},
];
const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link
						href={item.path}
						target="_blank"
						key={index}
						className={iconStyles}
						aria-label={item.name}
					>
						{item.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
