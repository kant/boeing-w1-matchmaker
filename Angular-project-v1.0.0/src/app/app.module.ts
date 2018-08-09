import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { LocationComponent } from './location/location.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AcademicQualificationsComponent } from './academic-qualifications/academic-qualifications.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SkillsComponent,
    ExperienceComponent,
    LocationComponent,
    ProjectsComponent,
    CertificatesComponent,
    AcademicQualificationsComponent 
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
