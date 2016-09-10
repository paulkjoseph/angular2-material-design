import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import {
    TableOptions,
    TableColumn,
    ColumnMode
} from 'angular2-data-table';

@Component({
    selector: 'app-data-table',
    templateUrl: 'data-table.component.html',
    styleUrls: ['data-table.component.css']
})
export class DataTableComponent implements OnInit {

    @ViewChild('dataTmpl') dataTmpl: TemplateRef<any>;
    @ViewChild('actionTmpl') actionTmpl: TemplateRef<any>;

    rows = [];

    options = new TableOptions({
        columnMode: ColumnMode.force,
        headerHeight: 50,
        footerHeight: 50,
        rowHeight: 'auto',
        limit: 20,
        loadingIndicator: true,
        columns: [
            new TableColumn({ template: this.dataTmpl, name: 'Name', prop: 'name' }),
            new TableColumn({ template: this.dataTmpl, name: 'Gender', prop: 'gender' }),
            new TableColumn({ template: this.dataTmpl, name: 'Company', prop: 'company' }),
            new TableColumn({ template: this.actionTmpl })
        ]
    });

    constructor() {
        this.fetch((data) => {
            this.rows.push(...data);
        });
    }

    ngOnInit() { }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `https://unpkg.com/angular2-data-table@0.2.0/assets/data/company.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

    onUpdateFilter(filter) {
        console.log('onUpdateFilter:', filter);
    }

    onRowClick(selected) {
        console.log('onRowClick:', selected);
    }

    onClearInput(input) {
        console.log('onClearInput:', input.value);
        input.value = '';
    }

    onDelete(data) {
        console.log('onDelete:', JSON.stringify(data));
    }

    onCreate(data) {
        console.log('onCreate:', JSON.stringify(data));
    }

    onAdd(data) {
        console.log('onAdd:', JSON.stringify(data));
    }

}
