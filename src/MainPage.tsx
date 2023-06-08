import { Link } from "react-router-dom";
import MainTitle from "./components/MainTitle";
import { useIsAuthenticated } from "./features/auth/hooks/useAuth";

export default function MainPage() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-16">
      <MainTitle />
      <div className="">
        {isAuthenticated ? (
          <button className="btn btn-primary">
            <Link to="/boards">Let's Go!!</Link>
          </button>
        ) : (
          <>
            <span className="block text-error text-sm pb-2">
              Not logged in yet...
            </span>
            <button className="block btn btn-neutral">
              <Link to="/login">Login to Start</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
