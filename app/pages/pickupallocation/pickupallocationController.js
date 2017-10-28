'use strict';

angular.module('myApp')
    .controller('PickupallocationController', ["$scope", function($scope) {
        $scope.pickUpRecords = [{
                bookingNo: "1",
                readydate: "1/1/2222",
                readyTime: "12:23",
                closeTime: "12: 23",
                sendersName: "Amal",
                sendersName: "amalsender",
                contactPerson: "dev",
                sendersPhone: "9888887778",
                reasonToHold: "sample reason",
                pass: true,
                courier: "blue dart"
            },
            {
                bookingNo: "2",
                readydate: "1/1/2222",
                readyTime: "12:23",
                closeTime: "12: 23",
                sendersName: "Amal",
                sendersName: "amalsender",
                contactPerson: "dev",
                sendersPhone: "9888887778",
                reasonToHold: "sample reason",
                pass: false,
                courier: "blue dart"
            }
        ];








    }]);