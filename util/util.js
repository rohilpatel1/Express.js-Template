const ejsData = require('./ejsData');

function RenderFile(res, file, data) {
	res.render(__dirname.replace('util', 'public/views/'), { ...ejsData, ...data});
}

module.exports = {
	RenderFile
}