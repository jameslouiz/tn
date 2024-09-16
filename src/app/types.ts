export enum COMPANY_STATUS {
    'active',
    'dissolved',
}

interface DOB {
    month: number
    year: number
}

interface Address {
    premesis: string
    postal_code: string
    country: string
    locality: string
    address_line_1: string
}

export interface Company {
    title: string
    description: string
    address_snippet: string
    company_number: number
    company_status: COMPANY_STATUS
    company_type: string
    date_of_creation: string
}

export interface CompanyOfficer {
    name: string
    appointed_on: string
    country_of_residence: string
    date_of_birth: DOB
    address: Address
    officer_role: string // could make this an enum also
}

export interface APIResponse<T> {
    page_number: number
    items?: T[]
}
