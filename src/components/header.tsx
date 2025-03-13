import { HeaderProps } from "../types/header";

export const Header = ({ preheader, header  }: HeaderProps) => {
  return (
    <div className="w-full py-8 px-4 md:px-10">
      <div className="mx-auto text-left flex justify-between">
        <div>
          {preheader && (
            <p className="text-sm text-gray-600 mb-2 font-medium">{preheader}</p>
          )}
          <h1 className="text-4xl font-bold">{header}</h1>
        </div>
      </div>
    </div>
  );
};
