import '@/app/globals.css';
import SocialIcons from './SocialIcons';

const Header = () => {
  return (
    <div className="header">
      <SocialIcons />
      <NeuButton />
    </div>
  );
};

export default Header;

export const NeuButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button className="text-sm px-2 py-2 font-medium bg-indigo-500 text-indigo-50 w-fit transition-all shadow-[3px_3px_0px_indigo] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        Hover me
      </button>
    </div>
  );
};
