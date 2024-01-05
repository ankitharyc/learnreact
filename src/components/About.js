import React from 'react'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

class About extends React.Component {
  constructor(props){
    super(props);
    console.log('Constructor parent')
  }
  componentDidMount(){
    console.log('Parent componet did mount');
  }
  render(){
    console.log('Render parent')
  return (
    <div>
        <h1>About Class component</h1>
        <div>
          <UserContext.Consumer>
            {
              ({loggedUser}) => <h1>{loggedUser}</h1>
            }
          </UserContext.Consumer>
        </div>
        {/* <User name={'Ankitha - function'}/> */}
        <UserClass name={'Ankitha - Class'} location={'Bangalore-class'}/>
    </div>
  )
}
}

export default About