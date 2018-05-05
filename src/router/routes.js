const routes = [
  // 首页
  {
    path:"/overview",
    name:"overview",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/pages/overview'))
        })
    }
  },

  // 登录注册模块
  {
    path:"/register",
    name:"register",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/pages/user/register'))
        })
    }
  },
  {
    path:"/login",
    name:"login",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/pages/user/login'))
        })
    }
  },
  {
    path:"/forgetPsw",
    name:"forgetPsw",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/pages/user/forgetPsw'))
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