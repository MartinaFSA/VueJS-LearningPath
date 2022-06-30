export const increment = (state) => {
    state.count += 5;
    state.lastMutation = state.lastMutation + 'f';
};
export const setLoading = ( state, val ) => {
    state.isLoading = val
    state.lastMutation = 'setLoading ' + val
}