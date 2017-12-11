// DIRECTIVES
personalSite.directive("sample", function() {
   return {
       restrict: 'E',
       templateUrl: 'directives/pages/sample.html',
       replace: true,
       scope: {
           data: "="
       }
   }
});
