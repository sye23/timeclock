import * as React from 'react';
let Clock = require('react-live-clock');
import { Link } from 'react-router-dom';
import { Container, Header, Card, Image, Button, Statistic, Divider, Grid } from 'semantic-ui-react'

const UserDashboard = () => (
    <div>
        <h1 className='mainHeader'>Time Clock Dashboard</h1>
        <h3 className='clockHeader'><Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Eastern'}/></h3>
        <Container>
            <Header as='h2' color='teal'>Welcome User</Header>
            <Divider/>
            <Grid>
                <Grid.Row>
                    <Grid.Column className='facilityCard' mobile={16} tablet={8} computer={4}>
                        <Link to='/facility'>
                            <Card link>
                                <Card.Content>
                                    <Card.Header> 
                                    Briarwood
                                    </Card.Header>
                                    <Card.Meta>
                                    Last logged in @ 8/8/17 9:35am
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
            <Button floated='right' content='Log Out' icon='log out' labelPosition='right' color='red'/>
        </Container>
    </div>
)

export default UserDashboard;