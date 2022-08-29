import React, {useState, useCallback} from "react";
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.css';

const Step1 = (props, {step, onStepChange })=> {

    // console.log(kam)


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
            <hr />
            <p>abc@xyz.in Switch account <br />
            Your email will be recorded when you submit this form</p>
          </div>

          <div className="input-container">
                <label className="label_head">KAM</label><br />
                <select className="react-select select" 
                        onChange={(e)=>props.handleData("kam", e.target.value)}
                >
                    <option>abc</option>
                    <option>xyz</option>
                    <option>bfejbfb</option>
                    <option>rjf</option>
                </select>
          </div>

          <div className="input-container">
            <label className="label_head">Account Name</label><br />
            <select className="select" 
                onChange={(e)=>props.handleData("account", e.target.value)}
            >
                <option>xyz</option>
                <option>abc</option>
                <option>dhdhd</option>
                <option>fhfh</option>
                <option>uhurfrf</option>
                <option>hfr</option>
                <option>jighrg</option>
                <option>hfhf</option>
            </select>
          </div>

          <div className="input-container">
            <label className="label_head">Contact</label><br />
            <select className="select" 
                onChange={(e)=>props.handleData("contact", e.target.value)}
            >
                <option>jfj</option>
                <option>jhgr</option>
                <option>rjg</option>
                <option>Apfv</option>
                <option>Mayff</option>
                <option>efef</option>
                <option>heff</option>
                <option>ehfif</option>
            </select>
          </div>

          <div className="input-container">
            <label className="label_head">Deal Name</label><br />
            <input type="text"
                onChange={(e)=>props.handleData("deal_name", e.target.value)}
            />
          </div>

          <div className="input-container">
            <label className="label_head">Type of Bussiness</label><br />
            <select className="select"
                onChange={(e)=>props.handleData("bussiness_type", e.target.value)}
            >
                <option>Existing Bussiness</option>
                <option>New Bussiness</option>
            </select>
          </div>

          {/* <div className="input-container">
            <label className="label_head">Month</label><br />
            <select className="select" onChange={(e)=>props.handleData("month", e.target.value)}>
                <option>January</option>
                <option>February 2022</option>
                <option>March 2022</option>
                <option>April 2022</option>
                <option>May 2022</option>
                <option>June 2022</option>
                <option>July 2022</option>
                <option>August 2022</option>
            </select>
          </div> */}



          
          
          {/* <div className="input-container">
            <label className="label_head">Please select the event/occasion for which customer is looking for gifting solutions? </label>
            <input className="checkbox" type="checkbox"/>
            <label>Rewards and Recognition</label><br/>
            <input className="checkbox" type="checkbox"/>
            <label>Employee Engagement</label><br/>
            <input className="checkbox" type="checkbox"/>
            <label>Diwali</label><br/>
            <input className="checkbox" type="checkbox"/>
            <label>Joining</label><br/>
            <input className="checkbox" type="checkbox"/>
            <label>Events</label><br/>
            <input className="checkbox" type="checkbox"/>
            <label>Others</label>
          </div>
          
          <div className="input-container">
            <label>Does Customer know which product to buy</label>
            <select className="select">
                <option>Yes, Customer has sample product</option>
                <option>Yes, Customer want to view digital product catalog</option>
                <option>No, Customer wants to decide after viewing digital product catalog</option>
            </select>
          </div><br /> */}

          <div className="footer">
            <button className="next_btn btn1 btn btn-success" onClick={handleNext}>Next</button>
            {/* <progress className="progress_bar bar1" value="32" max="100"> </progress> */}
            {/* <span className="page page1">Page 1 of 18</span> */}
            <a className="clear_form form1" href="#">Clear form</a>
          </div>
        
        </form>
      );
    // }
  }
  
  export default Step1;
  