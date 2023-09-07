import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Profile from './Profile';
import Form from './Form';

function App() {

  // const dispatch = useDispatch();
  // const  counter= useSelector(state=>state.counter);

  // const add = (data)=>{
  //   dispatch({type:"ADD", payload:data})
  // }

  // const minus = (data)=>{
  //   dispatch({type:"MINUS", payload:data})
  // }

  return (
    <div className="App">
      <Profile />
      <Form />
      {/* <button onClick={()=>{minus(10)}}>-</button>
      {counter}
      <button onClick={()=>{add(10)}}>+</button> */}
    </div>
  );
}

export default App;
