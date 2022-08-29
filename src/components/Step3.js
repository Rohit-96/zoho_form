import React, {useState, useCallback} from "react"; 
import 'bootstrap/dist/css/bootstrap.css';


const Step3 = ({step, onStepChange})=> {

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

            {/* <div className="input-container">
                <h4>Product Category</h4>
                <p>Category</p>
            </div> */}

            <div className="input-container">
                <h4>Product Category</h4>
                <label className="label_head">Category</label><br /><br />

                <input className="checkbox" type="checkbox"/>
                <label>Rewards & Recognition</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Office Accessories</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Travel Accessories</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Electronics</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Home Appliances</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Health & Fitness Products</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Gourmet</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Drinkware</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Apparel & Accessories</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Kits and Hampers</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Covid Products</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Mass Production Products</label><br />
                <input className="checkbox" type="checkbox"/>
                <label>Others</label>
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
  
  export default Step3;
  