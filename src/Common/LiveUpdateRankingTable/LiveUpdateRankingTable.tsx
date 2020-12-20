import React from 'react';
import { Streamer } from '../../_Models/Streamer';
import { TableContainer } from './LiveUpdateRankingTable.style';
import RankingTableRow from './RankingTableRow';

const LiveUpdateRankingTable: React.FC<{items:Streamer[]}> = ({ items }) => {
    return <TableContainer>
        {[...items].sort((i1, i2) => i2.score - i1.score)
            .map((item, idx) => <RankingTableRow key={item.userID} order={idx} item={item}/>)}
    </TableContainer>
}
export default LiveUpdateRankingTable;