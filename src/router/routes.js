const routes = [
  // 首页
  {
    path:"/overview",
    name:"overview",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/views/overview'))
        })
    }
  },

  // 登录注册模块
  {
    path:"/register",
    name:"register",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/views/user/register'))
        })
    }
  },
  {
    path:"/login",
    name:"login",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/views/user/login'))
        })
    }
  },
  {
    path:"/forgetPsw",
    name:"forgetPsw",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/views/user/forgetPsw'))
        })
    }
  },

  // redirect
  {
    path: '*',
    redirect: '/login'
  }
]

export default routes