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
      image: 'https://www.pngall.com/wp-content/uploads/2016/03/Mushroom-PNG-File.png',
      number: 1,
      name: 'Benef',
      categorias: [
        Categoria.Venenoso,
        Categoria.Comestível,
      ],
      more: ''
    },

    {
      image: 'https://www.freeiconspng.com/thumbs/mushroom-png/mushroom-png-transparent-0.png',
      number: 2,
      name: 'Benef',
      categorias: [
        Categoria.Venenoso,
        Categoria.Comestível,
      ],
      more: ''
    },

    {
      image: 'https://i.pinimg.com/originals/ff/57/c7/ff57c7a9d8ece0a2539eac359110e1d6.png',
      number: 3,
      name: 'Benef',
      categorias: [
        Categoria.Venenoso,
        Categoria.Comestível,
      ],
      more: ''
    },

    
    {
      image: 'https://pngfolio.com/images/all_img/copy/1635685314mushroom-png.png',
      number: 1,
      name: 'Benef',
      categorias: [
        Categoria.Venenoso,
        Categoria.Comestível,
      ],
      more: ''
    },
    
    
  ];

  constructor(
    public cogumeloService: CogumeloService,
  ) {
    
  }
}


