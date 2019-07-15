import React from 'react';
import Button from "react-bootstrap/Button"
import '../styles/MemberCard.css';

const MemberCard = props => {
     
        return (
            
                <div className="member-card">
                    <img src = {`${props.member.profileimage}`} alt="members profile picture" />
                    <h1>{props.member.firstName + " " + props.member.lastName} </h1>
                    <h2>{props.member.age}</h2>
                    <h2>{props.member.location}</h2>
                    <Button onClick = {(e) => {props.addToFriends(e,props.member.id)}}>Add to Friends</Button>
                </div>
        )
    }


export default MemberCard;

/*

            firstName: "John",
            lastName:"Smith",
            age:35,
            emailAddress:"email@email.com",
            gender:"male",
            phone:"555-555-5555",
            profileimage:'',
            catchPhrase:"Be all you can be",
            location:"New York",
            interestArray:["Sports", "Movies", "Dancing"] 




*/