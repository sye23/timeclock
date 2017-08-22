import * as React from 'react';
import { Container, Header, Card, Image, Button, Statistic, Divider, Grid, Icon,Table, Message, Menu, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
let Clock = require('react-live-clock');
import Stopwatch from 'react-stopwatch';
import {UserFacilityState} from '../../types/userFacilityState';



export default class Facility extends React.Component<any,UserFacilityState>{
    constructor(){
        super();
        this.state = {
            button:{
                disabled: false
            },
            activeItem:'all'
        }
    }

    clickHandler = (e:any)=>{
        let state = Object.assign({}, this.state);
        state.button.disabled = !state.button.disabled;
        this.setState(state);
    }

    handleItemClick = (e: any, {name}:any) => {
        this.setState({ activeItem: name })
    }
    

    render(){
        
        const activeItem  = this.state.activeItem;

        return (
            <div>
                
                <h1 className='mainHeader'>Time Clock</h1>
                <h3 className='clockHeader'><Clock format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'US/Eastern'}/></h3>
            <Container>
                <Header textAlign='center' as='h1' color='teal'>
                    Briarwood
                    <Link to='/userDashboard'><Button color='teal' floated='right'>Home</Button></Link>
                </Header>
                
                <Divider/>
                    <Grid centered>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={8} computer={3}>
                                <Button 
                                    basic color='blue' 
                                    size='massive' 
                                    animated='fade' 
                                    disabled={this.state.button.disabled}
                                    onClick={this.clickHandler}
                                    fluid
                                >
                                    <Button.Content visible>
                                        Clock-In   
                                    </Button.Content>
                                    <Button.Content hidden>
                                        <Icon size='big' name='video play outline' />
                                    </Button.Content>
                                </Button>
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={3}>
                                <Button 
                                    basic color='red' 
                                    size='massive' animated='fade' 
                                    disabled={!this.state.button.disabled}
                                    onClick={this.clickHandler}
                                    fluid
                                >
                                    <Button.Content visible>
                                        Clock-Out
                                    </Button.Content>
                                    <Button.Content hidden>
                                        <Icon size='big' name='stop circle outline' />
                                    </Button.Content>
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column  mobile={16} tablet={8} computer={3}>
                            <Message className='stopwathMsg' success hidden={!this.state.button.disabled}>
                                <Stopwatch
                                    seconds={0}
                                    minutes={0}
                                    hours={0}
                                    theme='custom'
                                />
                            </Message>
                            
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column mobile={16} tablet={5} computer={5}>
                            <Header as='h2' color='teal'>Contributors</Header>
                                <List celled >
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>Teri Esenbach</List.Header>
                                            teri@ltccs.com
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>Joe Smith</List.Header>
                                            joes@ltccs.com
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header>Bob Jones</List.Header>
                                            bobj@ltccs.com
                                        </List.Content>
                                    </List.Item>
                                </List>  
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={11} computer={11}>
                            <Header as='h2' color='teal'>My Log</Header>
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