import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppComponent } from './app.component';
import { CreateDonationComponent } from './create-donation/create-donation.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonatorHomeComponent } from './donator-home/donator-home.component';
import { DonatorLoginComponent } from './donator-login/donator-login.component';
import { DonatorsComponent } from './donators/donators.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { MemberComponent } from './member/member.component';
import { DonateditemComponent } from './needy/donateditem/donateditem.component';
import { HomeComponent } from './needy/home/home/home.component';
import { MainComponent } from './needy/main/main.component';
import { NeedyComponent } from './needy/needy.component';
import { RequestsComponent } from './needy/requests/requests.component';
import { NgoMainComponent } from './ngo-main/ngo-main.component';
import { SigninComponent } from './pages/pages/signin/signin.component';
import { RecipientComponent } from './recipient/recipient.component';
import { RegistrationComponent } from './registration/registration.component';
import { DonatorMainComponent } from './donator-main/donator-main.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'NgoMain', component: NgoMainComponent },
  { path: 'Home', component: AppComponent },
  { path: 'ListMembers', component: ListMembersComponent },
  { path: 'Donators', component: DonatorsComponent },
  { path: 'Needy', component: RecipientComponent },
  { path: 'AboutUs', component: AboutusComponent },
  { path: 'Feedback', component: FeedbackComponent },
  { path: 'Member', component: MemberComponent },
  { path: 'app', component: AppComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: DonatorLoginComponent },
  { path: "main/items", component: DonateditemComponent },
  { path: "main/home", component: HomeComponent },
  { path: 'needy ', component: NeedyComponent },
  { path: 'main', component: MainComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'main/notify', component: RequestsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'donator-main', component: DonatorMainComponent },
  { path: '', component: WelcomeComponent },

  // { path: 'ngologin', component: LoginComponent },
  {
    path: 'donator-home', component: DonatorHomeComponent,
    children: [
      { path: 'add', component: CreateDonationComponent },
      { path: 'donations', component: DonationListComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
