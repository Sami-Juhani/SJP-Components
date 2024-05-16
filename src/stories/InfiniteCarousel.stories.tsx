import { Meta, StoryObj } from "@storybook/react";
import { InfiniteCarousel, MediaScrollerOptions } from "../components/InfiniteCarousel";
import { mockData } from "../assets/data/mediaScroller";

const userDefinedOptions: MediaScrollerOptions = {
    blurred: false,
    itemsOnScreen: 5
  };

const meta: Meta<typeof InfiniteCarousel> = {
  title: "InfiniteCarousel",
  component: InfiniteCarousel,
  tags: ["autodocs"],
  argTypes: {
    data: {
      defaultValue: mockData,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InfiniteCarouselStory: Story = {
  args: {
    data: mockData,
    options: userDefinedOptions
  },
};
