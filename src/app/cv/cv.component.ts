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
            company: 'Early Stage Researcher in PROTECT project',
            thumbnail: '/assets/logo_protect.png',
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
            company: 'Data Scientist at CLOSER CONSULTING',
            thumbnail: '/assets/logo_closer.png'
        },
        {
            company: 'Jr. Consultant at ALTRAN',
            thumbnail: '/assets/logo_altran.png'
        },
		{
            company: 'PhD in Artificial Intelligence',
            thumbnail: '/assets/uni.jpg'
        },
        {
            company: 'Integrated Master in Biomedical Engineering',
            thumbnail: '/assets/logo_fct.gif',
			projects:
            [
                {
                    title: 'Master thesis: Personality assessment based on biosignals during a decision-making task',
                    description: 'Implementation of a predictive model of human personality based on the processing of biosignals and consequent extraction of significant features from them',
                    technologies: 'Python (pandas, scikit-learn, seaborn, numpy, matplotlib, scipy), GitHub, LaTeX, Excel'
                },
                {
                    title: 'Bachelor project: Characterization and comparison of lyophilised gelatin matrices',
                    description: "Study and comparison of matrices of different crosslinking agents, based on the analysis of the matrices' water absorption capacity, mechanical resistance, porosity, among others, and tests on the cell's behavior in relation to these three-dimensional porous supports",
                    technologies: 'Excel'
                },
                {
                    title: 'Relevant courses',
                    description: '',
                    technologies: ''
                }
            ],
            certifications: [
                "Bachelor's Degree in Biomedical Engineering - FCT NOVA",
                "Master's Degree in Biomedical Engineering - FCT NOVA"
            ],
            skills: [
                "Signal processing",
                "Physiological data modeling",
                "Feature extraction / selection techniques",
                "Machine learning algorithms",
                "Hyperparameter tuning",
                "Tissue engineering",
                "Lyophilisation",
                "SEM (Scanning Electron Microscope)",
                "Stress–strain analysis",
                "ATR-FTIR (Attenuated Total Reflectance Fourier Transform InfraRed Spectroscopy)",
                "DSC (Differrential Scanning Calorimetry)",
                "Cell culture"
            ],
            technologies: [
                {
                    type: "database",
                    elements: [
                        "MySQL"
                    ]
                },
                {
                    type: "tools",
                    elements: [
                        "LaTeX",
                        "Microsoft Office",
                        "GitHub",
                        "PyCharm / Microsoft Visual Studio"
                    ]
                },
                {
                    type: "development",
                    elements: [
                        "Python",
                        "C / C# / C++",
                        "MatLab"
                    ]
                }
            ]
        }
    ]

}
