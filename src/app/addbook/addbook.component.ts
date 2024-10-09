import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpProviderService } from '../http-provider.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {

    addBookForm: bookForm = new bookForm();
  
    
    @ViewChild("bookForm")
    bookForm!: NgForm;
    isSubmitted: boolean = false;
    constructor(private router: Router, private httpProvider: HttpProviderService
      ) { }
  
    ngOnInit(): void {  }
  
    AddBook(isValid: any) {
      this.isSubmitted = true;
      if (isValid) {
        this.httpProvider.saveBook(this.addBookForm).subscribe(async data => {
          if (data != null && data.body != null) {
            if (data != null && data.body != null) {
              var resultData = data.body;
  
              console.log(resultData);
  
              if (resultData != null ) {
                alert("Book added successfully")
                setTimeout(() => {
                  this.router.navigate(['/Home']);
                }, 500);
              }
            }
          }
        },
          async error => {
            alert("Book adding Failed")
            setTimeout(() => {
              this.router.navigate(['/Home']);
            }, 500);
          });
      }
    }
  
  }
  
  export class bookForm {
    title: string = "";
    author: string = "";
    publications: string = "";
   
  }
