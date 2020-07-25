window.onload = () => {
  console.log('inside');
  const fragment = new URLSearchParams(window.location.hash.slice(1));
  console.log('window: ', window);
  console.log('window.location: ', window.location);
  console.log('window.location.hash: ', window.location.hash);
  console.log('fragment: ', fragment);

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