import { useContext } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Layers from './buttons/layers-app';

export default function AppButton(): JSX.Element {
    const user: ButtonProps = useContext(Layers);

    // return <span>{children(user)}</span>;
    const id = 'test';

    return (
        <ListItem button key={id} onClick={user.handleclick}>
            <ListItemIcon>{user.icon}</ListItemIcon>
            <ListItemText primary={id} />
        </ListItem>
    );

    interface ButtonProps {
        id: string;
        handleclick: any;
        icon: any;
    }
}
