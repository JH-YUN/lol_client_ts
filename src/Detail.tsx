import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import _ from 'lodash';
import axios from 'axios';

import Profile from './components/Profile';
import Spell from './components/Spell';
import Skill from './components/Skill';
import Item from './components/Item';
import Rune from './components/Rune';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Box, Container, Grid, Paper, TextField } from '@mui/material';

import fs from 'fs';

function Detail(props: { dataApiAddr: string }) {
  const { championId } = useParams();
  const { dataApiAddr } = props;
  const [champion, setChampion] = useState({});
  const [championDetail, setChampionDetail] = useState(Object);
  const [selectedPosition, setSelectedPosition] = useState('');

  const getChampionDetail = async () => {
    try {
      let detail = JSON.parse(fs.readFileSync(`public/data/champions/${championId}.json`, { encoding: 'utf-8' }));
      setChampionDetail(detail);
    } catch (e) {
      setChampionDetail({});
    }

  }

  const getChampionData = async () => {
    const data = await (await axios.get(`${dataApiAddr}data/ko_KR/champion/${championId}.json`)).data.data[championId!];
    setChampion(data);
  }

  useEffect(() => {
    getChampionData();
    getChampionDetail();
  }, [championId, dataApiAddr]);

  if (!championDetail) {
    return <div>Loading...</div>
  } else {
    return (
      <div>
        <Profile champion={champion} championId={championId!} detail={championDetail} selectedPosition={selectedPosition} setSelectedPosition={setSelectedPosition} />
        <Spell spells={!_.isEmpty(championDetail[selectedPosition]) ? championDetail[selectedPosition].spell : []}></Spell>
        <Skill skills={!_.isEmpty(championDetail[selectedPosition]) ? championDetail[selectedPosition].skill : {}} champion={champion}></Skill>
        {!_.isEmpty(championDetail[selectedPosition]) ? <Item items={!_.isEmpty(championDetail[selectedPosition]) ? championDetail[selectedPosition].item : {}}></Item> : null}
        {!_.isEmpty(championDetail[selectedPosition]) ? <Rune runes={championDetail[selectedPosition].rune}></Rune> : null}
      </div>
    )
  }

}

export default Detail;