import { R2Explorer } from 'r2-explorer';

const explorer = R2Explorer({ readonly: false });

// Define username and password
const USERNAME = 'USERNAME';
const PASSWORD = 'PASSWORD';

export default {
  async fetch(request, env, context) {
    // Check if the request has Authorization header
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Basic ')) {
      // If the request does not have the Authorization header, return a 401 Unauthorized response
      return new Response(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Restricted Area"'
        }
      });
    }

    // Decode the Authorization header and extract username and password
    const [username, password] = atob(authHeader.slice(6)).split(':');

    // Verify the username and password
    if (username !== USERNAME || password !== PASSWORD) {
      // If the username and password do not match, return a 401 Unauthorized response
      return new Response(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Restricted Area"'
        }
      });
    }

    // If the username and password are correct, proceed with the request
    return explorer(request, env, context);
  }
};