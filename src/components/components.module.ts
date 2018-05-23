import { SubjectListComponent } from './subject-list/subject-list';
import { SubjectActionListComponent } from './subject-action-list/subject-action-list';
import { NgModule } from '@angular/core';
import { WeekScheduleComponent } from './week-schedule/week-schedule';
import { CapsuleComponent } from './capsule/capsule';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [WeekScheduleComponent,
    CapsuleComponent,
    SubjectListComponent,
    SubjectActionListComponent],
	imports: [IonicModule, PipesModule, TranslateModule.forChild()],
	exports: [WeekScheduleComponent,
    CapsuleComponent,
    SubjectListComponent,
    SubjectActionListComponent]
})
export class ComponentsModule {}
