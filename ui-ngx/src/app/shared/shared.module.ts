///
/// Copyright © 2016-2019 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FooterComponent } from './components/footer.component';
import { LogoComponent } from './components/logo.component';
import { ToastDirective, TbSnackBarComponent } from './components/toast.directive';
import { BreadcrumbComponent } from '@app/shared/components/breadcrumb.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
  MatInputModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatGridListModule,
  MatDialogModule,
  MatSelectModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatTabsModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatSliderModule,
  MatExpansionModule,
  MatStepperModule, MatAutocompleteModule
} from '@angular/material';
import { MatDatetimepickerModule, MatNativeDatetimeModule } from '@mat-datetimepicker/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserMenuComponent } from '@shared/components/user-menu.component';
import { NospacePipe } from './pipe/nospace.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { TbCheckboxComponent } from '@shared/components/tb-checkbox.component';
import { HelpComponent } from '@shared/components/help.component';
// import { EntitiesTableComponent } from '@shared/components/entity/entities-table.component';
// import { AddEntityDialogComponent } from '@shared/components/entity/add-entity-dialog.component';
// import { DetailsPanelComponent } from '@shared/components/details-panel.component';
// import { EntityDetailsPanelComponent } from '@shared/components/entity/entity-details-panel.component';
import { TbAnchorComponent } from '@shared/components/tb-anchor.component';
// import { ContactComponent } from '@shared/components/contact.component';
// import { AuditLogDetailsDialogComponent } from '@shared/components/audit-log/audit-log-details-dialog.component';
// import { AuditLogTableComponent } from '@shared/components/audit-log/audit-log-table.component';
// import { MillisecondsToTimeStringPipe } from '@shared/pipe/milliseconds-to-time-string.pipe';
// import { TimewindowComponent } from '@shared/components/time/timewindow.component';
import { OverlayModule } from '@angular/cdk/overlay';
// import { TimewindowPanelComponent } from '@shared/components/time/timewindow-panel.component';
// import { TimeintervalComponent } from '@shared/components/time/timeinterval.component';
// import { DatetimePeriodComponent } from '@shared/components/time/datetime-period.component';
// import { EnumToArrayPipe } from '@shared/pipe/enum-to-array.pipe';
import { ClipboardModule } from 'ngx-clipboard';
// import { ValueInputComponent } from '@shared/components/value-input.component';
// import { IntervalCountPipe } from '@shared/pipe/interval-count.pipe';
import { FullscreenDirective } from '@shared/components/fullscreen.directive';

@NgModule({
  providers: [
    DatePipe,
//    MillisecondsToTimeStringPipe,
//    EnumToArrayPipe,
//    IntervalCountPipe,
  ],
  entryComponents: [
    TbSnackBarComponent,
    TbAnchorComponent,
//    AddEntityDialogComponent,
//    AuditLogDetailsDialogComponent,
//    TimewindowPanelComponent,
  ],
  declarations: [
    FooterComponent,
    LogoComponent,
    ToastDirective,
    FullscreenDirective,
    TbAnchorComponent,
    HelpComponent,
    TbCheckboxComponent,
    TbSnackBarComponent,
    BreadcrumbComponent,
    UserMenuComponent,
//    EntitiesTableComponent,
//    AddEntityDialogComponent,
//    DetailsPanelComponent,
//    EntityDetailsPanelComponent,
//    ContactComponent,
//    AuditLogTableComponent,
//    AuditLogDetailsDialogComponent,
//    TimewindowComponent,
//    TimewindowPanelComponent,
//    TimeintervalComponent,
//    DatetimePeriodComponent,
//    ValueInputComponent,
    NospacePipe,
//    MillisecondsToTimeStringPipe,
//    EnumToArrayPipe,
//    IntervalCountPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTabsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDatetimeModule,
    MatDatetimepickerModule,
    MatSliderModule,
    MatExpansionModule,
    MatStepperModule,
    MatAutocompleteModule,
    ClipboardModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    FormsModule,
    ReactiveFormsModule,
    OverlayModule
  ],
  exports: [
    FooterComponent,
    LogoComponent,
    ToastDirective,
    FullscreenDirective,
    TbAnchorComponent,
    HelpComponent,
    TbCheckboxComponent,
    BreadcrumbComponent,
    UserMenuComponent,
//    EntitiesTableComponent,
//    AddEntityDialogComponent,
//    DetailsPanelComponent,
//    EntityDetailsPanelComponent,
//    ContactComponent,
//    AuditLogTableComponent,
//    TimewindowComponent,
//    TimewindowPanelComponent,
//    TimeintervalComponent,
//    DatetimePeriodComponent,
//    ValueInputComponent,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatDialogModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTabsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDatetimeModule,
    MatDatetimepickerModule,
    MatSliderModule,
    MatExpansionModule,
    MatStepperModule,
    MatAutocompleteModule,
    ClipboardModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    NospacePipe,
//    MillisecondsToTimeStringPipe,
//    EnumToArrayPipe,
//    IntervalCountPipe,
    TranslateModule
  ]
})
export class SharedModule { }