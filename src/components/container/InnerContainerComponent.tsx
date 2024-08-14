import styles from "./innercontainer.module.css";
interface InnerContainerProps {
  children: React.ReactNode;
}
function InnerContainer({ children }: InnerContainerProps) {
  return <div className={styles.innerContainer}>{children}</div>;
}

export default InnerContainer;
