import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

//import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <main class="form-signin"> 
        <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
          <div class="form-floating">
              <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
              />
            </div>

            <div class="form-floating">
              <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
                label='password'
                required
              />
            </div>
            <div className='buttons'>
              <CustomButton className="w-100 btn btn-lg btn-primary bg-dark mb-3" type='submit'> Sign in </CustomButton>
              <CustomButton className="w-100 btn btn-lg btn-primary" onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </div>            
            <h5 className='mt-3'> Don't have an Account?  
            <Link to='/signup'> Create one </Link>
            </h5>
          </form>
        </div>
      </main>
    );
  }
}

export default SignIn;
