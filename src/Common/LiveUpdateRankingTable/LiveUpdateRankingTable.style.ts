import styled from "styled-components";
import { SWAP_ANIMATION_DURATION_IN_SECOND } from "../../Constant/AnimationConstant";
import { TABLE_ROW_HEIGHT_IN_PX } from "../../Constant/SizeConstant";

const TableContainer = styled.div<{ height?: string }>`
    height: ${props => props.height ? props.height : '500px'};
    background-color: #f7f5f6;
    position: absolute;
    width: 90%;
    border-radius: 10px;
    left: 50%;
    top: 30px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
`;
const TableRow = styled.div<{ order: number }>`
    width: 90%;
    height: ${TABLE_ROW_HEIGHT_IN_PX}px;
    position: absolute;
    top: ${props => props.order * TABLE_ROW_HEIGHT_IN_PX}px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: all ${SWAP_ANIMATION_DURATION_IN_SECOND}s ease 0s;
    transition: all ${SWAP_ANIMATION_DURATION_IN_SECOND}s ease 0s;
    border-bottom: 1px solid #efeded;
`;
const OrderDisplay = styled.div<{order: number}>`
    width: 22px;
    text-align: center;
    border-radius: 50%;
    height: 22px;
    line-height: 22px;
    margin-right: 8px;
    color: #fff;
    font-size: 14px;
    background-color: ${props => {
        switch(props.order) {
            case 0: return '#f54545';
            case 1: return '#ff8547';
            case 2: return '#ffac38';
            default: return '#8eb9f5';
        }
    } };
`;
const ItemImage = styled.div`
    background-color: #e5e5e5;
    background-size: 100%;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(255,255,255);
    border-image: initial;
`;
const ItemDisplayText = styled.div`
    color: #363336;
    margin-left: 8px;`;
const ItemRankingScore = styled.div`
    -webkit-box-flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: right;
    color: #e46a86;`;
export {
    TableContainer,
    TableRow,
    OrderDisplay,
    ItemImage,
    ItemDisplayText,
    ItemRankingScore
}