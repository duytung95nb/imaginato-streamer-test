import React, { useEffect, useState } from 'react';
import { Streamer, StreamerViewModel } from '../../_Models/Streamer';
import { TableContainer } from './LiveUpdateRankingTable.style';
import RankingTableRow from './RankingTableRow';
import { SWAP_ANIMATION_DURATION_IN_SECOND } from '../../Constant/AnimationConstant';

const LiveUpdateRankingTable: React.FC<{ items: Streamer[] }> = ({ items }) => {
    const [displayItems, setDisplayItems] = useState<StreamerViewModel[]>(
        (): StreamerViewModel[] => {
        return [...items].sort((i1, i2) => i2.score - i1.score)
            .map((item, index) => { return { ...item, currentOrder: index } });
    });
    useEffect(() => {
        const sortedItems: StreamerViewModel[] = [...items].sort((i1, i2) => i2.score - i1.score)
            .map((item, index) => { return {...item, currentOrder: index}});
        const displayItemsWithUpdatedRankingScore = [...displayItems];
        for (let i = 0; i < sortedItems.length; i++) {
            const indexToMoveCurrentItemTo = sortedItems.findIndex(item =>
                item.userID === displayItems[i].userID);
            if(indexToMoveCurrentItemTo == -1) {
                // remove item
                continue;
            }
            displayItemsWithUpdatedRankingScore[i] = sortedItems[indexToMoveCurrentItemTo];
        }
        setDisplayItems(displayItemsWithUpdatedRankingScore);
        setTimeout(() => {
            setDisplayItems(sortedItems);
        }, SWAP_ANIMATION_DURATION_IN_SECOND * 1000);
    }, [items]);
    return <TableContainer>
        {displayItems
            .map(item => <RankingTableRow key={item.userID} order={item.currentOrder}
                item={item} />)}
    </TableContainer>
}
export default LiveUpdateRankingTable;