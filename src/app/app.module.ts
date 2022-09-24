import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { KarenSimpleInterestsComponentComponent } from './components/karen-simple-interests-component/karen-simple-interests-component.component';
import { KarenCompoundInterestsComponentComponent } from './components/karen-compound-interests-component/karen-compound-interests-component.component';
import { KarenAmortizacaoComponent } from './components/karen-amortizacao/karen-amortizacao.component';
import { KarenPriceComponent } from './components/karen-price/karen-price.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, KarenSimpleInterestsComponentComponent, KarenCompoundInterestsComponentComponent, KarenAmortizacaoComponent, KarenPriceComponent], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
