import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultPage } from './result';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ResultPage
  ],
  imports: [
    IonicPageModule.forChild(ResultPage),
    TranslateModule.forChild(),
    ComponentsModule
  ],
})
export class ResultPageModule {}
