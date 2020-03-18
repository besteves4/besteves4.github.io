import {
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CvModalComponent } from '../cv-modal/cv-modal.component';
import { element } from 'protractor';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

    activeJob: any;
    @ViewChild('cvModal', {static: false}) cvModal;

    constructor() {}

    ngOnInit() {}

    handleClick(job) {
        this.activeJob = job;
        this.cvModal.show()
    }

    cv = [
        {
            company: 'company 1',
            thumbnail: '/assets/uni.jpg',
            projects: [
                {
                    title: 'PROJECTO 1',
                    description: 'Gestão de projeto, Análise, desenho e implementação de uma solução de Business Intelligence consolidada para 13 países e 3 sistemas fonte diferentes (SQL Server, DB2, Insphire, outras.)',
                    technologies: 'SQL Server 2016 (Database Engine, SSIS, SSAS), MDS, Power BI.'
                },
                {
                    title: 'PROJECTO 2',
                    description: 'Gestão de projeto, Análise, desenho e implementação de uma solução de Business Intelligence consolidada para 13 países e 3 sistemas fonte diferentes (SQL Server, DB2, Insphire, outras.)',
                    technologies: 'SQL Server 2016 (Database Engine, SSIS, SSAS), MDS, Power BI.'
                },
                {
                    title: 'PROJECTO 3',
                    description: 'Gestão de projeto, Análise, desenho e implementação de uma solução de Business Intelligence consolidada para 13 países e 3 sistemas fonte diferentes (SQL Server, DB2, Insphire, outras.)',
                    technologies: 'SQL Server 2016 (Database Engine, SSIS, SSAS), MDS, Power BI.'
                }
            ],
            certifications: [ //aquela tradução bem zuca
                "Licenciatura em Informática de Gestão – Instituto Superior Miguel Torga",
                "Workshop \"SSIS Performance Design Patterns\" - Matt Masson Gestão Dinérgica® - Dynargie"
            ],
            skills: [
                "Análise e Levantamento de Requisitos",
                "Arquitetura (Hardware e Software)",
                "Modelação Relacional"
            ],
            technologies: [
                {
                    type: "database",
                    elements: [
                        "Microsoft ServerSQL Server 2008to 2016"
                    ]
                },
                {
                    type: "tools",
                    elements: [
                        "Microsoft ServerSQL Server 2008 to 2016 (Database Engine, Integration Services, Reporting Services, Analysis Services Tabular)",
                        "Visual Studio .NET",
                        "Sharepoint (BI Center)"
                    ]
                },
                {
                    type: "development",
                    elements: [
                        "C#.NET",
                        "T-SQL",
                        "DAX"
                    ]
                }
            ]
        },
        {
            company: 'company 2',
            thumbnail: '/assets/uni.jpg'
        },
        {
            company: 'company 3',
            thumbnail: '/assets/uni.jpg'
        },
        {
            company: 'company 4',
            thumbnail: '/assets/uni.jpg'
        },
        {
            company: 'company 5',
            thumbnail: '/assets/uni.jpg'
        }
    ]

}
