'use strict'
var app = angular.module('calc',[]);

app.controller("calcMain",function($scope) {
   $scope.countArr = [];
   $scope.myValues = ['+','-','*','/'];
   $scope.firstVal = "";
   $scope.secondVal = "";
   $scope.currentModifier = "";
   var valueFlag = false;

   for(var i=9; i >= 0; i--) {
       $scope.countArr.push(i);
   }

   function currentValueDisplay(num) {
        assignValues(num);
   }

   function assignValues(num) {
        if(valueFlag) {
            $scope.secondVal += num;
        } else {
            $scope.firstVal += num;
        }
   }

   $scope.numberDisplay = currentValueDisplay;

   function activateFlag() {
       valueFlag = true;
   }
   
   function setCurrentModifier(modifier) {
        activateFlag();
        $scope.currentModifier = modifier;
   }

   $scope.createSecondValue = setCurrentModifier;

   function evalMath() {
       if($scope.firstVal != '' && $scope.secondVal != '') {
            var mathFormat = $scope.firstVal + $scope.currentModifier + $scope.secondVal;
            $scope.result = eval(mathFormat);
       }
   }
   
   $scope.doMath = evalMath;

   function clearScope() {
       valueFlag = false;
       $scope.firstVal = '';
       $scope.secondVal = '';
       $scope.currentModifier = '';
       $scope.result = '';
   }

   $scope.clearNumbers = clearScope;
});