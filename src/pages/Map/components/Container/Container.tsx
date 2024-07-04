import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  useState,
  useEffect,
} from "react";
import { useAppDispatch } from "../../../../store/store";
import { useNavigate } from "react-router";
import { setActiveSatellite } from "../../../../store/slices/activeSatellite/activeSatellite";
import Satellite from "../../../../ui/Satellite/Satellite";
import cn from "classnames";
import styles from "./Container.module.scss";

interface IContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  width: number;
  height: number;
}

interface ISatelliteProps {
  id: number | string;
  left: number;
  top: number;
}

interface ISatelliteGroupsProps {
  firstGroup: ISatelliteProps[] | null;
  secondGroup: ISatelliteProps[] | null;
  thirdGroup: ISatelliteProps[] | null;
}

const satellites = {
  firstGroup: Array.from({ length: 10 }, (_, i) => i + 1),
  secondGroup: Array.from({ length: 10 }, (_, i) => i + 10),
  thirdGroup: Array.from({ length: 10 }, (_, i) => i + 20),
};

function getRandomMeasurement(
  width: number,
  height: number,
  array: number[] | string[]
): { id: string | number; top: number; left: number }[] {
  return array.map((item) => ({
    id: item,
    top: Math.floor(Math.random() * height),
    left: Math.floor(Math.random() * width),
  }));
}

const Container: FC<IContainerProps> = ({ width, height, ...props }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [groups, setGroups] = useState<ISatelliteGroupsProps>({
    firstGroup: getRandomMeasurement(width, height, satellites.firstGroup),
    secondGroup: null,
    thirdGroup: null,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (groups.firstGroup && !groups.secondGroup && !groups.thirdGroup) {
        setGroups((prevState) => ({
          ...prevState,
          secondGroup: getRandomMeasurement(
            width,
            height,
            satellites.secondGroup
          ),
        }));

        return;
      }
      if (groups.firstGroup && groups.secondGroup && !groups.thirdGroup) {
        setGroups((prevState) => ({
          ...prevState,
          firstGroup: null,
          thirdGroup: getRandomMeasurement(
            width,
            height,
            satellites.thirdGroup
          ),
        }));

        return;
      }
      if (!groups.firstGroup && groups.secondGroup && groups.thirdGroup) {
        setGroups((prevState) => ({
          ...prevState,
          secondGroup: null,
          firstGroup: getRandomMeasurement(
            width,
            height,
            satellites.firstGroup
          ),
        }));

        return;
      }
      if (groups.firstGroup && !groups.secondGroup && groups.thirdGroup) {
        setGroups((prevState) => ({
          ...prevState,
          thirdGroup: null,
          secondGroup: getRandomMeasurement(
            width,
            height,
            satellites.secondGroup
          ),
        }));

        return;
      }
		}, 5000);
		

    return () => clearInterval(timer);
  });

  const onSatteliteClick =
    (id: number | string, group: number) => (coordinates: { top: number; left: number }) => {
      dispatch(
        setActiveSatellite({ id, group, top: coordinates.top, left: coordinates.left })
      );
      navigate(`/satellite/${id}`);
    };

  return (
    <div className={cn(styles.root)} {...props}>
      {groups.firstGroup &&
        groups.firstGroup.map((item) => (
          <Satellite
            top={item.top}
            left={item.left}
            onSatelliteClick={onSatteliteClick(item.id, 1)}
            variant='firstGroup'
            key={item.id}
          />
        ))}
      {groups.secondGroup &&
        groups.secondGroup.map((item) => (
          <Satellite
            top={item.top}
            left={item.left}
            onSatelliteClick={onSatteliteClick(item.id, 2)}
            variant='secondGroup'
            key={item.id}
          />
        ))}
      {groups.thirdGroup &&
        groups.thirdGroup.map((item) => (
          <Satellite
            top={item.top}
            left={item.left}
            onSatelliteClick={onSatteliteClick(item.id, 3)}
            variant='thirdGroup'
            key={item.id}
          />
        ))}
    </div>
  );
};

export default Container;
