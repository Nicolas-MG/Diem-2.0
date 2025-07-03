import { Categoria } from "./categoria";

export interface Prendas{
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    categoria: Categoria;
}