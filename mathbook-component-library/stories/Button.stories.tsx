import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { IButton } from "../src/components/button/Button";

export default {
    title: "Components/Button",
    component: Button,
  } as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IButton> = (args) => <Button {...args}>Button</Button>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { disabled: false };

export const Disabled = Template.bind({});
Disabled.args = { ...Primary.args, disabled: true };