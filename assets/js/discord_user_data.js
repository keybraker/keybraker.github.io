window.onload = () => {
  const id = sessionStorage.getItem('id');
  const avatar = sessionStorage.getItem('avatar');
  const username = sessionStorage.getItem('username');
  const url = `https://cdn.discordapp.com/avatars/228666893068795905/675ac2df6ee0c6f21f4375a26f2a4600.png`
  console.log('\n\nurl :>> ', url);
  console.log('\n\nusername :>> ', username);
  document.getElementById("avatar_img").src = url;
  document.getElementById("username").innerHTML = username;
}