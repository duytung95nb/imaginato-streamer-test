import React, { useEffect, useState } from 'react';
import { Streamer, StreamerDisplay } from '../../_Models/Streamer';
import { TableContainer } from './LiveUpdateRankingTable.style';
import RankingTableRow from './RankingTableRow';
import { SWAP_ANIMATION_DURATION_IN_SECOND } from '../../Constant/AnimationConstant';

function moveItemToIndex(sourceIdx: number, destIdx: number) {
    const sourceElement = document.getElementById(`TableRow_${sourceIdx}`);
    const destElement = document.getElementById(`TableRow_${destIdx}`);
    if (sourceElement && destElement) {
        sourceElement.style.top = `${destElement.offsetTop}px`;
        setTimeout(() => {
            sourceElement.style.top = '';
        }, SWAP_ANIMATION_DURATION_IN_SECOND * 1000);
    }
};
const LiveUpdateRankingTable: React.FC<{ items: Streamer[] }> = ({ items }) => {
    const [displayItems, setDisplayItems] = useState(() => {
        return [...items].sort((i1, i2) => i2.score - i1.score);
    });
    useEffect(() => {
        const sortedItems = [...items].sort((i1, i2) => i2.score - i1.score);
        const displayItemsWithUpdatedRankingScore = [...displayItems];
        for (let i = 0; i < sortedItems.length; i++) {
            const indexToMoveCurrentItemTo = sortedItems.findIndex(item =>
                item.userID == displayItems[i].userID);
            // No change in order
            if (indexToMoveCurrentItemTo == i) {
                displayItemsWithUpdatedRankingScore[i] = sortedItems[indexToMoveCurrentItemTo];
                continue;
            }
            if (indexToMoveCurrentItemTo > -1) {
                displayItemsWithUpdatedRankingScore[i] = sortedItems[indexToMoveCurrentItemTo];
                moveItemToIndex(i, indexToMoveCurrentItemTo);
            }
            else {
                // remove items from the list (if the array is dynamic)
            }
        }
        setDisplayItems(displayItemsWithUpdatedRankingScore);
        setTimeout(() => {
            setDisplayItems(sortedItems);
        }, SWAP_ANIMATION_DURATION_IN_SECOND * 1000);
    }, [items]);
    return <TableContainer>
        {displayItems
            .map((item, idx) => <RankingTableRow key={item.userID} order={idx} item={item} />)}
    </TableContainer>
}
export default LiveUpdateRankingTable;