import { ArrowUp } from "lucide-react";

type FooterProps = {
  isDarkMode: boolean;
};

export const Footer = ( { isDarkMode } : FooterProps) => {
  return (
    <footer className="py-12 px-4 relative border-t border-gray-200 mt-12 pt-8">
      <div className="flex items-center justify-between w-full">
       
        <div className="text-center">
          <p className={`text-sm ${isDarkMode ? "text-white":"text-black"}`}>
            &copy; {new Date().getFullYear()} DucSon.co. All rights reserved.
          </p>
        </div>
        <a
          href="#hero"
          className="p-2 rounded-full bg-orange-200 hover:bg-orange-300 text-orange-500 transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
