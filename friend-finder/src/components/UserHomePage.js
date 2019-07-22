import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MemberCard from '../components/MemberCard';
import Select from "react-dropdown-select";
import Loader from './Loader';
import { fetchInterests, fetchUserInterests, addUserInterest, deleteUserInterest, fetchUser } from '../actions';

import '../styles/UserHomePage.css';

class UserHomePage extends React.Component {
    state = {
        key: 'My Profile',
        selectedValues: [],
        parsedUserInterests: [],
        user: {},
        interests: [],
        userInterests: [],
        friends:[]
    }

    instance = "userhomepage";
   

   componentDidMount(){
      // this.props.fetchUser(7)
       this.props.fetchInterests()
       setTimeout(()=> {
       this.setState({
            user: {...this.props.user},
            interests: this.props.interests,
            userInterests: this.props.user.interests,
            friends: this.props.friends
       })},1000)
       

       setTimeout(()=>{
            this.setState({
                parsedUserInterests: this.parseInterestsToString()
            })
       },3000)
       setTimeout(()=>{console.log(this.state.user, this.state.userInterests)},3000)
    }

    fetchUserInterestsHelper = (cb, id)=>{
        cb(this.state.user.id, id)

        setTimeout(()=>
        this.props.fetchUser(this.state.user.id),2000)

        setTimeout(() =>  {
        this.setState({userInterests: this.props.user.interests})
        console.log(this.props.user.interests)},3000)
       
        setTimeout(()=> this.setState({
            parsedUserInterests: this.parseInterestsToString()
       }),3000) 
    }

    parseInterestsToString = () => { 
    // this compares the interests pulled in from the db to the users intersts and returns a string rather than a number.
        const localarray = []
        for (let i = 0; i < this.state.userInterests.length; i++) {
            for (let j = 0; j < this.state.interests.length; j++) {
                if (this.state.userInterests[i] === this.state.interests[j].name) {
                         localarray.push(this.state.interests[j])
                }
            }
        }
        return localarray
    }
   
    addSelectedInterests = () => {
        if (this.state.selectedValues.length === 0) {
            alert("No interest to add, please select one.")
        } else{ 
            const interestID = this.state.interests.find(interest => {
                return interest.name === this.state.selectedValues[0].name
        })
        this.onChange([])
        this.fetchUserInterestsHelper(this.props.addUserInterest, interestID.id)
        }
    }

    deleteClickHandler = (id) => {
        this.fetchUserInterestsHelper(this.props.deleteUserInterest, id)
     }
 
    onChange = (values) => {
        this.setState({
            selectedValues: values
        })
    }



    render() {

        return (
            <>
                <div className="user-info-wrapper">
                    <div className="user-header-wrapper">
                        <img src={`${this.state.user.profileimage}`} alt="user" />
                        <h1>Hello {this.state.user.firstName + " " + this.state.user.lastName}, lets make <span>Friends</span> !</h1>
                    </div>
                </div>

                <div className="tab-wrapper">
                    <Tabs
                        activeKey={this.state.key}
                        onSelect={key => this.setState({ key })}
                    >

                        <Tab eventKey="My Profile" title="My Profile">
                            <div className="tab-content-wrapper">
                                <p><span className="label-text">Name: </span> {this.props.user.firstName + " " + this.props.user.lastName}</p>
                                <hr />
                                <p><span className="label-text">Your catch phrase: </span> {this.props.user.catchPhrase}</p>
                                <hr />
                                <p><span className="label-text">Age: </span> {this.props.user.age}</p>
                                <hr />
                                <p><span className="label-text">Gender: </span> {this.props.user.gender}</p>
                                <hr />
                                <p><span className="label-text">Email: </span> {this.props.user.emailAddress}</p>
                                <hr />
                                <p><span className="label-text">Phone: </span> {this.props.user.phone}</p>
                                <hr />
                                <p><span className="label-text">Address: </span> {this.props.user.address}</p>
                                <hr />
                                <p><span className="label-text">City: </span> {this.props.user.city}</p>
                                <hr />
                                <p><span className="label-text">State: </span> {this.props.user.state}</p>
                                <hr />
                                <p><span className="label-text">Zip: </span> {this.props.user.zip}</p>
                            </div>
                        </Tab>

                        <Tab eventKey="Interests" title="Interests">
                            <div className="tab-content-wrapper">
                                {
                                    this.props.isFetchingUserInterests ? <Loader /> :
                                        <>
                                            <h2>Here are your interests:</h2>

                                            <Select
                                                className="dropdown-select"
                                                multi
                                                placeholder="Select an Interest..."
                                                loading={false}
                                                dropdownHeight="300px"
                                                labelField="name"
                                                valueField="id"
                                                options={this.state.interests}
                                                onChange={(value) => {
                                                    this.onChange(value)
                                                }}
                                                values={[...this.state.selectedValues]}
                                            />
                                            <Button className="interest-buttons" onClick={() => { this.addSelectedInterests() }}>Add Interest</Button> 
                                            <Button  className="interest-buttons" variant="secondary" onClick={() => this.onChange([])}>Clear Selection</Button>
                                            {
                                                this.state.parsedUserInterests.map(interest => {
                                                return <div className="interest-content">
                                                        <h3>{interest.name}</h3>
                                                        <button className="delete-interest-button" onClick={()=>{this.deleteClickHandler(interest.id)}}>X</button> 
                                                    </div>
                                                })
                                            }
                                        </>
                                }
                            </div>
                        </Tab>

                        <Tab eventKey="Friends" title="Friends">
                            <div className="tab-content-wrapper">
                                <h2>My Friends:</h2>
                                <div className="members-list-wrapper">
                                    {
                                        this.state.friends.map(friend => {
                                            return <MemberCard member={friend} cardInstance={this.instance} key={friend.id} />
                                        })
                                    }
                                  
                                </div>
                            </div>
                        </Tab>

                        <Tab eventKey="Messages" title="Messages" >
                            <div className="tab-content-wrapper">
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

    return {
        user: state.user,
        friends: state.friends,
        interests: state.interests,
        userInterests: state.userInterests,
        isFetchingUserInterests: state.isFetchingUserInterests
    }
}

export default connect(mapStateToProps, { fetchInterests, fetchUserInterests, addUserInterest, deleteUserInterest, fetchUser })(UserHomePage);
