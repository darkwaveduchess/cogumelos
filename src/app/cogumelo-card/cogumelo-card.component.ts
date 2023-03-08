import { Component, Input, OnInit } from '@angular/core';
import { Cogumelo } from 'src/_model/Cogumelo';

@Component({
  selector: 'app-cogumelo-card',
  templateUrl: './cogumelo-card.component.html',
  styleUrls: ['./cogumelo-card.component.scss']
})
export class CogumeloCardComponent {
  @Input()
  public cogumelo!: Cogumelo;

  public leadingZero(str: string|number, size: number = 3): string {
      let s = String(str);

      while (s.length < (size || 2)) {
        s = '0' + s;
      }
      return s;
    }
  }

