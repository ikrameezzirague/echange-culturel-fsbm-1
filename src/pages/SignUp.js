import React, { useState } from 'react';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isExistingUser, setIsExistingUser] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/checkuser', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    setIsExistingUser(data.isExistingUser);

    if (!data.isExistingUser) {
      // Call your API to create a new user account with email and password
      // ...
    }
  }

  return (
    <form onSubmit={handleSignup}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {isExistingUser ? (
          <p>Vous avez déjà un compte. Veuillez vous connecter.</p>
        ) : (
          <button type="submit">Sing up</button>
        )
      }
    </form>
  );
}

export default SignupForm;