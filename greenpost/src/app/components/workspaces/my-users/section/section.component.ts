import { Component, ViewChild, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { catchError, finalize, tap } from 'rxjs/operators';
import 'rxjs/add/observable/forkJoin';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CollectionViewer } from '@angular/cdk/collections';
import { of } from 'rxjs/observable/of';
import { MyUsersCreateModalComponent } from '../create-modal/create-modal.component';
import { MatSnackBar } from '@angular/material';
import { error } from 'util';
import { UserModel } from '../../../../models';

@Component({
  selector: 'my-users-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class MyUsersSectionComponent implements OnInit {
  dataSource: MatTableDataSource<UserModel>;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  constructor(private router: Router, public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserModel>(users);
  }
  applyFilter(filterValue: string) {
    return true;
    }
  openCreateDialog(): void {
    var dialogRef = this.dialog.open(MyUsersCreateModalComponent, {
      width: '500px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
        
    });
  }
}

const users: UserModel[] = [
    { id: "1", username: "koscheyevserge", displayName: "Кощеев Сергей", roles: [{ id: '1', name: 'Менеджер' }, { id: '2', name: 'Руководитель' }] },
    { id: "2", username: "koscheyevserge", displayName: "Кощеев Сергей", roles: [{ id: '1', name: 'Менеджер' }, { id: '2', name: 'Руководитель' }] },
    { id: "3", username: "koscheyevserge", displayName: "Кощеев Сергей", roles: [{ id: '1', name: 'Менеджер' }, { id: '2', name: 'Руководитель' }] },
    { id: "4", username: "koscheyevserge", displayName: "Кощеев Сергей", roles: [{ id: '1', name: 'Менеджер' }, { id: '2', name: 'Руководитель' }] }
]
