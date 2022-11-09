import React from 'react';
import PropTypes from 'prop-types';
import {
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({

    root: {
        "& .MuiTableCell-head": {
            fontWeight:'bold',
        },
    }
});

const TableComponent = (props) => {

    const { columns, data } = props;
    const classes = useStyles();

    const getValue = (key, data) => {
        return key.split('.').reduce((o, key) => {
            return o[key];
        }, data);
    }
    
    return (
        <TableContainer  component={Paper}>
            <Table style={{ width: '100%' }} aria-label="simple table">
                <TableHead>
                    <TableRow className={classes.root}>
                        {columns.map(({ columnName }) => (
                            <TableCell key={columnName}>{columnName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                            key={`row_${index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {columns.map(({ key }) => (
                                <TableCell key={key} component="th" scope="row">
                                    {getValue(key, row)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

// set props and their data types
TableComponent.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.a).isRequired,
    data: PropTypes.arrayOf(PropTypes.any)
};
// set props default values
// required props not need default value
TableComponent.defaultProps = {
    data: [],
};

export default TableComponent;