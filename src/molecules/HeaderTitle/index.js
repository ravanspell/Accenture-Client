import React from 'react';
import EduIcon from '../../SVGIcons/edu.icon';
import TextLabel from '../../atoms/TextLabel';
import useStyles from './styles';
import { PRIMARY_COLOR } from '../../settings/conststnts';

const HeaderTitle = () => {
    const classes = useStyles()
    return (
        <div className={classes.content}>
            <EduIcon />
            <TextLabel
                variant="header"
                style={{ color: PRIMARY_COLOR }}
            >
                School Portal
            </TextLabel>
        </div>
    );
};

export default HeaderTitle;