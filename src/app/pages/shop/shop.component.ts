import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { Router, Route } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { FacebookService, InitParams } from 'ngx-facebook';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  produits : any[];
  produitSubscription : Subscription;
  cart: Array<string> = [];
  orderSend : boolean = false


  constructor(public produitService : ProduitService,
              public router : Router,
              private title: Title,
              private cookieService : CookieService,
              private facebookService: FacebookService) { }
              
  ngOnInit(){   
    //localStorage.removeItem('orderSend');


    if(localStorage.getItem('orderSend') == 'true'){
      this.orderSend = true;
      this.cart = [];
      localStorage.removeItem('statutSend');
      setTimeout(function () {
        localStorage.removeItem('orderSend');
      }, 5000);

    }
    else{
      this.orderSend = false;
    }

    let cartLocal = localStorage.getItem('cart');
    if (cartLocal) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    }else{
      this.cart = [];
    }
    
    this.title.setTitle("LifeDerma - Shop");

    this.produitSubscription = this.produitService.produitsSubject.subscribe(
      (produits: any[]) => {
        this.produits = produits;
      }
    );
    this.produitService.emitProduitsSubject();

    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
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

  onViewProduct(id : number){
    this.router.navigate(['/shop/product', id]);
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }


}
