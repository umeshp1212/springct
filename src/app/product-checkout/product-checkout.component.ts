import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-checkout',
  templateUrl: './product-checkout.component.html',
  styleUrls: ['./product-checkout.component.css']
})
export class ProductCheckoutComponent implements OnInit {

  constructor(private productService: ProductService, private authService: AutheticationService, private router: Router) { }

  products: any[] = [];
  checkout: number[] = [];
  // addedProducts: number[] = [];
  counter: number = 0;
  out: boolean = false;
  ngOnInit(): void {

    this.productService.getProducts().subscribe(res => {
      this.products = res.products
      console.log(this.products);
      
    })
  }


  addToCart(id: number){

    // console.log(id);

    this.checkout.push(id);
    console.log(this.checkout);
    
   this.counter++

   console.log(this.counter);
   

  }


  checkoutProduct() {
    if (this.checkout.length != 0)  {
      this.checkout.forEach(id => {
        this.productService.checkout(id).subscribe(res => {
          console.log(res)
          this.counter = 0    
          this.out = true;      
        })
      })
      
    }


  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/login']);
  }

}
