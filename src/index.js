angular.module('myApp',[''])
.controller('select',['$scope','$http',function($scope,$http){
	$http({
		url:'/api/fwshop/jsonData/cateList/cateList.json',
		method:'post',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, 
	}).then(function(answer){
		console.log(answer);
	})
}])