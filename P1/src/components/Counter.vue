<template>
  <h2>Counter app made in section 4</h2>
  <section>
    <p>Click the "+1" button to add clicks</p>
    <p>{{counter}} clicks</p>
    <div>
        <button @click="addOne">+1</button>
        <button @click="restartCounter">Restart</button>
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