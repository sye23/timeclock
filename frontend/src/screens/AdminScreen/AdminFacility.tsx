import * as React from 'react';
import { Container, Header, Card, Button, Divider, Grid, Icon,Table, Message, Menu, List, Modal, Dropdown, Form, Radio, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
let Clock = require('react-live-clock');
import Stopwatch from 'react-stopwatch';
import * as utils from '../../utils/utilFunctions';
import {AdminFacilityState} from '../../types/adminFacilityState';

export default class AdminFacility extends React.Component<any,AdminFacilityState>{
    constructor(){
        super();
        this.state = {
            activeItem:'all',
            user:{
                name:'',
                email:'',
                time: null,
                dropdown: []
            },
            error:{
                name: false,
                email: false,
                time: false,
                addUser: false
            },
            errorMsg:{
                name: '',
                email: '',
                addUser: ''
            }
        }
    }

    timeValidation = () =>{
        let state =Object.assign({}, this.state);
        let formIsValid = true;
    
       
        if(!state.user.time){
            formIsValid = false;
            state.error.time = true;
        } else{
            formIsValid = true;
            state.error.time = false;
        }
        this.setState(state);
        return formIsValid;
    }

    formValidation = () =>{
        let state =Object.assign({}, this.state);
        let formIsValid = true;
    
        if(!state.user.name){
            formIsValid = false;
            state.errorMsg.name = 'Name is Required';
            state.error.name = true;
        } else{
            formIsValid = true;
            state.error.name = false;
            state.errorMsg.name = '';
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
        if(state.user.name && state.user.email && state.user.dropdown.length >=1){
            formIsValid = false;
            state.error.addUser = true;
            state.errorMsg.addUser = 'Only use one of the two input options!!!';
        } else{
            formIsValid = true;
            state.error.addUser = false;
            state.errorMsg.addUser = '';
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
    
    handleItemClick = (e: any, {name}:any) => {
        this.setState({ activeItem: name })
    }

    submitUser = () =>{
        if(this.formValidation() && this.checkForErrors(this.state.error)||((this.state.user.dropdown.length >=1) && !this.state.error.addUser) ){
            alert('submitted')
        }else{
            alert('Errors')
        }
       
    }

    submitTime = () =>{
        if(this.timeValidation()){
            alert('submitted')
        }else{
            alert('Errors')
        }
    }

    changeHandler = (e: any) => {
        let state = Object.assign({}, this.state);
        state.user[e.target.name] = e.target.value;
        this.setState(state);
    }
    
    handleChange = (e:any, { value }:any) =>{
        let state = Object.assign({}, this.state);
        let newArray = value;
        state.user.dropdown = newArray.slice(0);
        this.setState(state);
    } 

    render(){
        const activeItem  = this.state.activeItem;
        const stateOptions = [ { key: '1', value: '1', text: 'Teri Eisenbach' },
                                { key: '2', value: '2', text: 'Joe Smith' },
                                { key: '3', value: '3', text: 'Bob Jones' }];

        return (
            <div>
                
                <h1 className='mainHeader'>Time Clock</h1>
                <h3 className='clockHeader'><Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Eastern'}/></h3>
                <Container>
                    <Header textAlign='center' as='h1' color='teal'>
                        Briarwood
                        <Link to='/adminDashboard'><Button size='mini' color='teal' floated='left'>Go Back</Button></Link>
                        <Modal basic trigger={  <Button size='mini' color='red' floated='right'>Remove Project</Button>}>
                            <Header icon='archive' content='Remove Project' />
                            <Modal.Content>
                                <p>Are you sure you want to remove 'project'. <br/> Project will be archived.</p>
                            </Modal.Content>
                            <Modal.Actions>
                            <Button basic color='red' inverted>
                                <Icon name='remove' /> No
                            </Button>
                            <Button color='green' inverted>
                                <Icon name='checkmark' /> Yes
                            </Button>
                            </Modal.Actions>
                        </Modal>
                       
                    </Header>
                    
                    <Divider/>
                        <Grid centered> 
                            <Grid.Row>
                                <Grid.Column mobile={16} tablet={5} computer={5}>
                                    <Header as='h2' color='teal'>
                                        Contributors
                                        <Modal trigger={<Button size='tiny' color='teal' floated='right'> <Icon size='large' name='add user' />Add A User</Button>} closeIcon='close'>
                                            <Header icon='add user'  color='teal' content='Add A Contributor to this Project' />
                                            <Modal.Content>
                                                <Header color='teal' as='h3' textAlign='center'>Select From Existing Users</Header>
                                                <Dropdown 
                                                    placeholder='Select one or more users' 
                                                    fluid 
                                                    multiple 
                                                    search 
                                                    scrolling
                                                    selection 
                                                    options={stateOptions} 
                                                    onChange={this.handleChange}
                                                />
                                                    <Divider horizontal>Or</Divider>
                                                <Grid centered>    
                                                <Form error={this.state.error.addUser} size='large'>
                                                    <Message
                                                        floating
                                                        size='mini'
                                                        error
                                                        content={this.state.errorMsg.addUser}
                                                    />
                                                    <Form.Group>
                                                        <Form.Input
                                                            placeholder= {(!this.state.error.name)?'Name': this.state.errorMsg.name}
                                                            name='name' 
                                                            value={this.state.user.name} 
                                                            onChange={this.changeHandler} 
                                                            error = {this.state.error.name} 
                                                        />
                                                        <Form.Input
                                                            placeholder= {(!this.state.error.email)?'Email': this.state.errorMsg.email}
                                                            name='email' value={this.state.user.email}  
                                                            onChange={this.changeHandler} 
                                                            error = {this.state.error.email}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                                </Grid>
                                            </Modal.Content>
                                            <Modal.Actions>
                                            
                                            <Button color='blue' onClick={this.submitUser}>
                                                <Icon name='add' /> Add
                                            </Button>
                                            </Modal.Actions>
                                        </Modal>
                                        
                                    </Header>
                                    <List celled >
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>
                                                    Teri Esenbach
                                                    <Modal basic trigger={ <Button icon size='mini' color='red' floated='right'><Icon name='remove' /></Button>}>
                                                        <Header icon='user delete' content='Delete User' />
                                                        <Modal.Content>
                                                            <p>Are you sure you want to delete 'user' from this project.</p>
                                                        </Modal.Content>
                                                        <Modal.Actions>
                                                        <Button basic color='red' inverted>
                                                            <Icon name='remove' /> No
                                                        </Button>
                                                        <Button color='green' inverted>
                                                            <Icon name='checkmark' /> Yes
                                                        </Button>
                                                        </Modal.Actions>
                                                    </Modal>
                                                   
                                                </List.Header>
                                                teri@ltccs.com
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>Joe Smith <Button icon size='mini' color='red' floated='right'><Icon name='remove' /></Button></List.Header>
                                                joes@ltccs.com
                                            </List.Content>
                                        </List.Item>
                                        <List.Item>
                                            <List.Content>
                                                <List.Header>Bob Jones <Button icon size='mini' color='red' floated='right'><Icon name='remove' /></Button></List.Header>
                                                bobj@ltccs.com
                                            </List.Content>
                                        </List.Item>
                                    </List>  
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={11} computer={11}>
                                <Header as='h2' color='teal'>Time Log</Header>
                                <Divider/>
                                    <Menu pointing secondary >
                                        <Menu.Item name='all'active={activeItem === 'all'} onClick={this.handleItemClick} />   
                                        <Menu.Item name='today' active={activeItem === 'today'} onClick={this.handleItemClick} />
                                        <Menu.Item name='week' active={activeItem === 'week'} onClick={this.handleItemClick} />
                                        <Menu.Item name='month' active={activeItem === 'month'} onClick={this.handleItemClick} />
                                        <Menu.Menu position='right'>
                                        <Dropdown item text='Filter By User'>
                                            <Dropdown.Menu>
                                            <Dropdown.Item>All(Default)</Dropdown.Item>
                                            <Dropdown.Item>Teri Eisenbach</Dropdown.Item>
                                            <Dropdown.Item>Joe Smith</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        </Menu.Menu>
                                    </Menu>
                                    <Table basic celled selectable sortable unstackable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>User</Table.HeaderCell>
                                                <Table.HeaderCell>Date</Table.HeaderCell>
                                                <Table.HeaderCell>Start Time</Table.HeaderCell>
                                                <Table.HeaderCell>End Time</Table.HeaderCell>
                                                <Table.HeaderCell>Total Time</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>

                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>Teri Eisenbach</Table.Cell>
                                                <Table.Cell>8/8/2017</Table.Cell>
                                                <Table.Cell>11:00am</Table.Cell>
                                                <Table.Cell>12:00pm 
                                                    <Modal size='mini' trigger={ <Button basic circular size='mini' color='teal' floated='right' icon='write' />} closeIcon='close'>
                                                        <Header icon='write'  color='teal' content='Edit Time' />
                                                        <Modal.Content> 
                                                                <Form size='large' onSubmit={this.submitTime} error={this.state.error.time}>
                                                                <Message
                                                                    size='mini'
                                                                    error
                                                                    content='Enter A Valid Time'
                                                                />
                                                                    <Form.Field inline width='16'>
                                                                        <label>New Time</label>
                                                                        <Input
                                                                            labelPosition='right'
                                                                            placeholder='00:00' 
                                                                            name='time' 
                                                                            value={this.state.user.time} 
                                                                            onChange={this.changeHandler}
                                                                            type='time'
                                                                        />
                                                                    </Form.Field>
                                                                    
                                                                </Form>
                                                        </Modal.Content>
                                                        <Modal.Actions>
                                                            <Button color='blue' onClick={this.submitTime}>Update</Button>
                                                        </Modal.Actions>
                                                    </Modal>
                                                </Table.Cell>
                                                <Table.Cell>1 hrs</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Joe Smith</Table.Cell>
                                                <Table.Cell>8/9/2017</Table.Cell>
                                                <Table.Cell>10:00am</Table.Cell>
                                                <Table.Cell>12:00pm</Table.Cell>
                                                <Table.Cell>2 hrs</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                        <Table.Footer>
                                            <Table.Row>
                                                <Table.HeaderCell/>
                                                <Table.HeaderCell/>
                                                <Table.HeaderCell/>
                                                <Table.HeaderCell><strong>Total Time</strong></Table.HeaderCell>
                                                <Table.HeaderCell><strong>3 hrs</strong></Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Footer>
                                    </Table>                
                                </Grid.Column>
                            </Grid.Row>
            
                        </Grid>
                    </Container>
                </div>
          )
    }
} 