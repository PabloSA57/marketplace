import { Drawer } from '@mui/material';
import React, { useContext } from 'react'
import { TodoContext } from '../../../Context/Context';

interface Prop {
    children: React.ReactNode,
}

const DrawerC = ({children}: Prop) => {
    const {todoState, setStateDrawer} = useContext(TodoContext)
    const {stateDrawer} = todoState;

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

    setStateDrawer({noti: false, order: false});
};
    const state = stateDrawer.order || stateDrawer.noti
    return (
        <>
            <Drawer
                    anchor='right'
                    open={state}
                    onClose={toggleDrawer( false)}
            >
                {children}
            </Drawer>

        </>
    )
}

export default DrawerC;
