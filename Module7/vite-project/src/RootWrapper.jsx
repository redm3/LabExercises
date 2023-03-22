import App from "./App";
import { BrowserRouter } from "react-router-dom";

export default function RootWrapper() {

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
