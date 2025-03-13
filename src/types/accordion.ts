export interface AccordionItemProps {
  title: string;
  text: string;
}

export interface AccordionProps {
  preheader: string;
  header: string;
  items: AccordionItemProps[];
}
