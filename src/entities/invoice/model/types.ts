export interface Invoice {
  id: string;
  amount: number;
  status: 'pending' | 'paid' | 'overdue';
  date: string;
  clientId: string;
  description?: string;
}

export interface InvoiceCreateDTO {
  amount: number;
  clientId: string;
  description?: string;
}

export interface InvoiceUpdateDTO {
  amount?: number;
  status?: Invoice['status'];
  description?: string;
} 