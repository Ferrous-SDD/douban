import axios from 'axios'
let store = {
    namespaced: true,
    state: {
        axios: axios
    },
    actions: {
		queryHomeRecommend({
			commit,
			state,
			dispatch
		},data) {
			let key = "home.queryHomeRecommend";
			// return new Promise((resolve) => {
			// 	return axios.post('http://api-fat.vphotos.cn/vphotossaas/admin/certification/getPhotographerAuthenticationDetails',data)
			// 	.then((json) => {
			// 		resolve(json);
			// 	})
			// })
			return Promise.resolve({
				message:"string",
			    code:0,
		    	data: {
					list: [{
						id: "161096",
						layout: 1,
						source: "hot",
						target: {
							author: {
								avatar: "https://img3.doubanio.com/icon/u181251152-2.jpg",
								name: "花栗鼠Toby",
								verify_type: 0
							},
							cover_url: "https://img1.doubanio.com/view/note/sqs/public/p57420278.jpg",
							desc: "▼ 我永远喜欢小动物！ 这是一篇笨蛋小宠物的自白！ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ 感恩小动物2019 我永远喜欢小动物！ 做梦都想养一只呆呆的小动物 智商不用太高，黏人就好！ 当饲养员真的好开心啊！ 被一个毛茸茸的小生命依赖着的感觉真的太美好了吧 有没有什么方法能治疗动物毛过敏QAQ 跟掉毛生物呆在一起就会打喷嚏喉咙痒 想哭( ´•̥×•̥` ) 我毕生的梦想就是养一猫一狗 希望早日实现 (･ω´･ )",
							id: "703859219",
							kind: 1015,
							photos_count: 0,
							read_count: 3340,
							uri: "https://m.douban.com/note/703859219/",
							url: "https://www.douban.com/note/703859219/",
						},
						theme: null,
						title: "Toby漫画 | 小动物自白"
					},{
						id: "161089",
						layout: 1,
						source: "hot",
						target: {
							author: {
								avatar: "https://img3.doubanio.com/icon/u1933320-40.jpg",
								name: "年高",
								verify_type: 4
							},
							cover_url: "",
							desc: "我们儋州那边管地瓜叫“薯”，当地大部分种的是又面又甜的白薯，叫“蓬心薯”。北方种稻子一年一熟，我们可以做到一年三熟，但为了让土地休息恢复肥力，一般在十月收稻之后种上白薯，白薯在慢慢变凉的天气里积攒糖分，腊月时就可以挖干粉甜面的白薯了。每年入冬后，家里都能收到种地的姑妈们捎来的白薯，用编织袋装着，放在粗陶米缸旁。 家里人对待白薯的态度分为明显两派，以阿公为首的厌恶派是坚决不肯吃白薯及任何的白薯制品。“你不知道，困难时期，我们顿顿是薯，一点米没有。...",
							id: "703915703",
							kind: 1015,
							photos_count: 0,
							read_count: 4154,
							uri: "https://m.douban.com/note/703915703/",
							url: "https://www.douban.com/note/703915703/"
						},
						theme: null,
						title: "烤白薯"
					},{
						id: "161095",
						layout: 1,
						source: "hot",
						target: {
							author: {
								avatar: "https://img1.doubanio.com/icon/u3231669-8.jpg",
								name: "Luke LOU",
								verify_type: 0,
							},
							cover_url: "https://img3.doubanio.com/view/note/sqs/public/p57364043.jpg",
							desc: "（本文发布于「 穷游锦囊 - 大五台山 」，请勿转载。） 推开佛光的殿门 在关于重新发现佛光寺的历史论述中，梁思成的日记总是标记着今天我们认知佛光寺的起点：“那高大的殿门，顿时就给我们打开了。里面宽有七跨，在昏暗中显得更加辉煌无比。在一个很大的平台上，有一尊菩萨的坐像，他的侍者们环他而立，犹如一座仙林。” 这是千年之后，佛光寺重新回归学界视野的第一眼。也是建筑学者终于发现佛光寺的第一眼。 1937年的6月底，正是在这样一个十足特别的时间节点上，梁思成第一次...",
							id: "703640127",
							kind: 1015,
							photos_count: 0,
							read_count: 2557,
							uri: "https://m.douban.com/note/703640127/",
							url: "https://www.douban.com/note/703640127/"
						},
						theme: null,
						title: "佛光寺，通往唐代的朝圣之路"
					}]
				}
			})
		}
        


    },
	mutations: {}
};
export default store;