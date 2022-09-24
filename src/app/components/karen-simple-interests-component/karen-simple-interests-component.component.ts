import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-karen-simple-interests-component',
  templateUrl: './karen-simple-interests-component.component.html',
  styleUrls: ['./karen-simple-interests-component.component.css']
})
export class KarenSimpleInterestsComponentComponent implements OnInit {
  
  @Input() capital: string;
  @Input() taxa: string;
  @Input() tempo: string;

  constructor() { }

  ngOnInit() {
  }

  getSimpleInterests(){
    return Number(this.capital) * Number(this.taxa) * Number(this.tempo);
  }

}

/*
J = C * i * t
J = Juros.
C = Capital emprestado.
i = Taxa de juros do período.
t = Tempo.
*/ 