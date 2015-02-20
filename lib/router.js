Router.configure({
	layoutTemplate: "masterLayout",
	routeControllerNameConverter: "camelCase",

});

Router.route('/', {name: 'home'});