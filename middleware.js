import { verifyToken } from '@kinde-oss/kinde-auth-nextjs/server';

export async function middleware(req) {
  try {
    // Get the token from the authorization header
    const token = req.headers.get('authorization')?.split(' ')[1];

    if (!token) {
      return new Response('Missing token', { status: 401 });
    }

    // Verify the token
    const user = await verifyToken(token);
    if (!user) {
      return new Response('Invalid token', { status: 401 });
    }

    // If token is valid, continue to the next handler
    return new Response('Token is valid', { status: 200 });

  } catch (error) {
    return new Response('Authentication failed', { status: 401 });
  }
}
