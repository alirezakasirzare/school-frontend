import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app-router";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
