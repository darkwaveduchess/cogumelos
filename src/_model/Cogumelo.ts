import { Categoria } from "./Categoria";

export interface Cogumelo {

  image: string;
  number: number;
  name: string;
  categorias: Categoria[];
}
