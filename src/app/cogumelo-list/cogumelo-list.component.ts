import { Component, OnInit } from '@angular/core';
import { CogumeloService } from 'src/_services/cogumelo.service';
import { Categoria } from '../../_model/Categoria';
import { Cogumelo } from '../../_model/Cogumelo';

@Component({
  selector: 'app-cogumelo-list',
  templateUrl: './cogumelo-list.component.html',
  styleUrls: ['./cogumelo-list.component.scss']
})
export class CogumeloListComponent {
  public cogumelos: Cogumelo[] = [
    {
      image: 'https://i0.wp.com/files.agro20.com.br/uploads/2020/07/Benef%C3%ADcios-do-cogumelo-2.jpg?resize=1024%2C835&ssl=1',
      number: 1,
      name: 'Benef',
      categorias: [
        Categoria.Venenoso,
        Categoria.Comestível,
      ],
    },

    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXf00iTQfzfY8S96El5Z357EHAGmBkTLLxh0kj-vw5rkUuDb0uwItOHHiMDHjB0mQy5s&usqp=CAU',
      number: 1,
      name: 'Benef',
      categorias: [
        Categoria.Venenoso,
        Categoria.Comestível,
      ],
    },

    {
      image: 'https://www.rbsdirect.com.br/imagesrc/24243284.jpg?w=700',
      number: 1,
      name: 'Benef',
      categorias: [
        Categoria.Venenoso,
        Categoria.Comestível,
      ],
    },

    
    {
      image: 'https://i0.wp.com/files.agro20.com.br/uploads/2020/07/Benef%C3%ADcios-do-cogumelo-2.jpg?resize=1024%2C835&ssl=1',
      number: 1,
      name: 'Benef',
      categorias: [
        Categoria.Venenoso,
        Categoria.Comestível,
      ],
    },
    
    
  ];

  constructor(
    public cogumeloService: CogumeloService,
  ) {
    
  }
}


