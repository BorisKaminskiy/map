import { FC } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router";
import cn from 'classnames'
import styles from './Layout.module.scss'
import backgroundImage from '../assets/img/cart2-CGtZG1e2-min.jpg'

const Layout: FC = () => {
  return (
    <div className={cn(styles.layout)}>
      <Header />
      <div className={ cn(styles.map_container) }>
        <div className={ cn(styles.image) }>
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={backgroundImage}
            alt='map'
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
