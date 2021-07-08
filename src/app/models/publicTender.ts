import { SubCategory } from './SubCategory';
import { Supplier } from './Supplier';
export class publicTender{
  
    id?:number;
    brochure?:string;
    supplier?:Supplier;
    date?:Date;
    expireDate?:Date;
    supplierID?:number;
    subCategory?:SubCategory;
    subCategoryID?:number;
    tenderDescription?:string;


}