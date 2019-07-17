import React from 'react';
import Button from "react-bootstrap/Button"
import '../styles/MemberCard.css';





const MemberCard = props => {
    
        //determines what button to display depending on what Component is usind the Card

    var CardButton;
    if (props.cardInstance === "memberlist"){
       CardButton = <Button onClick = {(e) => {props.addToFriends(props.member)}}>Add to Friends</Button> 
    }else if (props.cardInstance === "userhomepage"){
        CardButton = <Button onClick = {function(e){return (e.preventDefault(), alert('You have sent a message to your friend'))}}>Message Friend</Button> 
     } 
    
        return (
            
                <div className="member-card">
                    <img src = {`${props.member.profileimage}`} alt="members profile" />
                    <h1>{props.member.firstName + " " + props.member.lastName} </h1>
                    <h2>{props.member.age}</h2>
                    <h2>{props.member.city}</h2>
                    <h2>{props.member.state}</h2>
                    {CardButton}
                    
                </div>
                
        )
    }


export default MemberCard;
