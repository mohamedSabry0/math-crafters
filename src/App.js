// import HomePage from './pages/HomePage';
// import QuotePage from './pages/QuotePage';
// import CalculatorPage from './pages/CalculatorPage';
import './styles/App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
