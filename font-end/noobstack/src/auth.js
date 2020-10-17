const jwt = require('jsonwebtoken');

class Auth{
    constructor(){
        this.isAuthenticated = false;
    }
    
    checkAuthentication = () => {
        jwt.verify( localStorage.getItem("auth-token"), "dopfjoidhfifndknfkdkfkdkls239878fdfngfg");
    }


}

export default new Auth();


