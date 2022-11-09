import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import { subjects } from '../../seeds/formData';
import { Card, CardContent, Grid } from '@material-ui/core';
import TextField from '../../molecules/TextField';
import SelectionField from '../../molecules/SelectionField';


const CreateTeacherForm = (props) => {
    const { formRef } = props;

    // setup validations to form
    const formValidationSchema = yup.object().shape({
        subject: yup.string()
            .required("Subject required!"),
        name: yup.string()
            .required("Name required!"),
        email: yup.string().email().required("Email required!"),
        contactNumber: yup.string()
            .required("Contact number required!"),
    });

    return (
        <Card style={{ marginBottom: '20px' }}>
            <CardContent >
                <Grid >
                    <Grid item xs={7} md={5} sm={12}>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                contactNumber: '',
                                subject: ''
                            }}
                            validationSchema={formValidationSchema}
                            onSubmit={() => { }}
                            innerRef={formRef}
                            enableReinitialize
                        >
                            {({ handleChange, values, errors }) => (
                                <div>
                                    <div>
                                        <TextField
                                            label="Name"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            value={values.name}
                                            name="name"
                                            error={errors.name}
                                        />
                                    </div>

                                    <div>
                                        <SelectionField
                                            label="Subject"
                                            onChange={handleChange}
                                            value={values.subject}
                                            name="subject"
                                            list={subjects}
                                            placeholder="Select a subject"
                                            error={errors.subject}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label="Email Address"
                                            placeholder="Email address"
                                            onChange={handleChange}
                                            value={values.email}
                                            name="email"
                                            error={errors.email}
                                        />
                                    </div>

                                    <div>
                                        <TextField
                                            label="Work Contact Number"
                                            placeholder="Work contact number"
                                            onChange={handleChange}
                                            value={values.contactNumber}
                                            name="contactNumber"
                                            error={errors.contactNumber}
                                        />
                                    </div>
                                </div>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

// set props and their data types
CreateTeacherForm.propTypes = {
    formRef: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default CreateTeacherForm;
