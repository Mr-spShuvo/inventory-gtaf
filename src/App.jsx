import Header from './common/Header';
import Layout from './common/Layout';
import Inventory from './pages/Inventory';

function App() {
  return (
    <div className="bg-neutral-200 min-h-screen">
      <Header />
      <Layout title="Inventory">
        <Inventory />
      </Layout>
    </div>
  );
}

export default App;
