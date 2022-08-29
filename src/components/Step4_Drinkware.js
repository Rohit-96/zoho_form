import React, {useState, useCallback} from "react"; 
import 'bootstrap/dist/css/bootstrap.css';


const Step4_Drinkware = ({step, onStepChange})=> {

    const handleNext = useCallback(event => {
        onStepChange(step + 1)
    }, [onStepChange])

    const handlePrevious = useCallback(event => {
        onStepChange(step - 1)
    }, [onStepChange])


      return (
        <form className="form">

            <div className="input-container">
                <h1>RFQ Form for Gifting - EB</h1>
                <p>abc@xyz.in Switch account <br />
                Your email will be recorded when you submit this form</p>
            </div>

            <div className="input-container">
                <h4>Drinkware</h4>
                <p className="line-gap">Please choose Drinkware Products</p>
            </div>

            <div className="input-container">
                <label className="label_head">Drinkware Products</label><br />

                <input className="checkbox" type="checkbox"/>
                <label>Sipper & Flasks</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Mugs</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Tea Set</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Other</label>
            </div> 

            <div className="footer">
                <button className="back_btn btn btn-primary" onClick={handlePrevious}>Back</button>
                <button className="next_btn btn btn-success" onClick={handleNext}>Next</button>
                {/* <progress className="progress_bar" value="32" max="100"> </progress> */}
                {/* <span className="page">Page 1 of 18</span> */}
                <a className="clear_form" href="#">Clear form</a>
            </div>       

        </form>
      );
  }
  
  export default Step4_Drinkware;
  