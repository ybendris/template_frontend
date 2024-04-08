import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TablePageDataSource, TablePageItem } from './table-page-datasource';

@Component({
    selector: 'app-table-page',
    templateUrl: './table-page.component.html',
    styleUrl: './table-page.component.scss',
    standalone: true,
    imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class TablePageComponent implements AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<TablePageItem>;
    dataSource = new TablePageDataSource();

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name'];

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
