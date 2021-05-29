const Koa = require('koa')
const bodyParse = require('koa-bodyparser')
const json = require('koa-json')
const Router = require('koa-router')
const respond = require('koa-respond')
const cors = require('koa-cors')
const app = new Koa()
const router = new Router()

const data = [
    {
        "id": "1",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "2",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Pree",
        "order":"2"
    },
    {
        "id": "3",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "4",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    },{
        "id": "5",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "6",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    },{
        "id": "7",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "8",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    },{
        "id": "9",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "10",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    },{
        "id": "11",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "12",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    },{
        "id": "13",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "14",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    },{
        "id": "15",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "16",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    },{
        "id": "17",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "18",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    },{
        "id": "19",
        "label": "Best Seller xyz",
        "file": "abcd",
        "path": "abcd.png",
        "plan": "Pro",
        "order":"1"
    },
    {
        "id": "20",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    }
    ,
    {
        "id": "21",
        "label": "Best Seller",
        "file": "abc",
        "path": "abc.png",
        "plan": "Free",
        "order":"2"
    }
]

const plan ={
    "FreePlan":[
        {
            "name": "Online store",
            "checked": true
        },
        {
            "name": "Messenger",
            "checked": false
        },
        {
            "name": "Online store",
            "checked": true
        },
        {
            "name": "Messenger",
            "checked": false
        }
    ],
    "ProPlan":[
        {
            "name": "Facebook",
            "checked": true
        },
        {
            "name": "Messenger",
            "checked": false
        }
    ],
    "AdvancePlan":[
        {
            "name": "Zalo",
            "checked": true
        },
        {
            "name": "Messenger",
            "checked": false
        }
    ]
}

app.use(cors())
app.use(json())
app.use(bodyParse())
app.use(respond())
app.use(router.routes()).use(router.allowedMethods())


const port = 3001

router.get('/plan', async ctx => ctx.body = await plan)
router.get('/label', async ctx => ctx.body = await data)
router.post('/plan', async ctx => {
    try{
        const newPlan = await ctx.request.body
        
        plan.FreePlan = newPlan.FreePlan
        plan.ProPlan = newPlan.ProPlan
        plan.AdvancePlan = newPlan.AdvancePlan

        ctx.body= {"mess": "change plan success"}
    }catch{
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
})

router.post('/label',async ctx =>{
    try{
        const label = await ctx.request.body
        
        const index = data.findIndex(item =>{
            return item.id === label.id
        })
        if(label.label) data[index].label = label.label
        if(label.file) data[index].file = label.file
        if(label.path) data[index].path = label.path
        if(label.plan) data[index].plan = label.plan
        
        console.log(data[index])
        
        ctx.body = {"mess": "Edit success"}
    }catch(err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
} )


app.listen(port, ()=>{
    console.log(`Server is running on ${port} `);
})