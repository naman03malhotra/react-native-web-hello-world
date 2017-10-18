/**
* Api Manager Module
* Used ES6 arrow function
*/
import Request from 'superagent';

const responseTime = 15000;
const APIManager = {
	getData: (url, params, header) => {
		return new Promise((resolve, reject) => {
			Request.get(url)
				.timeout({
					response: responseTime
				})
				.set('Authorization', header)
				.query(params)
				.then(resolve)
				.catch(reject);
		});
	},
	postData: (url, params, header) => {
		return new Promise((resolve, reject) => {
			Request.post(url)
				.timeout({
					response: responseTime
				})
				.send(params)
				.set('Authorization', header)
				.set('Accept', 'application/json')
				.then(resolve)
				.catch(reject);
		});
	},
	putData: (url, params, header, callback, err) => {
		Request.put(url)
			.timeout({
				response: responseTime
			})
			.send(params)
			.set('Authorization', header)
			.set('Accept', 'application/json')
			.then(callback)
			.catch(err);
	},
	deleteData: (url, callback, header, err) => {
		Request.delete(url)
			.timeout({
				response: responseTime
			})
			.send(params)
			.set('Authorization', header)
			.set('Accept', 'application/json')
			.then(callback)
			.catch(err);
	}
};

export default APIManager;
