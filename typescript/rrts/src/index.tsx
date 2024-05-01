import React from 'react';
import ReactDOM from 'react-dom/client';

interface AppProps {
  color?: string;
}

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

class App extends React.Component<AppProps> {
  render() {
    return <div>{this.props.color}</div>;
  }
}

root.render(<App />);
