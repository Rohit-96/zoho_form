import React, {useState, useCallback, useRef} from "react"; 
import 'bootstrap/dist/css/bootstrap.css';


const Step2 = ({step, onStepChange})=> {

    const checkboxRef = useRef();

    const [occasion, setOccasion] = useState()
    const [customer, setCustomer] = useState()
    const [productReference, setProductReference] = useState()
    const [productCatalog, setProductCatalog] = useState()
    // const [productCatalog, setProductCatalog] = useState()


    const handleChange = (e)=> {
        setOccasion(e.target.value)
        setCustomer(e.target.value)
        setProductReference(e.target.value)
        setProductCatalog(e.target.value)
        // setOccasion(checkboxRef.current.checked);
    }

    console.log(occasion)
    console.log(customer)
    console.log(productReference)
    console.log(productCatalog)
 
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
            <h4>Product Sample</h4>
            <p>Please mention if customer has shared a sample product which he/she wants</p>
        </div>

        <div className="input-container">
            <label className="label_head">Please select the event/occasion for which customer is looking for gifting solutions? </label>
            <input className="checkbox" type="checkbox" value="Rewards and Recognition" onChange={handleChange} ref={checkboxRef}/>
            <label>Rewards and Recognition</label><br/>
            <input className="checkbox" type="checkbox" value={"Employee Engagement"} onChange={handleChange}/>
            <label>Employee Engagement</label><br/>
            <input className="checkbox" type="checkbox" value={"Diwali"} onChange={handleChange}/>
            <label>Diwali</label><br/>
            <input className="checkbox" type="checkbox" value={"Joining"} onChange={handleChange}/>
            <label>Joining</label><br/>
            <input className="checkbox" type="checkbox" value={"Events"} onChange={handleChange}/>
            <label>Events</label><br/>
            <input className="checkbox" type="checkbox" value={"Others"} onChange={handleChange}/>
            <label>Others</label>
          </div>
          
          <div className="input-container">
            <label>Does Customer know which product to buy</label>
            <select className="select" onChange={handleChange}>
                <option>Yes, Customer has sample product</option>
                <option>Yes, Customer want to view digital product catalog</option>
                <option>No, Customer wants to decide after viewing digital product catalog</option>
            </select>
          </div>

        <div className="input-container">
            <label className="label_head">Did Customer share any reference of the Product</label><br />
            <input className="checkbox" type="checkbox" value={"Yes"} onChange={handleChange}/>
            <label>Yes</label><br />
            <input className="checkbox" type="checkbox" value={"No"} onChange={handleChange}/>
            <label>No</label><br />
            <input className="checkbox" type="checkbox" value={"Other"} onChange={handleChange}/>
            <label>Other</label>
        </div>         
          
        <div className="input-container">
            <label className="label_head">Do we have all the Products in Catalog which Customer is looking for</label><br />
            <input className="checkbox" type="checkbox" value={"Yes, all products available in product catalog"} onChange={handleChange}/>
            <label>Yes, all products available in product catalog</label><br />
            <input className="checkbox" type="checkbox" value={"No, only a few products are available in catalog"} onChange={handleChange}/>
            <label>No, only a few products are available in catalog</label><br />
            <input className="checkbox" type="checkbox" value={"No product is available in catalog."} onChange={handleChange}/>
            <label>No product is available in catalog.</label>
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
  
  export default Step2;
  