

var JQ = jQuery.noConflict();

var app = angular.module('MazeProject', ['ngRoute'])
				.config(function($routeProvider, $locationProvider) {
					$routeProvider
						.when("/", {

						})
						.when("/register", {
							templateUrl: 'Content/register.html',
							controller: 'regCtrl'
						})
						.when("/home", {
							templateUrl: 'Content/home.html',
							controller: 'homeCtrl'
						})
						.when("/about", {
							templateUrl: 'Content/about.html',
							controller: 'aboutCtrl'
						})
						.when("/scores", {

						})
						.when("/single-mode", {
							templateUrl: "Content/single.html",
							controller: 'singleCtrl'
						})
						.when("/multi-mode", {

						})
						.when("/settings", {

						})
						.when("/login", {
							templateUrl: 'Content/login.html',
							contoller: 'loginCtrl'
						})
						.otherwise({redirectTo: '/'});
						$locationProvider.html5Mode(true);
				})
				.controller('loginCtrl', function($scope){
					$scope.username = '';
					$scope.password = '';
					
				})
				.controller('homeCtrl', function($scope) {
				
				})
				.controller('aboutCtrl', function($scope) {

				})
				.controller('singleCtrl', function($scope, $http) {
					$scope.name = '';
					$scope.rows = '';
					$scope.cols = '';
					$scope.algorithm = '';


					// validate

					var player_row = -1;
					var player_col = -1;

					$scope.startGame = function() {
						var data = {
							name: $scope.name,
							rows: $scope.rows,
							cols: $scope.cols
						};
						
					// Ajax call to GenerateMaze
					/*
						$http.get({
							url: '',
							data: data
						}).success(function(response){
							JQ("#game").mazeBoard({mazeData: "11110000111100001111", rows: 5, cols: 4});
						})
						.error(function(error){
							alert('An error occured!');
						});
					*/
						var maze = {mazeData: "01101#10101101*000110101011101", rows: 5, cols: 6};
						JQ("#game").mazeBoard(maze);


						for (var i = 0; i < maze.rows; i++)
							for (var j = 0; j < maze.cols; j++)
								if (maze.mazeData[(i * rows) + cols] == '*') {
									player_row = i;
									player_col = j;
								}
						
					}

					

				})
				.controller('regCtrl', function($scope, $http) {
					var details = {
						username: {
							value: '',
							regex: /^[a-zA-Z][a-zA-Z0-9_]+$/,
							errors: {length: '', reg: '', unique: ''}
						},
						password: {
							value: '',
							regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*/,
							errors: {length: '', reg: ''}
						},
						passvalid: {
							value: '',
							regex: '',
							errors: []
						},
						email: {
							value: '',
							regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							errors: []
						}
					};


					$scope.details = details;

					// validation
					$scope.register = function() {
						/*var d = {
							username: $scope.username,
							password: $scope.password,
							email: $scope.email
						};*/
						// ajax call with details

					    JQ.get('/api/values/3', function (data) {
					        alert(data.bla);
					        console.log(data);
					    });

					}
				})
				.directive('uaUsername', function() {
 					return {
    					require: 'ngModel',
    					link: function(scope, element, attr, mCtrl) {
      							function userValidation(value) {
        							if (value.length >= 6 && value.length < 26) {
        								scope.details.username.errors.length = '';
          								mCtrl.$setValidity('length', true);
        							} else {
        								if (scope.details.username.errors.length == '')
        									scope.details.username.errors.length = "Username must be 6-25 characters long.";
          								mCtrl.$setValidity('length', false);
        							}
        							if (scope.details.username.regex.test(value)) {
        								scope.details.username.errors.reg = '';
        								mCtrl.$setValidity('regex', true);
        							} else {
        								if (scope.details.username.errors.reg == '')
        									scope.details.username.errors.reg = "Username must start with a letter, and contain only alpha-numerical characters or semi-collon.";
        								mCtrl.$setValidity('regex', false);
        							}
        							if (scope.details.username.errors.length == '' && scope.details.username.errors.reg == '') {
        								// Ajax call to validate user existance
        							}
        							return value;
      							}
      							mCtrl.$parsers.push(userValidation);
    					}
  					};
				})
				.directive('uaPassword', function() {
 					return {
    					require: 'ngModel',
    					link: function(scope, element, attr, mCtrl) {
      							function passValidation(value) {
        							if (value.length >= 8 && value.length < 23) {
        								scope.details.password.errors.length = '';
          								mCtrl.$setValidity('length', true);
        							} else {
        								if (scope.details.password.errors.length == '')
        									scope.details.password.errors.length = "Password must be 8-22 characters long.";
        								mCtrl.$setValidity('length', false);
        							}
        							if (scope.details.password.regex.test(value)) {
        								scope.details.password.errors.reg = '';
        								mCtrl.$setValidity('regex', true);
        							} else {
        								if (scope.details.password.errors.reg == '')
        									scope.details.password.errors.reg = "Password must contain at least 1 upper-case letter, 1 lower-case letter and 1 numerical character.";
        								mCtrl.$setValidity('regex', false);
        							}
        							return value;
      							}
      							mCtrl.$parsers.push(passValidation);
    					}
  					};
				})
				.directive('uaValid', function() {
 					return {
    					require: 'ngModel',
    					link: function(scope, element, attr, mCtrl) {
      							function passvalidValidation(value) {
        							if (scope.details.password.value == value) {
        								scope.details.passvalid.errors = [];
          								mCtrl.$setValidity('equal', true);
        							} else {
        								if (scope.details.passvalid.errors.length == 0)
        									scope.details.passvalid.errors.push("Password confirmation must be equal to the password.");
          								mCtrl.$setValidity('equal', false);
        							}
        							return value;
      							}
      							mCtrl.$parsers.push(passvalidValidation);
    					}
  					};
				})
				.directive('uaEmail', function() {
 					return {
    					require: 'ngModel',
    					link: function(scope, element, attr, mCtrl) {
      							function emailValidation(value) {
        							if (scope.details.email.regex.test(value)) {
        								scope.details.email.errors = [];
          								mCtrl.$setValidity('valid', true);
        							} else {
        								if (scope.details.email.errors.length == 0)
        									scope.details.email.errors.push("E-Mail should be in a valid format.");
          								mCtrl.$setValidity('valid', false);
        							}
        							return value;
      							}
      							mCtrl.$parsers.push(emailValidation);
    					}
  					};
				});
