

import jwt from 'jsonwebtoken';

function auth(req, res, next) {
  try {
    // Extract the 'cookie' header from the request
    const cookie = req.headers.cookie;

    // Check if the cookie exists
    if (!cookie) {
      return res.status(401).send("Unauthorized: No cookie found");
    }

    // Extract the token from the cookie (assuming it's in the format 'token=YOUR_TOKEN')
    const token = cookie.split('=')[1];

    // Check if the token exists
    if (!token) {
      return res.status(401).send("Unauthorized: Token not found in cookie");
    }

    // Verify the JWT token
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        // If token verification fails, send a 403 (Forbidden) response
        return res.status(403).send("Forbidden: Invalid token");
      }

      // Attach the decoded user data to the request object
      req.user = decoded;

      // Proceed to the next middleware or route handler
      next();
    });
  } catch (err) {
    // Catch any unexpected errors and send a 500 (Internal Server Error) response
    console.error("Authentication error:", err);
    return res.status(500).send("Internal Server Error");
  }
}

export default auth;



