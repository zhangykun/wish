const config = {
    DEBUG: true,
    MYSQL:{
        host:'localhost',
        database:'wish',
        username:'root',
        password:'root'
    }
};
if(process.env.NODE_ENV === 'production'){
    config.MYSQL = {
        host:'',
        database:'',
        username:'',
        password:''
    }
}
module.exports = config