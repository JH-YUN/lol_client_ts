// 챔피언 아이템
import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';

import { Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { VersionContext } from '../App';


function Item(props: { items: any }) {
  const { items } = props;
  const version = useContext(VersionContext);
  const imgPath = `http://ddragon.leagueoflegends.com/cdn/${version}/img/item/`;
  console.log(items);


  return (
    <Paper elevation={3} css={css`padding: 1rem; margin: 1rem; text-align:left`}>
      <Typography variant="h5" css={css`margin-bottom:0.5rem;`}>아이템</Typography>
      <Typography variant="subtitle1" css={css`margin-bottom:0.5rem;`}>코어 아이템</Typography>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        {items.coreItems[0].items.map((item: string, index: number) => { return (index < 2) ? <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {items.coreItems[0].pickRate}</span></div> })}
      </Stack>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        {items.coreItems[1].items.map((item: string, index: number) => { return (index < 2) ? <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {items.coreItems[1].pickRate}</span></div> })}
      </Stack>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        {items.coreItems[2].items.map((item: string, index: number) => { return (index < 2) ? <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {items.coreItems[2].pickRate}</span></div> })}
      </Stack>

      <Typography variant="subtitle1" css={css`margin-bottom:0.5rem;`}>시작 아이템</Typography>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        {items.startItems[0].items.map((item: string, index: number, arr: Array<any>) => { return (index < arr.length - 1) ? <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {items.startItems[0].pickRate}</span></div> })}
      </Stack>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        {items.startItems[1].items.map((item: string, index: number, arr: Array<any>) => { return (index < arr.length - 1) ? <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {items.startItems[1].pickRate}</span></div> })}
      </Stack>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        {items.startItems[2].items.map((item: string, index: number, arr: Array<any>) => { return (index < arr.length - 1) ? <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><ArrowForwardIosIcon /></div> : <div><span><img src={`${imgPath}${item}.png`} alt="아이템 이미지" /></span><span css={css`margin-left:1rem`}>픽률: {items.startItems[2].pickRate}</span></div> })}
      </Stack>

      <Typography variant="subtitle1" css={css`margin-bottom:0.5rem;`}>신발</Typography>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        <div><img src={`${imgPath}${items.shoes[0].item}.png`} alt="아이템 이미지" /><span css={css`margin-left:1rem`}>픽률: {items.shoes[0].pickRate}</span></div>
      </Stack>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        <div><img src={`${imgPath}${items.shoes[1].item}.png`} alt="아이템 이미지" /><span css={css`margin-left:1rem`}>픽률: {items.shoes[1].pickRate}</span></div>
      </Stack>
      <Stack direction="row" css={css`margin-bottom: 0.5rem`}>
        <div><img src={`${imgPath}${items.shoes[2].item}.png`} alt="아이템 이미지" /><span css={css`margin-left:1rem`}>픽률: {items.shoes[2].pickRate}</span></div>
      </Stack>
    </Paper>
  )
}

export default Item;