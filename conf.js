// conf.js
var username = "mbartolini",
    accessKey = "3a0a46b7-f9dc-45db-b67c-d063e65a2b76";
exports.config = {
    framework: 'jasmine',

    sauceUser: username,
    sauceKey: accessKey,

     specs: [
        //TODO: add here other suites
        './exercise1/calculator.solution.js',
        './exercise2/todo.solution.js'
    ],

    params: {
        //TODO: add global params here
        exercise1: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex1/'
        },
        exercise2: {
            url: 'http://pfy.cloud.reply.eu/protractor/ex2/'
        }
    }

};
