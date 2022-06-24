<template>
  <h2>Guess the character!</h2>
  <section>
    <Character :pictureId="6" :showCharacter="false"/>
  </section>
  <section>
    <NameOptions/>
  </section>
</template>

<script>
    import NameOptions from '@/components/GuessGame/NameOptions';
    import Character from '@/components/GuessGame/Character';
    import getCharacterOptions from '@/utils/getCharacteOptions';
    console.log(getCharacterOptions());

    export default {
        name: 'GuessGame',
        components: {
            NameOptions,
            Character
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