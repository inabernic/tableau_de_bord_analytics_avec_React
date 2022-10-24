//import axios from 'axios';
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
		let res = USER_MAIN_DATA.filter((el) => el.id == id);
		//console.log(res[0])
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
export const mockedUserActivity = async (id) => {
	try {
		let res = USER_ACTIVITY.filter((el) => el.userId == id);
		//console.log(res);
		return res[0];
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
		const res = USER_AVERAGE_SESSIONS.filter((el) => el.id === id);
		return res;
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
		const res = USER_PERFORMANCE.filter((el) => el.id === id);
		return res;
	} catch (e) {
		console.log(e);
	}
};