import React from 'react';
import {connect} from 'react-redux';
import {loginUser} from './redux/reducer';
import {getUser} from './redux/userReducer';
import './App.css';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <h1>{props.reducer.user.name}</h1>
      <button onClick={() => props.loginUser({name: 'Grayson'})}>Login User</button>
      <h1>{props.userReducer.user.name}</h1>
      <button onClick={() => props.getUser()}>Random User</button>
    </div>
  );
}

const mapStateToProps = (reduxState) => {
  return reduxState;
  //return {reduxState.user, reduxState.cart}
}

// pass as second argument to connect
// const mapDispatchToProps = {
//   loginUser
// }

export default connect(mapStateToProps, {loginUser, getUser})(App);
