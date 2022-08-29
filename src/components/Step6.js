import React, {useState, useCallback} from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Step6 = ({step, onStepChange})=> {

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
                <h4>Client Details</h4>
                <p>Please enter Client details</p>
            </div>

            <div className="input-container">
                <label>Name of your Client</label><br />
                <input className="input-box" type="text" />
            </div>

            <div className="input-container">
                <label>Cx will close the order by</label><br />
                {/* <p>Date</p> */}
                <input className="input-box" type="date" />
            </div>

            <div className="input-container">
                <label>Type of the organization</label><br />
                <select className="select">
                    <option>IT/ITES</option>
                    <option>Financial Institution</option>
                    <option>Start up</option>
                    <option>Banking</option>
                    <option>NGO</option>
                    <option>Manufacturing</option>
                    <option>E-Commerce</option>
                    <option>FMCG</option>
                </select>
            </div>

            <div className="input-container">
                <label>Delivery Type</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Single Location</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Multi-Location-PAN India</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Multi-Location-Single City</label>
            </div>

            <div className="input-container">
                <label>Remarks / Special Instructions / Summary</label><br />
                <input className="input-box" type="text" />
            </div>

            <div className="footer">
                <button className="back_btn btn btn-primary" onClick={handlePrevious}>Back</button>
                <button className="submit_btn btn btn-success">Submit</button>
                {/* <progress className="progress_bar" value="32" max="100"> </progress> */}
                {/* <span className="page">Page 1 of 18</span> */}
                <a className="clear_form" href="#">Clear form</a>
            </div>

        </form>
      );
  }
  
  export default Step6;
  