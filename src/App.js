import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ShopPage from './components/shop/shop.component';
import Header from './components/header/header-component';
import './App.css';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-sign-up-component';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser:null
    }
  }

    unsubscribeFromAuth = null;

    componentDidMount(){
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        if(userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            this.setState
              (
                {
                currentUser : 
                  {
                    id: snapShot.id,
                    ...snapShot.data()
                  }
                }
            )
          })
        }else{
          this.setState({currentUser: userAuth})
        }
      });
    }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }

    render (){
      return(
      <div>
        <Router>
          <Header currentUser={this.state.currentUser}/>
          <Routes>
            <Route exact path='/' element={<Homepage/>}/>      
            <Route path='/shop' element={<ShopPage/>}/>      
            <Route path='/signin' element={<SignInAndSignUpPage/>}/>      
          </Routes>
        </Router>
      </div>
      )
    };
}

export default App;