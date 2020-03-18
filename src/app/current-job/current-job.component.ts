import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-current-job',
    templateUrl: './current-job.component.html',
    styleUrls: ['./current-job.component.css']
})
export class CurrentJobComponent implements OnInit {

    job = {
        position: 'PhD Student',
        employer: [
            {
                imageSrc: '../../assets/logooeg.png',
                title: 'D3206 - Ontology Engineering Group (OEG)',
                href: 'http://www.oeg-upm.net/'
            },
            {
                imageSrc: '../../assets/logo_DIA.png',
                title: 'Artificial Intelligence Department',
                href: 'http://www.dia.fi.upm.es/'
            },
            {
                imageSrc: '../../assets/etsiinf.jfif',
                title: 'ETS de Ingenieros Informáticos - Campus de Montegancedo s/n',
                href: 'http://www.fi.upm.es/'
            },
            {
                imageSrc: '../../assets/uni.jpg',
                title: 'Universidad Politécnica de Madrid',
                href: 'https://www.upm.es/'
            }
        ]
    }

    constructor() {}

    ngOnInit() {}

}
