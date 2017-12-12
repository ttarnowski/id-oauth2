const { Request, Response } = require('oauth2-server');

const connectAuthenticationHandler = (oauthServer) => {
    const authenticationHandler = async (request, response, next) => {
        const oauthRequest = new Request(request);
        const oauthResponse = new Response(response);
    
        const token = await oauthServer.authenticate(request, response);
    };

    return authenticationHandler;
};


module.exports = connectAuthenticationHandler;