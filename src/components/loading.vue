<template>
    <div>
        <img :src="'../img/loading_grey.gif'" alt="loading">
    </div>
</template>

<script>
export default {
    name: "loading",
    props: {
        loadingColor: {
            type: String,
            default: "grey"
        }
    },
    data() {
        return {
            imgUrlGreen: "../img/loading_green.gif",
            imgUrlGrey: "../img/loading_grey.gif",
        }
    },

}
</script>

<style>

</style>
