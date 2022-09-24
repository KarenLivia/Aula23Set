import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-karen-compound-interests-component',
  templateUrl: './karen-compound-interests-component.component.html',
  styleUrls: ['./karen-compound-interests-component.component.css']
})
export class KarenCompoundInterestsComponentComponent implements OnInit {
  @Input() capital: string;
  @Input() taxa: string;
  @Input() tempo: string;

  constructor() { }

  ngOnInit() {
  }

  getCompoundInterests(){

    return Number(this.capital) * Math.pow((1 - Number(this.taxa)),Number(this.tempo));
  }

}

/*A fórmula para calcular os juros compostos é: M = C.(1-i)^n, sendo M o montante, C o capital inicial, i a taxa de juros e n o tempo. */