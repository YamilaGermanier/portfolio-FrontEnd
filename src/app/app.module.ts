import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalLoginComponent } from './Modales/modal-login/modal-login.component';
import { ModalBannerComponent } from './Modales/modal-banner/modal-banner.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ModalExperienciaComponent } from './Modales/modal-experiencia/modal-experiencia.component';
import { ModalAboutMeComponent } from './Modales/modal-about-me/modal-about-me.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ModalEducacionComponent } from './Modales/modal-educacion/modal-educacion.component';
import { ModalSectionHeroComponent } from './Modales/modal-section-hero/modal-section-hero.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ModalHabilidadesComponent } from './Modales/modal-habilidades/modal-habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ModalProyectoComponent } from './Modales/modal-proyecto/modal-proyecto.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    BannerComponent,
    SectionHeroComponent,
    AboutMeComponent,
    ModalLoginComponent,
    ModalBannerComponent,
    ExperienciaComponent,
    ModalExperienciaComponent,
    ModalAboutMeComponent,
    EducacionComponent,
    ModalEducacionComponent,
    ModalSectionHeroComponent,
    HabilidadesComponent,
    ModalHabilidadesComponent,
    ProyectosComponent,
    ModalProyectoComponent,
    ContactoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
