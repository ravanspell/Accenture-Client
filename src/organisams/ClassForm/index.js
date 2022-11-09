import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { Formik } from 'formik';
import { class_level } from '../../seeds/formData';
import { Card, CardContent, Grid } from '@material-ui/core';
import TextField from '../../molecules/TextField';
import SelectionField from '../../molecules/SelectionField';


const CreateClassForm = (props) => {
    const { formRef, teachers } = props;

    // setup validations to form
    const formValidationSchema = yup.object().shape({
        level: yup.string()
        .required("Class level required!"),
        name: yup.string()
            .required("Class name required!"),
        teacherEmail: yup.string().email().required("Teacher required!"),
    });

    return (
        <Card style={{ marginBottom: '20px' }}>
            <CardContent >
                <Grid >
                    <Grid item xs={7} md={5} sm={12}>
                        <Formik
                            initialValues={{
                                name: '',
                                teacherEmail: '',
                                level: ''
                            }}
                            validationSchema={formValidationSchema}
                            onSubmit={() => { }}
                            innerRef={formRef}
                            enableReinitialize
                        >
                            {({ handleChange, values, errors }) => (
                                <div>
                                    <div>
                                        <SelectionField
                                            label="Class Level"
                                            onChange={handleChange}
                                            value={values.level}
                                            name="level"
                                            list={class_level}
                                            placeholder="Select a level"
                                            error={errors.level}
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            label="Class Name"
                                            placeholder="Class Name"
                                            onChange={handleChange}
                                            value={values.name}
                                            name="name"
                                            error={errors.name}
                                        />
                                    </div>

                                    <div>
                                        <SelectionField
                                            label="Form Teacher"
                                            placeholder="Assign a form teacher"
                                            onChange={handleChange}
                                            value={values.teacherEmail}
                                            name="teacherEmail"
                                            error={errors.teacherEmail}
                                            list={(teachers || []).map((teacher) => (
                                                {
                                                    label: teacher?.name,
                                                    value: teacher.email
                                                }
                                            ))}
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
CreateClassForm.propTypes = {
    formRef: PropTypes.objectOf(PropTypes.any).isRequired,
    teachers: PropTypes.arrayOf(PropTypes.any),
};

// set props default values
// required props not need default value
TextField.defaultProps = {
    teachers: []
};

export default CreateClassForm;
