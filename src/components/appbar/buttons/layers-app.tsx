import LayersIcon from '@material-ui/icons/Layers';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default function LayersApp(props: ButtonProps): JSX.Element {
    const { id } = props;

    function handleclick() {
        console.log(id);
    }

    return (
        <ListItem button key={id} onClick={handleclick}>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary={id} />
        </ListItem>
    );
}

interface ButtonProps {
    id: string;
}
