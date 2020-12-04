import { Story } from "@storybook/react/types-6-0";
import NavTopLogoSearch from ".";

export default {
  title: "NavTopLogoSearch",
  component: NavTopLogoSearch,
};

const Template: Story<{}> = () => <NavTopLogoSearch />;

const NavTopLogoSearchTemplate = Template.bind({});

export { NavTopLogoSearchTemplate };
