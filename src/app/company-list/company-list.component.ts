import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Company } from '../types'

@Component({
    selector: 'app-company-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './company-list.component.html',
    styleUrl: './company-list.component.css',
})
export class CompanyListComponent {
    @Output() companySelected = new EventEmitter<any>()
    @Input() results: Company[] = []
    @Input() searchTerm: string = ''

    constructor() {}

    selectCompany(company: any): void {
        this.companySelected.emit(company)
    }
}
