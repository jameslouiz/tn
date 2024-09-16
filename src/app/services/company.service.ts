import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { APIResponse, Company, CompanyOfficer } from '../types'

// would probably pass this in via env var if a public token, if a private token then we could set this in some sort of auth flow
const headers = {
    'x-api-key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf',
}

@Injectable({
    providedIn: 'root',
})
export class CompanyService {
    private apiUrl =
        'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1'

    constructor(private http: HttpClient) {}

    searchCompanies(term: string): Observable<APIResponse<Company>> {
        const url = `${this.apiUrl}/Search?Query=${encodeURIComponent(term)}`
        return this.http.get<APIResponse<Company>>(url, {
            headers,
        })
    }

    searchOfficers(
        companyNumber: string
    ): Observable<APIResponse<CompanyOfficer>> {
        const url = `${this.apiUrl}/Officers?CompanyNumber=${encodeURIComponent(companyNumber)}`
        return this.http.get<APIResponse<CompanyOfficer>>(url, {
            headers,
        })
    }
}
