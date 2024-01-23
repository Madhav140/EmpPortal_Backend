const jsonserver = require('json-server')


const employeeserver = jsonserver.create()

const router = jsonserver.router('db.json')

const middleware = jsonserver.defaults()

employeeserver.use(middleware)

employeeserver.use(router)

const port = 3000 || process.env.PORT  

employeeserver.listen(port,()=>{
    console.log(`employeeserver started at port number ${port} and ready to fetch request`);
})