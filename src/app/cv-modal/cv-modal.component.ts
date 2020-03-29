import {
    Component,
    OnInit,
    ViewChild,
    Input
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { faLaptopCode, faGraduationCap, faCog, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-cv-modal',
    templateUrl: './cv-modal.component.html',
    styleUrls: ['./cv-modal.component.css']
})
export class CvModalComponent implements OnInit {

    @Input() job: any;
    @ViewChild('cvModal', {static: false}) modal;
    faLaptopCode = faLaptopCode;
    faGraduationCap = faGraduationCap;
    faCog = faCog;
    faCheck = faCheck;
    
    constructor() {}
   
    ngOnInit() {}

    show() {
        this.modal.show();
    }

}
