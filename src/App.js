
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";

import Header from "./components/Header"
import AboutPage from "./pages/AboutPage"
import AboutIconLink from "./components/AboutIconLink";

import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import {FeedbackProvider} from "./Context/FeedbackContext";
function App() { 


 


    return (
     <FeedbackProvider >
  <Router>
    <Header/>
     <div className="container">
      <Routes>
        <Route exact path="/" element={<>
      <FeedbackForm/>
      <FeedbackStats />
      <FeedbackList />
      </>}>
      </Route>
        <Route path="/about" element={<AboutPage/>}></Route>
      </Routes>
      </div>  
      <AboutIconLink/>
  </Router>
  </FeedbackProvider >
  )
}
export default App
