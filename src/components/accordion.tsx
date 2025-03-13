import { useState } from 'react';
import { Header } from './header';
import { AccordionItemProps, AccordionProps } from '../types/accordion';

const AccordionItem = ({ title, text }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-4 px-6 flex justify-between items-center cursor-pointer hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-bold">{title}</span>
        <span className="transform transition-transform duration-200 ease-in" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          ↓
        </span>
      </button>
      <div
        className={`flex px-6 overflow-hidden transition-all duration-200 ease-in ${
          isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 text-left text-lg flex basis-2/3 py-2">{text}</p>
      </div>
    </div>
  );
};

export const Accordion = ({ preheader, header, items }: AccordionProps) => {
  return (
    <div className="py-12">
      <Header preheader={preheader} header={header} />
      <div className="mx-8 border-t border-gray-200">
        {items.map((item, index) => (
          <AccordionItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
;
