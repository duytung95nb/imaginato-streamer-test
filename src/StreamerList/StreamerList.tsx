import React, { useEffect, useState } from 'react';
import LiveUpdateRankingTable from '../Common/LiveUpdateRankingTable/LiveUpdateRankingTable';
import { Streamer } from '../_Models/Streamer';
import {getStreamerData, setStreamerData} from '../_DataSource/StreamerData';
function getUpdatedStreamers(currentStreamers: Streamer[]): Streamer[] {
    const updatingStreamers = [...currentStreamers];
    // Add points for 5 randoms streamers
    for(let i = 0; i < 5; i++) {
        const streamerIndex = Math.floor(Math.random() * 10);
        const numberToUpdate = Math.floor(Math.random() * 10000);
        updatingStreamers[streamerIndex] = {
            ...updatingStreamers[streamerIndex],
            score: updatingStreamers[streamerIndex].score + numberToUpdate
        }
    }
    return updatingStreamers
}
function StreamerList() {
    const [streamerList, setStreamerList] = useState<Streamer[]>(() => {
        return getStreamerData()
    });
    useEffect(() => {
        const updateStreamerDataSourceInterval = setInterval(() => {
            const streamerDataUpdated = getUpdatedStreamers(getStreamerData());
            setStreamerData(streamerDataUpdated);
            setStreamerList(streamerDataUpdated);
        }, 1000);
        return () => {
            clearInterval(updateStreamerDataSourceInterval);
        }
    }, [])
    return <LiveUpdateRankingTable items={streamerList} />
}
export default StreamerList;