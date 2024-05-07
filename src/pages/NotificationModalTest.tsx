import { useState } from "react";
import { NotificationModal, NotificationModalOptions } from "../components/NotificationModal";
import { DEFAULT_MODAL_OPTIONS } from "../components/NotificationModal/utils";

export function NotificationModalTest() {
  const [isOkModalOpen, setIsOkModalOpenOpen] = useState(false);
  const [isWarningModalOpen, setIsWarningModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const userDefinedOptions: NotificationModalOptions = {
    ...DEFAULT_MODAL_OPTIONS,
    blurBg: false,
    position: "center",
    size: "sm",
    autoDismiss: true,
    autoDismissTimeout: 5000,
  };

  return (
    <>
      <button onClick={() => setIsOkModalOpenOpen(true)}>Success Notification Modal</button>
      <button onClick={() => setIsWarningModalOpen(true)}>Warning Notification Modal</button>
      <button onClick={() => setIsNotificationModalOpen(true)}>Warning Notification Modal</button>
      <button onClick={() => setIsAlertModalOpen(true)}>Warning Notification Modal</button>

      <NotificationModal
        text={"Registration succesfull. Please login..."}
        type={"success"}
        isOpen={isOkModalOpen}
        onClose={() => setIsOkModalOpenOpen(false)}
        options={userDefinedOptions}
      />
      <NotificationModal
        text={"Registration Error. Please try again later..."}
        type={"warning"}
        isOpen={isWarningModalOpen}
        onClose={() => setIsWarningModalOpen(false)}
        options={userDefinedOptions}
      />
      <NotificationModal
        text={"This is a notification modal."}
        type={"notification"}
        isOpen={isNotificationModalOpen}
        onClose={() => setIsNotificationModalOpen(false)}
        options={DEFAULT_MODAL_OPTIONS}
      />
      <NotificationModal
        text={"Something went really wrong."}
        type={"alert"}
        isOpen={isAlertModalOpen}
        onClose={() => setIsAlertModalOpen(false)}
        options={DEFAULT_MODAL_OPTIONS}
      />
    </>
  );
}
