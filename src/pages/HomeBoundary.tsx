import PokemonCard from 'components/PokemonCard';
import usePokemon from 'hooks/usePokemon';

const HomeBoundary = () => {
  const { data } = usePokemon();

  return (
    <>
      <div>Data: {data?.sprites.front_default}</div>
      <PokemonCard info={data} />
    </>
  );
};

export default HomeBoundary;
