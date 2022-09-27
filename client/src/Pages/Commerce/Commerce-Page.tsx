
import { Drawer } from '@mui/material';
import { useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from '../../Component/Commerce/Nav/Nav';
import Notification from '../../Component/Commerce/Notification/Notication';
import { TodoContext } from '../../Context/Context';
import { CommercePStyle } from './style';




const CommercePage = () => {
    const {todoState} = useContext(TodoContext)
    const {widthPhone} = todoState;

    const [state, setState] = useState<boolean>(false);


    const toggleDrawer =
        (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(open);
        };

    return (
            <CommercePStyle>
                <Nav />
                    <Outlet />
                {!widthPhone ? <Notification /> : null}

                {widthPhone ? <button 
                className='btn-noti'
                onClick={toggleDrawer(true)}
                >N</button> : null}

                <Drawer
                    anchor='bottom'
                    open={state}
                    onClose={toggleDrawer( false)}
                >
                    <button onClick={toggleDrawer(false)}>x</button>
                    <Notification />
                </Drawer>
            </CommercePStyle>
    )
}

export default CommercePage;