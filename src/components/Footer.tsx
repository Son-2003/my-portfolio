import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 relative border-t border-gray-200 mt-12 pt-8">
      <div className="flex flex-wrap items-center justify-between w-full max-w-6xl mx-auto">
        <div className="flex-1 text-center">
          <p className="text-sm">
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
