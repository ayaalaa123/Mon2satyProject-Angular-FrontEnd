import { PostService } from 'src/app/service/post.service';
import { PublicTenderService } from './service/public-tender.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/Header/header/header.component';
import { FooterComponent } from './core/Footer/footer/footer.component';
import { ContentComponent } from './features/aboutUs/content/content.component';
import { PostComponent } from './features/admin/post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './features/user/user/user.component';
import { UsersDataComponent } from './features/admin/users-data/users-data.component';
import { ConfirmednewsuppliersComponent } from './features/admin/confirmednewsuppliers/confirmednewsuppliers.component';
import { PrivateTenderComponent } from './features/admin/PrivateTender/private-tender/private-tender.component';
import { UserdataforeditanddetailsComponent } from './features/admin/userdataforeditanddetails/userdataforeditanddetails.component';
import { AdminHeaderComponent } from './features/admin/adminHeader/admin-header/admin-header.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { PublicAdminComponent } from './features/admin/publicAdmin/public-admin/public-admin.component';
import { UserHeaderComponent } from './features/user/userHeader/user-header/user-header.component';
import { UserPublicTenderComponent } from './features/user/userPublicTender/user-public-tender/user-public-tender.component';
import { PublicTenderReportComponent } from './features/publicTenderReport/public-tender-report/public-tender-report.component';
import { SearchComponent } from './features/admin/search/search.component';
import { SupplierComponent } from './features/admin/searchList/supplier/supplier.component';
import { PublicTendersComponent } from './features/admin/searchList/public-tenders/public-tenders.component';
import { PrivateTendersComponent } from './features/admin/searchList/private-tenders/private-tenders.component';
import { UserPrivateTenderComponent } from './features/user/userprivateTender/user-private-tender/user-private-tender.component';
import { CreatePrivateTenderComponent } from './features/admin/createPrivateTender/create-private-tender/create-private-tender.component';
import { EditSupplierComponent } from './features/admin/EditSupplier/editSupplierDetails.component';
import { AssignSupplierToPublicTenderComponent } from './features/admin/assignSupplierToPublicTender/assign-supplier-to-public-tender/assign-supplier-to-public-tender.component';
import { UserInfoComponent } from './features/user/userInfo/user-info/user-info.component';
import { EditNewSupplierDataComponent } from './core/editNewSupplierData/edit-new-supplier-data/edit-new-supplier-data.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { SuppliersPublicTendersComponent } from './features/admin/suppliersPublicTenders/suppliers-public-tenders/suppliers-public-tenders.component';
import { SentPrivateTenderToSuppliersComponent } from './features/admin/sentPrivateTenderToSuppliers/sent-private-tender-to-suppliers/sent-private-tender-to-suppliers.component';
import { PrivateTenderReportComponent } from './features/admin/privateTenderReport/private-tender-report/private-tender-report.component';
import { AssignSupplierToPrivateTenderComponent } from './features/admin/assign-supplier-to-private-tender/assign-supplier-to-private-tender.component';
import { RigistrationComponent } from './features/admin/rigistration/rigistration/rigistration.component';
import { CategoriesDataComponent } from './features/admin/categories-data/categories-data.component';
import { SupplierTendersComponent } from './features/user/supplier-tenders/supplier-tenders.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponent,
    ContentComponent,

    PostComponent,
    UserComponent,
    UsersDataComponent,
    ConfirmednewsuppliersComponent,
    PrivateTenderComponent,
    UserdataforeditanddetailsComponent,
    AdminHeaderComponent,
    PublicAdminComponent,
    EditSupplierComponent,
    UserHeaderComponent,
    UserPublicTenderComponent,
    PublicTenderReportComponent,
    SearchComponent,
    SupplierComponent,
    PublicTendersComponent,
    PrivateTendersComponent,
    UserPrivateTenderComponent,
    CreatePrivateTenderComponent,
    AssignSupplierToPublicTenderComponent,
    UserInfoComponent,
    EditNewSupplierDataComponent,
    SuppliersPublicTendersComponent,
    SentPrivateTenderToSuppliersComponent,
    PrivateTenderReportComponent,
    AssignSupplierToPrivateTenderComponent,
    RigistrationComponent,
    CategoriesDataComponent,
    SupplierTendersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
  ],
  providers: [PublicTenderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
