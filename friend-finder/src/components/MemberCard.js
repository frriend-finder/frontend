import React, { Component } from 'react';

class MemberCard extends Component {
    render() {
        return (
            <div className='member-card'>
                {/* Info on other members to show */}
                <p>Picture: {this.props.member.picture}</p>
                <p>{`Name: ${this.props.member.firstName} ${this.props.member.lastName}`}</p>
                <p>Age: {this.props.member.age}</p>
                <p>City: {this.props.member.city}</p>
                <button>Match</button>
                <button>Move On</button>
            </div>
        )
    }
}

export default MemberCard;