import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetComponent } from './components/get/get.component';
import { DialCodeComponent } from './components/dial-code/dial-code.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import {
  LandingPageComponent, SignupComponent, PublicContentPlayerComponent,
  PublicCollectionPlayerComponent
} from './components';
import { SignupGuard, LandingpageGuard } from './services';
import { PreviewCourseComponent } from '../learn/components/preview-course/preview-course.component';
import { CatalogComponent} from '../search/components/catalog/catalog.component';

const routes: Routes = [
  {
    path: '', // root path '/' for the app
    component: LandingPageComponent,
    canActivate: [LandingpageGuard],
    data: {
      telemetry: {
        env: 'public', pageid: 'landing-page', type: 'edit', subtype: 'paginate'
      }
    }
  },
  {
    path: 'signup', component: SignupComponent,
    canActivate: [SignupGuard],
    data: {
      telemetry: {
        env: 'public', pageid: 'signup', type: 'edit', subtype: 'paginate'
      }
    }
  },
  {
    path: 'get', component: GetComponent, data: {
      telemetry: {
        env: 'public', pageid: 'get', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'get/dial/:dialCode', component: DialCodeComponent, data: {
      telemetry: {
        env: 'public', pageid: 'get-dial', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'play/content/:contentId', component: PublicContentPlayerComponent, data: {
      telemetry: {
        env: 'public', pageid: 'play-content', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'play/collection/:collectionId', component: PublicCollectionPlayerComponent, data: {
      telemetry: {
        env: 'public', pageid: 'play-collection', type: 'view', subtype: 'paginate'
      }
    }
  },
  {
    path: 'explore', loadChildren: './module/explore/explore.module#ExploreModule'
  },
  {
    path: ':slug/explore', loadChildren: './module/explore/explore.module#ExploreModule'
  },
  {
    path: 'preview/:courseId' , component: PreviewCourseComponent
  },
  {
    path: 'catalog/:pageNumber' , component: CatalogComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
