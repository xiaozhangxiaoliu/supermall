var express = require('express');

const app = express();

const parse = require('body-parser');


const jwt = require('jsonwebtoken');


var mongoose = require('mongoose');

mongoose.connect('mongodb://zxw:123456@localhost:27017/super', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('数据库连接成功');
}).catch(() => {
    console.log('数据库连接失败');
})

const Users = mongoose.model('Users', new mongoose.Schema({
    name: {
        type: String,

    },
    password: {
        type: Number,
    }
}))
app.use(parse.urlencoded({ extended: false }))
app.use(parse.json())
app.use(
    (req, res, next) => {
        //允许那个客户端可以进行访问 '*' 代表所有客户端都可以进行访问
        res.header('Access-Control-Allow-Origin', 'http://localhost:8001');
        //允许客户端使用那些方式请求
        res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With,')
        res.header('Access-Control-Allow-Methods', 'POST,GET');
        // res.setHeader('Content-Type', 'application/json;charset=utf-8');
        //允许客户端发送跨域请求时携带cookie信息
        next();
    }
)
const secretKey = 'zxw';
app.post('/zc', async(req, res) => {
    let { username, userpaw } = req.body;
    let user = await Users.findOne({ name: username });
    if (user) {
        res.send({
            message: '该用户已经存在'
        })
    } else {
        let newUser = await Users.create({ name: username, password: userpaw });
        res.send({
            message: '注册成功'
        })

    }
})
app.post('/login', async(req, res) => {
    let { username, userpaw } = req.body
    let user = await Users.findOne({ name: username });
    if (user) {
        if (user.password == userpaw) {
            console.log('登录成功');
            const tokenStr = jwt.sign({ username: user.name }, secretKey)
            res.send({
                status: 200,
                message: '登录成功',
                token: tokenStr
            })
        } else {
            res.send({
                status: 200,
                message: '密码错误',

            })
        }
    } else {
        res.send({
            status: 200,
            message: '用户名不存在',

        })

    }
    console.log(user);

})

app.listen(3000);
console.log('服务器连接成功');