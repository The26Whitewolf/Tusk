// import React, {useState} from "react";
// import {CSSTransition} from "react-transition-group";
// import DropdownItem from "./DropdownItem";
// import {FiArrowDown, FiChevronDown, FiSettings} from "react-icons/fi";
//
// function DropdownMenu() {
//     const [activeMenu, setActiveMenu] = useState('main')
//     const [menuHeight, setMenuHeight] = useState(null)
//
//     function calcHeight(el){
//         const height = el.offsetHeight
//         setMenuHeight(height)
//     }
//
//     return(
//         <div className='dropdown' style={{height:menuHeight}}>
//             <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} className='menu-primary' onEnter={calcHeight}>
//                 <div>
//                     <DropdownItem>My Profile</DropdownItem>
//                     <DropdownItem leftIcon={<FiSettings/>} rightIcon={<FiChevronDown/>} openMenu={() => setActiveMenu("settings")}/>
//                 </div>
//             </CSSTransition>
//             <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} className='menu-secondary'>
//                 <div>
//                     <DropdownItem leftIcon={<FiArrowDown/>} openMenu={() => setActiveMenu("main")}/>
//                     <DropdownItem>Settings</DropdownItem>
//                 </div>
//             </CSSTransition>
//         </div>
//     )
// }
//
// export default DropdownMenu
