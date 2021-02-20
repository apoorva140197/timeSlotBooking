import '../App.css';
import {useState} from "react";
import {checkNonEmpty} from "../validation";
import TimeSlots from './TimeSlots';
function Form(props) {
      const[firstName,setFirstName] =useState(props.timeSlot[props.isTimeSelected-1].fname);
      const[lastName,setLastName] =useState(props.timeSlot[props.isTimeSelected-1].lname);
      const[phone,setPhoneNumber] =useState(props.timeSlot[props.isTimeSelected-1].phone);
      const [errorMsg,setErrorMsg] =useState(false);
     
      return (
        <div className="formPage">
          {errorMsg ? <p className="errorMsg">FirstName ,LastName cannot be empty . Phone Number should not be less than 10 digits</p>:null}
          <input type="text" placeholder="Enter First Name" className="inputField"
                 value={firstName} 
                 onChange={(e)=>{setFirstName(e.target.value)}} 
          />
          <input type="text" placeholder="Enter Last Name" className="inputField"
                  value={lastName}    
                  onChange={(e)=>{setLastName(e.target.value)}} 
          />
          <input type="number" placeholder="Enter Phone Number" className="inputField"
                    value={phone} 
                    onChange={(e)=>{setPhoneNumber(e.target.value)}}   
          />
          <div className="buttonDiv">
              <button className="buttonDiv-primary" 
                      onClick={()=>{
                        props.handleSelectedTime(0)
                      }}>
                 Cancel
              </button>
              <button className="buttonDiv-secondary" 
                      onClick={()=>{
                        const valid=checkNonEmpty(firstName,lastName,phone);
                        if(valid){
                          props.handleFormDetails(firstName,lastName,phone);
                        }
                        else{
                          setErrorMsg(true);
                        }
                      }}
              >
                  Save
              </button>
          </div>
        </div>
      );
  }

export default Form;
