const Koa = require('koa')
const Router  = require('koa-router')
const mockList = require('./mock/index')

const app = new Koa()
const router = new Router()

//模拟异步请求
async function getRes(fn,ctx) {
    return new Promise(resolve=>{
        setTimeout(()=>{
            const res = fn(ctx);
            resolve(res)
        },1000)
    })
}
//注册mock路由
mockList.forEach(item => {
    const { url, method, response} = item
    //router.get()/router.post()
    router[method](url, async ctx => {
        // const res = response()
        const res = await getRes(response,ctx)
        ctx.body = res 
    })
})

app.use(router.routes())
app.listen(3001)