import GithubIcon from '@/assets/GithubIcon';
import LinkedinIcon from '@/assets/LinkedinIcon';
import TwitterIcon from '@/assets/TwitterIcon';
import '@/app/globals.css';

function SocialIcons() {
  const icons = [
    { icon: <GithubIcon color="#A1A1A6" />, link: "https://github.com" },
    { icon: <LinkedinIcon color="#A1A1A6" />, link: "https://linkedin.com" },
    { icon: <TwitterIcon color="#A1A1A6" />, link: "https://twitter.com" },
  ];
  return (
    <div className="header_links">
      {icons.map((icon, index) => (
        <Social icon={icon.icon} link={icon.link} key={index} />
      ))}
    </div>
  );
}

export default SocialIcons;

const Social = ({ icon, link }: any) => {
  return (
    <a
      href={link}
      target="_blank"
      className="icon-link transition-all duration-300 hover:text-green-500"
    >
      <span className="relative z-10">{icon}</span>
    </a>
  );
};
