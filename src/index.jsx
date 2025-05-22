import React, { useState } from 'react';

function Dashboard() {
  const [email] = useState("toolsuite56@gmail.com");
  const [password] = useState("$FmLBK=rMlnI(66tj8@N");
  const [code, setCode] = useState("********");
  const [revealed, setRevealed] = useState(false);

  const fetch2FA = () => {
    setRevealed(true);
    setCode("123456"); // Mock code, vervang met echte API-call
  };

  return (
    <div style={{ background: '#1a1a1a', color: 'white', fontFamily: 'Arial', padding: '2rem' }}>
      <h1>Easy Tools Dashboard</h1>
      <h2>AutoLogin Guide</h2>
      <p><strong>Step 1:</strong> Download AdsPower via <a href="https://adspower.com/download" style={{ color: '#61dafb' }}>https://adspower.com/download</a></p>

      <p><strong>Step 2:</strong> Login met:</p>
      <p>Email: <code>{email}</code> <button onClick={() => navigator.clipboard.writeText(email)}>Copy</button></p>
      <p>Password: <code>{password}</code> <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button></p>

      <p><strong>Step 3:</strong> Klik de knop hieronder om 2FA code te zien:</p>
      <button onClick={fetch2FA} style={{ background: '#0070f3', color: 'white', padding: '0.5rem 1rem', borderRadius: '5px' }}>
        Reveal Code
      </button>
      {revealed && <p style={{ marginTop: '1rem', fontSize: '1.5rem' }}>{code}</p>}

      <p><strong>Step 4:</strong> Open profiel: "All the tools (50+ tools)"</p>
    </div>
  );
}

export default Dashboard;