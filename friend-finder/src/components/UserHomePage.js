import React from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import MemberCard from '../components/MemberCard';



import '../styles/UserHomePage.css';



class UserHomePage extends React.Component {
        state = {
            key: 'home',
        }
 
        instance = "userhomepage" ;        

componentDidMount(){

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
                       { // lets try and show their interests here 
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
                //Implement possuble search bar 
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
        friends: state.friends
    }
}

export default connect(mapStateToProps,{})(UserHomePage);
