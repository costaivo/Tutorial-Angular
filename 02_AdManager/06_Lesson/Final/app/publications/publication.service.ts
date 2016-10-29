import { Injectable } from '@angular/core';
import {IPublication} from './publication';

@Injectable()

export class PublicationService {

    constructor() {

    }

    getAll(): IPublication []{
        return [
            {
                "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0e",
                "IsActiveRecord": true,
                "Name": "Herald",
                "TypexCD": "Local",
                "LanguagexCD": "English",
                "CommissionRateForAdvertisments": 0.15,
                "CommisionRateForClassifieds": 0.059,
                "Ratings": 5
            },
            {
                "ID": "c7bd9a71-a1a4-4d39-ab91-be966512bd0f",
                "IsActiveRecord": true,
                "Name": "Navind Times",
                "TypexCD": "Local",
                "LanguagexCD": "English",
                "CommissionRateForAdvertisments": 0.15,
                "CommisionRateForClassifieds": 0.059,
                "Ratings": 4
            },
            {
                "ID": "1806b70c-e47a-4c0b-835c-a88926d9723a",
                "IsActiveRecord": true,
                "Name": "Times of India (Goa Edition)",
                "TypexCD": "National",
                "LanguagexCD": "English",
                "CommissionRateForAdvertisments": 0.25,
                "CommisionRateForClassifieds": 0.050,
                "Ratings": 3
            },
            {
                "ID": "f42e2305-2c1e-4173-8e3b-b908283b57a6",
                "IsActiveRecord": false,
                "Name": "Times of India (Mumbai Edition)",
                "TypexCD": "National",
                "LanguagexCD": "English",
                "CommissionRateForAdvertisments": 0.15,
                "CommisionRateForClassifieds": 0.10,
                "Ratings": 2
            },
            {
                "ID": "f42e2305-2c1e-4173-8e3b-b908283b57a7",
                "IsActiveRecord": true,
                "Name": "Times of India (Bangalore Edition)",
                "TypexCD": "National",
                "LanguagexCD": "English",
                "CommissionRateForAdvertisments": 0.15,
                "CommisionRateForClassifieds": 0.10,
                "Ratings": 1
            },
             {
                "ID": "E1CAE59B-8662-4785-857F-B7395CD5E897",
                "IsActiveRecord": true,
                "Name": "Gomantak Times",
                "TypexCD": "Local",
                "LanguagexCD": "English",
                "CommissionRateForAdvertisments": 0.15,
                "CommisionRateForClassifieds": 0.15,
                "Ratings": 2
            }
            ,
             {
                "ID": "E1CAE59B-8662-4785-857F-B7395CD5E897",
                "IsActiveRecord": true,
                "Name": "Tarun Bharat",
                "TypexCD": "Local",
                "LanguagexCD": "Marathi",
                "CommissionRateForAdvertisments": 0.20,
                "CommisionRateForClassifieds": 0.20,
                "Ratings": 3
            }
        ];
    }
}


