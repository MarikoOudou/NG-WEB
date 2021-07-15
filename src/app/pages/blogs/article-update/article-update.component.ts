import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetRequestService } from '../../../shared/services/get-request.service';
import { PostRequestService } from '../../../shared/services/post-request.service';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.scss']
})
export class ArticleUpdateComponent implements OnInit {
  showloading: boolean;
  article: any;
  tabledata: any;
  urls: any[]=[];
  images: any[];
  sizeFile: any;
  id: string;
  categories: any;

  constructor(
    private routerActive: ActivatedRoute,
    private router: Router,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }

  ngOnInit() {
    this.routerActive.params.subscribe(
      {
        next: x => {
          console.log(x)
          this.id = x.id
          this.getData(x.id)
          this.getDataCategorie()
        }
      }
    )
  }

  getDataCategorie() {
    this._servicesGet.getRequest('category').subscribe(
      {
        next: (x: any) => {

            this.categories = x.datas;
            this.showloading = false;

        },
        error: x => console.error(x)
      }
    );
  }

  onSubmit(form: NgForm, thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;
    console.log(form.value)
    let data = form.value;
    this._servicesPost.postRequest(data, "category").subscribe(
      {
        next: (x: any)=> {
          if (x.success) {
            console.log(x)
            this.showloading = false;
          // this.getData();
          this.closeModal(thirdModal);
            this.onCloseSuccess();
          }else {
            console.log(x)
            this.closeModal(thirdModal);
            this.showloading = false;
            this.onCloseError();

          }
        }
      }
    )

  }
  closeModal(thirdModal: any) {
    throw new Error('Method not implemented.');
  }
  onCloseSuccess() {
    throw new Error('Method not implemented.');
  }
  onCloseError() {
    throw new Error('Method not implemented.');
  }

  onSubmitUpdate(form: NgForm, thirdModal: any){
    let date_jour = this.getDay();
    this.showloading = true;
    console.log(form.value)

    let data = form.value;
    this._servicesPost.putRequest(data, "post/" + this.article.id).subscribe(
      {
        next: (x: any)=> {
          if (x.success) {
            console.log(x)
            this.showloading = false;
          //this.getData();
          this.closeModal(thirdModal);
            this.onCloseSuccess();
          }else {
            console.log(x)
            this.closeModal(thirdModal);
            this.showloading = false;
            this.onCloseError();

          }
        }
      }
    )
  }


  inputStatus(status: any, id: any) {
    console.log(status)

    if (status === 1) {
      //this.getData();

    } else if (status === 0) {
      //this.getData();

    }

  }

  getDay() {
    var today: any = new Date(Date.now());
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '/' + mm + '/' + dd;
    // console.log(today)
    return today;
  }

  getData(id) {
    this._servicesGet.getRequest('post/' + id).subscribe(
      {
        next: (x: any) => {

            this.article = x.datas;
            this.urls[0] = x.datas.ilage
            this.showloading = false;

        },
        error: x => console.error(x)
      }
    );
  }

  onSelectFile(event, f: NgForm) {
    this.urls = [];
    this.images = [];
    console.log(event.target)
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        this.images[i] = event.target.files[i];
        const reader = new FileReader();
        // console.log(new FileReader());
        // tslint:disable-next-line:no-shadowed-variable
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
    // console.log(this.images[0].size);
    this.sizeFile = this.images[0].size;

  }

}
