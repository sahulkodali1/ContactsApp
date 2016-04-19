contactsApp.config(function($routeProvider){
    $routeProvider
        .when("/",
            {
                templateUrl : "pages/login.htm",
                controller  : "LoginController"
            }
        )
        .when("/addEditContact",
            {
                templateUrl : "pages/addEditContact.htm",
                controller  : "ContactsController"
            }
        )
        .when("/contacts",
            {
                templateUrl : "pages/contacts.htm",
                controller  : "ContactsController"    
            }
        
        )    
});