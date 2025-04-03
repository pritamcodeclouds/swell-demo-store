// pages/api/users.js

export default function handler(req, res) {
    // Check the HTTP method
    if (req.method === 'GET') {
      // Sample response with a list of users
      res.status(200).json([
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
      ]);
    } else {
      // If the method is not GET, return a 405 Method Not Allowed
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }
  