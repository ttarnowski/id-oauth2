const clientData = {
    test: {
        secret: 'secret',
        client: {
            redirectUris: ['http://localhost'],
            grants: ['password']
        }
    }
};
const userData = {
    user: {
        password: 'pass',
        user: {
            name: 'tt'
        }
    }
};
const tokenData = { access: [], refresh: [] };

const getClient = (clientId, clientSecret) => {
    if (!clientData[clientId] || clientData[clientId].secret !== clientSecret) {
        return false;
    }

    return clientData[clientId].client;
};

const getUser = (username, password) => {
    if (!userData[username] || userData[username].password !== password) {
        return false;
    }

    return userData[username].user;
};

const saveToken = (token, client, user) => {
    const accessToken = {
      access_token: token.accessToken,
      expires_at: token.accessTokenExpiresAt,
      scope: token.scope,
      client_id: client.id,
      user_id: user.id
    };

    const refreshToken = {
      refresh_token: token.refreshToken,
      expires_at: token.refreshTokenExpiresAt,
      scope: token.scope,
      client_id: client.id,
      user_id: user.id
    };

    tokenData.access.push(accessToken);
    tokenData.refresh.push(refreshToken);

    return {
        accessToken: accessToken.access_token,
        accessTokenExpiresAt: accessToken.expires_at,
        refreshToken: refreshToken.refresh_token,
        refreshTokenExpiresAt: refreshToken.expires_at,
        scope: accessToken.scope,
        client: {id: accessToken.client_id},
        user: {id: accessToken.user_id}
    };
};

const validateScope = (user, client, scope) => {    
    return scope;
};

module.exports = {
    getClient, getUser, saveToken, validateScope
};
