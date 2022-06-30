import { createStore } from 'vuex'
import counterState from './counter'
// Create a new store instance.
export default createStore({
    modules: {
        counter: counterState
    }
})