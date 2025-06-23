const pool = require('../../db');
const queries = require('./session_queries');

const login = (req, res) => {
    const {username, password} = req.body
    console.log("1: " + username + " " + password)

    pool.query(queries.login, [username, password], (error, results) => {
        console.log("2")
        if(error) throw error
        console.log("3: " + results.rows.length)
        if(results.rows.length > 0){
            console.log(req.session)
            console.log(results.rows[0].username)
            req.session.userId = results.rows[0].username
            
            res.status(200).json(req.session)
        }else{
            console.log("5")
            res.status(401).json({message: 'username o passwordword errati'})
        }
    })
}

const logout = (req, res) => {
    if(req.session.userId){
        req.session.destroy()
        res.status(200).json({message: 'logout effettuato'})
    }else{
        res.status(401).json({message:'non sei loggato'})
    }
}

const isLogged = (req, res) => {
    if(req.session.userId){
        res.status(200).json(req.session)
    }else{
        res.status(401).json({message: 'non sei loggato'})
    }
}

module.exports = {
    login,
    logout,
    isLogged,
}