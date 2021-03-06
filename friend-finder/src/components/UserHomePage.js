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
        userInterests: [{}],
        friends: []
    }

    instance = "userhomepage";


    componentDidMount() {

        this.props.fetchInterests()
        this.setState({
            user: this.props.user,
            interests: this.props.interests,
            userInterests: this.props.user.interests,
            friends: this.props.friends
        })
    }
    fetchUserInterestsHelper = (cb, id) => {
        cb(this.props.user.id, id)
    }

    addSelectedInterests = () => {
        if (this.state.selectedValues.length === 0) {
            alert("No interest to add, please select one.")
        } else {
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
                        <img src={`${this.props.user.profileimage}`} alt="user" />
                        <h1>Hello {this.props.user.firstName + " " + this.props.user.lastName}, lets make <span>Friends</span> !</h1>
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
                                            <Button className="interest-buttons" variant="secondary" onClick={() => this.onChange([])}>Clear Selection</Button>
                                            {
                                                this.props.user.interests && this.props.user.interests.map(interest => {
                                                    return <div className="interest-content">
                                                        <h3>{interest.name}</h3>
                                                        <button className="delete-interest-button" onClick={() => { this.deleteClickHandler(interest.id) }}>X</button>
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
