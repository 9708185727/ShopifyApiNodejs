import jwt from "jsonwebtoken";

function auth(req, res, next) {
 
    const cookie = req.headers.cookie;
    console.log(cookie);

    if (!cookie) return res.status(401).send("Unauthorized");

    // Extract the token from the cookie (assuming it's in the format 'authToken=YOUR_TOKEN')
    const authToken = cookie.split("=")[1];

    if (!authToken) return res.status(401).send("Unauthorized");

    // Verify the JWT token
    jwt.verify(authToken, process.env.JWT_SECRET, function (error, data) {
      if (error) {
        // If token verification fails, send a 403 (Forbidden) response
        return res.status(401).send("Unauthorized");
      }
      req.user = data.data;
      next();
    });

}

export default auth;
