import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { TestService } from "../../services/test.service";

@Component({
    selector: 'app-drag-drop-page',
    templateUrl: './drag-drop-page.component.html',
    styleUrl: './drag-drop-page.component.scss',
    standalone: true,
    imports: [CdkDrag, CdkDropList]
})
export class DragDropPageComponent {
    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];

    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];

    constructor(private testService: TestService) {
    }

    drop(event: CdkDragDrop<string[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    getValue() {
        return this.testService.getValue().subscribe({
            next: data => {
                console.log(data);
            }
        })
    }
}
