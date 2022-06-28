<template>
    <h2>Decider app made in section 5</h2>
    <section id="decider">
      <img v-if="img" :src="img" alt="bg">
      <div class="bg-dark"></div>

      <div class="indecision-container">
          <input
              v-model="question"
              type="text"
              placeholder="Write your question">
          <p>Remember to end the question with an interrogation mark "?"</p>

          <div v-if="isValidQuestion">
              <h2>{{ question }}</h2>
              <h1>{{ answer }}</h1>
          </div>
      </div>
    </section>
</template>

<script>
export default {
    name: 'Decider',
    data() {
      return {
        question: null,
        answer: null,
        img: null,
        isValidQuestion: false
      }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Thinking...'
            const { answer, image } = await fetch('https://yesno.wtf/api')
              .then( res => res.json() )

            this.answer = answer + '!';
            this.img = image;
        }
    },
    watch: {
        question( value ){
            this.isValidQuestion = false
            
            if( !value.includes('?') ) return
              this.isValidQuestion = true
              this.getAnswer()
        }
    }

}
</script>

<style>
    #decider img, .bg-dark {
        height: calc(100vh - 65px);
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        bottom: 0px;
        width: 100vw;
    } .bg-dark {
        background-color: rgba(0, 0, 0, 0.468);
    }
    .indecision-container {
        position: relative;
        z-index: 10;
    }
    
    #decider input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        margin-bottom: 20px;
        border: none;
    } #decider input:focus {
        outline: none;
    } #decider p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    } #decider h1, #decider h2 {
        color: white;
        text-transform: capitalize;
    } #decider h2 {
        margin-top: 150px;
    }

</style>