import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import HeaderTitle from './index';

export default {
  title: 'Molecules/ Header Title',
  component: HeaderTitle,
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

export const PrimaryComponent = () => <HeaderTitle />;