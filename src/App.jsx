import Home from  './components/home';
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div>
      <DataProvider>
        <Home />
      </DataProvider>
    </div>
  )
}

export default App
