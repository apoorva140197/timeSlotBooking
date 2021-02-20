import CONSTANTS from "./constant";
const initialState = {
    timeSlot:[
        {id:1,startTime:"9am",endTime:"10am",isClicked:0,fname:"",lname:"",phone:""},
        {id:2,startTime:"10am",endTime:"11am",isClicked:0,fname:"",lname:"",phone:""},
        {id:3,startTime:"11am",endTime:"12pm",isClicked:0,fname:"",lname:"",phone:""},
        {id:4,startTime:"12am",endTime:"1pm",isClicked:0,fname:"",lname:"",phone:""},
        {id:5,startTime:"1pm",endTime:"2pm",isClicked:0,fname:"",lname:"",phone:""},
        {id:6,startTime:"2pm",endTime:"3pm",isClicked:0,fname:"",lname:"",phone:""},
        {id:7,startTime:"3pm",endTime:"4pm",isClicked:0,fname:"",lname:"",phone:""},
        {id:8,startTime:"4pm",endTime:"5pm",isClicked:0,fname:"",lname:"",phone:""}, 
    ]
};

const timeSlotBooking = (state, action) => {
    return { ...state, timeSlot: action.payload };
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.TIME_SLOT:
            return timeSlotBooking(state, action);
        
        default:
            return state;
    }
};
export default reducer;
