import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedulePage } from './schedule';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SchedulePage
  ],
  imports: [
    IonicPageModule.forChild(SchedulePage),
    TranslateModule.forChild(),
    ComponentsModule,
    PipesModule
  ],
})
export class SchedulePageModule {}
