import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJHhnalZW2vyTXAeYzc9KEBePqGqCkVqk',
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'cadastro', component: CadastroComponent },
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent },
    ]),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppComponent,
    HelloComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    CadastroComponent,
    MapsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
