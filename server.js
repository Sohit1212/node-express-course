const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const mockUserData = [
	{name:'Mark'},
	{name:'Jill'}
]

app.get('/users/:id',function(req,res){
	console.log(req.params.id);
	res.json({
		success: true,
		message: 'successfully got users. Nice!',
		users: mockUserData
	})
})

app.post('/login', function(req,res){
	const username = req.body.username;
	const password = req.body.password;

	const mockuname = 'Sohit';
	const mockpaswd = '1212';

	if(username === mockuname && password === mockpaswd) {
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password or username does not match'
		})
	}
})


app.listen(8000,function() {
	console.log("server is running");
})

