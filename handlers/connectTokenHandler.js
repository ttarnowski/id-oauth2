const { Request, Response } = require('oauth2-server');

const connectTokenHandler = (oauthServer) => {
    const tokenHandler = async (request, response) => {
        const oauthRequest = new Request(request);
        const oauthResponse = new Response(response);
    
        const token = await oauthServer.token(oauthRequest, oauthResponse);
    
        response.send(token);
    };

    return tokenHandler;
};

module.exports = connectTokenHandler;