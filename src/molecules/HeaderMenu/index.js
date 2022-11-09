import React, { useState } from 'react';
import TextLabel from '../../atoms/TextLabel';
import { PRIMARY_COLOR } from '../../settings/conststnts';
import useStyles from './styles';
import { useNavigate } from 'react-router-dom';

const menuItems = [
    { id: 'teachers', link: '/' },
    { id: 'classes', link: '/classes' }
]

const HeaderMenu = () => {

    const [selected, setSelected] = useState(menuItems[0].id)
    const classes = useStyles();
    const navigate = useNavigate();

    const selectMenu = (id, link) => {
        setSelected(id)
        navigate(link)
    }
    return (
        <div className={classes.menuContainer} >
            {menuItems.map((item) => {
                return (
                    <div
                        key={item.id}
                        className={selected === item.id ? classes.selected : classes.menuItem}
                        onClick={() => selectMenu(item.id, item.link)}
                    >
                        <TextLabel style={{ color: PRIMARY_COLOR }} veriant="menu" > {item.id} </TextLabel>
                    </div>
                )
            })}

        </div >
    );
};


export default HeaderMenu;