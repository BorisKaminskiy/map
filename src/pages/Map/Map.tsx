import {
  FC,
  DetailedHTMLProps,
  HTMLAttributes,
  RefObject,
  useEffect,
} from "react";
import { useAppDispatch } from "../../store/store";
import { setActiveSatellite } from "../../store/slices/activeSatellite/activeSatellite";
import Container from "./components/Container/Container";
import { useElementSize } from "../../hooks/useElementSize";
import cn from "classnames";
import styles from "./Map.module.scss";

interface IMapProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Map: FC<IMapProps> = ({ ...props }) => {
  const { width, height, elementRef } = useElementSize();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setActiveSatellite({
        id: null,
        group: null,
        top: null,
        left: null,
      })
    );
  }, []);

  return (
    <div
      className={cn(styles.root)}
      ref={elementRef as RefObject<HTMLDivElement>}
      {...props}
    >
      {width && height && <Container width={width} height={height} />}
    </div>
  );
};

export default Map;
