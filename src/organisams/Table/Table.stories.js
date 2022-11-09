import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import Table from './index';

const sampleData = [
    {
        id: 1,
        name: "Class 1A",
        level: "Primary 1",
        teacherEmail: "ireshandj2@gmail.com",
        createdAt: "2022-11-08T11:55:05.000Z",
        updatedAt: "2022-11-08T11:55:05.000Z",
        formTeacher: {
            name: "Ireshan"
        }
    }
]

export default {
    title: 'Organism/ Table',
    component: Table,
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title />
                    <Description type="info">
                        The label txt component provides more common text labels.
                    </Description>
                    <Primary />
                    <ArgsTable />
                </>
            ),
        },
    },
};

export const PrimaryComponent = () => <Table
    data={sampleData}
    columns={[
        { columnName: '#', key: 'id' },
        { columnName: 'Class Level', key: 'level' },
        { columnName: 'Class Name', key: 'name' },
        { columnName: 'Form Teacher', key: 'formTeacher.name' },
    ]} />;