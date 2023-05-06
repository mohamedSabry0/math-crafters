import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import './styles/App.scss';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import CalculatorPage from './pages/CalculatorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="quote" element={<QuotePage />} />
      <Route path="calculator" element={<CalculatorPage />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Route>,
  ),
);

export default router;

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     loader: rootLoader,
//     children: [
//       {
//         path: index,
//         element: <HomePage />,
//         loader: homeLoader,
//       },
//     ],
//   },
// ]);
