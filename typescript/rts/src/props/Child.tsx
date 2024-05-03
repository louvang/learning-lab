interface ChildProps {
  color: string;
  onClick: () => void; // return a function
  children?: React.ReactNode;
}

// TypeScript does not recognize this as a function component
// You can use this if you do not need to access propTypes, contextTypes, ETC
export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// Using React.FC<T> will explicitly tell TypeScript it is a function component
// Function components have properties like propTypes, contextTypes
// React.FC<T> is short for React.FunctionComponent<T>
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
