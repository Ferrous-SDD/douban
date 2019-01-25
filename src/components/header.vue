<template>
    <div class="header-wrapper">
        <div class="header">
            <router-link class="title" :to="{name: 'home'}">豆瓣</router-link>
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
        </div>
    </div>
</template>

<script>
export default {
    name: "top-nav"
}
</script>

<style lang="scss" scoped>
    .header-wrapper{
        height: 47px;
        .header{
            width: 100%;
            height: 47px;
            border-bottom: 1px solid #dfdfdf;
            position: fixed;
            top: 0;
            left: 0;
            display: flex;
            justify-content: space-between;
            background-color: #fff;
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
    }
</style>
