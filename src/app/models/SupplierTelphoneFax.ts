import { Supplier } from './Supplier';
import { SubCategory } from './SubCategory';

export class SupplierTelephoneFax {
  public supplier?: Supplier;

  public supplierPhone?: string;

  public supplierFax?: string;

  public subCategories?: SubCategory[];
}
