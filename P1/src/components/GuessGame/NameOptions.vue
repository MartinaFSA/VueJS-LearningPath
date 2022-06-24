<template>
  <ul class="ctn_options">
    <li v-on:click="handleOption">Name1</li>
    <li v-on:click="handleOption">Name2</li>
    <li v-on:click="handleOption">Name3</li>
    <li v-on:click="handleOption">Name4</li>
  </ul>
</template>

<script>
export default {
    name: 'NameOptions',
    props: [

    ]
}
</script>

<style scoped>
    ul {
        list-style-type: none;
    } .ctn_options {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    li {
        background-color: rgb(241, 241, 241);
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        min-width: 200px;
        max-width: 350px;
        width: 90vw;
        padding: 0.5rem;
    } li:hover {
        background-color: rgb(227, 227, 227);
    }

    .options-container {
        display: flex;
        justify-content: center;
    }
</style>