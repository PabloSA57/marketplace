
import { Outlet } from 'react-router-dom';

import Nav from '../../Component/Commerce/Nav/Nav';
import Notification from '../../Component/Commerce/Notification/Notication';
import { CommercePStyle } from './style';

const CommercePage = () => {
    return (
            <CommercePStyle>
                <Nav />
                <Outlet />
                <Notification />
            </CommercePStyle>
    )
}

export default CommercePage;