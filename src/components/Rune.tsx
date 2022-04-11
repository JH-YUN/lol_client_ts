// 챔피언 룬

import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';

import { Button, ButtonGroup, Paper, Stack, Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VersionContext } from '../App';

function Rune(props: { runes: any }) {
  const { runes } = props;
  const [selectedRuneIndex, setSelectedRuneIndex] = useState(0);
  const [runeData, setRuneData] = useState(Object());
  const [runeChipData, setRuneChipData] = useState(Object());
  const version = useContext(VersionContext);
  const imgPath = `https://ddragon.canisback.com/img/`;
  const dataPath = `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/runesReforged.json`;
  // 공식 api에는 룬파편 데이터가 없으므로 사설 사이트에서 가져옴
  const chipDataPath = `https://raw.communitydragon.org/${version.substr(0, version.length - 2)}/plugins/rcp-be-lol-game-data/global/ko_kr/v1/perks.json`;

  useEffect(() => {
    fetch(dataPath)
      .then((res) => res.json())
      .then((jsonData) => { setRuneData(jsonData) });

    fetch(chipDataPath)
      .then((res) => res.json())
      .then((jsonData) => { setRuneChipData(jsonData) });
  }, [version])

  const getRuneImg = (runeId: string) => {
    if (_.isEmpty(runeData)) {
      return;
    }
    // 메인 룬 체크
    if (runeId.substring(runeId.length - 2) === '00') {
      return runeData.find((mainRune: any) => mainRune.id === Number(runeId)).icon;
    } else {
      for (const slots of runeData) {
        for (const slot of slots.slots) {
          const res: any = slot.runes.find((rune: any) => rune.id === Number(runeId))
          if (res !== undefined) {
            return res.icon;
          }
        }
      }
    }
  }

  const getRuneChipImg = (runeId: string) => {
    if (_.isEmpty(runeChipData)) {
      return;
    }
    return runeChipData.find((rune: any) => rune.id === Number(runeId)).iconPath.replace('/lol-game-data/assets/v1/', '');
  }

  const handleSelectRune = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedRuneIndex(Number(e.currentTarget.value));
  }



  return (
    <Paper elevation={3} css={css`padding: 1rem;margin: 1rem; text-align:left`}>
      <Typography variant="h5" css={css`margin-bottom:0.5rem;`}>룬</Typography>
      <Stack direction="row">
        <ButtonGroup size="large" aria-label="large button group">
          {!_.isEmpty(runes) ?
            runes.slice(0, 2).map((rune: any, index: number) => <Button onClick={handleSelectRune} variant={selectedRuneIndex === index ? 'contained' : 'outlined'} value={index} key={index} css={css`padding: 5px 30px 5px 30px`}>
              <img src={`${imgPath}` + getRuneImg(rune.summary.mainRune)} css={css`width: 60px;`} alt="룬 이미지" />
              <img src={`${imgPath}` + getRuneImg(rune.summary.subRune)} css={css`width: 30px;`} alt="룬 이미지" />
              <span css={css`margin-left: 10px;`}>{rune.summary.pickRate}</span>
            </Button>)
            : null}
        </ButtonGroup>
      </Stack>
      {!_.isEmpty(runes) ?
        (runes[selectedRuneIndex].detail.map((runeDetail: any) =>
          <Stack direction="row">
            {runeDetail.main.map((rune: string) => <img src={`${imgPath}` + getRuneImg(rune)} css={css`width: 30px;`} alt="룬 이미지" />)}
            {runeDetail.sub.map((rune: string) => <img src={`${imgPath}` + getRuneImg(rune)} css={css`width: 30px;`} alt="룬 이미지" />)}
            {runeDetail.chip.map((rune: string) => <img src={`${imgPath}` + getRuneChipImg(rune)} css={css`width: 30px;`} alt="룬 이미지" />)}
          </Stack>
        ))
        : null}

    </Paper>
  )
}

export default Rune;