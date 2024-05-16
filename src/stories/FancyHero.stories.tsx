import { Meta, StoryObj } from "@storybook/react";
import { FancyHero } from "../components/FancyHero";
import { TypeWriterOptions } from "../components/FancyHero/TypeWriter";

const imgSrc = "./bw-profile.jpg";
const userDefinedOptions: TypeWriterOptions = {
  typingDelay: 75,
  eraseDelay: 50,
  x: "5%",
  y: "10%",
  startDelay: 2000,
  endDelay: 2000,
};
const paragraph = ["I'm a frontend developer", "I'm a backend developer"];

const meta: Meta<typeof FancyHero> = {
  title: "FancyHero",
  component: FancyHero,
  tags: ["autodocs"],
  argTypes: {
    imgSrc: {
      defaultValue: imgSrc,
    },
    paragraph: {
      defaultValue: paragraph,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FancyHeroStory: Story = {
  args: {
    imgSrc: imgSrc,
    paragraph: paragraph,
    typeWriterOptions: userDefinedOptions
  },
};
