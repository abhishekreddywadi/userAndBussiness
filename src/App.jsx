import Routing from './routes/Route'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Initialize FontAwesome
library.add(faFacebook, faSkype, faTwitter);

function App() {

  return (
    <Routing />
  )
}

export default App
