
export interface Streamer {
    userID: string;
    displayName: string;
    picture: string;
    score: number;
}
export interface StreamerViewModel extends Streamer {
    currentOrder: number;
}