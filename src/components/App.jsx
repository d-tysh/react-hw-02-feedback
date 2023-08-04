import { useReducer } from "react";
import { Statistics } from "./Statistics/Statistics";

const addFeedback = (state, action) => {
  switch(action.type) {
    case 'good':
      return {...state, good: state.good + action.payload};
    case 'neutral':
      return {...state, neutral: state.neutral + action.payload};
      case 'bad':
        return {...state, bad: state.bad + action.payload};
      default:
      return;
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(addFeedback, {
    good: 0,
    neutral: 0,
    bad: 0
  });

  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  // const addFeedback = (value) => {
  //   switch (value) {
  //     case 'good':
  //       setGood(state => state + 1);
  //       break;
  //     case 'neutral':
  //       setNeutral(state => state + 1);
  //       break;
  //     case 'bad':
  //       setBad(state => state + 1);
  //       break;
  //     default:
  //       return;
  //   }
  // }

  return (
    <div>
      <Statistics
        good={state.good}
        neutral={state.neutral}
        bad={state.bad}
        addFeedback={(value) => dispatch({type: value, payload: 1})} />
    </div>
  );
};
