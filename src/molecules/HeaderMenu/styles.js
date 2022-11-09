import { makeStyles } from "@material-ui/core";

const styles = makeStyles(th => (
    {
        menuContainer: {
            display: 'flex',
            gap: '30px',
            height: '100%',
            marginLeft: '100px'
        },
        menuItem: {
            cursor: 'pointer',
            padding: '21px',
        },
        selected: {
            borderBottom: `2px solid ${th.palette.primary.main}`,
            cursor: 'pointer',
            padding: '21px',
        },
    }
))


export default styles;