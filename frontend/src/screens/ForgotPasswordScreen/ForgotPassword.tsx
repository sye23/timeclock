import * as React from 'react';
import {Button,Form,Grid,Header,Image,Message,Segment} from 'semantic-ui-react';
import * as utils from '../../utils/utilFunctions';
import {ForgotPasswordState} from '../../types/forgotPasswordState';
import { Link } from 'react-router-dom';


export default class ForgotPassword extends React.Component < any, ForgotPasswordState > {

  constructor() {
    super();
    this.state = {
      success:{
        isSubmitted: false
      },
      user:{
        email:''
      },
      errors:{
        errorMsg: '',
        error: false
      }
    }
  }

changeHandler = (e: any) => {
  let state = Object.assign({}, this.state);
  state.user[e.target.name] = e.target.value;
  this.setState(state);
}

formValidation = () =>{
  let state =Object.assign({}, this.state);
  let formIsValid = true;

  if(!state.user.email || !utils.checkEmail(state.user.email)){
    formIsValid = false;
    state.errors.errorMsg = 'Enter valid email';
    state.errors.error = true;
  } else{
    formIsValid = true;
    state.errors.error = false;
    state.errors.errorMsg = '';
  }
  this.setState(state);
  return formIsValid;
}


submit = () => {
  
  let state = Object.assign({}, this.state);
  this.formValidation()
  if(this.formValidation()){
      state.success.isSubmitted = true;
  }else{
      state.success.isSubmitted = false;
  }
}

  render() {
    let render;

    if(!this.state.success.isSubmitted){
      render=
        <div className='login-form'>
          <style>
            {
              ` body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
              `
            }
            </style>

          <h1 className='mainHeader'>Time Clock<h2>Forgot Password</h2></h1>
          
        <Grid
          textAlign='center'
          style={{
          height: '100%'
        }}
          verticalAlign='middle'>
          <Grid.Column style={{
            maxWidth: 450
          }}>
          
            <Form size='large'>  
            
              <Segment stacked>
                <Header as='h2' color='teal' textAlign='center'>
                  {' '}Enter Email To Reset Password
                </Header>
              
                <Form.Input
                  error = {this.state.errors.error}                  
                  fluid
                  icon='at'
                  iconPosition='left'
                  name='email'
                  value={this.state.user.email}
                  onChange={this.changeHandler}
                  placeholder={(!this.state.errors.error)?'E-mail address': this.state.errors.errorMsg}
                />
                <Button
                  color='teal' 
                  fluid size='large' 
                  onClick={this.submit}>
                  Submit
                </Button>
              </Segment>
            </Form>
            <Message>
              <Link to='/adminLogin'>Back To Admin Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    }else{
      render=
      <div className='login-form'>
        <style>
        {
          ` body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
          `
        }
        </style>
      <h1 className='mainHeader'>Time Clock<h2>Forgot Password</h2></h1>  
        <Grid
          textAlign='center'
          style={{
          height: '100%'
        }}
          verticalAlign='middle'>
          <Grid.Column style={{
            maxWidth: 450
          }}> 
            <Header as='h2' color='teal' textAlign='center'>
              An Email Has Been Sent. Follow The Link To Reset Your Password.
            </Header>
          </Grid.Column>
        </Grid>
      </div>
    }
    
    return (
        <div>
          {render}
        </div>

    )
  }

}