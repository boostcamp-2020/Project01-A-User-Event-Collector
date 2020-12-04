import { Story } from "@storybook/react/types-6-0";
import NavBar, { Theme } from ".";

export default {
  title: "NavBar",
  component: NavBar,
};

const Template: Story<{}> = () => <NavBar />;

const NavBarTemplate = Template.bind({});
NavBarTemplate.args = { theme: Theme.Main };

export { NavBarTemplate };
