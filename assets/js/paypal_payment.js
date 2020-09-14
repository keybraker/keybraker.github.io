const selectGuild = (boost_guild_id, boost_guild_name, boost_guild_cost, boost_guild_period) => {
  console.log(`Upgrade ${boost_guild_id} for boost_guild_cost ${boost_guild_cost}`);
  sessionStorage.setItem('boost_guild_id', boost_guild_id);
  sessionStorage.setItem('boost_guild_name', boost_guild_name);
  sessionStorage.setItem('boost_guild_cost', boost_guild_cost);
  sessionStorage.setItem('boost_guild_period', boost_guild_period);
  location.reload();
}