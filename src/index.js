// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


import React, {useState} from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.js";
// import SignUp from "./signup.js";

import Step1 from "./components/Step1.js";
import Step2 from "./components/Step2.js";
import Step3 from "./components/Step3.js";
import Step4_Apparel_Accessories from "./components/Step4_Apparel_Accessories.js";
import Step4_Covid_Products from "./components/Step4_Covid_Products.js";
import Step4_Drinkware from "./components/Step4_Drinkware.js";
import Step4_Electronics from "./components/Step4_Electronics.js";
import Step4_Gourmet from "./components/Step4_Gourmet.js";
import Step4_Health_Fitness from "./components/Step4_Health_Fitness.js";
import Step4_Home_Appliances from "./components/Step4_Home_Appliances.js";
import Step4_Kits_Hampers from "./components/Step4_Kits_Hampers.js";
import Step4_Mass_promotion from "./components/Step4_Mass_promotion.js";
import Step4_Office_Accessories from "./components/Step4_Office_Accessories.js";
import Step4_Rewards_Recognition from "./components/Step4_Rewards_Recognition.js";
import Step4_Travel_Accessories from "./components/Step4_Travel_Accessories.js";
import Step5 from "./components/Step5.js";
import Step6 from "./components/Step6.js";

import "./index.css";

const App = ()=> {

  const [nextClicked, setNextClicked] = useState(1)

  const [data, setData] = useState({})


  const handleData = async (key, value)=> {
      let buff_data = await data
      buff_data[key] = value
      setData(buff_data)
  }

// class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ""
  //   };
  // }

  // state = {
  //   renderView: 0
  // }

  // clickBtn = e => {
  //   this.setState({
  //     renderView: +e.target.value
  //   });
  // };

  console.log(nextClicked)


  // render() {
    return (
      <div className="App">
        {/* <Login /> */}
        { nextClicked === 1 ?
        <Step1 step={nextClicked} onStepChange={setNextClicked} handleData = {handleData} />
        : nextClicked === 2 ?
        <Step2 step={nextClicked} onStepChange={setNextClicked} handleData = {handleData}/> 
        : nextClicked === 3 ?
        <Step3 step={nextClicked} onStepChange={setNextClicked} handleData = {handleData}/>
        : nextClicked === 4 ?
        <Step4_Rewards_Recognition step={nextClicked} onStepChange={setNextClicked} data = {data}/>
        : nextClicked === 5 ?
        <Step4_Office_Accessories step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 6 ?
        <Step4_Travel_Accessories step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 7 ?
        <Step4_Electronics step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 8 ?
        <Step4_Home_Appliances step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 9 ?
        <Step4_Health_Fitness step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 10 ?
        <Step4_Gourmet step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 11 ?
        <Step4_Drinkware step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 12 ?
        <Step4_Apparel_Accessories step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 13 ?
        <Step4_Kits_Hampers step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 14 ?
        <Step4_Covid_Products step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 15 ?
        <Step4_Mass_promotion step={nextClicked} onStepChange={setNextClicked}/>
        : nextClicked === 16 ?
        <Step5 step={nextClicked} onStepChange={setNextClicked} />
        :
        <Step6 step={nextClicked} onStepChange={setNextClicked}/>
        }
      </div>
    );
  // }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

