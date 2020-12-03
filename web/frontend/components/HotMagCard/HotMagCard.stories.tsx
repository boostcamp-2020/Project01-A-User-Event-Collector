import { Story } from "@storybook/react/types-6-0";
import HotMagCard from ".";

export default {
  title: "HotMagCard",
  component: HotMagCard,
};

const Template: Story = () => <HotMagCard />;

const HotMagCardTemplate = Template.bind({});

export { HotMagCardTemplate };
