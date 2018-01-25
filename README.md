
## Install Aurelia CLI
> tài liệu http://aurelia.io/docs/build-systems/aurelia-cli#machine-setup

```
npm install aurelia-cli -g
```

## Install

```
npm install
```

## Build & Run
```
au run -- build 

au run -- watch 

```

## Theme đang sử dụng
> https://keenthemes.com/metronic/documentation.html

### Tích hợp với Aurelia CLI: bị lỗi

- commit lôi https://github.com/easywebhub/ewh-aurelia/commit/8a33c14028fa6e8a2c4c2918993a9d8993428ded

### Tích hợp với AngularJS
- load script bằng lệnh 
```
ngOnInit()  {
		this._script.loadScripts('body', ['assets/vendors/base/vendors.bundle.js','assets/demo/default/base/scripts.bundle.js'], true)
			.then(result => {
				Helpers.setLoading(false);
				// optional js to be loaded once
				this._script.loadScripts('head', ['assets/vendors/custom/fullcalendar/fullcalendar.bundle.js']);
			});
		this._router.events.subscribe((route) => {
			if (route instanceof NavigationStart) {
				(<any>mLayout).closeMobileAsideMenuOffcanvas();
(<any>mLayout).closeMobileHorMenuOffcanvas();
				(<any>mApp).scrollTop();
				Helpers.setLoading(true);
				// hide visible popover
				(<any>$('[data-toggle="m-popover"]')).popover('hide');
			}
			if (route instanceof NavigationEnd) {
				// init required js
				(<any>mApp).init();
				(<any>mUtil).init();
				Helpers.setLoading(false);
				// content m-wrapper animation
				let animation = 'm-animate-fade-in-up';
				$('.m-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
					$('.m-wrapper').removeClass(animation);
				}).removeClass(animation).addClass(animation);
			}
		});
}

}
```


