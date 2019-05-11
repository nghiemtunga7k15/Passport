import AddBlog  from './../components/AddBlog.vue';
import Link from './../components/LinkRouter.vue';
import RouterParams from './../components/RouterParams.vue';
export default[
	{path:'/add' , component:AddBlog},
	{path:'/link' , component:Link},
	{path:'/demo/:id' , component:RouterParams},
]