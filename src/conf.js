
const imgBaseUrl = process.env.NODE_ENV == 'production'? 'path':'apth'

const conf = {
    imgBaseUrl,
}
export default {
    install(vue){
        vue.$conf = vue.prototype.$conf  = conf
    }
}