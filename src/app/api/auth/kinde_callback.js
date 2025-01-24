import { handleCallback } from '@kinde-oss/kinde-auth-nextjs';

export default async function handler(req, res) {
  try {
    await handleCallback(req, res); // This automatically handles token exchange and session creation
  } catch (error) {
    console.error('Error handling Kinde callback:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
