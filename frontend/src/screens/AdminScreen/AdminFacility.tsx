import * as React from 'react';
import { Container, Header, Card, Button, Divider, Grid, Icon,Table, Message, Menu, List, Modal, Dropdown, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
let Clock = require('react-live-clock');
import Stopwatch from 'react-stopwatch';

export default class AdminFacility extends React.Component<any,any>{
    constructor(){
        super();
        this.state = {
            activeItem:'all',
            user:{
                name:'',
                email:''
            }
        }
    }

    handleItemClick = (e: any, {name}:any) => {
        this.setState({ activeItem: name })
    }

    handleSubmit = () =>{
        alert('submitted')
    }

    changeHandler = (e: any) => {
        let state = Object.assign({}, this.state);
        state.user[e.target.name] = e.target.value;
        this.setState(state);
      }
    

    render(){
        
        const activeItem  = this.state.activeItem;
        const stateOptions = [ { key: 'AL', value: 'AL', text: 'Alabama' }];
        return (
            <div>
                
                <h1 className='mainHeader'>Time Clock</h1>
                <h3 className='clockHeader'><Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Eastern'}/></h3>
                <Container>
                    <Header textAlign='center' as='h1' color='teal'>
                        Briarwood
                        <Link to='/adminDashboard'><Button color='teal' floated='right'>Home</Button></Link>
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
                                                <Dropdown placeholder='State' fluid multiple search selection options={stateOptions} />
                                                    <Divider horizontal>Or</Divider>
                                                <Grid centered>    
                                                <Form size='large' onSubmit={this.handleSubmit}>
                                                    <Form.Group>
                                                        <Form.Input placeholder='Name' name='name' value={this.state.user.name} onChange={this.changeHandler} />
                                                        <Form.Input placeholder='Email' name='email' value={this.state.user.email} onChange={this.changeHandler} />
                                                    </Form.Group>
                                                </Form>
                                                </Grid>
                                            </Modal.Content>
                                            <Modal.Actions>
                                            
                                            <Button color='blue'>
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
                                    </Menu>
                                    <Table basic celled selectable sortable unstackable>
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell>Date</Table.HeaderCell>
                                                <Table.HeaderCell>Start Time</Table.HeaderCell>
                                                <Table.HeaderCell>End Time</Table.HeaderCell>
                                                <Table.HeaderCell>Total Time</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>

                                        <Table.Body>
                                            <Table.Row>
                                                <Table.Cell>8/8/2017</Table.Cell>
                                                <Table.Cell>11:00am</Table.Cell>
                                                <Table.Cell>12:00pm</Table.Cell>
                                                <Table.Cell>1 hrs</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
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