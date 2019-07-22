import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MemberCard from '../components/MemberCard';
import  Select  from "react-dropdown-select";
import { fetchInterests , fetchUserInterests } from '../actions';

import '../styles/UserHomePage.css';

class UserHomePage extends React.Component {
        state = {
               key: 'home',
               selectValues: [],
        }
 
        instance = "userhomepage" ;  
        parsedUserInterests = [];      

componentDidMount(){
    this.props.fetchInterests()
    this.props.fetchUserInterests(this.props.user.id)
    setTimeout(()=>{this.parseInterestsToString()}, 2000)
}


 parseInterestsToString = () => { // this compares the interests pulled in from the db to the users intersts and returns a string rather than a number.
    for(let i=0; i< this.props.userInterests.length; i++){
            for(let j=0; j< this.props.interests.length; j++){
                 if (this.props.userInterests[i] === this.props.interests[j].id){         
                        this.parsedUserInterests.push(this.props.interests[j].name)
                 }
            }
    }
}
setValues = (values) => {
    this.setState({
        selectValues: values
    })
}


render(){

    return(
        <>
           <div className="user-info-wrapper">
                <div className="user-header-wrapper">
                    <img src={`${this.props.user.profileimage}`} alt="user" />
                    <h1>Hello { this.props.user.firstName + " " +  this.props.user.lastName }, lets make <span>Friends</span> !</h1>  
                </div>
         </div> 

        <div className= "tab-wrapper">
                <Tabs
                activeKey={this.state.key}
                onSelect={key => this.setState({ key })}
                 >

                <Tab eventKey="My Profile" title="My Profile">
                  <div className= "tab-content-wrapper">
                        <p><span className="label-text">Name: </span> {this.props.user.firstName + " " + this.props.user.lastName}</p>
                        <hr/>
                        <p><span className="label-text">Your catch phrase: </span> {this.props.user.catchPhrase}</p>
                        <hr/>
                        <p><span className="label-text">Age: </span> {this.props.user.age}</p>
                        <hr/>
                        <p><span className="label-text">Gender: </span> {this.props.user.gender}</p>
                        <hr/>
                        <p><span className="label-text">Email: </span> {this.props.user.emailAddress}</p>
                        <hr/>
                        <p><span className="label-text">Phone: </span> {this.props.user.phone}</p>
                        <hr/>
                        <p><span className="label-text">Address: </span> {this.props.user.address}</p>
                        <hr/>
                        <p><span className="label-text">City: </span> {this.props.user.city}</p>
                        <hr/>
                        <p><span className="label-text">State: </span> {this.props.user.state}</p>
                        <hr/>
                        <p><span className="label-text">Zip: </span> {this.props.user.zip}</p>
                  </div>
                </Tab>

                <Tab eventKey="Your Interests" title="Your Interests"> 
                    <div className= "tab-content-wrapper">
                      <h2>Here are your interests:</h2>
                     { /* <Button>Add Interest</Button> */ console.log("options:",this.options, this.state.selectValues) }
                    <Select
                    multi
                    placeholder="Select an Interest..."
                    loading ={false}
                    dropdownHeight = "300px"
                    labelField = "name"
                    valueField="id"
                    options={this.props.interests}
                    onChange={(values) => this.setValues(values)}
                        />
                        
                        {
                           //show the users intrest and possibly allow them to make changes here to them
                            this.parsedUserInterests.map(interest => {
                                  return <div className ="interest-content">
                                        <h3>{interest}</h3>
                                        { /*<button className="delete-interest-button">X</button> {Implement if we want to DELETE interests*/}
                                    </div>
                            })
                        } 
                    </div>
                </Tab>

                <Tab eventKey="Friends" title="Friends">
                    <div className= "tab-content-wrapper">
                        <h2>My Friends:</h2> 
                     <div className="members-list-wrapper">
                      {
                           this.props.friends.map( friend => {
                                return <MemberCard member={friend} cardInstance = {this.instance} key={friend.id}/>
                           }) 

                      }
               { 
                //Implement possible search bar 
             }
            </div>
                </div>
                </Tab>

                <Tab eventKey="Messages" title="Messages" >
                <div className= "tab-content-wrapper">
                Here is some info in Messages
                </div>
                </Tab>

              </Tabs>
         </div>            
        </>
    )
}

}

const mapStateToProps = state => { 
    
    return  {
        user: state.user,
        friends: state.friends,
        interests: state.interests,
        userInterests: state.userInterests
    }
}

export default connect(mapStateToProps,{fetchInterests, fetchUserInterests })(UserHomePage);
