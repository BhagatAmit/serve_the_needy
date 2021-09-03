import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgoMainComponent } from './ngo-main/ngo-main.component';
import { MemberComponent } from './member/member.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DonatorsComponent } from './donators/donators.component';
import { RecipientComponent } from './recipient/recipient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigninComponent } from './pages/pages/signin/signin.component';
import { ToastrModule } from 'ngx-toastr';
import { RequestsComponent } from './needy/requests/requests.component';
import { DonatorComponent } from './donator/donator.component';
import { DonateditemComponent } from './needy/donateditem/donateditem.component';
import { HomeComponent } from './needy/home/home/home.component';
import { NeedyComponent } from './needy/needy.component';
import { NGOMemberComponent } from './ngo-member/ngo-member.component';
import { LoginService } from './login.service';
import { DonationService } from './needy/donation.service';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonatorHomeComponent } from './donator-home/donator-home.component';
import { DonatorLoginComponent } from './donator-login/donator-login.component';
import { DonatorMainComponent } from './donator-main/donator-main.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateDonationComponent } from './update-donation/update-donation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MainComponent } from './needy/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NgoMainComponent,
    MemberComponent,
    ListMembersComponent,
    FeedbackComponent,
    AboutusComponent,
    DonatorsComponent,
    RecipientComponent,
    DonatorComponent,
    NGOMemberComponent,
    NeedyComponent,
    HomeComponent,
    DonateditemComponent,
    SigninComponent,
    RequestsComponent,
    FeedbackComponent,
    CreateDonationComponent,
    UpdateDonationComponent,
    DonationListComponent,
    RegistrationComponent,
    DonatorLoginComponent,
    DonatorHomeComponent,
    DonatorMainComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatCardModule,
    LayoutModule,

    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center'
    }),
  ],
  providers: [
    DonationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
