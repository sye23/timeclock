import * as React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as utils from '../../utils/utilFunctions';
import {SignUpState} from '../../types/signUpState';

export default class AdminLogin extends React.Component<any,SignUpState>{
    constructor(){
        super();
        this.state = {
            success:{
                isSubmitted:false
            },
            user:{
                firstName: '',
                lastName: '',
                companyName: '',
                email: '',
                password:'',
                confirmPasword:''
            },
            error:{
                firstName: false,
                lastName: false,
                companyName: false,
                email: false,
                password:false,
                confirmPasword:false
            },
            errorMsg:{
                firstName: '',
                lastName: '',
                companyName: '',
                email: '',
                password:'',
                confirmPasword:''
            }
        }
    }

    changeHandler = (e: any) => {
        let state = Object.assign({}, this.state);
        state.user[e.target.name] = e.target.value;
        this.setState(state);
    }

    checkForErrors = (obj:{}) =>{
        for (let i in obj) {
            if (obj[i] === true) return false;
        }
        return true;
    }
    
    getAllErrorMsgs = (obj:{}) =>{
        let result:any = [];
        for (let key in obj) {
          if( obj.hasOwnProperty(key) ) {
            result.push(obj[key]);
          } 
        }              
        return result;
    }
      
    formValidation = () =>{
        let state =Object.assign({}, this.state);
        let formIsValid = true;
        let password = utils.isOkPass(state.user.password);

        if(!state.user.firstName){
            formIsValid = false;
            state.errorMsg.firstName = 'First Name is Required';
            state.error.firstName = true;
        } else{
            formIsValid = true;
            state.error.firstName = false;
            state.errorMsg.firstName = '';
        }
        if(!state.user.lastName){
            formIsValid = false;
            state.errorMsg.lastName = 'Last Name is Required';
            state.error.lastName = true;
        } else{
            formIsValid = true;
            state.error.lastName = false;
            state.errorMsg.lastName = '';
        }
        if(!state.user.companyName){
            formIsValid = false;
            state.errorMsg.companyName = 'Company Name is Required';
            state.error.companyName = true;
        } else{
            formIsValid = true;
            state.error.companyName = false;
            state.errorMsg.companyName = '';
        }
        if(!state.user.email || !utils.checkEmail(state.user.email)){
            formIsValid = false;
            state.errorMsg.email = 'Enter valid email';
            state.error.email = true;
        } else{
            formIsValid = true;
            state.error.email = false;
            state.errorMsg.email = '';
        }
        if(!state.user.password || !password.result){
            formIsValid = false;
            state.errorMsg.password = password.error;
            state.error.password = true;
        }else{
            formIsValid = true;
            state.error.password = false;
            state.errorMsg.password = '';
        }
        if(!state.user.confirmPasword || (state.user.confirmPasword !== state.user.password)){
            formIsValid = false;
            state.errorMsg.confirmPasword = 'Passwords Do not Match';
            state.error.confirmPasword = true;
        }else{
            formIsValid = true;
            state.error.confirmPasword = false;
            state.errorMsg.confirmPasword = '';
        }

        this.setState(state);
        return formIsValid;
    }
    
    
    submit = () => {
        let state = Object.assign({}, this.state);
        this.formValidation()
        if(this.formValidation() && this.checkForErrors(this.state.error)){
            state.success.isSubmitted = true;
        }else{
            state.success.isSubmitted = false;
        }
    }

    render(){
        let state = Object.assign({}, this.state);
        let errorMsgArray = this.getAllErrorMsgs(state.errorMsg).filter(Boolean);
        errorMsgArray
        let render;
        if(!this.state.success.isSubmitted){
            render= <div className='login-form'>
            <style>{`
              body > div,
              body > div > div,
              body > div > div > div.login-form {
                height: 100%;
              }
            `}
            </style>
            <h1 className='mainHeader'>Sign Up Form</h1>
            <Grid
              textAlign='center'
              style={{ height: '100%' }}
              verticalAlign='middle'
            >
              <Grid.Column style={{ maxWidth: 450 }}>
                
                <Form className='signUpForm' error={!this.checkForErrors(this.state.error)} size='large'>
                  <Message
                      floating
                      size='mini'
                      error
                      content={errorMsgArray.map((msg:string)=><li className='errorMsgsLi'>{msg}</li>)}
                  />
                  <Segment stacked>
                    <Header as='h2' color='teal' textAlign='center'>
                    {' '}Create An Account
                    </Header>
                  <Form.Group widths='equal'>    
                  <Form.Input 
                      error = {this.state.error.firstName}
                      fluid
                      icon='user'
                      iconPosition='left'
                      name='firstName' 
                      value={this.state.user.firstName} 
                      label='First Name'
                      className='signUpLabel' 
                      placeholder='First Name' 
                      onChange={this.changeHandler}
                  />
                  <Form.Input 
                      error = {this.state.error.lastName}
                      fluid
                      icon='user'
                      iconPosition='left'
                      name='lastName'
                      value={this.state.user.lastName} 
                      label='Last Name'
                      className='signUpLabel'  
                      placeholder='Last Name'
                      onChange={this.changeHandler}
                  />
                  </Form.Group>
                  <Form.Input
                      error = {this.state.error.companyName}
                      fluid
                      icon='building'
                      iconPosition='left'
                      name='companyName'
                      value={this.state.user.companyName}
                      label='Company Name'
                      className='signUpLabel' 
                      placeholder='Company Name'
                      onChange={this.changeHandler}
                    />
                    <Form.Input
                      error = {this.state.error.email}
                      fluid
                      icon='at'
                      iconPosition='left'
                      name='email'
                      value={this.state.user.email}
                      label='Email'
                      className='signUpLabel' 
                      placeholder='E-mail address'
                      onChange={this.changeHandler}
                    />
                    <Form.Input
                      error = {this.state.error.password}
                      fluid
                      icon='lock'
                      iconPosition='left'
                      name='password'
                      value={this.state.user.password}
                      label='Password'
                      className='signUpLabel' 
                      placeholder='Password'
                      type='password'
                      onChange={this.changeHandler}
                    />
                    <Form.Input
                      error = {this.state.error.confirmPasword}
                      fluid
                      icon='lock'
                      iconPosition='left'
                      name='confirmPasword'
                      value={this.state.user.confirmPasword}
                      label='Confim Password'
                      className='signUpLabel' 
                      placeholder='Confirm Password'
                      type='password'
                      onChange={this.changeHandler}
                    />
        
                    <Button color='teal' fluid size='large' onClick={this.submit}>Submit</Button>
                  </Segment>
                </Form>
                <Link to='/adminLogin'><Button color='orange' floated='right' size='small' >Go Back</Button></Link>
              </Grid.Column>
            </Grid>
          </div>
        }else{
            render = 
                <div>
                    <Grid
                        textAlign='center'
                        style={{ height: '100%' }}
                        verticalAlign='middle'
                    >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='grey' textAlign='center'>
                            You Have Successfully Signed Up.<br/> You Need To Confirm Your Email To Continue.<br/>
                            You Will Receive An Email Shortly.<br/><small>(Make sure to check your spam folder.)</small> 
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