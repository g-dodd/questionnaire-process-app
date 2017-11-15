/*export const QUESTIONS: any[] = [
    {
        id: 1,
        section: 'Ongoing Assessment & Evaluation',
        questions: [
            {
                id: 1,
                type: 'Pulmonary Fibrosis, Oth Chronic Lung Disrdrs', //Acedo Sally, 
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 2,
                type: 'Oth Significant Endocrine and Metabolic Disorders', //alexander ian, alexander patricia
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 3,
                type: 'Pituitary, Adrenal, Endocrine/Metab Disrdrs', //alexander ian, alexander patricia
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 4,
                type: 'Seizure Disorders and Convulsions', //alexander ian,
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 5,
                type: 'Thyroid Disorders', //alexander ian, alonzo teodora
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 6,
                type: 'Diabetes without Complication', //alexander Patricia,
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 7,
                type: 'Osteoporosis, Vertebral, Pathological Fx', //alexander Patricia,
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 8,
                type: 'Diabetes with Chronic Complications', //Al-Muradi Jabbar,
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 9,
                type: 'Major Depressive, Bipolar, and Paranoid Disorders', //Al-Muradi Jabbar, Alshaher Sharif
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 10,
                type: 'CKD, Severe (Stage 4)', // Alonzo Alvarado, Alshaher Sharif
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 11,
                type: 'Migraine Headaches', //Alonzo Alvarado
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 12,
                type: 'Esophageal Reflux, Oth Disorders of Esophagus', //Alonzo Alvarado, Alonzo Teodora
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 13,
                type: 'Hypertension', //Alonzo Alvarado, Alonzo Teodora
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 14,
                type: 'Vascular Disease', //Alonzo Alvarado, Alonzo Teodora
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        section: 'Early Detection',
        questions: [
            {
                id: 1,
                type: 'Cognitive Function', //Acedo Sally, Adame Dominga, Aker Jack, Alexander Patricia, Alonzo Alvarado, Alonzo Teodora
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 2,
                type: 'Major Depression', //Acedo sally, Alshaher Sharif, Alvarado Maria
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 3,
                type: 'Secondary Hyperparathyroidism-Rental', //Acedo sally, 
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 4,
                type: 'Depression', //Adame Dominga, Aker Jack,  Alexander ian, Alexander Patricia, Al-Muradi Jabbar, Alonzo Alvarado, , Alonzo Teodora
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 5,
                type: 'Diabetes Mellitus', //Aker Jack, Alonzo Teodora
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 6,
                type: 'Peripheral Neuropathy', //Aker Jack,  Alvarado Maria
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 7,
                type: 'Diabetes with Chronic Complication', //Alexander Patircia
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 8,
                type: 'Peripheral Arterial Disease', //Alexander Patircia, Alonzo Alvarado
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 9,
                type: 'Chronic Obstructive Pulmonary Disease', //Al-Muradi Jabbar
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        section: 'Preventive Medicine Screening',
        questions: [
            {
                id: 1,
                type: 'Colorectal Cancer Screening', //Acedo Sally, Alonzo Teodora
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 2,
                type: 'Body Mass Index', //Alexander ian, Al-Muradi Jabbar, Alonzo Teodora, Alshaher Sharif,  Alvarado Maria
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        section: 'Patient Status Exceptions', //everyone
        questions: [
            {
                id: 1,
                type: 'Patient does not respond to contact efforts',
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 2,
                type: 'Invalid / Incomplete contact information',
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 3,
                type: 'This member is deceased',
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 4,
                type: 'This patient is no longer seen at this practice',
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 5,
                type: 'I am not interested in contacting this patient',
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        section: 'Managing Chronic Illness',
        questions: [
            {
                id: 1,
                type: 'Controlled Blood Pressure', //adam dominga, Al-Muradi Jabbar, Alonzo Alvarado,  Alvarado Maria
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        section: 'Care for Older Adults',
        questions: [
            {
                id: 1,
                type: 'Advanced Care Planning', //Alonzo Alvarado,  Adame Dominga
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 2,
                type: 'Medication Review', //Alonzo Alvarado, Adame Dominga
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 3,
                type: 'Functional Status Assessment', //Alonzo Alvarado, Adame Dominga
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            },
            {
                id: 4,
                type: 'Comprehensive Pain Screening', //Alonzo Alvarado, Adame Dominga
                rules: [
                    {
                        answer: 'Yes',
                        ruleList: []
                    },
                    {
                        answer: 'No',
                        ruleList: []
                    },
                    {
                        answer: 'Referred',
                        ruleList: []
                    },
                    {
                        answer: 'Not Assessed',
                        ruleList: []
                    }
                ]
            }
        ]
    },
];*/

export const QUESTIONS: any[] = [
    {
        id: 1,
        sectionName: 'Ongoing Assessment & Evaluation',
        questions: [
            {
                id: 1,
                questionName: 'Pulmonary Fibrosis, Oth Chronic Lung Disrdrs',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 2,
                questionName: 'Oth Significant Endocrine and Metabolic Disorders',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 3,
                questionName: 'Pituitary, Adrenal, Endocrine/Metab Disrdrs',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 4,
                questionName: 'Seizure Disorders and Convulsions', //alexander ian,
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 5,
                questionName: 'Thyroid Disorders', 
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 6,
                questionName: 'Diabetes without Complication',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 7,
                questionName: 'Osteoporosis, Vertebral, Pathological Fx',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 8,
                questionName: 'Diabetes with Chronic Complications',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 9,
                questionName: 'Major Depressive, Bipolar, and Paranoid Disorders',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 10,
                questionName: 'CKD, Severe (Stage 4)',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 11,
                questionName: 'Migraine Headaches',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 12,
                questionName: 'Esophageal Reflux, Oth Disorders of Esophagus',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 13,
                questionName: 'Hypertension',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 14,
                questionName: 'Vascular Disease',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            }
        ]
    },
    {
        id: 2,
        sectionName: 'Early Detection',
        questions: [
            {
                id: 1,
                questionName: 'Cognitive Function',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 2,
                questionName: 'Major Depression',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 3,
                questionName: 'Secondary Hyperparathyroidism-Rental',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 4,
                questionName: 'Depression',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 5,
                questionName: 'Diabetes Mellitus',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 6,
                questionName: 'Peripheral Neuropathy',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 7,
                questionName: 'Diabetes with Chronic Complication',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 8,
                questionName: 'Peripheral Arterial Disease',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 9,
                questionName: 'Chronic Obstructive Pulmonary Disease',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            }
        ]
    },
    {
        id: 3,
        sectionName: 'Preventive Medicine Screening',
        questions: [
            {
                id: 1,
                questionName: 'Colorectal Cancer Screening',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 2,
                questionName: 'Body Mass Index',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            }
        ]
    },
    {
        id: 4,
        sectionName: 'Patient Status Exceptions',
        questions: [
            {
                id: 1,
                questionName: 'Patient does not respond to contact efforts',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 2,
                questionName: 'Invalid / Incomplete contact information',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 3,
                questionName: 'This member is deceased',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 4,
                questionName: 'This patient is no longer seen at this practice',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 5,
                questionName: 'I am not interested in contacting this patient',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            }
        ]
    },
    {
        id: 5,
        sectionName: 'Managing Chronic Illness',
        questions: [
            {
                id: 1,
                questionName: 'Controlled Blood Pressure',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            }
        ]
    },
    {
        id: 6,
        sectionName: 'Care for Older Adults',
        questions: [
            {
                id: 1,
                questionName: 'Advanced Care Planning',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 2,
                questionName: 'Medication Review',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 3,
                questionName: 'Functional Status Assessment',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            },
            {
                id: 4,
                questionName: 'Comprehensive Pain Screening',
                rules: {
                    yes: [],
                    no: [],
                    referred: [],
                    notAssessed: []
                }
            }
        ]
    },
];