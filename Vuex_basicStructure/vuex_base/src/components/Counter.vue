<template>
    <div>
        <h1>valor: {{ $store.state.counter.count }}</h1>
        <h1>valor: {{ countComputed }}</h1>
        <h2>valor: {{count}}</h2>
        <p>{{lastMutation}}</p>
        <button @click="increment">+5</button>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Counter-app',
    computed: {
        countComputed(){
            return this.$store.state.counter.count;
        },
        ...mapState('counter', ['count', 'lastMutation'])
    },
    methods:{
        increment() {
            this.$store.commit('counter/increment');
        }
    }
}
</script>
