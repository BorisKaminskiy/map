import { FC, DetailedHTMLProps, HTMLAttributes, MouseEvent } from "react";
import cn from "classnames";
import styles from "./Satellite.module.scss";

interface ISatelliteProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant: "firstGroup" | "secondGroup" | "thirdGroup";
  top: number;
  left: number;
  onSatelliteClick: (coordinates: { top: number; left: number }) => void;
}

const Satellite: FC<ISatelliteProps> = ({
  variant,
  top,
  left,
  onSatelliteClick,
  ...props
}) => {
  const onClick = (e: MouseEvent) => {
    e.stopPropagation();
    onSatelliteClick({ top, left });
  };

  return (
    <div
      style={{
        top: `${top}px`,
        left: `${left}px`,
      }}
      className={cn(styles.root)}
      {...props}
    >
      <div className={cn(styles.container)} onClick={(e) => onClick(e)}>
        <div className={cn(styles.element, styles[variant])} />
      </div>
    </div>
  );
};

export default Satellite;
