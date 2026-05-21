import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { loadPlugin } from "./plugin/PluginLoader";

function App() {
  const [Plugin, setPlugin] = useState<any>(null);

  useEffect(() => {
    loadPlugin().then((component) => {
      setPlugin(() => component);
    });
  }, []);

  return (
    <div>
      <h1>Plugin Shell</h1>

      <Routes>
        <Route
          path="/"
          element={
            Plugin ? (
              <Plugin />
            ) : (
              <p>No plugin enabled</p>
            )
          }
        />

        <Route
          path="/lab-demo"
          element={
            <div>
              <h2>Lab Plugin Demo Route</h2>
              <p>This page came from the plugin.</p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;