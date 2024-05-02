import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { NotificationModal } from "../components/NotificationModal";

const meta: Meta<typeof NotificationModal> = {
  title: "NotificationModal",
  component: NotificationModal,
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
    },
    type: {
      control: { type: "select" },
      options: ["success", "notification", "warning", "alert"],
    },
    isOpen: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: "success",
    text: "Registration successful. Please login...",
    isOpen: true,
    onClose: action("onClose"),
    options: { blurBg: true, size: "sm", position: "topLeft" },
  },
};

export const Notification: Story = {
  args: {
    type: "notification",
    text: "This a regular notification modal",
    isOpen: true,
    onClose: action("onClose"),
    options: { blurBg: true, size: "sm", position: "topRight" },
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    text: "Registration Error. Please try again later...",
    isOpen: true,
    onClose: action("onClose"),
    options: { blurBg: true, size: "sm", position: "bottomCenter" },
  },
};

export const Alert: Story = {
  args: {
    type: "alert",
    text: "Something went really wrong...",
    isOpen: true,
    onClose: action("onClose"),
    options: { blurBg: true, size: "xl", position: "center" },
  },
};
