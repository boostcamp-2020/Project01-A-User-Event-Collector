import { Story } from "@storybook/react/types-6-0";
import LinkCard, { Props, Theme } from ".";

export default {
  title: "LinkCard",
  component: LinkCard,
};

const Template: Story<Props> = (args: Props) => (
  <LinkCard theme={args.theme} icon={args.icon} href="/">
    {args.children}
  </LinkCard>
);

const MainLink = Template.bind({});
MainLink.args = { theme: Theme.Main, children: "DJ Stations", icon: "dj" };

const LibraryLink = Template.bind({});
LibraryLink.args = { theme: Theme.Library, children: "플레이리스트" };

export { MainLink, LibraryLink };
