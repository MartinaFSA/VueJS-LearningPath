<template>
  <ul class="ctn_options">
    <li class="capitalize" v-for="character in characters" :key="character.id"
        @click="$emit( 'selectedOption', character.id )">
        {{character.name}}
    </li>
  </ul>
</template>

<script>
export default {
    name: 'NameOptions',
    props: {
        characters: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
    ul {
        list-style-type: none;
        margin: 0px;
        padding: 0px;
    } .ctn_options {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .ctn_options > li {
        background-color: rgb(241, 241, 241);
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        cursor: pointer;
        margin-bottom: 10px;
        text-transform: capitalize;
        min-width: 200px;
        max-width: 350px;
        width: 90vw;
        padding: 0.5rem;
    } .ctn_options > li:hover {
        background-color: rgb(227, 227, 227);
    }
</style>