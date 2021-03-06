# Steps for the creation of this project after running ng new from the cli.

1. Add Angular Material to this project from the cli
  ng add @angular/material
  chose custom theme this time around.

2. Create a feature module for this project for Angular Material
  ng g module components/angular-material

3. Create all of the separate boiler plate components for this project, may not need or use all of them.

# Components
  ng g c components/admin/admin-profile - For administrators only
  ng g c components/admin/list-users - For administrators only

  ng g c components/auth/user-login - All users will login to the app here.
  ng g c components/auth/user-registration - All users will signup or register with the app here.

  ng g c components/blog/blog-details - Detailed view of the individual blog.
  ng g c components/blog/create-blog - User will use this page to create or edit a blog
  ng g c components/blog/list-blogs - All of the blogs will be listed on this page.

  ng g c components/shared/error - Custom error page
  ng g c components/shared/header - Site header navigation page
  ng g c components/shared/footer - Site footer navigation pate
  ng g c components/shared/webtek-inc - This is an about us type page for the company WebTEK inc. 

  ng g c components/user/user-profile - This page will list the users information as well as any blogs that they have created.
  ng g c components/user/user-update - The user can visit this page to update user information.

# Route Guards
  ng g guard shared/guards/auth - Protects all routes from unauthroized access.
  ng g guard shared/guards/admin - Allows access to routes for administrators only.

# Interceptors
  ng g interceptor shared/interceptors/auth - Intercepts requests and attaches headers and token to them.
  ng g interceptor shared/interceptors/error - Intercepts all request errors and sends them to the custom error page.

# Models
  ng g class --type=model shared/models/auth - This model will be for registering and loggin in.
  ng g class --type=model shared/models/user - This model will be used for updating user information, displaying user information and anything other than registering and logging in that involves the user.
  ng g class --type=model shared/models/blog - This model will be used for creating, editing, deleting and fetching any blog type information. 

# Services
  ng g s shared/services/auth - Makes calls to the backend, manages authorization app wide, attaches and saves information to the local storage. 
  ng g s shared/services/admin - Makes calls to the backend to list users as well as to delete them on behalf of the admin.
  ng g s shared/services/blog - Makes calls to the backend for anything related to the blogs.
  ng g s shared/services/user - Makes calls to the backend for anything other than authorization and admin for the user.

  4. Import and export all the necessary components to be used with Angular Material into the Angular Material module, then import the Angular Material module into the app.module.ts file.  

  5. Create navigation and app routing

  6. Start coding the registration, login, and auth services pages as well as the auth interceptor and the error interceptor. 




