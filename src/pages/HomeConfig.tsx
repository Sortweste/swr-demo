import { CircularProgress } from '@material-ui/core';
import useSWR from 'swr';

import PokemonCard from 'components/PokemonCard';
import { IPokemon, IResponse } from 'interfaces/pokemon';

const HomeConfig = () => {
  const { data, error } = useSWR<IResponse>('/pokemon');
  const { data: pokemon } = useSWR<IPokemon>(() => `${data?.results[1].url}`);

  if (error) return <div>Failed to load</div>;
  if (!pokemon) return <CircularProgress />;
  return (
    <>
      <div>Data: {pokemon.sprites.front_default}</div>
      <PokemonCard info={pokemon} />
    </>
  );
};

export default HomeConfig;
