import Home from  './components/home';
import { useState, useEffect } from 'react';
import jsonData from './data.json';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div>
        <Home data={data} setData={setData} />
    </div>
  )
}

export default App
