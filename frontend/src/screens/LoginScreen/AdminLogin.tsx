import * as React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as utils from '../../utils/utilFunctions';
import {AdminLoginState} from '../../types/adminLoginState';

export default class AdminLogin extends React.Component<any,AdminLoginState>{
    constructor(){
        super();
        this.state = {
            user:{
                email: '',
                password:''
            }, 
            error:{
                email:false,
                password: false
            },
            errorMsg:{
                email:'',
                password: ''
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
            state.errorMsg.email = 'Enter valid email';
            state.error.email = true;
        } else{
            formIsValid = true;
            state.error.email = false;
            state.errorMsg.email = '';
        }

        if(!state.user.password){
            formIsValid = false;
            state.errorMsg.password = 'Password is required';
            state.error.password = true;
        } else{
            formIsValid = true;
            state.error.password = false;
            state.errorMsg.password = '';
        }

        this.setState(state);
        return formIsValid;
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
    
    
    submit = () => {
        this.formValidation()
        if(this.formValidation() && this.checkForErrors(this.state.error)){
            alert("Form submitted");
        }else{
            alert("Form has errors.")
        }
    }

    render(){

        let state = Object.assign({}, this.state);
        let errorMsgArray = this.getAllErrorMsgs(state.errorMsg).filter(Boolean);
        errorMsgArray
        return (
            <div className='login-form'>
              <style>{`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                  height: 100%;
                }
              `}</style>
              <h1 className='mainHeader'>Administrator Login</h1>
              <Grid
                textAlign='center'
                style={{ height: '100%' }}
                verticalAlign='middle'
              >
                <Grid.Column style={{ maxWidth: 450 }}>
                  
                  <Form error={!this.checkForErrors(this.state.error)} size='large'>
                    <Message
                        floating
                        size='mini'
                        error
                        content={errorMsgArray.map((msg:string)=><li className='errorMsgsLi'>{msg}</li>)}
                    />
                  
                    <Segment stacked>
                    <Header as='h2' color='teal' textAlign='center'>
                        {' '}Administator Login 
                    </Header>
                      <Form.Input
                        error = {this.state.error.email}
                        fluid
                        icon='user'
                        iconPosition='left'
                        name='email'
                        value={this.state.user.email}
                        placeholder={(!this.state.error.email)?'E-mail address':this.state.errorMsg.email}
                        onChange={this.changeHandler}
                      />
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        name='password'
                        value={this.state.user.password}
                        placeholder={(!this.state.error.password)?'Password':this.state.errorMsg.password}
                        type='password'
                        onChange={this.changeHandler}
                      />
          
                      <Button color='teal' fluid size='large' onClick={this.submit}>Login</Button>
                    </Segment>
                  </Form>
                  <Message>
                    Don't have account? <Link to='/signUp'>Sign Up</Link>
                    <br/><Link to='/forgotPassword'>Forgot Password?</Link>
                  </Message>
                  <Link to='/'><Button color='orange' floated='right' size='small' >Go Back</Button></Link>
                </Grid.Column>
              </Grid>
            </div>
          )
    }
} 





