// 챔피언 프로필
import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import { Button, ButtonGroup, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VersionContext } from '../App';

function Profile(props: { championId: string, champion: any, detail: any, selectedPosition: string, setSelectedPosition: any }) {
  const { champion, championId, detail, selectedPosition, setSelectedPosition } = props;
  const version = useContext(VersionContext);
  const championImgPath = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;

  const handlePositionButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedPosition(e.currentTarget.value);
  }

  useEffect(() => {
    if (!_.isEmpty(detail)) {
      setSelectedPosition(detail.position[0]);
    }
    // setchampionDetail(detail);
  }, [detail]);

  // useEffect(() => {
  //   // setchampionDetail(detail);
  // }, [position]);

  return (
    <Paper elevation={3} css={css`padding: 1rem; margin: 1rem`}>
      <Stack direction="row" spacing={4}>
        <img src={`${championImgPath}${championId}.png`} alt="챔피언 프로필" />
        <Stack>
          <Stack direction="column" justifyContent="space-between" css={css`height:100%`}>
            <h1 css={css`margin:0px`}>{champion.name}</h1>
            <ButtonGroup size="large" aria-label="large button group">
              {Array.isArray(detail.position) ? detail.position.map((position: any) => <Button variant={selectedPosition === position ? 'contained' : 'outlined'} onClick={handlePositionButton} value={position}>{position}</Button>) : <div>포지션 로딩안됨</div>}
            </ButtonGroup>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default Profile;