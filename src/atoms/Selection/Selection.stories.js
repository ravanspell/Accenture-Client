import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import Selection from './index';

export default {
  title: 'Atoms/ Selection',
  component: Selection,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description type="info">
            The button component.
          </Description>
          <Primary />
          <ArgsTable />
        </>
      ),
    },
  },
};

export const PrimaryComponent = () => <Selection list={[{label: 'option 1', key: 1}]}/>;