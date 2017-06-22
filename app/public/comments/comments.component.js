(function(){
  'use strict'

  angular.module('app')
    .component('comments', {
      controller: controller,
      templateUrl: './posts/posts.html'
    })
    controller.$inject = ['$http']
    function controller($http) {
      let vm = this

    vm.addComment = function(post){
      $http.post('/'+post.id+'/comments', post).then((data)=> {
        console.log('hit comment route');
        post.comments.push(vm.newComment)
        delete vm.newComment
      })
    }
  }
}());
