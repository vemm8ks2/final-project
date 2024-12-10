import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './Routes/CustomerRouters';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
