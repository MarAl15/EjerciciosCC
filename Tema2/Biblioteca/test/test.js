var request = require('supertest'),
app = require('../app.js');

describe( "PUT Biblioteca", function() {
	it('Creación correcta', function (done) {
	request(app)
		.put('/Biblioteca/DiezNegritos/AgathaChristie')
		.expect('Content-Type', /json/)
		.expect(200, done);
	});

	it('Error de PUT', function (done) {
	request(app)
		.put('/Biblioteca')
		.expect(404, done);
	});
});

describe( "GET Biblioteca", function() {
	it('Devolución correcta', function (done) {
	request(app)
		.get('/Biblioteca')
		.expect('Content-Type', /json/)
		.expect(200, done);
	});

	it('Error de GET', function (done) {
	request(app)
		.get('/Biblioteca/DiezNegritos')
		.expect(404, done);
	});
});
