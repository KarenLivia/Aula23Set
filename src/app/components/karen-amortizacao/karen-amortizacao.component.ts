import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-karen-amortizacao',
  templateUrl: './karen-amortizacao.component.html',
  styleUrls: ['./karen-amortizacao.component.css']
})
export class KarenAmortizacaoComponent implements OnInit {
  
  @Input() capital: string;
  @Input() residual: string;
  @Input() tempo: string;

  constructor() { }

  ngOnInit() {
  }

  getAmortizacao(){
    return (Number(this.capital) - Number(this.residual)) / Number(this.tempo);
  }
}

/* (Valor inicial – Valor residual) / Vida útil*/