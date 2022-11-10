import axios from 'axios';
//import env from "react-dotenv";

/**
 * Get user infos
 *
 * @param {string} id User id
 * @returns {object} Response
 */
export const getUserInfos = async (id) => {
    try {
        const res = await axios.get(`http://${process.env.REACT_APP_API}/user/${id}`);
        return res.data.data;
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
export const getUserActivity = async (id) => {
    try {
        const res = await axios.get(`http://${process.env.REACT_APP_API}/user/${id}/activity`);
        return res.data.data;
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
export const getUserAverageSessions = async (id) => {
    try {
        const res = await axios.get(`http://${process.env.REACT_APP_API}/user/${id}/average-sessions`);
        return res.data.data;
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
export const getUserPerformance = async (id) => {
    try {
        const res = await axios.get(`http://${process.env.REACT_APP_API}/user/${id}/performance`);
        return res.data.data;
    } catch (e) {
        console.log(e);
    }
};