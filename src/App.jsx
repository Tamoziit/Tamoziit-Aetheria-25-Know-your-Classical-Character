import { Route, Routes } from 'react-router-dom';
import QuestionPage from './pages/QuestionPage';
import HomePage from './pages/HomePage';
import Topbar from './components/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
      </Routes>
    </div>
  );
}

export default App;