import { SubCategory } from './../models/SubCategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root',
})
export class SubCategoryService {
  subCat: SubCategory[];

  apiUrl = 'http://localhost:56748/getSubCategory';

  apiCategoriesUrl = 'http://localhost:56748/api/Categories';

  constructor(private http: HttpClient) {}

  getSubCategory(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getCategories() {
    return this.http.get<Category[]>(this.apiCategoriesUrl);
  }

  addCategory(cat: Category) {
    return this.http.post<Category>(this.apiCategoriesUrl, cat);
  }

  addSubCategory(subCat: SubCategory) {
    return this.http.post<SubCategory>('http://localhost:56748/api/CreateSubCategory', subCat);
  }
}
