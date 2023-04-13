import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

import { ModalLoginComponent } from './Modales/modal-login/modal-login.component';
import { ModalBannerComponent } from './Modales/modal-banner/modal-banner.component';
import { ModalExperienciaComponent } from './Modales/modal-experiencia/modal-experiencia.component';
import { ModalAboutMeComponent } from './Modales/modal-about-me/modal-about-me.component';
import { ModalEducacionComponent } from './Modales/modal-educacion/modal-educacion.component';
import { ModalSectionHeroComponent } from './Modales/modal-section-hero/modal-section-hero.component';
import { ModalHabilidadesComponent } from './Modales/modal-habilidades/modal-habilidades.component';
import { ModalProyectoComponent } from './Modales/modal-proyecto/modal-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BannerComponent,
    SectionHeroComponent,
    AboutMeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    ModalLoginComponent,
    ModalBannerComponent,
    ModalExperienciaComponent,
    ModalAboutMeComponent,
    ModalEducacionComponent,
    ModalSectionHeroComponent,
    ModalHabilidadesComponent,
    ModalProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
