import state from './state';
import * as mutations from './mutations';
const counterState = {
    namespaced: true,
    state: state,
    mutations: mutations
}
export default counterState;