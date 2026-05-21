import { Link } from "react-router-dom";

export default function LabPluginDemo() {
  return (
    <div>
      <nav>
        <Link to="/lab-demo">
          <button>Lab Plugin Demo</button>
        </Link>
      </nav>

      <hr />

      <h2>Lab Plugin Demo</h2>

      <p>Plugin loaded successfully!</p>

      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          marginTop: "20px",
          width: "250px",
        }}
      >
        <h3>Plugin Widget</h3>

        <p>Status: Running</p>
      </div>
    </div>
  );
}