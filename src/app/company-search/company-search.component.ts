import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CompanyListComponent } from '../company-list/company-list.component'
import { CompanyDetailComponent } from '../company-detail/company-detail.component'
import { CompanyService } from '../services/company.service'
import { Company } from '../types'

@Component({
    selector: 'app-search',
    templateUrl: './company-search.component.html',
    styleUrls: ['./company-search.component.css'],
    imports: [
        CommonModule,
        FormsModule,
        CompanyListComponent,
        CompanyDetailComponent,
    ],
    standalone: true,
})
export class CompanySearchComponent {
    searchTerm: string = ''
    results: Company[] = []
    isDrawerOpen: boolean = false
    selectedCompany: any = null

    constructor(private companyService: CompanyService) {}

    onSearch(): void {
        this.companyService.searchCompanies(this.searchTerm).subscribe(
            (data) => {
                this.results = data.items || []
            },
            (error) => {
                console.error('Error fetching companies', error)
            }
        )
    }

    openDrawer(company: any): void {
        this.selectedCompany = company
        this.isDrawerOpen = true
    }

    closeDrawer(): void {
        this.isDrawerOpen = false
    }
}
