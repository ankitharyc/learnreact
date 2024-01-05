import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state={
            count:0,
            userinfo:{
                name:'dummy name',
                location:'default loc',
            }
        }
        console.log('constructor called')
    }
    async componentDidMount(){
    console.log('Child component did mount')
    const userdata = await fetch('https://api.github.com/users/akshaymarch7');
    const json = await userdata.json();
    console.log('hi'+json);
    this.setState({
        userinfo:json
    })
    }

    componentDidUpdate(){
        console.log('component updated');
    }

    componentWillUnmount(){
        console.log('Component will unmount')
    }

    render(){
        // const {name, location} = this.props;
        // const{count} = this.state;
        const {name,location} = this.state.userinfo;
        console.log('render called')
        return (
            <div className='usercard'>
                {/* <h1>Count:{count}</h1>
                <button onClick={()=>this.setState({
                    count:this.state.count+1,
                })}>clickme</button> */}
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <p>Contact : @ankitha</p>
            </div>
          )
    }
}

export default UserClass;