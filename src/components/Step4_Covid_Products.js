import React, {useState, useCallback} from "react"; 
import 'bootstrap/dist/css/bootstrap.css';


const Step4_Covid_Products = ({step, onStepChange})=> {

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
                <h4>Covid Products</h4>
                <p className="line-gap">Please choose Covid Products</p>
            </div>

            <div className="input-container">
                <label className="label_head">Covid Products</label><br />

                <input className="checkbox" type="checkbox"/>
                <label>Masks</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Sanitizer</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Disinfectant</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Gloves</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Employee Covid kit</label><br />
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
  
  export default Step4_Covid_Products;
  