import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { AddPostComponent } from './components/posts/add-post/add-post.component';
import { ShowPostsComponent } from './components/posts/show-posts/show-posts.component';
import { UpdatePostComponent } from './components/posts/update-post/update-post.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

const routes: Routes = [
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/login', component: LoginComponent },
  { path: 'post/create', component: AddPostComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'posts/list',
    component: ShowPostsComponent,
    canActivate: [AuthGuard],
    data: { permittedRoles: ['Admin'] },
  },
  { path: 'posts/list/post/update/:id', component: UpdatePostComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
