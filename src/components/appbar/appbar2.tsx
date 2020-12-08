import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GitHubIcon from '@material-ui/icons/GitHub';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import LayersApp from './buttons/layers-app';
import AppButton from './button';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export function MiniDrawer(props): JSX.Element {
    const {id, map} = props;

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    // side menu items
    // const items = [{ divider: true }, { id: 'layers' }, { divider: true }, { id: 'fullscreen' }, { id: 'help' }];
    const items = [{ id: 'layers' }];

    const handleDrawerClose = () => {
        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                className={open ? classes.drawerOpen : classes.drawerClose}
                classes={{ paper: open ? classes.drawerOpen : classes.drawerClose }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>{!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}</IconButton>
                </div>
                <Divider />
                <List>
                    {items.map((item) => (
                        <LayersApp key={`${id}-${item.id}`} id={item.id} />
                    ))}
                </List>
                <Divider />
                <List>
                    <ListItem button key={`${id}-giVersion`}>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="une balade" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
