import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ProduitService } from 'src/app/services/produit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Array<string> = [];

  price: number;
  @Input() ship: number;

  billForm: FormGroup;

  submitForm: boolean = false;

  @Input() sendOrder: Boolean = true;


  constructor(private produitService: ProduitService,
    private route: ActivatedRoute,
    public router: Router,
    private title: Title,
    private formBuilder: FormBuilder,
    private cookieService: CookieService) { }

  ngOnInit() {

    this.initForm();

    let cartLocal = localStorage.getItem('cart');
    if (cartLocal) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      this.cart = [];
    }

    if (this.billForm.get('ville').value == 'yde') {
      this.ship = 0;
    }
    if (this.billForm.get('ville').value == 'dla') {
      this.ship = 0;
    }
    if (this.billForm.get('ville').value == 'ebwa') {
      this.ship = 1000;
    }

    this.title.setTitle("LifeDerma - Panier");


    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
    this.loadScript('../assets/js/custom.js');
    this.loadScript('../assets/plugins/pageloader/pageloader.js');
    this.loadScript('../assets/plugins/pageloader/pageloader.init.js');

    this.calculatebill();

  }

  calculatebill() {
    let montant = 0;
    for (let i = 0; i < this.cart.length; i++) {
      montant = montant + this.cart[i][0]['prix'] * this.cart[i][0]['qty'];
    }
    this.price = montant;
  }

  changeVille(ville) {
    if (ville['ville'] == 'yde') {
      this.ship = 0;
    }
    if (ville['ville'] == 'dla') {
      this.ship = 0;
    }
    if (ville['ville'] == 'ebwa') {
      this.ship = 1000;
    }
    if (ville['ville'] == 'kbi') {
      this.ship = 1500;
    }
    if (ville['ville'] == 'ngdere') {
      this.ship = 3000;
    }
    if (ville['ville'] == 'gra') {
      this.ship = 3500;
    }
    if (ville['ville'] == 'mra') {
      this.ship = 4000;
    }
    if (ville['ville'] == 'ost') {
      this.ship = 1500;
    }
    if (ville['ville'] == 'est') {
      this.ship = 2500;
    }


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

  remove(c, i) {
    this.cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.calculatebill();
  }

  initForm() {
    this.billForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      ville: ['yde', Validators.required]
    });
  }

  async onSubmitBillForm() {
    this.billForm.controls['name'].disable();
    this.billForm.controls['phone'].disable();
    this.billForm.controls['ville'].disable();

    $( ".failedSend" ).remove();

    this.submitForm = !this.submitForm

    let produit = '';

    for (let i = 0; i < this.cart.length; i++) {
      produit += `${this.cart[i][0]['qty']}x${this.cart[i][0]['short_name']}
`;
    }

    $(".body-inner").fadeOut("slow");

    setTimeout(function () {
      $("body").append('<div class="animsition-loading"><div class="loader"><div class="spinner"><div class="right-side"><div class="bar"></div></div><div class="left-side"><div class="bar"></div></div></div></div></div>');

    }, 1000);

    setTimeout(function () {
      $(".body-inner").fadeIn("slow");
      $("body").find(".animsition-loading").fadeOut("slow");

    }, 3000);

    const send = await this.sendMail(this.billForm.get('name').value, this.billForm.get('phone').value, this.billForm.get('ville').value, this.price + this.ship, produit)


    if (send == true) {
      setTimeout(function () {
        $(".body-inner").fadeIn("slow");
        $("body").find(".animsition-loading").fadeOut("slow");

      }, 2000);
      localStorage.removeItem('cart');
      this.cart = [];
      localStorage.setItem('orderSend', 'true');
      this.router.navigate(['/shop']);

    }


    if (send == false) {

      setTimeout(function () {
        $(".body-inner").fadeIn("slow");
        $(".shopa").append('<div class="alert alert-danger alert-dismissible fade show failedSend" role="alert"> Echec d\'envoi, Ressayez plus tard<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>');
        $("body").find(".animsition-loading").fadeOut("slow");

      }, 2000);

      this.billForm.controls['name'].enable();
      this.billForm.controls['phone'].enable();
      this.billForm.controls['ville'].enable();
      this.submitForm = !this.submitForm


    }

  }

  sendMail(nom, phone, ville, montant, produit) {
    var templateParams = {
      nom: nom,
      phone: phone,
      ville: ville,
      montant: montant,
      produit: produit,
      email: 'sudogen.enterprise@gmail.com'

    };

    return new Promise(resolve => {
      emailjs.send('service_6x8boil', 'template_tgbje51', templateParams, 'user_3UNPpOCkDvySRx4kLn1Lk')
        .then(function (response) {

          resolve(true);
          console.log('SUCCESS!', response.status, response.text);

        }, function (err) {
          resolve(false);
          console.log('FAILED...', err);
        });

    });

  }

}

