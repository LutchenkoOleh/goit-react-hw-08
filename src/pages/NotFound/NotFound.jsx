
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found!</h2>
      <p><Link to="/">Go back</Link></p>
    </div>
  )
}