import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cart: Array<string> = [];

  
  constructor(
    private title: Title
  ) { }

  ngOnInit(){  
    
    let cartLocal = localStorage.getItem('cart');
    if (cartLocal) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }else{
      this.cart = [];
    }

    
    this.title.setTitle("LifeDerma - Home");

    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
    this.loadScript('https://code.iconify.design/1/1.0.7/iconify.min.js');
    this.loadScript('../assets/plugins/pageloader/pageloader.js');
    this.loadScript('../assets/plugins/pageloader/pageloader.init.js');

  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
