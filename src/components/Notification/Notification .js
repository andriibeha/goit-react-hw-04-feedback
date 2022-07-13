import s from "../App/App.module.css";

const Notification = ({ message }) => {
    return (
        <div>
            <h1 className={s.notification}>{message}</h1>
        </div>
    );
};

export default Notification;