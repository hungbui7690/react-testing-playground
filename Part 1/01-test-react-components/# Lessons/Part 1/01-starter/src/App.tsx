/*
  Setup 
  - Auth0
    -> "Create Application" button.
    -> Select "Single Page Web Applications" as the application type.
    -> Configure the following settings:
      # Allowed Callback URLs: http://localhost:5173
      # Allowed Logout URLs: http://localhost:5173
      # Allowed Web Origins: http://localhost:5173

  - package.json 
    -> "server": "json-server --watch src/data/db.json --delay 500"


*/

import Layout from './pages/Layout'
import Providers from './providers'

function App() {
  return (
    <Providers>
      <Layout />
    </Providers>
  )
}

export default App
