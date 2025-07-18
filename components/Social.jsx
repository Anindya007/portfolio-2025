import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const Social = () => {
    return (
        <div className="flex items-center gap-4">
            <Link href="https://github.com/Anindya007" target="_blank">

                <FaGithub size={20} />

            </Link>
            <Link href="https://www.linkedin.com/in/anindya-chakladar-1308b58a/" target="_blank">

                <FaLinkedinIn size={20} />

            </Link>
        </div>
    )
};
export default Social;