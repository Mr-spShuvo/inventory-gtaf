import { ArrowDownIcon } from './assets/icons';
import colors from './data/colors.json';

function App() {
  return (
    <div className="bg-neutral-900 flex items-center justify-center h-screen">
      <ArrowDownIcon fill={colors.primary[500]} width={48} height={48} />
    </div>
  );
}

export default App;
