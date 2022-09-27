
import { RiDashboardFill } from "react-icons/ri";
import { BiStore, BiCog } from "react-icons/bi";

import {NavStyle} from "./style";
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <NavStyle >
            <div className="nav-items">
                <NavLink  to='/commerce' end/*style={({ isActive }) => {
                return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
                };
            }}*/><RiDashboardFill /></NavLink>
                <NavLink to='/commerce/edit' style={({ isActive }) => {
                return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
                };
            }}><BiStore /></NavLink>
                <NavLink to='/commerce/config' style={({ isActive }) => {
                return {
                display: 'block',
                margin: '1rem 0',
                color: isActive ? 'red' : '',
                };
            }}><BiCog /></NavLink>
            </div>
        </NavStyle>
    )
}

export default Nav;
