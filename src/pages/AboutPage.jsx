import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
      <Card>
        <div className="about">
            <h1>About This Project</h1>
            <p>This is a very Basic Project Of React covering all Basics OF React</p>
            <p>Version 1.0.0</p>
            <p>Under Supervision Of <span style={{fontStyle: "italic"}}> Sir Muhammed Fareed Soyal</span></p>
        </div>

        <Link to='/'>Back To Homepage</Link>
      
      </Card>
  )
}

export default AboutPage