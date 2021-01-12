import './App.css'
import './global.css'
import UserContextProvider from './contexts/UserContext'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MenuItem from './components/MenuItem'
import {PrivateRoute} from './components/PrivateRoute'
import Cart from './components/Cart'
import Home from './pages/Home'
import ReactTooltip from 'react-tooltip'

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <div className="container">
          <aside className="menu">
            <MenuItem title="Loja" icon="fa fa-shopping-bag" link="/" />
            <MenuItem title="Pedidos" icon="fa fa-motorcycle" link="/orders" />
            <MenuItem title="Meu Perfil" icon="fa fa-user" link="/profile" />
          </aside> 
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/orders" component={() => <h1>Pedidos</h1>} />
              <PrivateRoute path="/profile" component={() => <h1>Perfil</h1>} /> 
            </Switch>
          </div>
          <Cart />
          <ReactTooltip id="tip-top" place="top" effect="solid" />
          <ReactTooltip id="tip-right" place="right" effect="solid" />
        </div>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App;
