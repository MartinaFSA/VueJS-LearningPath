const getCharacters = () => {
   const charactersArr = Array.from( Array(15) )
   
   return charactersArr.map((_ , index) => index + 1)
}
export default function getCharacterOptions() {
   const mixedCharacters = getCharacters().sort(()=> Math.random() - 0.5)
   getCharactersNames(mixedCharacters.splice(0,4));
} 

const getCharactersNames = ( [a, b, c, d] = [] ) => {
   console.log(a,b,c,d)
}