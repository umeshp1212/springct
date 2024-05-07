import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  ifAdded: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  productForm = this.fb.group({
    title: ['', Validators.required],
    category: ['', Validators.required],
    price: ['', Validators.required],
  })

  addProduct() {
    this.ifAdded = true;

    setTimeout(() => {
      this.router.navigate(['/product-store'])
    }, 3000);


  }

  get f() {
    return this.productForm.controls;
  }

  backProductPage() {
    this.router.navigate(['/product-store']);
  }

}
