import { SubjectListComponent } from './subject-list/subject-list';
import { SubjectActionListComponent } from './subject-action-list/subject-action-list';
import { NgModule } from '@angular/core';
import { WeekScheduleComponent } from './week-schedule/week-schedule';
import { CapsulaComponent } from './capsula/capsula';
import { IonicModule } from 'ionic-angular';
import { PipesModule } from '../pipes/pipes.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [WeekScheduleComponent,
    CapsulaComponent,
    SubjectListComponent,
    SubjectActionListComponent],
	imports: [IonicModule, PipesModule, TranslateModule.forChild()],
	exports: [WeekScheduleComponent,
    CapsulaComponent,
    SubjectListComponent,
    SubjectActionListComponent]
})
export class ComponentsModule {}
