import {PipeTransform,Pipe} from 'angular2/core';
import {IPublication} from './publication';

@Pipe({
   name:"publicationFilter" 
})
export class PublicationFilterPipe implements PipeTransform {

    transform(value:IPublication[],args:string[]):IPublication[]{
         console.log('In PublicationFilterPipe '+ args[0]);
         let filteredData : boolean = args[0]? <any>args[0]:false;
         console.log('In PublicationFilterPipe '+filteredData);
         
        
        return filteredData==false? value.filter((publication:IPublication)=>
                publication.IsActiveRecord!= (filteredData)):value;
               
    }
}
