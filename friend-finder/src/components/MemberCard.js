import React, { Component } from 'react';

class MemberCard extends Component {
    render() {
        return (
            <div className='member-card'>
                {/* Info on other members to show */}
                <p>Picture:</p>
                <p>Name:</p>
                <p>Age:</p>
                <p>City:</p>
                <button>Match</button>
                <button>Move On</button>
            </div>
        )
    }
}

export default MemberCard;