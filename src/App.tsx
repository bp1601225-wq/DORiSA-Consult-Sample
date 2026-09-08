import { BrowserRouter } from "react-router";
import AppRoutes from "./Routes/AppRoutes";



function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;