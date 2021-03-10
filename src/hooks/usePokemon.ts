import useSWR from 'swr';

import { IPokemon } from 'interfaces/pokemon';

const usePokemon = () => {
  const { data } = useSWR<IPokemon>('/pokemon/4');
  return { data: data! };
};

export default usePokemon;
