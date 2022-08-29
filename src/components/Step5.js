import React, {useState, useCallback} from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Step5 = ({step, onStepChange})=> {

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
                <h4>Quantity-Budget-Deivery</h4>
                <label>Quantity Required</label><br />
                <input className="input-box" type="text" />
            </div>

            <div className="input-container">
                <label>Client Budget per unit</label><br />
                <input className="input-box" type="text" />
            </div>

            <div className="input-container">
                <label>Delivery Timeline</label><br />
                {/* <p>Date</p> */}
                <input className="input-box" type="date" />
            </div>

            <div className="input-container">
                <label>Enterprise Sales Location</label><br />
                <select className="select">
                    <option>Bangalore</option>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                    <option>Delhi NCR</option>
                    <option>Pune</option>
                    <option>Kolkata</option>
                    <option>Mumbai</option>
                    <option>Others</option>
                </select>
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
  
  export default Step5;
  