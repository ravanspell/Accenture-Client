import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import HomeTemplate from '../templates/HomeTemplate';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderText from '../atoms/HeaderText';
import { emp_mock_data } from '../seeds/emp_data';
import Button from '../atoms/Button';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: 'START_FETCH_TEACHERS'})
    }, []);

    return (
        <Fragment>
            <Row>
                <Col>
                    <HeaderText >
                        RINGZERO TEST <br /> Let's Do This
                    </HeaderText>
                </Col>
            </Row>
            <HomeTemplate data={emp_mock_data} />
            <Row style={{ margin: '100px 0px' }}>
                <Col className='d-flex justify-content-center'>
                    {/* <Button style={{
                        background: '#49a997',
                        border: '1px solid #49a997',
                        padding: '10px 30px',
                        fontWeight: 500
                    }} > Load more </Button> */}
                    <Button title='Load More' onClick={() => {}}/>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Home;
