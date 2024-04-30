import styles from "./styles.module.css";
import * as React from "react";

export interface Props {
  displayClasses?: string;
}

const Box: React.FC<React.PropsWithChildren<Props>> = ({
  displayClasses,
  children,
  ...rest
}) => {
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
};

export default Box;
