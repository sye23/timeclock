import * as React from 'react';
let Clock = require('react-live-clock');
import { Link } from 'react-router-dom';
import { Container, Header, Card, Image, Button, Statistic, Divider, Grid, Menu, Modal, Form, Icon } from 'semantic-ui-react'

export default class AdminDashboard extends React.Component<any, any>{

    constructor(){
        super();
        this.state = {
            facility:{
                name:'',
                cost: null
            },
            button:{
                disabled: false
            },
            activeItem:'current projects'
        }
    }

    changeHandler = (e: any) => {
        let state = Object.assign({}, this.state);
        state.user[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleItemClick = (e: any, {name}:any) => {
        this.setState({ activeItem: name })
    }

    handleSubmit = () =>{
        alert('submitted')
    }

    render(){

        const activeItem  = this.state.activeItem;

        return(
            <div>
                <Container>
                <h1 className='mainHeader'>Administrator Dashboard</h1>
                <h3 className='clockHeader'><Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Eastern'}/></h3>
                
            
                <Header as='h2' color='teal'>Welcome Admin</Header>
                <Menu pointing secondary >
                    <Menu.Item name='current projects'active={activeItem === 'current projects'} onClick={this.handleItemClick} />   
                    <Menu.Item name='archived projects ' active={activeItem === 'archived projects '} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                        <Modal size='mini' trigger={ <Button content='New Project' icon='add' labelPosition='left' color='teal'/>} closeIcon='close'>
                            <Header icon='add'  color='teal' content='Add A New Project' />
                            <Modal.Content> 
                                    <Form size='large' onSubmit={this.handleSubmit}>
                                        <Form.Field inline width='16'>
                                            <label>Project Name</label>
                                            <input placeholder='Project Name' name='name' value={this.state.facility.name} onChange={this.changeHandler}/>
                                        </Form.Field>
                                        <Form.Field width='16' inline>
                                            <label>Cost Per Hour</label>
                                            <input placeholder='$0.00' name='cost' value={this.state.facility.cost} onChange={this.changeHandler} />
                                        </Form.Field>
                                    </Form>
                            </Modal.Content>
                            <Modal.Actions>
                            
                            <Button color='blue'>
                                <Icon name='add' /> Add
                            </Button>
                            </Modal.Actions>
                        </Modal>
                           
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Grid>
                    <Grid.Row>
                        <Grid.Column className='facilityCard' mobile={16} tablet={8} computer={4}>
                            <Link to='/adminFacility'>
                                <Card link>
                                    <Card.Content>
                                        <Card.Header> 
                                        Briarwood
                                        </Card.Header>
                                        <Card.Meta>
                                        Total Contributors:3
                                        </Card.Meta>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Statistic horizontal color='green' size='mini' value='3.5hr' label='This Week' />
                                        <Divider fitted />
                                        <Statistic horizontal color='red' size='mini' value='7.5hr' label='Total' />
                                    </Card.Content>
                                </Card>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column  mobile={16} tablet={16} computer={16}>
                        <Button floated='right' content='Log Out' icon='log out' labelPosition='right' color='red'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
        )
    }
}

