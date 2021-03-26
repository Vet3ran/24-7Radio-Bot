module.exports = async (client) => {
  console.log(`New Client Logged In As ${client.user.username}`);
  await client.user.setActivity("24/7 Radio | SERVER NAME",{ type: 'LISTENING'});
};