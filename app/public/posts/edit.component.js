(function(){
  'use strict'

  angular.module('app')
    .component('editPost', {
      controller: controller,
      templateUrl: './posts/edit.html'
    })
    controller.$inject = ['$http', '$state', '$stateParams']
    function controller($http, $state, $stateParams) {
    const vm = this
    const postId = $stateParams.id
    vm.findById = findById

    function findById(id){
      $http.get('/api/posts/'+id)
      .then(data => {
        vm.post = data.data
      })
    }

    vm.$onInit = function(){
      console.log(postId);
      findById(postId)
    }
    vm.editPost = function(e) {
      e.preventDefault()
      $http
        .patch('/api/posts/'+postId, vm.post)
        .then(data => $state.go('home'))
        .catch(err=>console.log(err))
      }
    }
}());
