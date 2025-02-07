import { Component, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular';

@Component({
  selector: 'ns-segmented-bar',
  templateUrl: './component.html',
  imports: [NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SegmentedBarComponent { }
