(function(){
  'use strict'

  angular.module('app')
    .component('postList', {
      controller: controller,
      templateUrl: './posts/posts.html'
    })
    controller.$inject = ['$http']
    function controller($http) {
      let vm = this

    vm.$onInit = function(){
      $http.get('/api/posts/').then((data) => {
      vm.posts=data.data
      })
    }
    vm.addPost = function() {
      $http.post('/api/posts/', vm.post).then((data) =>{
        vm.posts.push(data.data)
      })
      delete vm.post
    }
    vm.deletePost = function(e, post) {
      e.preventDefault()
      $http.delete('/api/posts/'+post.id, vm.posts).then((data) =>{
        vm.posts.splice(vm.posts.indexOf(post), 1)
      })
    }
    vm.upVote = function(post) {
      $http.post('/api/posts/'+post.id+'/votes', post).then((data) => {
        post.vote_count++
      })
    }
    vm.downVote = function(post){
        if (post.vote_count>=1) {
          $http.delete('/api/posts/'+post.id+'/votes', post).then((data) => {
          post.vote_count--
        })
        }
    }
    vm.addComment = function(post){
      $http.post('/api/posts/'+post.id+'/comments', vm.newComment).then((data)=> {
        post.comments.push(data.data)
      })
      delete vm.newComment
    }
    vm.deleteComment = function(e, post, comment) {
      e.preventDefault()
      $http.delete('/api/posts/'+post.id+'/comments/'+comment.id).then((data) =>{
        console.log('delete clicked')
        vm.post.comments.splice(vm.comments.indexOf(comment.content), 1)
      })
    }
  // function isString(req, res, next){
  //   console.log(req.body);
  //   if(typeof req.body !== 'string'){
  //     res.render('')
  //   }
  // }
  }
}());
