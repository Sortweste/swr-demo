import { CircularProgress } from '@material-ui/core';
import useSWR from 'swr';

import fetcher from 'api/axiosFetcher';
import PokemonCard from 'components/PokemonCard';
import { IPokemon } from 'interfaces/pokemon';

const Home = () => {
  const { data, error } = useSWR<IPokemon>('/pokemon/1', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <CircularProgress />;
  return (
    <>
      <div>Data: {data.sprites.front_default}</div>
      <PokemonCard info={data} />
    </>
  );
};

export default Home;
