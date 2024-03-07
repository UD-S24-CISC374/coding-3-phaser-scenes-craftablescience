export default interface State {
    liked: number;
    disliked: number;
}

export const STATE_DEFAULT: State = {
    liked: 0,
    disliked: 0,
};
