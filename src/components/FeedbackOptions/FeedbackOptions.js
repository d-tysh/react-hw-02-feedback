import { nanoid } from 'nanoid'

export const FeedbackOptions = ({options, addFeedback}) => {
    return (
        <div style={{ 'display': 'flex', 'gap': '4px' }}>
            {
                options.map(option => <button key={nanoid()} onClick={() => addFeedback(option)}>{option[0].toUpperCase() + option.slice(1)}</button>)
            }
        </div>
    );
}