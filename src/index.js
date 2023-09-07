import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";




const defaultValue = {
  counter: 0,
  name: "noname",
  fam: "noname"
}

const reducer = (state = defaultValue, action) => {
  switch (action.type) {

    case "ADD":
      return { counter: state.counter + action.payload };
    case "MINUS":
      return { counter: state.counter - action.payload };
    case "change_name":
      return { name: action.payload };
    case "change_fam":
      return { fam: action.payload };
    case "change_param":
      return {
        name: action.payload.name,
        fam: action.payload.fam
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
