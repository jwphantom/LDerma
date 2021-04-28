import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { CookieService } from 'ngx-cookie-service';
import { Product } from 'src/app/models/product'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  nom: String;
  prix: number;
  o_prix: String;
  description;
  client_satisfait: String;
  duree: String;
  short_name: String;
  packs: any[];
  is_pack: boolean;
  selected_pack: any[];
  id_pack_active: number;
  sproof: any[];

  cookiCart: any[];
  type: String;

  produit: any[];

  cart: Array<string> = [];

  constructor(private produitService: ProduitService,
    private route: ActivatedRoute,
    private title: Title,
    private cookieService: CookieService) { }


  ngOnInit() {

    let cartLocal = localStorage.getItem('cart');
    if (cartLocal) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      console.log(this.cart);
    }else{
      this.cart = [];
    }


    this.id_pack_active = 0;
    const id = this.route.snapshot.params['id'];

    this.nom = this.produitService.getProduitById(+id).nom;
    this.prix = this.produitService.getProduitById(+id).prix;
    this.o_prix = this.produitService.getProduitById(+id).o_prix;
    this.description = this.produitService.getProduitById(+id).description;
    this.client_satisfait = this.produitService.getProduitById(+id).client_satisfait;
    this.duree = this.produitService.getProduitById(+id).duree;
    this.short_name = this.produitService.getProduitById(+id).short_name;
    this.sproof = this.produitService.getProduitById(+id).s_proof;
    this.type = this.produitService.getProduitById(+id).type;

    this.produit = [
      {
        id: id,
        nom: this.nom,
        short_name: this.short_name,
        prix: this.prix,
        o_prix: this.o_prix,
        description: this.description,
        client_satisfait: this.client_satisfait,
        duree: this.duree,
        type: this.type,
        sproof: this.sproof,
      }
    ];


    this.title.setTitle("LifeDerma - Produits -" + this.nom);


    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
    this.loadScript('../assets/plugins/pageloader/pageloader.js');
    this.loadScript('../assets/plugins/pageloader/pageloader.init.js');

  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  s_pack(p, i) {
    console.log(p);
    this.prix = p.prix
    this.o_prix = p.o_prix
    this.id_pack_active = i;
  }

  getBackgroundColor() {
    return 'yellow';
  }

  getColor(i) {
    if (this.id_pack_active === i) {
      return `rgb(156,182,62)`;
    } else {
      return 'black';
    }
  }

  addCart(produit) {

    // if(this.cart.some(item => item['id'] === produit['id'])){

    // }

    let iCart;
    let index;
    let eCart;

    if (this.cart.length <= 0) {
      produit[0]['qty'] = 1;
      this.cart.push(produit);
      console.log(this.cart);
      localStorage.setItem('cart',JSON.stringify(this.cart));

    } else {
      for (let i = 0; i < this.cart.length; i++) {

        if (this.cart[i][0]['id'] == produit[0]['id']) {
          // this.cart[i][0]['id'] = this.cart[i][0]['id']+1;
          // this.cart.push(produit);
          // console.log(this.cart);
          // this.cookieService.set('cart', JSON.stringify(this.cart));
          iCart = i+1;
          index = i;
        }
        else {
          console.log(0);

          // produit[0]['qty'] = 1;
          // this.cart.push(produit);
          // console.log(this.cart);
          // this.cookieService.set('cart', JSON.stringify(this.cart))
          // break;
          eCart = 0;
        }

      }

      if (iCart > 0) {
        console.log("ic");
        this.cart[index][0]['qty'] = this.cart[index][0]['qty'] + 1;
        localStorage.setItem('cart',JSON.stringify(this.cart));

      }
      if (eCart == 0) {
        produit[0]['qty'] = 1;
         this.cart.push(produit);
         console.log("eC");
         localStorage.setItem('cart',JSON.stringify(this.cart));
      }



    }


  }

}
