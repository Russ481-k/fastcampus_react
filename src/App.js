import { useReducer } from "react";
import "./App.css";
import Counter2 from "./Components/Counter2";
// import SassExample from "./Components/Sass/SassExample";
// import { Context } from './Page/Context/ThemedButton';
// import Button from './Page/HOC/Button';
// import Input from './Page/HOC/Input';
// import Memo from './Page/Memoization/Memo';
// import Example from './Page/Portal/Example';
// import Dialog from './Page/Portal/Dialog';
// import ThankyouDialog from './Page/Portal/ThankyouDialog';
// import Component from './Page/PropTypes/Component';
// import MomentExample from './Components/MomentExample';
// import DayjsExample from './Components/DayjsExample';
// import DateFNSExample from './Components/DateFNSExample';
// import StyledComponentsExample from './Components/StyledComponentsExample';
// import Reducer from './Page/Reducer';
import TestMocking from "./Components/TestMocking";
import Counter from "./features/counter/Counter";
function App() {
  return (
    <div className="App">
      {/* <Reducer/> */}
      {/* <Memo /> */}
      {/* <Example /> */}
      {/* <ThankyouDialog /> */}
      {/* <Component/> */}
      {/* <MomentExample/>
      <DayjsExample/>
      <DateFNSExample/> */}
      {/* <StyledComponentsExample/> */}
      {/* <SassExample/> */}
      <TestMocking />
      <Counter />
      <br/>
      <Counter2 />

    </div>
  );
}

export default App;
