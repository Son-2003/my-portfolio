type ButtonProps = {
  href: string;
  content: string;
};

const Button: React.FC<ButtonProps> = ({ href, content }) => {
  return (
    <a
      href={href}
      className="px-6 py-2 rounded-full bg-orange-500 text-white font-medium 
                 transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)]
                 hover:scale-105 active:scale-95 text-center"
    >
      {content}
    </a>
  );
};

export default Button;
