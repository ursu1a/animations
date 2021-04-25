import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export function DropdownMenu(props) {
   const [activeMenu, setActiveMenu] = useState('main');

   function DropdownItem(props) {
      return (
         <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
         </a>
      )
   }

   return (
      <div className="dropdown">
         <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit>

            <div className="menu">

               <DropdownItem
                  leftIcon={<AccountCircleIcon/>}
                  rightIcon={<NavigateNextIcon/>}
                  goToMenu="profile">
                  Profile
               </DropdownItem>

               <DropdownItem
                  leftIcon={<SettingsIcon/>}
                  rightIcon={<NavigateNextIcon/>}
                  goToMenu="settings">
                  Settings
               </DropdownItem>
            </div>
         </CSSTransition>

         <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit>

            <div className="menu">
               <DropdownItem goToMenu="main" leftIcon={<ArrowBackIcon />}><h4>Go back</h4></DropdownItem>
               <div className="menu-content">
                  <div className="row">
                     <a>setting1</a>
                  </div>
                  <div className="row">
                     <a>setting2</a>
                  </div>
                  <div className="row">
                     <a>setting3</a>
                  </div>
               </div>
            </div>

         </CSSTransition>

         <CSSTransition
            in={activeMenu === 'profile'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit>

            <div className="menu">
               <DropdownItem goToMenu="main" leftIcon={<ArrowBackIcon />}><h4>Go back</h4></DropdownItem>
               <div className="menu-content">
                  <div className="row">
                     <span>info1</span>
                  </div>
                  <div className="row">
                     <span>info2</span>
                  </div>
                  <div className="row">
                     <span>info3</span>
                  </div>
               </div>
            </div>

         </CSSTransition>

      </div>
   );
}