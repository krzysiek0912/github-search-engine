import React from 'react';

const User=({user})=>{
    const {login, avatar_url, html_url} = user;
    return(
        <li className="col-12 col-md-6 col-lg-3">
          <div className="cnt-block equal-hight" style={{height: '349px'}}>
            <figure><img src={avatar_url} className="img-responsive" alt={login}/></figure>
            <h3><a href={html_url}>{login}</a></h3>
            
            <ul className="follow-us clearfix">
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </li>
    )
}


export default User;