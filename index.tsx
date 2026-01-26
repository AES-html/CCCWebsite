import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Verification log for deployment
console.log("🚀 Carolina Care Collective: System Initializing...");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("❌ Critical Error: Target container #root not found in index.html");
} else {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("✅ Carolina Care Collective: Application Mounted");
  } catch (error) {
    console.error("❌ Critical Error during mounting:", error);
  }
}
