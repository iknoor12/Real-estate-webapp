import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PropertyDescription from './Components/PropertyDescription.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/property/modern-luxury-koramangala" replace />} />
        <Route path="/property/:id" element={<PropertyDescription />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;