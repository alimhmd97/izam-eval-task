import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <AppRoutes />
      </div>
    </ErrorBoundary>
  );
}

export default App;
