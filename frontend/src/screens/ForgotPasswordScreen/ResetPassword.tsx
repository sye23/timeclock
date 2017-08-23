import * as React from 'react';
import {Button,Form,Grid,Header,Image,Message,Segment} from 'semantic-ui-react';
import * as utils from '../../utils/utilFunctions';
import { Link } from 'react-router-dom';
import {ResetPasswordState} from '../../types/resetPasswordState';

export default class ResetPassword extends React.Component < any, ResetPasswordState > {

    constructor(){
        super();
        this.state = {
            user:{
                password:'',
                confirmPasword:''
            },
            error:{
                password:false,
                confirmPasword:false
            },
            errorMsg:{
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
        this.formValidation()
        if(this.formValidation() && this.checkForErrors(this.state.error)){
            alert("Form submitted");
        }else{
            alert("Form has errors.")
        }
    }

  render() {
    let state = Object.assign({}, this.state);
    let errorMsgArray = this.getAllErrorMsgs(state.errorMsg).filter(Boolean);
    errorMsgArray
    
    return (
      <div className='login-form'>
        <style>
          {
            ` body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
             `
          }</style>

          <h1 className='mainHeader'>Time Clock<h2>Reset Password</h2></h1>
        <Grid
          textAlign='center'
          style={{
          height: '100%'
        }}
          verticalAlign='middle'>
          <Grid.Column style={{
            maxWidth: 450
          }}>
          
            <Form size='large' error={!this.checkForErrors(this.state.error)}>
            <Message
                floating
                size='mini'
                error
                content={errorMsgArray.map((msg:string)=><li className='errorMsgsLi'>{msg}</li>)}
            />
              <Segment stacked>
                <Header as='h2' color='teal' textAlign='center'>
                  {' '}Reset Password
                </Header>
              
                <Form.Input
                    error = {this.state.error.password}
                    fluid
                    icon='lock'
                    iconPosition='left'
                    name='password'
                    value={this.state.user.password}
                    label='New Password'
                    className='signUpLabel' 
                    placeholder={(!this.state.error.password)?'Password':this.state.errorMsg.password}
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
                    placeholder={(!this.state.error.confirmPasword)?'Confirm Password':this.state.errorMsg.confirmPasword}
                    type='password'
                    onChange={this.changeHandler}
                />
                <Button
                  color='teal' 
                  fluid size='large' 
                  onClick={this.submit}>
                  Reset
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>

    )
  }

}