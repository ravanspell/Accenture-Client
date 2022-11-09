import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import FormActionButtons from './index';

export default {
  title: 'Molecules/ Form Action Buttons',
  component: FormActionButtons,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            Card body component.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => (
  <FormActionButtons
    cancelButtonTitle="Go Back"
    submitButtonTitle=" Add Class"
    onCancel={() => {}}
    onSubmit={()=> {}}
  />);