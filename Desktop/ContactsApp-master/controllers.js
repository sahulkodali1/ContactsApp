contactsApp.controller('LoginController',['$scope','$location',function($scope, $location){
    $scope.loginUser = {username:"", password:""};
    $scope.signupUser = {username:"", password:""};
    
    $scope.processLogin = function(){
        console.log($scope.loginUser);
        $location.path("/contacts");
        
    };
    
    $scope.processSignup = function(){
        console.log($scope.signupUser);
        $location.path("/contacts");
    };
    
}]);

contactsApp.controller('ContactsController',['$scope','$log','$location','ContactService', function($scope,$log,$location,contactService){
    $scope.contact = contactService.contact;
    $scope.gridOptions = {
        enableFullRowSelection: true,
        enableRowSelection: true,
        multiSelect: false,
        exporterMenuPdf:false,
        enableGridMenu: true,
        exporterCsvFilename: 'contacts.csv',
        data: contactService.getContactsData(),
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location"))
    };
    
    $scope.gridOptions.onRegisterApi = function(gridApi){
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope, function(row){
            contactService.contact = row.entity;
            $location.path("/addEditContact");            
        });
    };
    
    $scope.saveContact = function(){
        console.log($scope.contact);
        contactService.getContactsData().push($scope.contact);
        $location.path("/contacts");
    };
    
  //  $scope.export = function(){
        //$scope.$broadcast('export-excel',{});
        //var myElement = angular.element(document.querySelectorAll(".custom-csv-link-location"));
       // $scope.gridApi.exporter.csvExport( 'csv', 'all', myElement );

  //  };
        
}]);