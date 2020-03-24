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
            position: 1, 
            company: 'Early Stage Researcher in PROTECT project',
            thumbnail: '/assets/logo_protect.png',
            projects: [
                {
                    title: 'PROJECTO 1',
                    description: '',
                    technologies: ''
                },
                {
                    title: 'PROJECTO 2',
                    description: '',
                    technologies: ''
                },
                {
                    title: 'PROJECTO 3',
                    description: '',
                    technologies: ''
                }
            ],
            certifications: [
            ],
            skills: [
            ],
            technologies: [
                {
                    type: "database",
                    elements: [
                    ]
                },
                {
                    type: "tools",
                    elements: [
                    ]
                },
                {
                    type: "development",
                    elements: [
                    ]
                }
            ]
        },
        {
            position: 2, 
            company: 'Data Scientist at CLOSER CONSULTING',
            thumbnail: '/assets/logo_closer.png',
            projects:
            [
                {
                    title: 'Data Scientist / Analyst in BNP Paribas CIB – Global Markets Resources',
                    description:
                        "→ Development of tools to analyze and explain large amounts of data related to the balance sheet and other financial resources; → Implementation of predictive models that explain seasonal variations of data linked to financial resources with specific focus on balance sheet metrics; → Predict the evolution of metrics linked to banking regulation based on financial market data; → Implement Shiny R interactive dashboards to monitor resources and detect errors in databases systems; → Implementation of a G-SIB indicators’ pricing model for derivative transactions and respective user interface; → Development of the prudential netting key and respective allocation logic for SFTs (Securities Financing Transactions) balance sheet computation; → Demonstration of built-in tool features and how to use them.",
                    technologies: 'R (Shiny, tidyverse, plotly, datatable), Python (pandas, numpy, plotly), C#, VBA, TortoiseSVN'
                    }
            ],
            certifications: [
            ],
            skills: [
                "Data preparation",
                "Timse series modelling",
                "Vector autoregression (VAR)",
                "Data quality",
                "Version control",
                "Software architecture",
                "Data reconciliation between systems",
                "Creation and management of databases",
                "Error detection",
                "Reporting",
                "Dashboard design",
                "Big Data technologies",
                "Financial resources"
            ],
            technologies: [
                {
                    type: "database",
                    elements: [
                        "MySQL",
                        "PostgreSQL"
                    ]
                },
                {
                    type: "tools",
                    elements: [
                        "Microsoft Office",
                        "PyCharm",
                        "TortoiseSVN",
                        "RStudio",
                        "Microsoft Visual Studio"
                    ]
                },
                {
                    type: "development",
                    elements: [
                        "Python",
                        "R",
                        "C#",
                        "VBA"
                    ]
                }
            ]
        },
        {
            position: 3,
            company: 'Jr. Consultant at ALTRAN',
            thumbnail: '/assets/logo_altran.png',
            projects:
            [
                {
                    title: 'Pedestrian Detection using Convolutional Neural Networks (CNN)',
                    description: "Research and selection of methods of object detection in images with the aim of implementing a pedestrian detection model in the context of autonomous driving. Improvement of the training sets' data quality and parameter tuning of the training process of neural network models.",
                    technologies: 'Python (TensorFlow, OpenCV, Matplotlib, Seaborn, Bokeh, Plotly, nxviz), GitLab'
                },
                {
                    title: 'Technical writing support to P2020 projects',
                    description: '',
                    technologies: ''
                }
            ],
            certifications: [
                "Training in Big Data & Analytics Technologies - Altran Portugal in partnership with NOVA LINCS – FCT",
                "Participant in the Portugal eHealth Summit event",
                "Demonstrator in the Altran Open Day event"
            ],
            skills: [
                "Feature extraction / selection techniques",
                "Data mining",
                "Data preparation",
                "Machine learning algorithms",
                "Convolutional Neural Networks (CNN)",
                "Hyperparameter tuning",
                "Data quality",
                "Version control",
                "Reporting",
                "Big Data technologies"
            ],
            technologies: [
                {
                    type: "database",
                    elements: [
                        "MySQL",
                        "PostgreSQL"
                    ]
                },
                {
                    type: "tools",
                    elements: [
                        "Microsoft Office",
                        "GitLab",
                        "PyCharm",
                        "Tableau",
                        "RStudio"
                    ]
                },
                {
                    type: "development",
                    elements: [
                        "Python",
                        "R"
                    ]
                }
            ]
        },
		{
            position: 4,
            company: 'PhD in Artificial Intelligence',
            thumbnail: '/assets/uni.jpg',
            projects: [
                {
                    title: 'PROJECTO 1',
                    description: '',
                    technologies: ''
                },
                {
                    title: 'PROJECTO 2',
                    description: '',
                    technologies: ''
                },
                {
                    title: 'PROJECTO 3',
                    description: '',
                    technologies: ''
                }
            ],
            certifications: [
            ],
            skills: [
            ],
            technologies: [
                {
                    type: "database",
                    elements: [
                    ]
                },
                {
                    type: "tools",
                    elements: [
                    ]
                },
                {
                    type: "development",
                    elements: [
                    ]
                }
            ]
        },
        {
            position: 5,
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
                "Master's Degree in Biomedical Engineering - FCT NOVA",
                "Participant in the Jortec Biomédica events"
            ],
            skills: [
                "Signal processing",
                "Physiological data modeling",
                "Feature extraction / selection techniques",
                "Machine learning algorithms",
                "Hyperparameter tuning",
                "Data quality",
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
                        "PyCharm",
                        "Microsoft Visual Studio"
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
