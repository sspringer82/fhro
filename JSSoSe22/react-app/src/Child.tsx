import { useChild } from './useChild';

function Child() {
  const state = useChild();
  return <div>{state}</div>;
}

export default Child;
