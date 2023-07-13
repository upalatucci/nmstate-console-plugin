import { useLocation } from 'react-router';

const useURLParams = () => {
  const { search } = useLocation();

  return Object.fromEntries(new URLSearchParams(search));
};

export default useURLParams;
