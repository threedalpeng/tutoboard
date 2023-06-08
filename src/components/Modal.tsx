import { ReactNode, useEffect, useRef, useState } from "react";

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const show = () => {
    setIsVisible(true);
  };
  const close = () => {
    setIsVisible(false);
  };
  return { isVisible, show, close };
};

interface ModalProps {
  children: ReactNode;
  visible: boolean;
  onClose?: () => unknown;
}

function Modal({ children, visible, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (modal && visible) {
      modal.showModal();
    }
    return () => {
      if (modal && modal.open) {
        modal.close();
        if (onClose) {
          onClose();
        }
      }
    };
  }, [visible]);

  return (
    <dialog className="modal" ref={modalRef}>
      <div className="modal-box">{children}</div>
    </dialog>
  );
}

Modal.useModal = useModal;

export default Modal;
