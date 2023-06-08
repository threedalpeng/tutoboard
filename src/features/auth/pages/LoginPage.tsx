import { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import MainTitle from "../../../components/MainTitle";
import Modal from "../../../components/Modal";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useIsAuthenticated } from "../hooks/useAuth";

export default function LoginPage() {
  const { isVisible, show, close } = Modal.useModal();
  const openModal: MouseEventHandler = (e) => {
    e.preventDefault();
    show();
  };

  const isAuthenticate = useIsAuthenticated();
  const navigate = useNavigate();
  if (isAuthenticate) {
    navigate("/");
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
      <MainTitle />
      <LoginForm />
      <button className="btn btn-primary" onClick={openModal}>
        Or Register Here
      </button>
      <Modal visible={isVisible}>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={close}
        >
          ✕
        </button>
        <RegisterForm />
      </Modal>
    </div>
  );
}
