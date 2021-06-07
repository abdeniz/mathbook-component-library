import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ButtonLink, { IButtonLink } from "../src/components/button/ButtonLink";

export default {
    title: "Components/ButtonLink",
    component: ButtonLink,
  } as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IButtonLink> = (args) => <ButtonLink {...args}>Button</ButtonLink>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { disabled: false, fullWidth: false };

export const Disabled = Template.bind({});
Disabled.args = { ...Primary.args, disabled: true };