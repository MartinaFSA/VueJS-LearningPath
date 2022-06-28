<template>
  <h2 v-if="!correctCharacter">Catching a pokemon...</h2>

  <div v-else>
    <h2>Guess the character!</h2>

    <section>
      <Character :pictureId="correctCharacter.id" :showCharacter="showCharacter"/>
    </section>

    <section>
      <NameOptions :characters="characterArr" @selectedOption="selected($event)" />
    </section>

    <section v-if="message">
      <h3>{{ message }}</h3>
      <p>Learn more about this character <router-link :to="'/CharacterPage/' + correctCharacter.id">here</router-link></p>
      <button @click="changeCharacter">Play again</button>
    </section>
  </div>
</template>

<script>
    import NameOptions from '@/layouts/pokemon/components/NameOptions';
    import Character from '@/layouts/pokemon/components/Character';
    import getCharacterOptions from '@/utils/getCharacteOptions';
    
    export default {
        name: 'GuessGame',
        components: {
            NameOptions,
            Character
        },
        data() {
          return {
            characterArr: [],
            correctCharacter: null,
            showCharacter: false,
            message: null
          }
        },
        methods: {
          async mixedCharacters(){
            this.characterArr = await getCharacterOptions();
            this.oneCharacter()
          },
          oneCharacter(){
            const i = Math.floor(Math.random() * 4 );
            this.correctCharacter = this.characterArr[i]
          },
          selected(selectedId){
            this.showCharacter = true;
            if(selectedId === this.correctCharacter.id){
              this.message = '¡You answered correctly! This is ' + this.correctCharacter.name;
            } else {
              this.message = 'Your answer was incorrect. The correct answer is ' + this.correctCharacter.name;
            }
          }, 
          changeCharacter(){
            this.characterArr = [];
            this.message = null;
            this.correctCharacter = null;
            this.showCharacter = false;
            this.mixedCharacters();
          }
        },
        mounted() {
          this.mixedCharacters();
        }
    }
</script>

<style>
  .fade-in {
    animation: fadeIn 0.3s;
    -webkit-animation: fadeIn 0.3s;
    -moz-animation: fadeIn 0.3s;
    -o-animation: fadeIn 0.3s;
    -ms-animation: fadeIn 0.3s;
  }
  @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-moz-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-webkit-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-o-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
  
  @-ms-keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
  }
</style>