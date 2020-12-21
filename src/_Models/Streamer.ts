
export interface Streamer {
    userID: string;
    displayName: string;
    picture: string;
    score: number;
}
export interface StreamerDisplay extends Streamer {
    currentOrder: number;
}