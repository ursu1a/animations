import React from 'react';
import '../style/index.scss';
import {Navbar, NavItem} from "./Navbar";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {DropdownMenu} from "./Dropdown";
import SearchTextField from './SearchTextField';

function App() {
  return (
    <div className="App">
      <Navbar>
         <NavItem icon={<MenuIcon/>}>
            <DropdownMenu/>
         </NavItem>
          <SearchTextField />
      </Navbar>
    
    </div>
  );
}

export default App;
