import { FC, DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import { useAppSelector } from "../../store/store";
import { getActiveSatellite } from "../../store/slices/activeSatellite/selectors";
import { useNavigate } from 'react-router';
import Typography from '../../ui/Typography/Typography';
import cn from "classnames";
import styles from "./Information.module.scss";

interface IInformationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Information: FC<IInformationProps> = ({ ...props }) => {
  const navigate = useNavigate()
  const activeSatellite = useAppSelector(getActiveSatellite);
  
  useEffect (() => {!activeSatellite.id && navigate('/')}, [activeSatellite])


  return (
    <>
      <div className={cn(styles.information)}>
        <Typography variant='t16' isBold>
          ID элемента {activeSatellite.id}
        </Typography>
        <Typography variant='t16'>
          Отступ сверху {activeSatellite.top}px
        </Typography>
        <Typography variant='t16'>
          Отступ слева {activeSatellite.left}px
        </Typography>
        <Typography variant='t16'>
          Группа {activeSatellite.group}
        </Typography>
      </div>
      <div className={cn(styles.root)} {...props}>
        {activeSatellite.left && activeSatellite.top && (
          <div
            style={{
              top: `${activeSatellite.top}px`,
              left: `${activeSatellite.left}px`,
            }}
            className={cn(styles.root)}
          >
            <div className={cn(styles.element)} />
          </div>
        )}
      </div>
    </>
  );
};

export default Information;
