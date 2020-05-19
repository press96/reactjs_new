import React, {Component} from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'

export class App extends Component {
state = {
  sideDrawerOpen: false
};

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen};
  });
};

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});
};

  render() {
    let sideDrawer
    let backdrop 

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}  
      </div>
    )
  }
}

export default App




