import { Component, OnInit } from '@angular/core';
import { HttpProviderService } from '../http-provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  bookList: any = [];
  pageNo=1;
  pageSize=10
 
  constructor(private router: Router, private httpProvider : HttpProviderService) { }
  ngOnInit(): void {
    this.getAllBooks();
  }
  async getAllBooks() {
    this.httpProvider.getAllBooks(this.pageNo,this.pageSize).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.bookList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.bookList = [];
            }
          }
        }
      });
  }
  delete(book: any) {
    this.httpProvider.deleteBook(book.id).subscribe((data : any) => {
      this.getAllBooks();
    },
    (error : any) => {});
  }
}
