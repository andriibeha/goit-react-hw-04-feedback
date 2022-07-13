import {useState} from "react";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions ";
import Section from "../Section/Section ";
import Notification  from "../Notification/Notification "


function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleClick = (e) => {
        const { name } = e.target;

        if (name === "good") {
            return setGood(prevState => prevState + 1);
        } else if (name === "neutral") {
            return setNeutral(prevState => prevState + 1);
        } else if (name === "bad") {
            return setBad(prevState => prevState + 1);
        };
    };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        let total = good + neutral + bad;
        if (total === 0) {
            return 0;
        } else {
            return Math.trunc((good / total) * 100);
        };
    };


    return (
        <div>
            <Section title={"Please leave feedback"}>
                <FeedbackOptions
                    onClick={handleClick}
                />
            </Section>

            <Section title={"Statistics"}>
                {countTotalFeedback() === 0 ?
                    (
                        <Notification
                            message={"There is no feedback"}
                        />
                    ) :
                    (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            positivePercentage={countPositiveFeedbackPercentage()}
                        />
                    )
                }
            </Section>
        </div>
    );
};

export default App;

