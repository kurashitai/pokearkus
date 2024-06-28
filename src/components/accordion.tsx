import { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`border-b ${className}`}>
      <button
        className="w-full text-left py-4 px-5 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="px-5 pb-4">{children}</div>}
    </div>
  );
};

export default Accordion;
