import React, {Component} from 'react';
import {Menu, Container, Icon, Dropdown,Image, Input} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

class SearchBar extends Component{

    state = { link:'',visible:true,activeItem:''};

    handleItemClick = (e, {linkname}) => {this.setState({activeItem: linkname})};

    render(){
        const {activeItem} = this.state;
        return(
            <div>
            <Menu stackable borderless style={{marginBottom:'0px'}} >
                <Container style={{width:'1370px'}}>
                    <Menu.Item>
                        <img src='https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg' alt="logo" style={{width:'5.5rem'}} />
                    </Menu.Item>
                    
                    <Menu.Item>
                        <Input icon={<Icon name='search' style={{background:'red',color:'white'}} circular link />}  placeholder='Search for Video' style={{width:'450px'}} />
                    </Menu.Item>
                    
                    <Menu.Menu position='right'>
                        <Dropdown item simple text='Catagory'>
                            <Dropdown.Menu>
                                <Dropdown.Item icon='computer' text='Technology' />
                                <Dropdown.Item icon='globe' text='Language' />
                                <Dropdown.Item icon='smile outline' text='Funny Videos' />
                            </Dropdown.Menu>
                        </Dropdown>
                        

                        <Menu.Item  as={ Link } to="/dashboard"
                            linkname='Dashboard'
                            active={activeItem === 'Dashboard'}
                            onClick={this.handleItemClick}>
                            <Icon name='google' />
                            Login
                        </Menu.Item>
                    </Menu.Menu>
                    
                </Container>
            </Menu>
            </div>
        )
    }
}

export default SearchBar;