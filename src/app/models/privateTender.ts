import { Supplier } from './Supplier';
import { SubCategory } from './SubCategory';

export class PrivateTender {
  id?: number;
  brochure?: string;
  date?: Date;
  supplier?: Supplier;
  supplierID?: number;
  subCategory?: SubCategory;
  subCategoryID?: number;
  expireDate?:Date;
}
