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
                email:false
            },
            errorMsg:{
                email:''
            }
        }
    }

    changeHandler = (e: any) => {
        let state = Object.assign({}, this.state);
        state.user[e.target.name] = e.target.value;
        this.setState(state);
    }

    blurHandler = () =>{
        this.formValidation()
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

        this.setState(state);
        return formIsValid;
    }

    checkForErrors = (obj:{}) =>{
        for (let i in obj) {
            if (obj[i] === true) return false;
        }
        return true;
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
                  
                  <Form error={this.state.error.email} size='large'>
                  <Message
                    size='mini'
                    error
                    content={this.state.errorMsg.email}
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
                        placeholder='E-mail address'
                        onChange={this.changeHandler}
                        onBlur={this.blurHandler}
                      />
                      <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        name='password'
                        value={this.state.user.password}
                        placeholder='Password'
                        type='password'
                        onChange={this.changeHandler}
                        onBlur={this.blurHandler}
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





