import React, { SVGProps, FC } from 'react';

export interface  NavigationItem  {
  name: string;
  href: string;
  icon: React.ComponentType<SVGProps<SVGSVGElement>>;
};

type FooterProps = {
  navigation: NavigationItem[];
};

  const Footer: FC<FooterProps> = ({ navigation }) => {
    return (
      <footer className="w-80 mx-auto border-gray-950">
        <div className="px-9 bg-gray-950 py-4 text-white flex justify-center space-x-6 md:order-2 rounded-b-md">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </footer>
    );
};

export default Footer;
  