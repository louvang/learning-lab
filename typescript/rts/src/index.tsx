import ReactDOM from 'react-dom/client';
import Parent from './props/Parent';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>

      <Parent />
    </div>
  );
};

root.render(<App />);
