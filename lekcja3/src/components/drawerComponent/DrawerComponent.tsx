import React from 'react';
import { Drawer } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

const makeClasses = makeStyles((theme: Theme) => ({
    drawerContent: {
        margin: '20px',
    }
}));

interface IDrawerComponentProps {
    shouldBeOpen: boolean,
}

const DrawerComponent: React.FC<IDrawerComponentProps> = ({ shouldBeOpen }) => {
    const classes = makeClasses();
    const [isOpen, setIsOpen] = React.useState(false);
    const history = useHistory();

    const RedirectTo = (path: string, name: string) => <div onClick={() => history.push(path)}>{name}</div>

    return (
        <div>
            <Drawer
                open={isOpen || shouldBeOpen}
                onClose={() => setIsOpen(false)}
            >
                <div className={classes.drawerContent}>
                    <ul>
                        <li>{RedirectTo('/', 'Home')}</li>
                        <li>{RedirectTo('/movie', 'Movie')}</li>
                        <li>{RedirectTo('/search', 'Search Movie')}</li>
                    </ul>
                </div>
            </Drawer>
        </div>
    );
};

export default DrawerComponent;