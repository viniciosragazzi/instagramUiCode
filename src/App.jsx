import "./App.css";
import AppRoutes from "./AppRoutes";

import { CustomerProvider } from "./contexts/customer";
function App() {
  return (
    <div className="app">
      <CustomerProvider>
        <AppRoutes />
      </CustomerProvider>
    </div>
  );
}

export default App;
