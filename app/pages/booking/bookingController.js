'use strict';
angular.module('myApp')
.controller('BookingController', ["$scope","tags",function($scope,tags) {

 
 
  $scope.loadTags = function(query) {
    $scope.acCode = [];
    return tags.load();
  };
  $scope.$watch("acCode",
              function(v1, old) {
                if(v1.length>0)
                {
                 $scope.referenceNo =  v1[0].referenceNo;
                 $scope.coName =  v1[0].coName;
                 $scope.contactPerson =  v1[0].contactPerson;
                 
                }
              },true  );
 }]);


angular.module('myApp').service('tags', function($q) {
  var tags = [
    { "text": "Tag1" ,"referenceNo":"1", "coName":"amal", "contactPerson":"arun"},
    { "text": "Tag2"  ,"referenceNo":"2", "coName":"amal", "contactPerson":"arun"},
    { "text": "Tag3"  ,"referenceNo":"3", "coName":"amal", "contactPerson":"arun"},
    { "text": "Tag4"  ,"referenceNo":"4", "coName":"amal", "contactPerson":"arun"},
    { "text": "Tag5"  ,"referenceNo":"5", "coName":"amal", "contactPerson":"arun"},
    { "text": "Tag6"  ,"referenceNo":"6", "coName":"amal", "contactPerson":"arun"},
    { "text": "Tag7"  ,"referenceNo":"6", "coName":"amal", "contactPerson":"arun" },
    { "text": "Tag8"  ,"referenceNo":"7", "coName":"amal", "contactPerson":"arun"},
    { "text": "Tag9"  ,"referenceNo":"9", "coName":"amal", "contactPerson":"arun"},
    { "text": "Tag10" ,"referenceNo":"10", "coName":"amal", "contactPerson":"arun" }
  ];
  
  this.load = function() {
    var deferred = $q.defer();
    deferred.resolve(tags);
    return deferred.promise;
  };
});