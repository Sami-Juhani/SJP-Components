import { Meta, StoryObj } from "@storybook/react";
import { MediaScroller } from "../components/MediaScroller";
import { mockData } from "../assets/data/mediaScroller";

const meta: Meta<typeof MediaScroller> = {
  title: "MediaScroller",
  component: MediaScroller,
  tags: ["autodocs"],
  argTypes: {
    data: {
      defaultValue: mockData,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MediaScrollerStory: Story = {
  args: {
    data: mockData,
  },
};
