import React, { useState } from 'react';

function App() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div style={{ padding: '2rem', backgroundColor: '#0d1324', color: 'white', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#2f81f7' }}>Easy Tools Dashboard</h1>
      <h2>AutoLogin Guide</h2>

      <p><strong>Step 1:</strong> Download AdsPower via <a href="https://adspower.com/download">https://adspower.com/download</a></p>

      <p><strong>Step 2:</strong> Login with:</p>
      <p>Email: easytools22@outlook.com <button onClick={() => navigator.clipboard.writeText("easytools22@outlook.com")}>Copy</button></p>
      <p>Password: %1?QbzS1 <button onClick={() => navigator.clipboard.writeText("%1?QbzS1")}>Copy</button></p>

      <p><strong>Step 3:</strong> Click the button below to reveal 2FA code:</p>
      <button onClick={() => setShowCode(true)}>Reveal 2FA Code</button>

      {showCode && <h2 style={{ color: 'limegreen' }}>123456</h2>}

      <p><strong>Step 4:</strong> Open profile named "All the tools (50+ tools)"</p>
    </div>
  );
}

export default App;
