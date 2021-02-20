import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import digi from "./assets/digi.png";
import TimeSlots from './components/TimeSlots';
import Form from './components/Form';
import { connect } from "react-redux";
import * as actions from "./store/action";
class App extends Component {
  state={
      isTimeSelected:0,
      arrNew:[]
  }

 
  handleSelectedTime=(id)=>{
    this.setState({isTimeSelected:id})
  }

  handleFormDetails=(fname,lname,phone)=>{
    let newArr=this.props.timeSlot.map((dt,ind)=>(
      dt.id==this.state.isTimeSelected?
       { ...dt,isClicked:1,
        fname:fname,
        lname:lname,
        phone:phone}:dt
    ))
     this.setState({arrNew:newArr},()=>{
        this.props.timeSlotAction(this.state.arrNew)
         this.handleSelectedTime(0);
      })
  }



  render(){
    let {isTimeSelected} =this.state;
    let {timeSlotAction} =this.props;
      return (
        <div className="App">
          <div className="App-header">
            <img src={digi} alt=""/>
          </div>
          {isTimeSelected==0 ? 
          <TimeSlots handleSelectedTime={this.handleSelectedTime}
                     timeSlotAction={timeSlotAction}
                     timeSlot={this.props.timeSlot}
                    
          />
          :
          <Form handleSelectedTime={this.handleSelectedTime}
                handleFormDetails={this.handleFormDetails}
                timeSlotAction={timeSlotAction}
                timeSlot={this.props.timeSlot}
                isTimeSelected={isTimeSelected}
          />
          }
        </div>
      );
  }
}

function mapStateToProps(state){
  return{
    timeSlot: state && state.timeSlot
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    timeSlotAction : (data) =>{dispatch(actions.timeSlotAction(data))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
