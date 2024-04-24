import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_ROUTES } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    APP_ROUTES
  ]
})
  .catch(err => console.error(err));