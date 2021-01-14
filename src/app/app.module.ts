import { AngularMaterialModule } from './components/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

//Bring in my custom interceptors
import { AuthInterceptor } from './shared/interceptors/auth.interceptor';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './components/auth/user-login/user-login.component';
import { UserRegistrationComponent } from './components/auth/user-registration/user-registration.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ListBlogsComponent } from './components/blog/list-blogs/list-blogs.component';
import { CreateBlogComponent } from './components/blog/create-blog/create-blog.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { WebtekIncComponent } from './components/shared/webtek-inc/webtek-inc.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    HeaderComponent,
    FooterComponent,
    ListBlogsComponent,
    CreateBlogComponent,
    BlogDetailsComponent,
    UserUpdateComponent,
    ErrorComponent,
    WebtekIncComponent,
    ListUsersComponent,
    AdminProfileComponent,
  ],
  imports: [
    AngularMaterialModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
