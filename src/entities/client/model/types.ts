export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClientCreateDTO {
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface ClientUpdateDTO {
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
} 