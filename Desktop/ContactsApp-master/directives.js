
contactsApp.directive("exportTable",function(){
    return {
        restrict : 'C',
        link: function($scope, elm, attr){
            $scope.$on('export-excel', function(e, d){
                elm.tableExport({type:'excel', escape:false});
            });
        }
    };
});
