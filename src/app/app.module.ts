import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Components
import { AppComponent } from './app.component';
import { AdBoardComponent } from './components/ad-board/ad-board.component';
import { AdsComponent } from './components/ads/ads.component';
import { AdDetailComponent } from './components/ad-detail/ad-detail.component';
import { AddAdComponent } from './components/add-ad/add-ad.component';
import { EditAddComponent } from './components/edit-add/edit-add.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Services
import { DataService } from './services/data.service';
import { AuthorizationService } from './services/authorization.service';

const appRoutes: Routes = [
  { path: '', component: AdBoardComponent },
  { path: 'add', component: AddAdComponent },
  { path: 'edit/:createdAtDatetime', component: EditAddComponent },
  { path: 'details/:createdAtDatetime', component: AdDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdBoardComponent,
    AdsComponent,
    AdDetailComponent,
    AddAdComponent,
    EditAddComponent,
    NavbarComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    DataService,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
