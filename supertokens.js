import SuperTokens from 'supertokens-node';

SuperTokens.initConnection({
  framework: 'express', // Or your framework (React, Next.js, etc.)
  connectionURI: 'https://supertokens-postgresql-7lso.onrender.com/ ', // Replace with your actual SuperTokens instance URL
  context: '/auth', // Optional context path (default: '/auth')
});

import { passwordless } from 'supertokens-node/recipe/passwordless';

// ... (other imports)

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await passwordless.signIn(email, password);
    // User successfully logged in!

    // Create a session or redirect to a protected route
    res.send({ message: 'Login successful!' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: 'Login failed!' });
  }
});


import { middleware } from 'supertokens-node/framework/express';

// ... (other imports)

app.get('/protected-route', middleware(), (req, res) => {
  // This route is only accessible to authenticated users
  res.send({ message: 'Welcome to the protected route!' });
});
      