import { ConnectionProvider } from "./pages/connection-provider";
import AppLayout from "./routes/AppLayout";
function App() {
  return (
    <ConnectionProvider>
        <AppLayout />
    </ConnectionProvider>
  );
}

export default App;
