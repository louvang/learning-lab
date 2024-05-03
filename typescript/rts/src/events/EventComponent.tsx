const EventComponent: React.FC = () => {
  // Type inference doesn't apply to e when defined before being assigned to onChange
  // You will need to annotate e with React.ChangeEventHandler<HTMLInputElement>
  // You can find the type if your onChange function is written inline (just hover 'e')
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input onChange={onInputChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
