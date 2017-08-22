import * as React from 'react';
let Clock = require('react-live-clock');
import { Link } from 'react-router-dom';
import { Container, Header, Card, Image, Button, Statistic, Divider, Grid, Menu } from 'semantic-ui-react'

export default class AdminDashboard extends React.Component<any, any>{

    constructor(){
        super();
        this.state = {
            button:{
                disabled: false
            },
            activeItem:'current projects'
        }
    }

    handleItemClick = (e: any, {name}:any) => {
        this.setState({ activeItem: name })
    }

    render(){

        const activeItem  = this.state.activeItem;

        return(
            <div>
            <h1 className='mainHeader'>Administrator Dashboard</h1>
            <h3 className='clockHeader'><Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Eastern'}/></h3>
            <Container>
                <Header as='h2' color='teal'>Welcome Admin</Header>
                <Menu pointing secondary >
                    <Menu.Item name='current projects'active={activeItem === 'current projects'} onClick={this.handleItemClick} />   
                    <Menu.Item name='previous projects ' active={activeItem === 'previous projects '} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button content='Add A Project' icon='add' labelPosition='left' color='teal'/>
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
                </Grid>
            </Container>
        </div>
        )
    }
}

