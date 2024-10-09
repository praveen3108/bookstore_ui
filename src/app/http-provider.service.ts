import { Injectable } from '@angular/core';
import { BookserviceService } from './bookservice.service';
import { Observable } from 'rxjs';
var apiUrl = "http://localhost:8000";

var httpLink = {
  getAllBooks: apiUrl + "/api/getAllBooks",
  deleteBook: apiUrl + "/api/deleteBook/",
  addBook:apiUrl + "/api/addBook",
  updateBook:apiUrl + "/api/updateBook/",
  getBookById:apiUrl + "/api/getBook/",
  searchByAll:apiUrl + "/api/search",
  searchByTitle:apiUrl + "/api/searchByTitle",
  searchByAuthor:apiUrl + "/api/searchByPublications",
  searchByPublications:apiUrl + "/api/searchByAuthor",
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private bookService: BookserviceService) { }

  public getAllBooks(pageNo:any,pagesize:any): Observable<any> {
    return this.bookService.get(httpLink.getAllBooks+"?pageNo="+pageNo+"&pageSize="+pagesize);
  }
  public deleteBook(model: any): Observable<any> {
    return this.bookService.post(httpLink.deleteBook + model, "");
  }
  public getDetailById(model: any): Observable<any> {
    return this.bookService.get(httpLink.getBookById + model);
  }
  public saveBook(model: any): Observable<any> {
    return this.bookService.post(httpLink.addBook, model);
  }  
  public updateBook(model: any): Observable<any> {
    return this.bookService.post(httpLink.updateBook + model.id,model);
  } 
  public searchAll(val:any,pageNo:any,pagesize:any): Observable<any> {
    return this.bookService.get(httpLink.searchByAll+'?query='+val+"&pageNo="+pageNo+"&pageSize="+pagesize);
  }
  public searchByTitle(val:any,pageNo:any,pagesize:any): Observable<any> {
    return this.bookService.get(httpLink.searchByTitle+'?query='+val+"&pageNo="+pageNo+"&pageSize="+pagesize);
  }
  public searchByAuthor(val:any,pageNo:any,pagesize:any): Observable<any> {
    return this.bookService.get(httpLink.searchByAuthor+'?query='+val+"&pageNo="+pageNo+"&pageSize="+pagesize);
  }
  public searchByPublications(val:any,pageNo:any,pagesize:any): Observable<any> {
    return this.bookService.get(httpLink.searchByPublications+'?query='+val+"&pageNo="+pageNo+"&pageSize="+pagesize);
  }
}
