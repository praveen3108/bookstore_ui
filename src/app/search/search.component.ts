import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpProviderService } from '../http-provider.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bookList: any = [];
  searchQuery:string=""
  pageNo=1;
  pageSize=10
  searchTitle:string=''
  searchAuthor:string=''
  searchPublications:string=''
  constructor(private router: Router, private httpProvider : HttpProviderService){

  }
  ngOnInit(): void {
     this.getAllBooks()
  }
  async getAllBooks() {
    this.bookList=[]
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
  searchAll(){
    this.bookList=[]
    this.httpProvider.searchAll(this.searchQuery,this.pageNo,this.pageSize).subscribe((data : any) => {
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
  searchByTitle(){
    this.bookList=[]
    this.httpProvider.searchByTitle(this.searchTitle,this.pageNo,this.pageSize).subscribe((data : any) => {
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
  searchByAuthor(){
    this.bookList=[]
    this.httpProvider.searchByAuthor(this.searchAuthor,this.pageNo,this.pageSize).subscribe((data : any) => {
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
  searchByPublications(){
    this.bookList=[]
    this.httpProvider.searchByPublications(this.searchByPublications,this.pageNo,this.pageSize).subscribe((data : any) => {
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
  clear(){
    this.getAllBooks()
  }
}
