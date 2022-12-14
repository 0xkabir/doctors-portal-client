import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes/Routes";
import {Toaster} from 'react-hot-toast'
import "./App.css";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
