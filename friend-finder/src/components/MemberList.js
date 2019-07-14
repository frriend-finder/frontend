import React, { Component } from 'react';
import MemberCard from './MemberCard';

class MemberList extends Component {
    state = {
        members: [
            {
                id: 1,
                firstName: 'Joe',
                lastName: 'Doe',
                age: '21',
                city: 'Los Angeles',
                picture: 'Insert Pic Here'
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Doe',
                age: '21',
                city: 'San Jose',
                picture: 'Insert Pic Here'
            }
        ]
    }
    render() {
        return (
            <div className='member-list'>
                {/* Change 'state' to 'props' when importing the real data */}
                {this.state.members.map(member => (
                    <MemberCard key={member.id} member={member} />
                ))}
            </div>
        )
    }
}

export default MemberList;