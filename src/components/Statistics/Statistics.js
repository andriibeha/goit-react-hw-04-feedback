import s from "../App/App.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <ul className={s.list}>
            <li className={s.item}>Good: {good}</li>
            <li className={s.item}>Neutral: {neutral}</li>
            <li className={s.item}>Bad: {bad}</li>
            <li className={s.item}>Total: {total}</li>
            <li className={s.item}>Positive Feedback: {positivePercentage} %</li>
        </ul>
    );
};

export default Statistics