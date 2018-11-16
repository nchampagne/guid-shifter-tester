module.exports = {

    sammyBioData: [
        {
            "id": "ef1f9736-dfc4-472e-ae75-163c1b383c2f",
            "createDate": 1524777122517,
            "updateDate": 1524777122517,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 25,
            "refLow": 18.5,
            "refRange": "18.5-25",
            "name": "Body Mass Index (BMI)",
            "code": "39156-5",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1524082101000,
            "userId": "df2d2191-7a9a-4bd7-aa4e-8ef5e3117a2c",
            "value": 21.77,
            "unit": "kg/m2"
        }
    ],

    biometricsData: [
        {
            "id": "f8d304a8-f990-4e37-8f49-a40a3f6051f0",
            "createDate": 1537361264750,
            "updateDate": 1537361264750,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Blood Pressure - Systolic (Upper)",
            "code": "8480-6",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 120,
            "unit": "mmHG",
            "codes": [
                {
                    "code": "8480-6",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Blood Pressure - Systolic (Upper)"
                }
            ]
        },
        {
            "id": "3b8c67a4-4f89-4be1-add2-9ecc596a7554",
            "createDate": 1537361264737,
            "updateDate": 1537361264737,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Blood Pressure - Diastolic (Lower)",
            "code": "8462-4",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 120,
            "unit": "mmHG",
            "codes": [
                {
                    "code": "8462-4",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Blood Pressure - Diastolic (Lower)"
                }
            ]
        },
        {
            "id": "9eeca42c-f531-41c7-b85c-19f8ef0ce9ca",
            "createDate": 1531490516367,
            "updateDate": 1531490516367,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Glucose",
            "code": "2345-7",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 51,
            "unit": "mg/dL",
            "codes": [
                {
                    "code": "2345-7",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Glucose"
                }
            ]
        },
        {
            "id": "f4929c34-ec9e-4395-ae0c-c150514ab273",
            "createDate": 1531490516313,
            "updateDate": 1531490516313,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Glucose (Fasting)",
            "code": "1558-6",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 51,
            "unit": "mg/dL",
            "codes": [
                {
                    "code": "1558-6",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Glucose (Fasting)"
                }
            ]
        },
        {
            "id": "c1405003-df86-4ea5-9e57-5ab1134a6d5e",
            "createDate": 1531490487592,
            "updateDate": 1531490487592,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Cholesterol - Triglycerides",
            "code": "2571-8",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 10,
            "unit": "mg/dL",
            "codes": [
                {
                    "code": "2571-8",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Cholesterol - Triglycerides"
                }
            ]
        },
        {
            "id": "ec677c88-eef8-43d6-8b3e-b5d96d207ec7",
            "createDate": 1531490475824,
            "updateDate": 1531490475824,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Cholesterol - HDL (Good)",
            "code": "2085-9",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 5,
            "unit": "mg/dL",
            "codes": [
                {
                    "code": "2085-9",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Cholesterol - HDL (Good)"
                }
            ]
        },
        {
            "id": "e57532aa-233b-4b6c-b9fa-f3114871b375",
            "createDate": 1531490462810,
            "updateDate": 1531490462810,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Cholesterol - Total",
            "code": "2093-3",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 50,
            "unit": "mg/dL",
            "codes": [
                {
                    "code": "2093-3",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Cholesterol - Total"
                }
            ]
        },
        {
            "id": "68cb0efb-f530-4c67-b064-10b3421fd085",
            "createDate": 1531489379044,
            "updateDate": 1531489379044,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Body Weight",
            "code": "29463-7",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 86,
            "unit": "kg",
            "codes": [
                {
                    "code": "29463-7",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Body Weight"
                }
            ]
        },
        {
            "id": "6114199d-2b74-4f58-8606-a020d40dfce4",
            "createDate": 1531489289575,
            "updateDate": 1531489289575,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Body Height",
            "code": "8302-2",
            "type": "Observation",
            "source": {
                "name": "PCP",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1549281600000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 180,
            "unit": "cm",
            "codes": [
                {
                    "code": "8302-2",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Body Height"
                }
            ]
        },
        {
            "id": "e70e5574-7724-4a4e-be5d-77d2adf06ef1",
            "createDate": 1540507971720,
            "updateDate": 1540507971720,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "BMI",
            "code": "39156-5",
            "source": {
                "name": "RealAge",
                "notes": "RealAge fact 18466",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1540507971613,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 27.115714285714283,
            "unit": "kg/m2",
            "codes": [
                {
                    "code": "39156-5",
                    "codeSystemName": "LOINC"
                }
            ]
        },
        {
            "id": "63ac8230-ef63-4b47-ab0d-f24f651671a1",
            "createDate": 1539694012596,
            "updateDate": 1539694012596,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 2000,
            "refLow": 50,
            "refRange": "50-2000",
            "name": "Glucose (Fasting)",
            "code": "1558-6",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 92,
            "unit": "mg/dL"
        },
        {
            "id": "52b21b77-22cd-443a-adf0-f93fdecc4a81",
            "createDate": 1539694012596,
            "updateDate": 1539694012596,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 2000,
            "refLow": 50,
            "refRange": "50-2000",
            "name": "Glucose (Non-Fasting)",
            "code": "2345-7",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 188,
            "unit": "mg/dL"
        },
        {
            "id": "66575917-9787-41e2-9743-d076eeeb8389",
            "createDate": 1539694012596,
            "updateDate": 1539694012596,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 30,
            "refLow": 0,
            "refRange": "0-30",
            "name": "Hemoglobin A1c",
            "code": "4548-4",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 6.2,
            "unit": "%"
        },
        {
            "id": "c5bdf7ae-7edb-4dbb-9b06-e31f47d63386",
            "createDate": 1539694012596,
            "updateDate": 1539694012596,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 38,
            "refLow": 1,
            "refRange": "1-38",
            "name": "Total Cholesterol/HDL Ratio",
            "code": "9830-1",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 2.51,
            "unit": ""
        },
        {
            "id": "ac1b671f-5a52-4e10-b46a-eaef089926cd",
            "createDate": 1539694012596,
            "updateDate": 1539694012596,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 250,
            "refLow": 25,
            "refRange": "25-250",
            "name": "Waist Circumference",
            "code": "8280-0",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 112,
            "unit": "cm"
        },
        {
            "id": "0091428e-7e5e-4f31-b673-dce6142afc04",
            "createDate": 1539694012595,
            "updateDate": 1539694012595,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 1000,
            "refLow": 1,
            "refRange": "1-1000",
            "name": "Cholesterol - LDL (Bad)",
            "code": "2089-1",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 114,
            "unit": "mg/dL"
        },
        {
            "id": "8087b611-d4c6-445e-b98a-67e4b2aa4764",
            "createDate": 1539694012595,
            "updateDate": 1539694012595,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 1000,
            "refLow": 50,
            "refRange": "50-1000",
            "name": "Cholesterol - Total",
            "code": "2093-3",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 196,
            "unit": "mg/dL"
        },
        {
            "id": "5f046587-c407-4a9b-898e-55e43058bddf",
            "createDate": 1539694012595,
            "updateDate": 1539694012595,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 2500,
            "refLow": 10,
            "refRange": "10-2500",
            "name": "Cholesterol - Triglycerides",
            "code": "2571-8",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 158,
            "unit": "mg/dL"
        },
        {
            "id": "f9633a5e-bd3e-4044-b99e-fcb6c9e23a0f",
            "createDate": 1539694012595,
            "updateDate": 1539694012595,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 300,
            "refLow": 0,
            "refRange": "0-300",
            "name": "Cholesterol - VLDL",
            "code": "13458-5",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 29,
            "unit": "mg/dL"
        },
        {
            "id": "7d31a760-68f6-4587-88d2-71ba8c196acf",
            "createDate": 1539694012594,
            "updateDate": 1539694012594,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "refHigh": 200,
            "refLow": 5,
            "refRange": "5-200",
            "name": "Cholesterol - HDL (Good)",
            "code": "2085-9",
            "type": "Observation",
            "source": {
                "name": "Quest Diagnostics",
                "notes": "Biometric Screening 2017-09-21",
                "type": "Clinical",
                "meta": {
                    "batchId": "f5a64c19-7b40-4445-bfec-71aa280a95d2|1",
                    "dataQuality": "normalized",
                    "resourceKey": "12:80",
                    "sendingSystem": "SC_DHS",
                    "persistentRecordId": "103901287-C"
                }
            },
            "observationDate": 1539780411165,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 78,
            "unit": "mg/dL"
        },
        {
            "id": "8e7d399b-1cfa-4d16-b34e-ff6398b0d834",
            "createDate": 1537455802354,
            "updateDate": 1537455802354,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Hemoglobin (A1c)",
            "code": "4548-4",
            "type": "Observation",
            "source": {
                "name": "CVS",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1537444800000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 1,
            "unit": "%",
            "codes": [
                {
                    "code": "4548-4",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Hemoglobin (A1c)"
                }
            ]
        },
        {
            "id": "0ae97f91-c7ac-4bd8-9439-e3f147dda69f",
            "createDate": 1537455786455,
            "updateDate": 1537455786455,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Total Cholesterol/HDL Ratio",
            "code": "9830-1",
            "type": "Observation",
            "source": {
                "name": "CVS",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1537444800000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 10.25,
            "unit": "",
            "codes": [
                {
                    "code": "9830-1",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Total Cholesterol/HDL Ratio"
                }
            ]
        },
        {
            "id": "6aa2b673-c490-40b8-8e3f-3bc7f820e4d9",
            "createDate": 1537455779071,
            "updateDate": 1537455779071,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Cholesterol - VLDL",
            "code": "13458-5",
            "type": "Observation",
            "source": {
                "name": "CVS",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1537444800000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 12,
            "unit": "mg/dL",
            "codes": [
                {
                    "code": "13458-5",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Cholesterol - VLDL"
                }
            ]
        },
        {
            "id": "981143cb-d57f-4281-837a-7ab0c540eed6",
            "createDate": 1537455762561,
            "updateDate": 1537455762561,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Waist Circumference",
            "code": "8280-0",
            "type": "Observation",
            "source": {
                "name": "CVS",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1537444800000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 81.27999739904008,
            "unit": "cm",
            "codes": [
                {
                    "code": "8280-0",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Waist Circumference"
                }
            ]
        },
        {
            "id": "d0c17ba5-47b3-43d1-af98-adb9eea98828",
            "createDate": 1537455218872,
            "updateDate": 1537455218872,
            "codeSystem": "2.16.840.1.113883.6.1",
            "codeSystemName": "LOINC",
            "name": "Cholesterol - LDL (Bad)",
            "code": "2089-1",
            "type": "Observation",
            "source": {
                "name": "CVS",
                "type": "Self Report",
                "meta": {
                    "dataQuality": "normalized"
                }
            },
            "observationDate": 1537444800000,
            "userId": "9947b37b-7f26-4376-989c-cde755bdac71",
            "value": 31,
            "unit": "mg/dL",
            "codes": [
                {
                    "code": "2089-1",
                    "codeSystem": "2.16.840.1.113883.6.1",
                    "codeSystemName": "LOINC",
                    "name": "Cholesterol - LDL (Bad)"
                }
            ]
        }
    ]

}