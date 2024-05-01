import React from 'react';
import ReactDOM from 'react-dom/client';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el!);

interface FunctionalComponentProps {
  color?: string;
}

const FunctionalComponent = (props: FunctionalComponentProps): JSX.Element => {
  return <div>{props.color}</div>;
};

root.render(<FunctionalComponent color="pink" />);
