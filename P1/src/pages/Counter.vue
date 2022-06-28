<template>
  <h2>Counter app made in section 4</h2>
  <section>
    <p>Click the "+1" button to add clicks</p>
    <p><span>{{counter}}</span> clicks</p>
    <div>
        <button @click="addOne" data-test-id="addOne">+1</button>
        <button @click="restartCounter" data-test-id="restart">Restart</button>
    </div>
  </section>
</template>

<script>
export default {
    name:'CounterApp',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addOne() {
            this.counter++
        },
        restartCounter() {
            this.counter = 0
        }
    }
}
</script>

<style>
    span {
        color: green;
        font-size: 1.2rem;
    }
</style>