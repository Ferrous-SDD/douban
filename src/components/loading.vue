<template>
    <div>
        <img :src="'@/img/loading_' + loadingColor + '.gif'" alt="loading">
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

        }
    },

}
</script>

<style>

</style>
