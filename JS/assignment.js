// Function to authenticate user
async function login(username, password) {
  try {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.success) {
      console.log('Login successful! Token:', data.token);
      localStorage.setItem('token', data.token);
    } else {
      console.log('Login failed:', data.message);
    }
  } catch (err) {
    console.log('Error:', err);
  }
}


login('user123', 'password123');