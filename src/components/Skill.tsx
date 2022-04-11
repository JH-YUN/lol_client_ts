// 챔피언 스킬

import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';

import { Paper, Stack, Typography } from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { VersionContext } from '../App';

function Skill(props: { skills: any, champion: any }) {
  const { skills, champion } = props;
  const version = useContext(VersionContext);
  const imgPath = `http://ddragon.leagueoflegends.com/cdn/${version}/img/spell/`;
  const skillParsing = (skillString: string) => {
    const arr = ['Q', 'W', 'E'];
    const skills = skillString.split('');

    let spellImages: string[] = [];
    for (const skill of skills) {
      const skillIndex = arr.indexOf(skill);
      const spellImage = champion.spells[skillIndex].image.full;

      spellImages.push(spellImage);
    }

    return spellImages;
  }


  return (
    <Paper elevation={3} css={css`padding: 1rem; margin: 1rem; text-align:left`}>
      <Typography variant="h5" css={css`margin-bottom:0.5rem;`}>스킬 순서</Typography>
      <Typography variant="subtitle1" css={css`margin-bottom:0.5rem;`}>첫 3레벨</Typography>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        {!_.isEmpty(skills) && !_.isEmpty(champion) ? skillParsing(skills.first3Order[0].order).map((skillImg: string, index) => {
          return (index < 2) ? <div><span><img src={`${imgPath}${skillImg}`} alt="스킬 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${skillImg}`} alt="스킬 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {skills.first3Order[0].pickRate}</span></div>
        }) : ''}
      </Stack>
      <Stack direction="row">
        {!_.isEmpty(skills) && !_.isEmpty(champion) ? skillParsing(skills.first3Order[1].order).map((skillImg: string, index) => {
          return (index < 2) ? <div><span><img src={`${imgPath}${skillImg}`} alt="스킬 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${skillImg}`} alt="스킬 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {skills.first3Order[1].pickRate}</span></div>
        }) : ''}
      </Stack>

      <Typography variant="subtitle1" css={css`margin-bottom:0.5rem;`}>마스터 순서</Typography>

      {
        !_.isEmpty(skills) && !_.isEmpty(champion) ? skills.masterOrder.slice(0, Math.min(skills.masterOrder.length, 2)).map((skill: any) => {
          return <Stack direction="row" css={css`margin-bottom: 0.5rem`}>{skillParsing(skill.order).map((skillImg, skillImgIndex) => {
            return (skillImgIndex < 2) ? <div><span><img src={`${imgPath}${skillImg}`} alt="스킬 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${skillImg}`} alt="스킬 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {skills.masterOrder[0].pickRate}</span></div>
          })}</Stack>
        }) : null
      }
    </Paper>
  )
}

export default Skill;