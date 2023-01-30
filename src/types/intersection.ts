export interface BusinessPartner {
    name: string;
    credit: number;
}

export interface Identity {
    id: number;
    name: string;
}

export interface Contact {
    email: string;
    phone: string;
}
 type Employee = Identity & Contact;
// type Customer = BusinessPartner & Contact;
export default Employee

