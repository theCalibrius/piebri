import { createRoot } from 'react-dom/client';
import './css/App.css';
import App from './components/App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
