import { SupplierTendersComponent } from './features/user/supplier-tenders/supplier-tenders.component';
import { RigistrationComponent } from './features/admin/rigistration/rigistration/rigistration.component';
import { SentPrivateTenderToSuppliersComponent } from './features/admin/sentPrivateTenderToSuppliers/sent-private-tender-to-suppliers/sent-private-tender-to-suppliers.component';
import { AssignSupplierToPrivateTenderComponent } from './features/admin/assign-supplier-to-private-tender/assign-supplier-to-private-tender.component';
import { CreatePrivateTenderComponent } from './features/admin/createPrivateTender/create-private-tender/create-private-tender.component';
import { SuppliersPublicTendersComponent } from './features/admin/suppliersPublicTenders/suppliers-public-tenders/suppliers-public-tenders.component';
import { UserInfoComponent } from './features/user/userInfo/user-info/user-info.component';
import { AssignSupplierToPublicTenderComponent } from './features/admin/assignSupplierToPublicTender/assign-supplier-to-public-tender/assign-supplier-to-public-tender.component';
import { EditSupplierComponent } from './features/admin/EditSupplier/editSupplierDetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './features/aboutUs/about-us/about-us.component';
// import { homedir } from 'os';
import { HomeComponent } from './Features/home/home.component';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { ContactComponent } from './Features/contact/contact.component';
import { SignInComponent } from './core/signIn/sign-in/sign-in.component';
import { LogInComponent } from './core/logIn/log-in/log-in.component';
import { PrivateTenderComponent } from './features/admin/PrivateTender/private-tender/private-tender.component';
import { UserdataforeditanddetailsComponent } from './features/admin/userdataforeditanddetails/userdataforeditanddetails.component';
import { UsersDataComponent } from './features/admin/users-data/users-data.component';
import { ConfirmednewsuppliersComponent } from './features/admin/confirmednewsuppliers/confirmednewsuppliers.component';
import { PublicAdminComponent } from './features/admin/publicAdmin/public-admin/public-admin.component';
import { PostComponent } from './features/admin/post/post.component';
import { AdminHeaderComponent } from './features/admin/adminHeader/admin-header/admin-header.component';
import { UserPublicTenderComponent } from './features/user/userPublicTender/user-public-tender/user-public-tender.component';
import { UserHeaderComponent } from './features/user/userHeader/user-header/user-header.component';
import { PublicTenderReportComponent } from './features/publicTenderReport/public-tender-report/public-tender-report.component';
import { SupplierComponent } from './features/admin/searchList/supplier/supplier.component';
import { PublicTendersComponent } from './features/admin/searchList/public-tenders/public-tenders.component';
import { PrivateTendersComponent } from './features/admin/searchList/private-tenders/private-tenders.component';
import { SearchComponent } from './features/admin/search/search.component';
import { UserPrivateTenderComponent } from './features/user/userprivateTender/user-private-tender/user-private-tender.component';
import { EditNewSupplierDataComponent } from './core/editNewSupplierData/edit-new-supplier-data/edit-new-supplier-data.component';
import { PrivateTenderReportComponent } from './features/admin/privateTenderReport/private-tender-report/private-tender-report.component';
import { CategoriesDataComponent } from './features/admin/categories-data/categories-data.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminHeaderComponent,
    children: [
      {
        path: 'PublicTender', // child route path
        component: PublicAdminComponent, // child route component that the router renders
      },
      {
        path: 'newSuppliers',
        component: ConfirmednewsuppliersComponent, // another child route component that the router renders
      },
      { path: 'privatetender', component: PrivateTenderComponent },
      { path: 'suppliers', component: UsersDataComponent },
      { path: 'search', component: SearchComponent },
      {
        path: 'privateTenderReport/:id',
        component: PrivateTenderReportComponent,
      },
      {
        path: 'assignSupplierToPrivateTender/:privateTenderID/:id',
        component: AssignSupplierToPrivateTenderComponent
      },
      {
        path: 'search/ListOfSuppliers/:id',
        component: SupplierComponent,
      },
      {
        path: 'search/ListOpublicTender/:id',
        component: PublicTendersComponent,
      },
      {
        path: 'search/listOfPrivatTender/:id',
        component: PrivateTendersComponent,
      },
      { path: 'details/:id', component: UserdataforeditanddetailsComponent },

      {
        path: 'publicTenderReport/:id',
        component: PublicTenderReportComponent,
      },
      {
        path: 'createTender',
        component: PostComponent,
      },
     { path: 'supplierDetails/:id', component: EditSupplierComponent },
     {  path: 'assignSupplierToPublicTender/:id/:publicTenderID',
     component: AssignSupplierToPublicTenderComponent,
    },
    {path:'supplierPublicTenders',component:SuppliersPublicTendersComponent},
    {path:'createPrivateTender',component:CreatePrivateTenderComponent},
    {
      path: 'sendPrivateToSupplier',
      component:SentPrivateTenderToSuppliersComponent
    },
    {path:'rigistration',
    component:RigistrationComponent
  },
    { path: 'category', component: CategoriesDataComponent}
    ]
  },
  {
    path: 'Supplier',
    component: UserHeaderComponent,
    children: [
      { path: 'userPublicTender', component: UserPublicTenderComponent },
      { path: 'privatetender', component: UserPrivateTenderComponent },
      { path:'userInfo',component:UserInfoComponent },
      { path: 'supplierTenders', component: SupplierTendersComponent}
    ],
    runGuardsAndResolvers: 'always'
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'login', component: LogInComponent },
  { path: 'userHome', component: UserPublicTenderComponent },
  {path:'editNewSupplierData',component:EditNewSupplierDataComponent}

  // { path: 'newSuppliers', component: ConfirmednewsuppliersComponent },
  // { path: 'PublicTender', component: PublicAdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation : 'reload'})],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponent = [
  AboutUsComponent,
  SignInComponent,
  LogInComponent,
  ContactComponent,
  HomeComponent,
  PrivateTenderComponent,
  UsersDataComponent,
  ConfirmednewsuppliersComponent,
  AssignSupplierToPrivateTenderComponent,
  PublicAdminComponent,
  PublicTenderReportComponent,
  SupplierComponent,
  PublicTendersComponent,
  PrivateTendersComponent,
  SearchComponent,
  AssignSupplierToPublicTenderComponent,
  UserInfoComponent,
  SuppliersPublicTendersComponent,
  PrivateTenderReportComponent,
  SentPrivateTenderToSuppliersComponent,
  CreatePrivateTenderComponent,
  SupplierTendersComponent
];
