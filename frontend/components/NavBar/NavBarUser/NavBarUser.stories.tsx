import { Story } from "@storybook/react/types-6-0";
import NavBarUser from ".";

export default {
  title: "NavBarUser",
  component: NavBarUser,
};

const Template: Story<{}> = () => <NavBarUser />;

const NavBarUserTemplate = Template.bind({});

export { NavBarUserTemplate };
