import { TelemetryModule } from '@sunbird/telemetry';
import { LearnRoutingModule } from './learn-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@sunbird/shared';
import { SuiModule } from 'ng2-semantic-ui/dist';
import { SlickModule } from 'ngx-slick';
import { NgInviewModule } from 'angular-inport';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  LearnPageComponent, CoursePlayerComponent, CourseConsumptionHeaderComponent,
  CourseConsumptionPageComponent, BatchDetailsComponent, EnrollBatchComponent, CreateBatchComponent,
  UpdateCourseBatchComponent, CarriculumCardComponent, PreviewCourseComponent  } from './components';
import { CourseConsumptionService, CourseBatchService, CourseProgressService } from './services';
import { CoreModule } from '@sunbird/core';
import { NotesModule } from '@sunbird/notes';
import { DashboardModule } from '@sunbird/dashboard';
import { MaterialUi } from '../../material';
import { TestAllBatchesComponent } from './components/test-all-batches/test-all-batches.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialUi,
    SuiModule,
    DashboardModule,
    SlickModule,
    FormsModule,
    LearnRoutingModule,
    CoreModule,
    ReactiveFormsModule,
    NotesModule,
    TelemetryModule,
    NgInviewModule,
  ],
  providers: [CourseConsumptionService, CourseBatchService, CourseProgressService],
  declarations: [LearnPageComponent, CoursePlayerComponent, CourseConsumptionHeaderComponent,
    CourseConsumptionPageComponent, BatchDetailsComponent, EnrollBatchComponent, CreateBatchComponent,
    UpdateCourseBatchComponent, CarriculumCardComponent, PreviewCourseComponent, TestAllBatchesComponent]
})
export class LearnModule { }
