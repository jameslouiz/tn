import { CommonModule } from '@angular/common'
import {
    Component,
    Input,
    Output,
    EventEmitter,
    HostListener,
    OnInit,
    OnDestroy,
    Renderer2,
    OnChanges,
    SimpleChanges,
} from '@angular/core'
import { CompanyService } from '../services/company.service'
import { Company, CompanyOfficer } from '../types'

@Component({
    selector: 'app-company-detail',
    templateUrl: './company-detail.component.html',
    styleUrls: ['./company-detail.component.css'],
    imports: [CommonModule],
    standalone: true,
})
export class CompanyDetailComponent implements OnInit, OnDestroy, OnChanges {
    @Input() isOpen: boolean = false
    @Input() company: Company | null = null
    @Output() closeDrawer = new EventEmitter<void>()

    companyOfficers: CompanyOfficer[] = []

    constructor(
        private renderer: Renderer2,
        private companyService: CompanyService
    ) {}

    ngOnInit() {
        if (this.isOpen) {
            this.renderer.addClass(document.body, 'drawer-open')
        }
    }

    ngOnDestroy() {
        this.renderer.removeClass(document.body, 'drawer-open')
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isOpen'] && changes['company'].currentValue) {
            const companyNumber = changes['company'].currentValue.company_number

            this.companyService.searchOfficers(companyNumber).subscribe(
                (data) => {
                    this.companyOfficers = data.items || []
                },
                (error) => {
                    console.error('Error fetching companies', error)
                }
            )
        }
    }

    onClose(): void {
        this.closeDrawer.emit()
    }

    @HostListener('document:keydown.escape', ['$event'])
    handleEscape(event: KeyboardEvent) {
        this.onClose()
    }
}
