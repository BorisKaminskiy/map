import { FC, HTMLAttributes } from 'react';
import { useAppSelector } from '../../../store/store';
import { getActiveSatellite } from '../../../store/slices/activeSatellite/selectors';
import Button from '../../../ui/Button/Button';
import { useNavigate } from 'react-router';

import cn from "classnames";
import styles from "./Header.module.scss";

interface IHeader extends HTMLAttributes<HTMLElement> {}

const Header: FC<IHeader> = ({ ...props }) => {
  const navigate = useNavigate()
  const activeSatellite = useAppSelector(getActiveSatellite);

  return (
    <header className={cn(styles.header)} {...props}>
      {activeSatellite.id && <Button variant='primary' onClick={ () => navigate('/') }>Назад</Button> }
    </header>
  );
};

export default Header;
