import { publicTender } from 'src/app/models/publicTender';
import { Supplier } from './Supplier';

export class SupplierApplyForTender {
    
    id?:number;
    publicTender?: publicTender;
    publicTenderID?: number;
    supplier?:Supplier;
    date?:Date;
    supplierID?:number;
    applied?: string;
    paid?: string;
}