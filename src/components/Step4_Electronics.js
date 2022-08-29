import React, {useState, useCallback} from "react"; 
import 'bootstrap/dist/css/bootstrap.css';


const Step4_Electronics = ({step, onStepChange})=> {

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
                <h4>Electronics</h4>
                <p className="line-gap">Please choose Electronics Products</p>
            </div>

            <div className="input-container">
                <label className="label_head">Electronics Products</label><br />

                <input className="checkbox" type="checkbox"/>
                <label>Computer Accessories</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Power Banks</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Speakers & Headphones</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Smart Devices</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Mobiles/Tablet</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Pendrive</label><br />
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
  
  export default Step4_Electronics;
  