import styles from "./styles/error.module.css";

const NotFound: React.FC = () => {
    return (
        <div className={ styles.container }>
            <h1>Error 404</h1>
        </div>
    )
}

export default NotFound;