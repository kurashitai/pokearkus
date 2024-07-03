import { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
  imageSrc?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className = "",
  imageSrc,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b ${className}`}>
      <button
        className="w-full py-4 px-5 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-center flex-grow">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Accordion Icon"
              className="w-8 h-8 mr-2 rounded-full"
            />
          )}
          <span className="text-center">{title}</span>
        </div>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="px-5 pb-4">{children}</div>}
    </div>
  );
};

export default Accordion;
