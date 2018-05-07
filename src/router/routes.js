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
    },
    meta: {
        hideSliderTab: true,
        hideMainHeader: true,
        hideMainFooter: true
    }
  },
  {
    path:"/login",
    name:"login",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/views/user/login'))
        })
    },
    meta: {
        hideSliderTab: true,
        hideMainHeader: true,
        hideMainFooter: true
    }
  },
  {
    path:"/forgetPsw",
    name:"forgetPsw",
    component: (resolve) =>{
        require.ensure([], ()=> {
            resolve(require('@/views/user/forgetPsw'))
        })
    },
    meta: {
        hideSliderTab: true,
        hideMainHeader: true,
        hideMainFooter: true
    }
  },

  // redirect
  {
    path: '*',
    redirect: '/login'
  }
]

export default routes