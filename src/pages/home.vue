<template>
    <div class="layout-main">
        <header>
            <div class="title">豆瓣</div>
            <ul class="navs">
                <li>
                    <router-link :to="{name: 'movie'}" style="color: #2384E8;">电影</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'book'}" style="color: #9F7860;">图书</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'status'}" style="color: #E4A813;">广播</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'group'}" style="color: #2AB8CC;">小组</router-link>
                </li>
            </ul>
        </header>

        <section>
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
    header{
        width: 100%;
        height: 47px;
        border-bottom: 1px solid #dfdfdf;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        .title{
            color: #00b600;
            width: 46px;
            height: 28px;
            font-size: 20px;
            font-weight: 600;
            margin-top: 10px;
            margin-left: 20px;
        }
        .navs{
            display: flex;
            list-style: none;
            margin-right: 30px;
            li{
                margin: 0 10px;
            }
        }
    }

    section{
        width: 100%;
        margin-top: 60px;
        .quick-nav{
            // width: 100%;
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            li{
                width: 44%;
                height: 36px;
                background-color: #f6f6f6;
                margin: 5px 3%;
                line-height: 36px;
                font-size: 14px;
            }
        }
        .articles{
            list-style: none;
            li{
                width: 100%;
                border-top: 1px solid #f4f4f4;
                .article-main{
                    width: 100%;
                    height: 100%;
                    .article-main-left{
                        float: left;
                        // border: 1px solid red;
                        .title{
                            font-size: 16px;
                            text-align: left;
                            color: #494949;
                            padding: 0 3%;
                        }
                        .article-content{
                            font-size: 12px;
                            text-align: justify;
                            color: #aaa;
                            line-height: 1.5;
                            padding: 0 3%;
                            height: 52px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                        }
                        &.have-image{
                            width: 70%;
                        }
                    }
                    .image{
                        float: left;
                        width: 25%;
                        height: 116px;
                        // border: 1px solid red;
                        margin-top: 10px;
                        background-size: 100% 100%;
                    }
                }
                .author{
                    font-size: 12px;
                    text-align: left;
                    padding: 10px 3%;
                }
            }
        }
    }
    @import '@/style/main.scss';
</style>
