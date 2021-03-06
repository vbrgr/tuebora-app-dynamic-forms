import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MainrootComponent } from './mainroot/mainroot.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin-routes.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPreferencesComponent } from './user-preferences/user-preferences.component';
import { HeaderNoiconComponent } from './header-noicon/header-noicon.component';
import { NavSideToggleComponent } from './nav-side-toggle/nav-side-toggle.component';
import { NavSideHoverComponent } from './nav-side-hover/nav-side-hover.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { TueSidebarComponent } from './tue-sidebar/tue-sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { TueboraLogoComponent } from './tuebora-logo/tuebora-logo.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { RadioComponent } from './components/radio/radio.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { UserDynamicFormComponent } from './user-dynamic-form/user-dynamic-form.component';
import { FormTitleComponent } from './components/form-title/form-title.component';
import { RegistrationComponent } from './registration/registration.component';
import { DatamodelComponent } from './datamodel/datamodel.component';


const COMPONENTS = [
  HeaderComponent,
  MainrootComponent,
  DashboardComponent,
  UserPreferencesComponent,
  HeaderNoiconComponent,
  NavSideToggleComponent,
  NavSideHoverComponent,
  HeaderNavComponent,
  TueSidebarComponent,
  TueboraLogoComponent,
  DatamodelComponent,
  InputComponent,
  SelectComponent,
  RadioComponent,
  ButtonComponent,
  CheckboxComponent,
  DateComponent,
  TextareaComponent,
  DynamicFieldDirective,
  DynamicFormComponent,
  FormTitleComponent,
  UserDynamicFormComponent,
  RegistrationComponent
                    ];
@NgModule({
  declarations: COMPONENTS,
  imports: [
              CommonModule,
              HttpClientModule,
              FormsModule,
              ReactiveFormsModule,
              SidebarModule.forRoot(),
              RouterModule.forChild(routes)
            ],
schemas: [
          CUSTOM_ELEMENTS_SCHEMA,
          NO_ERRORS_SCHEMA
            ],
  exports: [
    HeaderComponent,
    MainrootComponent,
    DashboardComponent,
    UserPreferencesComponent,
    HeaderNoiconComponent,
    NavSideToggleComponent,
    NavSideHoverComponent,
    HeaderNavComponent,
    TueSidebarComponent,
    TueboraLogoComponent,
    InputComponent,
    SelectComponent,
    RadioComponent,
    ButtonComponent,
    CheckboxComponent,
    DateComponent,
    TextareaComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    UserDynamicFormComponent,
    FormTitleComponent,
    RegistrationComponent,
    RouterModule,
  ],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadioComponent,
    CheckboxComponent,
    TextareaComponent,
    FormTitleComponent,
    HeaderNavComponent
  ]
})
export class AdminModule { }
