const router = require('express').Router();

const { RenderFile } = require('./util')

router.get('/', (_, res) => {
	RenderFile(res, 'index.html', {
		'helloIndex': 'hello specifically from index!'
	});
});

module.exports = router;