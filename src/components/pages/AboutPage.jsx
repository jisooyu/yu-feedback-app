import Card from "../shared/Card";
import { Link } from 'react-router-dom'

function AboutPage() {
  return  <Card> <div className="about"> 
  <h1>About Project</h1> 
  <p>This is about a React app to leave a feedback 
      for a product or a service</p>
  <p>Version: 1.0.0</p>
  <p>
      <Link to='/'>
        Back Home
      </Link>
  </p>
  </div> 
  </Card>
}

export default AboutPage;
