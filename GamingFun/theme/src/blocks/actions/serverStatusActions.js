import { SET_SERVER_STATUS } from './../constants/actionTypes.js';


const setServerStatus = (
	site,
	serverData
) => ({
	type: SET_SERVER_STATUS,
	site,
	serverData
});


export const  tryGetServerStatus = site => dispatch => {
	return MinecraftAPI.getServerStatus('gamingfun.ru', {
		port: 25565
	}, (err, status) => {
		if (err) {
			console.log(err);
			return;
		}
	
		const serverData = {
			amountPeople: status.players.now,
			totalPeople: status.players.max,
			isOnline: status.online,
			serverName: status.motd
		};
	
		dispatch(setServerStatus('minecraft', serverData));

	});
};