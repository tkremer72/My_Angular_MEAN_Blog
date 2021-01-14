import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { ListUsersComponent } from './components/admin/list-users/list-users.component';
import { UserLoginComponent } from './components/auth/user-login/user-login.component';
import { UserRegistrationComponent } from './components/auth/user-registration/user-registration.component';
import { BlogDetailsComponent } from './components/blog/blog-details/blog-details.component';
import { CreateBlogComponent } from './components/blog/create-blog/create-blog.component';
import { ListBlogsComponent } from './components/blog/list-blogs/list-blogs.component';
import { WebtekIncComponent } from './components/shared/webtek-inc/webtek-inc.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'users-login', component: UserLoginComponent },
  { path: 'users-registration', component: UserRegistrationComponent },
  { path: 'users-profile', component: UserProfileComponent },
  { path: 'users-create-blog', component: CreateBlogComponent },
  { path: 'users-edit-blog/:userId', component: CreateBlogComponent },
  { path: 'users-blog-details/blogId', component: BlogDetailsComponent },
  { path: 'users-list-blogs', component: ListBlogsComponent },
  { path: 'admin-list-users', component:  ListUsersComponent },
  { path: 'admin-profile', component: AdminProfileComponent },
  { path: 'about-webtek-inc', component: WebtekIncComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
