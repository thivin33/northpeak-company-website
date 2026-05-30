import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import SkipLink from './components/layout/SkipLink.jsx';
import StructuredData from './components/seo/StructuredData.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
  return (
    <Router>
      <StructuredData />
      <SkipLink />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
