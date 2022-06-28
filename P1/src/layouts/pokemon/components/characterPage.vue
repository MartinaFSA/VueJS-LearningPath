<template>
    <h2>Informative file about <span class="capitalize">{{ character.name }}</span> </h2>

    <section>
      <img :src="character.sprites.front_default" :alt="character.name">
      <div>
        <p>Description:</p>
        <p>Apparences:</p>
      </div>
    </section>
</template>

<script>
    export default {
        name: 'Character Page',
        props: {
            id: {
                type: Number,
                required: true
            }
        },
        data() {
          return {
            character: null
          }
        },
        methods: {
            async getCharacter(){
                try {
                    const character = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                    .then(r => r.json());
                    this.character = character
                } catch (error) {
                    this.$router.push('/GuessGame')
                }
            }
        },
        created() {
          this.getCharacter()
        }, 
        watch: {
            id() {
                this.getCharacter()
            }
        }
    }
</script>

<style>
</style>