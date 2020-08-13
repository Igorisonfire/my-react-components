import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button33',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>333333</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
        333333333333333
    </span>
  </Button>
);
