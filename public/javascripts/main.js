requirejs.config({
  'baseUrl': '/javascripts',
  'paths': {
    
    'angular': 'libs/angular/angular',
    'angular-route': 'libs/angular-route/angular-route',
    'app': 'app/app',
    'controllers': 'app/controllers',
    'angular-toolkit': 'app/angular-toolkit'

  },
  'shim': {
    'angular': {
		  'exports': 'angular'
    },
    'angular-route': {
      'deps': ['angular']
    }
  }
});

require(['app'], function(angular) {
	console.log('done requirejs loading', angular);
});