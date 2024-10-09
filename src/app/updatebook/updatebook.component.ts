import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpProviderService } from '../http-provider.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent  implements OnInit{

  editbookForm: bookForm = new bookForm();

  @ViewChild("bookForm")
  bookForm!: NgForm;

  isSubmitted: boolean = false;
  bookId: any;

 constructor(private route: ActivatedRoute, private router: Router,
  private httpProvider: HttpProviderService){
 }
 ngOnInit(): void {
  this.bookId = this.route.snapshot.params['id'];
  this.getBookById();
} 
getBookById(){
  this.httpProvider.getDetailById(this.bookId).subscribe((data: any) => {
    if (data != null && data.body != null) {
      var resultData = data.body;
      if (resultData) {
        this.editbookForm.id = resultData.id;

        this.editbookForm.title = resultData.title;
        this.editbookForm.author = resultData.author;
        this.editbookForm.publications = resultData.publications;
        
      }
    }
  },
    (error: any) => { });
}

updateBook(isValid: any) {
  this.isSubmitted = true;
  if (isValid) {
    this.httpProvider.updateBook(this.editbookForm).subscribe(async data => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData != null ) {
          if (resultData != null) {
            alert("Updated Successfully");
            setTimeout(() => {
              this.router.navigate(['/EditBook/'+resultData.id]);
            }, 500);
          }
        }
      }
    },
      async error => {
        alert(error.message);
        setTimeout(() => {
          this.router.navigate(['/Home']);
        }, 500);
      });
  }
}
}
export class bookForm {
  id:number=0
  title: string = "";
  author: string = "";
  publications: string = "";
 
}