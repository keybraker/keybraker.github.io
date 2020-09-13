window.onload = () => {
  const token_type = "Bearer";
  const access_code = window.location.search.slice(6, window.location.href.length);
  const access_token = localStorage.getItem('access_token');
  console.log('window.sessionStorage: ', window.sessionStorage);
  console.log('window.localStorage: ', window.localStorage);
  console.log('access_token :>> ', access_token);
  console.log('access_code :>> ', access_code);
  if (!access_token && !access_code) {
    console.log('passed 1');
    display_button();
  } else if (!access_token && access_code) {
    console.log('passed 2');
    get_access_token(access_code);
  }

  fetch_user_data(token_type, access_token);
  fetch_user_guilds(token_type, access_token);
}

const display_button = () => {
  document.getElementById('login').style.display = 'block';
}

const get_access_token = (access_code) => {
  const data = {
    client_id: '704400876860735569',
    client_secret: '',
    grant_type: 'authorization_code',
    redirect_uri: 'http://www.localhost:4000/premium/',
    code: access_code,
    scope: 'identify',
  };

  fetch('https://discordapp.com/api/oauth2/token', {
    method: 'POST',
    body: new URLSearchParams(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then(res => res.json())
    .then(response => {
      const { access_token, expires_in, refresh_token, scope, token_type  } = response;
      if (access_token !== undefined) {
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('expires_in', expires_in);
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('scope', scope);
        localStorage.setItem('token_type', token_type);
        fetch_user_data(token_type, access_token);
        fetch_user_guilds(token_type, access_token);
        window.location.replace("http://www.localhost:4000/premium/");
      }
    })
    .error(console.log);
}

const fetch_user_data = (token_type, access_token) => {
  console.log(`fetch_user_data: ${token_type} ${access_token}`);
  fetch('https://discordapp.com/api/users/@me', {
    headers: {
      authorization: `${token_type} ${access_token}`
    }
  })
    .then(res => res.json())
    .then(response => {
      const { avatar, discriminator, flags, id, locale, mfa_enabled, public_flags, username } = response;
      if(username !== undefined) {
        console.log('storing data for username: ', username);
        sessionStorage.setItem('avatar', avatar);
        sessionStorage.setItem('discriminator', discriminator);
        sessionStorage.setItem('flags', flags);
        sessionStorage.setItem('id', id);
        sessionStorage.setItem('locale', locale);
        sessionStorage.setItem('mfa_enabled', mfa_enabled);
        sessionStorage.setItem('public_flags', public_flags);
        sessionStorage.setItem('username', username);
      }
    })
    .catch(console.error);
}

const fetch_user_guilds = (token_type, access_token) => {
  fetch('https://discordapp.com/api/users/@me/guilds', {
    headers: {
      authorization: `${token_type} ${access_token}`
    }
  })
    .then(res => res.json())
    .then(response => {
      if(response !== undefined) {
        console.log('response :>> ', response);
        sessionStorage.setItem('guilds', JSON.stringify(response));
      }
    })
    .catch(console.error);
}