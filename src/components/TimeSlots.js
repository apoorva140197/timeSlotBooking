import { useState } from 'react';
import '../App.css';
function TimeSlots(props){
   return (
        <div className="timeSlots">
            <p>Please select a time slot for booking - </p>
            <div className="slotDiv">
                {props && props.timeSlot.map((dt,ind)=>{
                    return(
                        <div className="selectSlot" 
                        style={dt.isClicked? {border:"1px solid red",background:"red",color:"#FFFFFF"}
                                :{}} 
                        onClick={()=>{
                            props.handleSelectedTime(ind+1);
                        }}>
                            {dt.startTime} - {dt.endTime}
                        </div>)
                    
                })}
            </div>
        </div>
      );
  }

export default TimeSlots;
