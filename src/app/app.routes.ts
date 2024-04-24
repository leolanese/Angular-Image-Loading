import { Routes } from '@angular/router';

import { ImageLoader1Component } from './image-loader1/image-loader1.component';
import { OptimisedUnsplashImageComponent } from './optimised-unsplash-image/optimised-unsplash-image';
import { OptimisedMediumImagesComponent } from './optimised-medium-images/optimised-medium-image.component';
import { DeferPlaceholderComponent } from './defer-placeholder/defer-placeholder.component';
import { DeferLoadingComponent } from './defer-loading/defer-loading.component';
import { DeferOnWhenComponent } from './defer-on-when/defer-on-when.component';

export const routes: Routes = [
  { path: '', redirectTo: '/defaults', pathMatch: 'full' },
  { path: 'defaults', component: ImageLoader1Component },
  { path: 'unsplash', component: OptimisedUnsplashImageComponent },
  { path: 'medium', component: OptimisedMediumImagesComponent },
  { path: 'deferplaceholder', component: DeferPlaceholderComponent },
  { path: 'deferloading', component: DeferLoadingComponent },
  { path: 'deferonwhen', component: DeferOnWhenComponent },
  
];

