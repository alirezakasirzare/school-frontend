import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./app-router";
import GoogleFontLoader from "react-google-font-loader";

export const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <GoogleFontLoader
        fonts={[
          {
            font: "Jost",
          },
        ]}
      />

      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
