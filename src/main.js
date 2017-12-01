/*引入vue*/
import Vue from "vue";

/*引入根组件*/
import App from "./App.vue";

/*引入vue-router*/
import VueRouter from "vue-router";
Vue.use(VueRouter);

/*引入vue-resource*/
import VueResource from "vue-resource";
Vue.use(VueResource);

/*引入momentjs时间格式化*/
import moment from "moment";

/*定义全局时间格式化过滤器*/
Vue.filter("dateformat",function(input,dateformatStr){
	return moment(input).format(dateformatStr);
});

/*引入vue-preview(图片预览)*/
import VuePreview from "vue-preview";
Vue.use(VuePreview);

/*引入flexible.js(rem适配)*/
import "../statics/js/flexible.js";

/*导入路由*/
import courseList from "./components/course/courseList.vue";//课程列表
import courseInfo from "./components/course/courseInfo.vue";//课程详情
import myCourse from "./components/course/myCourse.vue";//我的课桌
import personalCenter from "./components/personal/personalCenter.vue";//个人中心
import personalInfo from "./components/personal/personalInfo.vue";//个人信息
import learningRecord from "./components/personal/learningRecord.vue";//学习记录
import myClass from "./components/personal/myClass.vue";//我的班级


/*实例化vue-router*/
var router = new VueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{path:'/',redirect:"/course/courseList"},
		{path:'/course/courseList',component:courseList},
		{path:'/course/courseInfo',component:courseInfo},
		{path:'/course/myCourse',component:myCourse},
		{path:'/personal/personalCenter',component:personalCenter},
		{path:'/personal/personalInfo',component:personalInfo},
		{path:'/personal/learningRecord',component:learningRecord},
		{path:'/personal/myClass',component:myClass}
	]
});

/*引入mint-ui*/
import MintUi from "mint-ui";
/*引入mint-ui样式*/
import "../node_modules/mint-ui/lib/style.min.css";
Vue.use(MintUi);

/*引入mui样式*/
import "../statics/mui/css/mui.css";

/*引入全局css样式*/
import "../statics/css/site.css";

/*创建vue实例对象*/
var vm = new Vue({
	el:"#app",
	data:{},
	methods:{},
	router:router,
	render:c=>c(App)
});
