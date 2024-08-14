import styles from "./container.module.css";

interface ContainerProps {
  // still have to pass props to component for children
  children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
  return <div className={styles.parentContainer}>{children}</div>;
}

export default Container;
