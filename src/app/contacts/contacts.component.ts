import {
    Component,
    OnInit
} from '@angular/core';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    faEnvelope = faEnvelope;
    faSkype = faSkype;
    faLinkedin = faLinkedin;

    contacts = {
        title: 'Contacts',
        list: [
            {
                icon: faEnvelope,
                title: 'beatriz.gc.esteves@gmail.com',
                href: 'mailto:beatriz.gc.esteves@gmail.com'
            },
            {
                icon: faEnvelope,
                title: 'beatriz.gesteves@upm.es',
                href: 'mailto:beatriz.gesteves@upm.es'
            },
            {
                icon: faSkype,
                title: 'b.esteves4',
                href: 'skype:b.esteves4?add'
            },
            {
                icon: faLinkedin,
                title: '/in/beatriz-esteves',
                href: 'https://www.linkedin.com/in/beatriz-esteves-032249156/'
            }
        ]
    }

    constructor() {}

    ngOnInit() {}

}
