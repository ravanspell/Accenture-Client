import React from 'react';
import { Title, Description, Primary, ArgsTable } from '@storybook/addon-docs';
import TextLabel from './index';

export default {
  title: 'Atoms/ Text Label',
  component: TextLabel,
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

export const PrimaryComponent = () => <TextLabel variant="menu"> This is header text </TextLabel>;