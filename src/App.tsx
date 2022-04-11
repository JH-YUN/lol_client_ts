import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link, HashRouter } from 'react-router-dom';
import './App.css';
import MainAppBar from './Appbar';

import List from './List';
import Detail from './Detail';
import axios from 'axios';
import _ from 'lodash';

// 버전 context 생성
export const VersionContext = React.createContext('');

function App() {
  const [version, setVersion] = useState(Object);
  const [ddVer, setDdVer] = useState('');
  const [dataApiAddr, setDataApiAddr] = useState('');
  const [champions, setChampions] = useState(Object);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const version = await (await axios('https://ddragon.leagueoflegends.com/realms/kr.json')).data;
    const ddVer = version.dd;
    const dataApiAddr = `https://ddragon.leagueoflegends.com/cdn/${ddVer}/`;
    const champions = await (await axios(`${dataApiAddr}data/ko_KR/champion.json`)).data.data;

    setVersion(version);
    setDdVer(ddVer);
    setDataApiAddr(dataApiAddr);
    setChampions(_.values(champions));
    setIsLoading(false);
  }

  useEffect(() => {
    // 버전 정보 불러오기
    getData();
  }, [])

  return (
    <div className="App">
      <VersionContext.Provider value={ddVer}>
        <HashRouter>
          <MainAppBar />
          <Routes>
            <Route path="/" element={isLoading ? <h1>Loading...</h1> : <List champions={champions} dataApiAddr={dataApiAddr} />} />
            <Route path="/detail/:championId" element={<Detail dataApiAddr={dataApiAddr} />} />
          </Routes>
        </HashRouter>
      </VersionContext.Provider>
    </div>
  );
}


export default App;
