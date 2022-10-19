import axios from 'axios';
import {
	USER_ACTIVITY,
	USER_AVERAGE_SESSIONS,
	USER_MAIN_DATA,
	USER_PERFORMANCE,
} from "../data/data";

/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {object} Response
 */


export const getMockedUserInfos = async (id) => {
	try {
		const res = USER_MAIN_DATA.filter((el) => el.id == id);
		console.log(res[0])
		return res[0];
	} catch (e) {
		console.log(e);
	}
};


/**
 * Get user activity 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const mockUserActivity = async (id) => {
	try {
		const res = await axios.get(`./../../${id}/activity.json`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user average session 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const mockUserAverageSessions = async (id) => {
	try {
		const res = await axios.get(`./../../${id}/averagesessions.json`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};

/**
 * Get user performance 
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const mockUserPerformance = async (id) => {
	try {
		const res = await axios.get(`./../../${id}/performance.json`);
		return res.data;
	} catch (e) {
		console.log(e);
	}
};