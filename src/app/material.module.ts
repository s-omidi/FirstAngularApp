import {NgModule} from '@angular/core';
import {MatSidenavModule,MatToolbarModule,MatIconModule,MatListModule
  ,MatButtonModule,MatTabsModule, MatMenuModule,MatTableModule ,
  MatSortModule,MatInputModule,MatFormFieldModule,MatPaginatorModule,
  MatProgressBarModule,MatCheckboxModule,MatProgressSpinnerModule,
  MatCardModule,MatSelectModule,MatDatepickerModule,MatNativeDateModule,
  MatDialogModule

} from '@angular/material';

  
@NgModule({
  imports: [
   MatTabsModule,
   MatSidenavModule,
   MatToolbarModule,
   MatIconModule,
   MatListModule,
   MatButtonModule,
   MatMenuModule,
   MatTableModule,
   MatSortModule,
   MatInputModule,
   MatFormFieldModule,
   MatPaginatorModule,
   MatProgressBarModule,
   MatCheckboxModule,
   MatProgressSpinnerModule,
   MatCardModule,
   MatSelectModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatDialogModule
  
   
  ],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  
   
  ]
})
export class MaterialModule {}