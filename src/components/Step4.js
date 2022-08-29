import React, {useState, useCallback} from "react"; 
import 'bootstrap/dist/css/bootstrap.css';


const Step4 = (props, {step, onStepChange})=> {

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
                <h4>{product_category[props.data.product_category].title}</h4>
                <p className="line-gap">{product_category[props.data.product_category].subtitle}</p>
            </div>

            <div className="input-container">
                <label className="label_head">{product_category[props.data.product_category].title}</label><br />

                {
                    product_category[props.data.product_category].products.map((product_name)=>(
                        <>
                            <input className="checkbox" type="checkbox"/>
                            <label>{product_name}</label><br />
                        </>
                    ))
                }
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
  
  export default Step4;
  