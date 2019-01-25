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
            </ul>
        </section>
    </div>
</template>

<script>
import RouteComponent from '@/libs/route-component';
export default {
    mixins: [
        RouteComponent
    ],
    data() {
        return {
            recommendData: null,
        }
    },
    methods: {
        async didMounted() {
            this.recommendData = await this.getRecommended();
            console.log(this.recommendData)
        },
        async getRecommended() {
            let json = await this.$store.dispatch('home/queryHomeRecommend',{
                // 请求参数
            })
            if(json.code != 0) {
                // this.msg(json.message);
                return;
            }
            return json.data;
        }
    }   
}
</script>

<style lang="scss" scoped>
    @import '@/style/main.scss';
    @import '@/style/pages/home.scss';
</style>
