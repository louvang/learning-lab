import { Child } from './Child';

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log('clicked')}>
      asdasd
    </Child>
  );
};

export default Parent;
