import pokemonAPI from "@/layouts/pokemon/api/pokemonAPI";

const getCharacters = () => {
   const charactersArr = Array.from( Array(67) )
   
   return charactersArr.map((_ , index) => index + 1)
}
const getCharacterOptions = async() => {
   const mixedCharacters = getCharacters().sort(()=> Math.random() - 0.5)
   const characters = await getCharactersNames(mixedCharacters.splice(0,4));
   return characters;
} 

const getCharactersNames = async( [a, b, c, d] = [] ) => {
   //define petitions
   const promiseCharacters = [
      await pokemonAPI.get(`/${a}`),
      await pokemonAPI.get(`/${b}`),
      await pokemonAPI.get(`/${c}`),
      await pokemonAPI.get(`/${d}`),
   ]

   const [character1, character2, character3, character4] = await Promise.all (promiseCharacters);
   return [
      { name: character1.data.name, id: a},
      { name: character2.data.name, id: b},
      { name: character3.data.name, id: c},
      { name: character4.data.name, id: d}
   ]
}
export default getCharacterOptions;