
window.onload = () => {
  const auth_code = window.location.href
    .slice(("http://www.localhost:4000/premium/?code=").length, window.location.href.length);
  console.log('inside, ', auth_code);


  const data = {
    client_id: '704400876860735569',
    client_secret: '',
    grant_type: 'authorization_code',
    redirect_uri: 'http://www.localhost:4000/premium/',
    code: auth_code,
    scope: 'identify',
  };

//   fetch('https://discordapp.com/api/oauth2/token', {
//     method: 'POST',
//     body: new URLSearchParams(data),
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   })
//     .then(res => res.json())
//     .then(console.log)
//     .error(console.log);

// fetch('https://discord.com/api/oauth2/token', {
//     method: 'POST',
//     body: new URLSearchParams(data),
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   })
//     .then(res => res.json())
//     .then(console.log)
//     .error(console.log);

const accessToken = "fHh8QzvA7qKrV1nxyuLJaBODWgHeAC";
const tokenType = "Bearer";

fetch('https://discordapp.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(response => {
        const { username, discriminator } = response;
        console.log('response :>> ', response);
        console.log('username: ', username);
        console.log('discriminator: ', discriminator);
      })
      .catch(console.error);

fetch('https://discordapp.com/api/users/@me/guilds', {
      headers: {
        authorization: `${tokenType} ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(response => {
        const { username, discriminator } = response;
        console.log('response :>> ', response);
        console.log('username: ', username);
        console.log('discriminator: ', discriminator);
      })
      .catch(console.error);



  const fragment = new URLSearchParams(window.location.hash.slice(1));

  if (fragment.has("access_token")) {
    const accessToken = fragment.get("access_token");
    const tokenType = fragment.get("token_type");
    console.log('accessToken: ', accessToken);
    console.log('tokenType: ', tokenType);

    fetch('https://discordapp.com/api/users/@me', {
      headers: {
        authorization: `${tokenType} ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(response => {
        const { username, discriminator } = response;
        document.getElementById('info').innerText += ` ${username}#${discriminator}`;
        console.log('username: ', username);
        console.log('discriminator: ', discriminator);
      })
      .catch(console.error);
  }
  else {
    console.log('could not log in');
    document.getElementById('login').style.display = 'block';
  }
}