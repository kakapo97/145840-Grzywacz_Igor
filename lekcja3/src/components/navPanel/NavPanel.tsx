import React from 'react';
import MenuBar from '../menuBar/MenuBar';
import DrawerComponent from '../drawerComponent/DrawerComponent'


const NavPanel = () => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    return (
        
            <div onClick={()=>{if(drawerOpen){ setDrawerOpen(false)}}}>
            <MenuBar onIconClick={() => setDrawerOpen(true)} />
            <DrawerComponent shouldBeOpen={drawerOpen} />
            </div>
    );
}

export default NavPanel;