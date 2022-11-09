import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import PageHeader from './index';

export default {
  title: 'Molecules/ Page Header',
  component: PageHeader,
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



export const PrimaryComponent = () => <PageHeader pageTitle="Classes" />;