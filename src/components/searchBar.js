import React,{Component} from 'react';
import {Menu, Container, Icon, Input, Dropdown} from 'semantic-ui-react';

import { Link } from 'react-router-dom';

// const channels = [
//     {
//         channelName:'Channel One',
//         channelId:'UC2oFur5gQiz6FWXHpWpkokg',
//         icon:'globe',
//         id:1
//     },
//     {
//         channelName:'Arsenal Video HD',
//         channelId:'UCXNPFRJgdTzA7SQF6rlHBOg',
//         icon:'computer',
//         id:2
//     }
// ]
const options = [
  { key: 'UCOhrz3uRCOHmK6ueUstw7_Q', text: 'EBC Zena', value: 'UCOhrz3uRCOHmK6ueUstw7_Q' },
  { key: 'UCZtXd8pSeqURf5MT2fqE51g', text: 'Fana BC', value: 'UCZtXd8pSeqURf5MT2fqE51g' },
  { key: 'UCKmDyLU_IH0wrtxHPK5xWlA', text: 'Ltv World', value: 'UCKmDyLU_IH0wrtxHPK5xWlA' },
  { key: 'UCvgODwKEq2GS7zxacxvYa6Q', text: 'Kana Tv', value: 'UCvgODwKEq2GS7zxacxvYa6Q' },
]
// Class based component
class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {
            term: '',
            channelId:'',
            options:options
            ,link:''
            ,visible:true,
            activeItem:'',
            loogedin:true
        }
    }

    onInputhange(term){
        this.setState({term});
        this.props.onSearchTermChanged(term);
        console.log(term);
    }
    handleChange = (e, {value}) => {this.setState({ value });this.props.OnChannelChanged(value)}
    //state = { link:'',visible:true,activeItem:''};

    ///handleItemClick = (e, {linkname}) => {this.setState({activeItem: linkname})};

    render(){
        
        const {activeItem} = this.state;
        const { value } = this.state;
        const Imagurl = 'https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-youtube-icon-logo-by-vexels.png';
        return(
            <div>
            <Menu stackable borderless style={{marginBottom:'0px'}} >
                <Container >
                    <Menu.Item>
                        <img src={Imagurl} alt="logo" style={{width:'40px',height:'40px'}} />
                    </Menu.Item>
                    
                    <Menu.Item>
                        
                        <Input 
                            value = {this.state.term}
                            onChange={(event) => {
                                this.onInputhange(event.target.value);
                            }
                            }
                            icon={<Icon name='search' style={{background:'red',color:'white'}} circular link />}  placeholder='Search for Video' style={{width:'450px'}} />
                    </Menu.Item>
                    
                    <Menu.Menu position='right'>
                        {/* <Dropdown item simple text='Catagory'>
                            <Dropdown.Menu>
                                {
                                    channels.map((channel) => 
                                        <Dropdown.Item key={channel.id} icon={channel.icon} text={channel.channelName}  />
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown> */}
                        
                        <Dropdown
                            onChange={this.handleChange}
                            options={this.state.options}
                            placeholder='Choose an option'
                            item
                            simple
                            value={value}
                            closeOnChange
                            defaultValue='UCOhrz3uRCOHmK6ueUstw7_Q'
                            
                        />
                        <Menu.Item  as={ Link } to="/dashboard"
                            linkname='Dashboard'
                            active={activeItem === 'Dashboard'}
                            onClick={()=>{this.setState({loogedin:!this.state.loogedin})}}>
                            {
                                this.state.loogedin?<div><Icon name='log out' /> Logout</div>:<div><Icon name='google plus' /> Login</div>
                            }
                        </Menu.Item>
                    </Menu.Menu>
                    
                </Container>
            </Menu>
            </div>
        );
    }
}

export default SearchBar;

// events
// State
//only class based components has state
//functional component
// const SearchBar = ()=> {
//     return(
//         <input />
//     );
// } 
// controlled component form element which will be set by the state element
// 