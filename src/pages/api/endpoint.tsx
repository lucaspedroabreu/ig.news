export default function handler(req, res) {
  if (req.method === 'GET') {
    // Process a POST request
    res.status(200).json({ message: 'Building api'})
  } else {
    // Handle any other HTTP method
    res.status(404).json({ message: 'Http Method not available for this route'})
  }
}
