import React, { Component } from 'react';
import MemberCard from './MemberCard';
import { connect } from 'react-redux';
import { addToFriends } from '../actions';

import '../styles/MembersList.css'


class MemberList extends Component {

    state = {
        members: [],
        friends: []
    }

  instance = "memberlist" ;
   

componentDidMount(){
    this.setState({
        members: this.props.members,
        friends: this.props.friends
    })
}


addToFriends = (member) => {
    // Check our state to see if the friend was already added
    const currentFriend = this.state.friends.find(f => f.id === member.id)
    if(currentFriend){
        alert('Friend already exists')
    } else {
        this.props.addToFriends(member) 
        this.setState({friends: [...this.state.friends, member]}) // to make this work you need to implement this here or else the redux state will not update the state here as the component never reloads just with above Redux state update
        alert(`${member.firstName + " " + member.lastName} has been added to your Friends List!`)
    }
}


    render() {
        return (
            <>
                    <div className = "members-list-header" >
                    <h1>Members List</h1>
                    <h2>Lets see who we can meet!</h2>
                
                    </div>
                    <hr/>
                    <div className= "members-list-wrapper">
                   
                            {

                                this.state.members.map(member => {
                                   return  <MemberCard member= {member} key={member.id} addToFriends = {this.addToFriends} cardInstance = {this.instance}/>

                                })
                            }
                    
                    </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        members: state.members,
        friends: state.friends
    }
}

export default connect(mapStateToProps, {addToFriends})(MemberList);