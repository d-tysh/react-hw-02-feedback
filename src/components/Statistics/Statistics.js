import { Notification } from "components/Notification/Notification";
import { Section } from "./Section";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export const Statistics = ({good, neutral, bad, addFeedback}) => {

    const countTotalFeedback = () => {
        return good + neutral + bad;
    }

    const countPositiveFeedbackPercentage = () => {
        return Math.floor((100 * good) / countTotalFeedback());
    }

    return (
        <div>
            <FeedbackOptions options={['good', 'neutral', 'bad']} addFeedback={addFeedback} />
            {
                (good || neutral || bad) ? (
                    <Section title='Statistics'>
                        <p>Good: {good}</p>
                        <p>Neutral: {neutral}</p>
                        <p>Bad: {bad}</p>
                        <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
                    </Section>
                )
                : <Notification message='There is no feedback.' />
            }
        </div>
    )
}