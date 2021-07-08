import { Supplier } from './Supplier';
import { SubCategory } from './SubCategory';
export class SupplierTelFaxViewModel {
  constructor(
    public Supplier: Supplier,
    public SupplierPhone: string,
    public SupplierFax: string,
    public SubCategories: [SubCategory]
  ) {
    // if message contains numbers !!!
  }
}
