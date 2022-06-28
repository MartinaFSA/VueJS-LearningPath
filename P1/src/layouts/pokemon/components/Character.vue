<template>
    <div class="ctn_characterImg">
        <img v-if="showCharacter" class="characterImg fade-in" :src="imgSrc" alt="Marvel Character Silhouette">
        <img v-else class="characterImg hidden-character" :src="imgSrc" alt="Marvel Character Silhouette">
    </div>
</template>

<script>
export default {
    name: 'Character',
    props: {
        pictureId: {
            type: Number,
            required: true
        },
        showCharacter: {
            type: Boolean,
            required: true,
            default: false
        }
    }, computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pictureId }.svg`
        }
    }
}
</script>

<style scoped>
    /*scoped indicates that these styles are not global*/
    .ctn_characterImg {
        position: relative;
        padding: 50px 20px;
    }
    .characterImg {
        width: 80vw;
        max-width: 900px;
        max-height: 40vh;
        height: auto;
        object-fit: contain;
    } .hidden-character {
        position: relative;
        z-index: 5;
        filter: brightness(0);
        user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
    }
</style>