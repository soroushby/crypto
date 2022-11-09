import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { CryptoDataService } from '../../services/crypto-data.service';

@Component({
  selector: 'app-crypto-grid',
  templateUrl: './crypto-grid.component.html',
  styleUrls: ['./crypto-grid.component.scss'],
})
export class CryptoGridComponent {
  constructor(
    private http: HttpClient,
    private cryptoDataService: CryptoDataService,
    private router: Router
  ) {}

  @Input() cryptos!: any;

  public columnDefs: ColDef[] = [
    { field: 'rank' },
    { field: 'name' },
    {
      field: 'supply',
      cellRenderer: (params: any) => {
        let value = Number(params.value);
        return `${value.toFixed(4)}`;
      },
    },
    {
      field: 'priceUsd',
      cellRenderer: (params: any) => {
        let value = Number(params.value);
        return `${value.toFixed(4)}`;
      },
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from sever

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): any {
    let param = e['data'];
    console.log('cellClicked', e['data']);
    this.router.navigate(['/crypto/' + param.id]);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
}
