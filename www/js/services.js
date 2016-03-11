angular.module('starter.services', [])

.service('LoginService', function($q) {
  var creds = [];
  var loginUser = function(name,pw){
    var deferred = $q.defer();
    var promise = deferred.promise;
    creds = [];
    console.log("name > "+name +"pwd > "+pw);
    if (name == 'user' && pw == 'secret') {
      console.log("1");
      deferred.resolve('Welcome ' + name + '!');
      creds.push(name);
      creds.push(pw);
    } else {
      console.log("2");
      deferred.reject('Wrong credentials.');
    }
    promise.success = function(fn) {
      promise.then(fn);
      console.log("a");
      return promise;
    }
    promise.error = function(fn) {
      promise.then(null, fn);
      console.log("b");
      return promise;
    }
    return promise;
  }
  var getCreds = function(){
    return creds;
  }

  return{
    loginUser : loginUser,
    getCreds : getCreds
  };
})












/*.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
*/
