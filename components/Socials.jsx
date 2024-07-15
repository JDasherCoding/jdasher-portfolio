import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
	{ icon: <FaGithub />, path: "" },
	{ icon: <FaLinkedin />, path: "" },
	{ icon: <FaYoutube />, path: "" },
	{ icon: <FaTwitter />, path: "" },
];
const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link href={item.path} key={index} className={iconStyles}>
						{item.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;