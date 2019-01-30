<template>
    <div class="layout-main">
        <header>
            <top-nav></top-nav>
            <ul class="quick-nav">
                <li>
                    <router-link :to="{name: 'movie'}">影院热映</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'mine'}">我的</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'time'}">豆瓣时间</router-link>
                </li>
                <li>
                    <a href="javascript:;">使用豆瓣APP</a>
                </li>
            </ul>
        </header>

        <section>
            <ul class="articles" v-if="recommendData">
                <li v-for="item in recommendData.list" :key="item.id">
                    <router-link :to="{name: 'note', query: {id: '123'}}">
                        <div class="article-main clearfix">
                            <div class="article-main-left" :class="{'have-image': item.target.cover_url}">
                                <h3 class="title">{{item.title}}</h3>
                                <p class="article-content">{{item.target.desc}}</p>
                            </div>
                            <div v-if="item.target.cover_url">
                                <div class="image" :style="{backgroundImage: 'url(' + item.target.cover_url + ')'}"></div>
                            </div>
                        </div>
                        <div class="author">{{item.target.author.name}}</div>
                    </router-link>
                </li>
                <infinite-loading ref="infiniteLoading" @infinite="onInfinite">
                    <loading slot="spinner"></loading>
                </infinite-loading>
            </ul>
            <loading></loading>
        </section>
    </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import RouteComponent from '@/libs/route-component';
export default {
    mixins: [
        RouteComponent
    ],
    components: {
        InfiniteLoading
    },
    data() {
        return {
            recommendData: null,
            date: "",
        }
    },
    methods: {
        async didMounted() {
            this.date = new Date();
            let params = {
                date: this.transformDate()
            };
            this.recommendData = await this.getRecommended(params);
            console.log(this.recommendData);
        },
        async getRecommended(params) {
            let json = await this.$store.dispatch('home/queryHomeRecommend',params);
            if(json.code != 0) {
                // this.msg(json.message);
                return;
            }
            return json.data;
        },
        transformDate() {
            let month = this.date.getMonth() + 1,
                year = this.date.getFullYear(),
                day = this.date.getDate();
            return year + "-" + month + "-" + day;
        },
        async onInfinite() {
            console.log(this.date)
            this.date = new Date(this.date.getTime() - 24*60*60*1000);
            console.log(this.date)
            // this.recommendData = await this.getRecommended(params);
            this.$refs.infiniteLoading.$emit('$infiniteLoading:loaded');

        }
    }   
}
</script>

<style lang="scss" scoped>
    @import '@/style/main.scss';
    @import '@/style/pages/home.scss';
</style>
