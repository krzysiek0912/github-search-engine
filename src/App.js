import React from 'react';
import UsersList from './components/UserList';
import './App.css';

class App extends React.Component {
  state = {
      searchText: '',
      users: []
    };
  callAPI =(searchText) =>{    
    const url = `https://api.github.com/search/users?q=${searchText}`;
    clearTimeout(this.timer); 
    this.timer = setTimeout(()=>fetch(url)
      .then(response => response.json())
      .then((responseJson) => { 
          if(responseJson.items){
            this.setState({users: responseJson.items})
          }else{
            this.setState({users: []})
          }
        }
      ), 400);      
  }
  onChangeHandle=({target})=> {
      const searchText = target.value;
      this.setState({searchText});
  }
  onKeyUpHandle=({target})=> { 
      const searchText = target.value;
      this.setState({searchText});
      this.callAPI(this.state.searchText);
      
  }

  
  onSubmit=(event)=> {
    event.preventDefault();
    const {searchText} = this.state;
    this.callAPI(searchText);
  }

  render() {
    const {onSubmit,onChangeHandle, onKeyUpHandle} = this;
    const {searchText, users}= this.state
    let renderUsers = false;
    if(users.length){
      renderUsers = true;
    }
    return (
      <div>
        <form onSubmit={onSubmit}>
          <input className="form-control form-control-lg" type="text" 
          id="searchText"
            onChange={onChangeHandle}
            onKeyUp={onKeyUpHandle}
            value={searchText} 
            placeholder="Search by user name"/>          
        </form>
        {renderUsers && <UsersList users={users}/>}
      </div>
    );
  }
}

export default App;
