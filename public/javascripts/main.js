requirejs.config({
  'baseUrl': '/javascripts',
  'paths': {
    
    'angular': 'libs/angular/angular',
    'angular-route': 'libs/angular-route/angular-route',
    'config': 'app/config',
    'controllers': 'app/controllers'

  },
  'shim': {
    'angular': {
		  'exports': 'angular'
    },
    'angular-route': {
      'deps': 'angular'
    }
  }
});

require(['angular', 'config', 'controllers'], function(angular) {
	console.log('done requirejs loading', angular);
});