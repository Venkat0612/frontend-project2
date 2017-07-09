var app = angular.module('myApp',['ngRoute','ngCookies']);


app.config(function($routeProvider,$locationProvider){
	
	$routeProvider
	.when('/register',{
		templateUrl:'views/registrationform.html',
		controller:'UserController'
	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'UserController'
	})
	.when('/savejob',{
		templateUrl:'views/jobform.html',
		controller:'JobController'
	})
	.when('/getalljobs',{
		templateUrl:'views/jobtitle.html',
		controller:'JobController'
	})
	.when('/saveblogpost',{
		templateUrl:'views/blogpostform.html',
		controller:'BlogPostController'
	})
	.when('/getallblogs',{
		templateUrl:'views/blogslist.html',
		controller:'BlogPostController'
	})
	.when('/getBlogForApproval/:id',{
		templateUrl:'views/approvalform.html',
		controller:'BlogDetailController'
	})
	.when('/getBlogDetail/:id',{
		templateUrl:'views/blogdetail.html',
		controller:'BlogDetailController'
	})
	.otherwise({
		templateUrl:'views/home.html'
	})
})
app.run(function($rootScope,$location,UserService,$cookieStore){
	if($rootScope.currentUser==undefined)
		$rootScope.currentUser=$cookieStore.get("currentUser")
		
		$rootScope.logout=function()
		{
		UserService.logout().then(function(response)
				{
			$rootScope.message="Loggedout Successfully..."
				delete $rootScope.currentUser
				$cookieStore.remove("currentUser")
				$location.path('/login')
				},function(response)
				{
					console.log(response.status)
					$rootScope.message=response.data.message
					$location.path('/login')
				})
	}
})

/*
	var app=angular.module("myApp",['ngRoute','ngCookies'])
	
	
	//app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) 
	
	app.config(function($routeProvider) {
		  $routeProvider		       
			    console.log("regisater")
			    .when('/registration',{ 
			    	templateUrl:'views/registrationform.html',
					controller:'UserController'
			    })
			    console.log("login")
			    .when('/login',
			   	{
			    	templateUrl:'views/login.html',
			    	controller:'UserController'
			    })
			    .when('/savejob',
			    {
			    	templateUrl:'views/jobform.html',
			    	controller:'JobController'
			    })
			    .when('/getalljobs',
			    {
			    	templateUrl:'views/jobtitle.html',
			    	controller:'JobController'
			    })			
			    .otherwise
			    ({
			        templateUrl:'views/home.html'
			    })        
			})
			app.run(function($rootScope,$location,UserService,$cookieStore)
			{
				if($rootScope.currentUser==undefined)
					$rootScope.currentUser=$cookieStore.get("currentUser")
					
					
					
			    $rootScope.logout=function()
			    {
			        UserService.logout().then(function(response)
			        {
			            $rootScope.message="loggedout succesfully.."
			            delete $rootScope.currentUser;
			            $cookieStore.remove("currentUser")
			            $location.path('/login')
			        },function(response)
			          {
			            console.log(response.status)
			            $rootScope.message=response.data.message
			            $location.path('/login')
			                
			          })
			     }
	         })
*/