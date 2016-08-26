import {Component} from '@angular/core';

@Component({
    selector: 'app-angular-material',
    templateUrl: 'angular-material.component.html',
    styleUrls: ['angular-material.component.css'],
})
export class AngularMaterialComponent {
    foods: any[] = [
        { name: 'Pizza', rating: 'Excellent' },
        { name: 'Burritos', rating: 'Great' },
        { name: 'French fries', rating: 'Pretty good' },
    ];

    progress: number = 0;

    constructor() {
        // Update the value for the progress-bar on an interval.
        setInterval(() => {
            this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
        }, 200);
    }
}