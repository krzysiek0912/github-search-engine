import React from 'react';
import User from './User';
class UsersList extends React.Component {
  get users() {
    return this.props.users.map(user => <User key={user.id} user={user}/>);
  }

  render() {
    return (    
    <section className="our-webcoderskull padding-lg">
        <div className="container">
            <div className="row heading heading-icon">
                <h2>GitHub Users</h2>
            </div>
            <ul className="row">
                {this.users}
            </ul> 
        </div>
    </section> 
    );
  }
}

export default UsersList;