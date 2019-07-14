import React, { Component } from 'react';
import MemberCard from './MemberCard';
import { connect } from 'react-redux';


class MemberList extends Component {


    render() {
        return (
            <>
                    <div className= "members-list-wrapper">
                            {
                                this.props.members.map(member => {
                                   return  <MemberCard member= {member} />
                                })
                            }
                    
                    </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        members : state.members
    }
}

export default connect(mapStateToProps, {})(MemberList);