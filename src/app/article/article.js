(function () {
	'use strict';

	angular.module('julian.article',[])
	  .config(function ($stateProvider) {
	    $stateProvider
	      .state('article', {
	        url: '/article/:aid',
	        templateUrl: 'app/article/article.html',
	        controller: 'ArticleCtrl'
	      });
	  });
})();
