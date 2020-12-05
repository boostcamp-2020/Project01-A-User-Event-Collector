import { Story } from "@storybook/react/types-6-0";
import LinkCardBlock, { Props, Theme } from ".";

export default {
  title: "LinkCardBlock",
  component: LinkCardBlock,
};

const Template: Story<Props> = (args: Props) => <LinkCardBlock theme={args.theme} />;

const MainLinkBlock = Template.bind({});
MainLinkBlock.args = { theme: Theme.Main };

const LibraryLinkBlock = Template.bind({});
LibraryLinkBlock.args = { theme: Theme.Library };

export { MainLinkBlock, LibraryLinkBlock };
