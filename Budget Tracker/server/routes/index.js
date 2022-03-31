import expenserouter from './login.js'

// take express app as input and set / as route. 
//it will be resource specific

export default (app) => {
    app.use('/', expenserouter);
}