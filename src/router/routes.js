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

  {
    path: '/test1',
    name: 'test1',
    component: (resolve) =>{
        require.ensure([], () => {
            resolve(require('@/views/order/test1'))
        })
    }
  },
  {
    path: '/test2',
    name: 'test2',
    component: (resolve) =>{
        require.ensure([], () => {
            resolve(require('@/views/order/test2'))
        })
    }
  },
  {
    path: '/test3',
    name: 'test3',
    component: (resolve) =>{
        require.ensure([], () => {
            resolve(require('@/views/order/test3'))
        })
    }
  },
  {
    path: '/test4',
    name: 'test4',
    component: (resolve) =>{
        require.ensure([], () => {
            resolve(require('@/views/order/test4'))
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