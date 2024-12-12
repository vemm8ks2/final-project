import { Route, Routes } from 'react-router-dom';
import CustomerRouters from './routes/CustomerRouters';
import AdminRouters from './routes/AdminRouters';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>
    </div>
  );
}

export default App;
