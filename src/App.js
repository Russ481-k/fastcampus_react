
import { useReducer } from 'react';
import './App.css';
import { Context } from './Page/Context/ThemedButton';
import Button from './Page/HOC/Button';
import Input from './Page/HOC/Input';
import Memo from './Page/Memoization/Memo';
import Example from './Page/Portal/Example';
import Dialog from './Page/Portal/Dialog';
import ThankyouDialog from './Page/Portal/ThankyouDialog';
// import Reducer from './Page/Reducer';

function App() {

  return (
    <div className="App">
      {/* <Reducer/> */}
        {/* <Memo /> */}
      <Example />
      {/* <ThankyouDialog /> */}
    </div>
  );
}

export default App;
