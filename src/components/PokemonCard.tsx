import { memo } from 'react';

import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import { IPokemon } from 'interfaces/pokemon';
import usePokemonCard from 'styles/usePokemonCard';

type Props = {
  info: IPokemon;
};

const PokemonCard = ({ info }: Props) => {
  const classes = usePokemonCard();
  const { name, sprites } = info;
  return (
    <Card className={classes.root}>
      <CardMedia component="img" image={sprites.front_default} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default memo(PokemonCard);
