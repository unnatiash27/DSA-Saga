import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
/* fixed bottom-0 left-0 right-0 */
const Footer = () => {
  return (
    <footer className=" bg-gray-800 p-4 mt-8 text-center text-white">
      <div className="flex items-center justify-center gap-8 mb-2">
        <a href="https://github.com/unnatiash27">
          <FaGithub
            title="GitHub"
            fontSize={25}
            className="hover:opacity-80 "
          />
        </a>
        <a href="https://www.linkedin.com/in/unnatiash27/">
          <FaLinkedin
            title="LinkedIn"
            fontSize={25}
            className="hover:opacity-80"
          />
        </a>
        
      </div>
      <p>&copy; 2024. DSA Saga
      by Unnatiash27.</p>
    </footer>
  );
};

export default Footer;
