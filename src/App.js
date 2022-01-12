import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Navigate, Route, Routes } from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header-component';
import {setCurrentUser} from './redux/users/user.action';
import { connect } from 'react-redux';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-sign-up-component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component{

    unsubscribeFromAuth = null;

    componentDidMount(){
      const {setCurrentUser} = this.props;

      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              })                  
            });          
        }else{
          setCurrentUser(userAuth);
        }
      });
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

    render (){
      return(
      <div>        
          <Header/>
          <Routes>
            <Route exact path='/' element={<Homepage/>}/>      
            <Route path='/shop' element={<ShopPage/>}/>      
            <Route path='/signin' element={
              <SignInWrapper currentUser={this.props.currentUser}>
                <SignInAndSignUpPage/>
              </SignInWrapper>
            }/>      
          </Routes>        
      </div>
      )
    };
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const SignInWrapper = ({ children, currentUser}) =>{
  return currentUser ? <Navigate to='/' replace/> : children;
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);