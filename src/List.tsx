import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Container, Grid, Paper, TextField } from '@mui/material';


function List(props: { champions: any; dataApiAddr: any; }) {
  const { champions, dataApiAddr } = props;
  const spriteImagePath = `${dataApiAddr}img/sprite/`
  const [filteredChampions, setFilteredChampions] = useState(champions);

  const searchChampion = _.debounce((e) => {
    const filtered = champions.filter((el: any) => (el.name.indexOf(e.target.value) >= 0 || el.key.indexOf(e.target.value) >= 0));

    setFilteredChampions(filtered);
  }, 300);

  return (
    <Container>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
        <TextField label="검색" variant="standard" onChange={(e) => searchChampion(e)} />
      </Box>

      <Grid container spacing={3} justifyContent="flex-start" alignItems="flex-start" sx={{ mt: 1 }}>
        {filteredChampions.map((champion: any) => {
          const backgroundImage = `url(${spriteImagePath}${champion.image.sprite})`;
          const backroundPosition = `left -${champion.image.x}px top -${champion.image.y}px`
          const style = css`
            background-image: ${backgroundImage};
            background-position: ${backroundPosition};
            width: 48px;
            height: 48px;
          `
          return <div css={css`margin:0.3rem`}><Link to={`/detail/${champion.id}`}><Paper key={champion.id} css={style}></Paper></Link></div>
        })}
      </Grid>
    </Container>
  )

}

export default List;