import React, { Component } from 'react';
import MemberCard from './MemberCard';
import { connect } from 'react-redux';
import { addToFriends } from '../actions';

import '../styles/MembersList.css'

class MemberList extends Component {

    state = {
        members: this.props.members
    }


addToFriends = (e, id) => {
        e.preventDefault();
        const member = this.props.members.filter(member =>{
                return member.id === id  
        })

        this.props.addToFriends(member);
            
}

    render() {
        return (
            <>
                    <div className= "members-list-wrapper">
                            {
                                this.props.members.map(member => {
                                    return  <MemberCard member= {member} key={member.id} addToFriends = {this.addToFriends}/>
                                })
                            }
                    
                    </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        members : state.members,
    }
}

export default connect(mapStateToProps, {addToFriends})(MemberList);