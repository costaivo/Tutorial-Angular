import { Injectable } from '@angular/core';
import { IClient } from './client';

@Injectable()
export class ClientService {

    constructor() {

    }
   
	getTotalCount():number{
		return this.getAll().length;
    }
    getClient(id:string):IClient{
		return this.getAll().find(x=>x.ID==id);
    }
    
    getAll(): IClient [] {
        return [{
            "ID": "1E916F75-E36F-4842-82B2-01647E75C79D",
            "IsActiveRecord": true,
            "FirstName": "Gaurav",
            "MiddleName": "",
            "LastName": "Borkar",
            "Address": "Margao",
            "MobileNumber": "9765392024",
            "TypexCD": "Sub Agent"
        },
        {
            "ID": "0A4AB922-962B-47CC-8B82-02E6F0A495F4",
            "IsActiveRecord": true,
            "FirstName": "Zohaib",
            "MiddleName": "",
            "LastName": "Mulla",
            "Address": "Nuvem",
            "MobileNumber": "9822158470",
            "TypexCD": "Regular Client"
        },
        {
            "ID": "C57AA67E-7874-4708-8665-0DDC8B0FAA0F",
            "IsActiveRecord": true,
            "FirstName": "Nathan",
            "MiddleName": "",
            "LastName": "Costa",
            "Address": "Margao",
            "MobileNumber": "9823163587",
            "TypexCD": "Regular Client"
        }
        ];
    }
}


