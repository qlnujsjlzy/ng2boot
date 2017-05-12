import { Component } from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'open',
    templateUrl: 'open.template.html'
})
export class OpenComponent {

    ngAfterViewInit() {
        jQuery('body').addClass('landing-page no-skin-config');
    }

    ngOnDestroy() {
        jQuery('body').removeClass('landing-page no-skin-config');
    }
}
