import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { AutheticationService } from '../authetication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {

  constructor(private productService: ProductService, private authService: AutheticationService, private router: Router) { }

  deleted: boolean = false;
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

  delete(id: number) {

    this.deleted = true;
 
    setTimeout(() => {
      this.deleted = false;
    }, 3000);

 
 
    // this.products  = this.products.map(item => {
    //   this.products.filter()
    //   return item
    // })
    
    // console.log(this.products)

    // this.products.filter(product => {
    //   console.log(id);
    //   this.products.reduce( )
      
    // })
  }


  addProduct() {
    this.router.navigate(['/add-product']);
  }

}
