import { Bars3Icon } from '@heroicons/react/24/solid';
import { ReactNode, useState } from 'react';

import * as s from './NavbarMenu.css';

interface NavbarMenuProps {
  children: ReactNode;
}

const NavbarMenu = ({ children }: NavbarMenuProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleToggleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div>
      <div className={s.container}>{children}</div>
      <div className={s.compact({ isVisible })}>{children}</div>
      <button className={s.toggle} onClick={handleToggleClick}>
        <Bars3Icon width="1.5rem" />
      </button>
    </div>
  );
};

export default NavbarMenu;
