import { useContext, useEffect } from 'react';
import { MyContext } from './App';

export function useChild() {
  const [state, setState] = useContext(MyContext);
  useEffect(() => {
    setTimeout(() => {
      setState('Claudia');
    }, 5000);
  }, []);
  return state;
}
