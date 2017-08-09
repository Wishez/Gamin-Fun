import { SET_SERVER_STATUS } from './../constants/actionTypes.js';


const setServerStatus = ({
	site,
	serverData
}) => ({
	type: SET_SERVER_STATUS,
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
		console.log('server status =====>', status);
		
		const serverData = {
			amountPeople: status.players.now,
			totalPeople: status.players.max,
			onlineStatus: status.online,
			nameServer: status.server.name
		};

		dispatch(setServerStatus(site, serverData));

	});
};