import HomePage from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import CalculatorPage from './pages/CalculatorPage';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <HomePage />
      <CalculatorPage />
      <QuotePage />
    </div>
  );
}

export default App;
