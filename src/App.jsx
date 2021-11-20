import { Redirect, Route, Switch } from 'react-router';

import { Header, Layout } from './components';

import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import Inventory from './pages/Inventory';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/dashboard">
          <Layout title="Dashboard">
            <Dashboard />
          </Layout>
        </Route>
        <Route path="/inventory">
          <Layout title="Inventory">
            <Inventory />
          </Layout>
        </Route>
        <Route path="/documents">
          <Layout title="Documents">
            <Documents />
          </Layout>
        </Route>
        <Route path="/settings">
          <Layout title="Settings">
            <Settings />
          </Layout>
        </Route>
        <Route path="*" exact>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
