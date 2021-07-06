import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { from } from 'rxjs';
// import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { ShowPostsComponent } from './components/posts/show-posts/show-posts.component';
import { UpdatePostComponent } from './components/posts/update-post/update-post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UserService } from './services/user.service';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AddPostComponent,
    ShowPostsComponent,
    UpdatePostComponent,
    NotFoundComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
