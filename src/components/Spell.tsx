// 챔피언 스펠 & 스킬
import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';

import { Paper, Stack, Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VersionContext } from '../App';


function Spell(props: { spells: Array<string> }) {
  const version = useContext(VersionContext);
  const imgPath = `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/`;
  const { spells } = props;

  return (
    <Paper elevation={3} css={css`padding: 1rem; margin: 1rem`}>
      <Typography variant="h5" css={css`text-align:left; margin-bottom:0.5rem;`}>소환사 주문</Typography>
      <Stack>
        <Stack direction="row" css={css`margin-bottom:0.5rem`}>
          <img src={`${imgPath}${spells[0]}.png`} alt="소환사 주문" />
          <img src={`${imgPath}${spells[1]}.png`} alt="소환사 주문" />
        </Stack>
        <Stack direction="row">
          <img src={`${imgPath}${spells[2]}.png`} alt="소환사 주문" />
          <img src={`${imgPath}${spells[3]}.png`} alt="소환사 주문" />
        </Stack>
      </Stack>

    </Paper>
  )
}

export default Spell;