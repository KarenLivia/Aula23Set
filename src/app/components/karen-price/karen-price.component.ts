import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-karen-price',
  templateUrl: './karen-price.component.html',
  styleUrls: ['./karen-price.component.css']
})
export class KarenPriceComponent implements OnInit {
  @Input() PV: string;
  @Input() i: string;
  @Input() n: string;

  constructor() { }

  ngOnInit() {
  }

  getPrice(){
    return Number(this.PV) * (((Math.pow(1 + Number(this.i), Number(this.n))) * Number(this.i) / ((Math.pow(1 + Number(this.i), Number(this.n)) - 1))));
  }

}

/* Price = PV * ((((1+i)^n) * i) / (((1+i)^n) - 1))  Math.pow(x,y)
PV = presente valor
P = prestação
n = número de parcelas
i = taxa de juros na forma unitária, isto é, i / 100 (1,5/100 = 0,015)
*/