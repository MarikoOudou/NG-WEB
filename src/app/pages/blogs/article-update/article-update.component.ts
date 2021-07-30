import { NgxImageCompressService } from 'ngx-image-compress';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetRequestService } from '../../../shared/services/get-request.service';
import { PostRequestService } from '../../../shared/services/post-request.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-article-update',
  templateUrl: './article-update.component.html',
  styleUrls: ['./article-update.component.scss']
})
export class ArticleUpdateComponent implements OnInit {
  showloading: boolean;
  article: any;
  tabledata: any;
  urls: any ="";
  images: any[];
  sizeFile: any;
  id: string;
  categories: any;

  imgResultBeforeCompress:string;
  imgResultAfterCompress:string;

  constructor(
    //private _chartsService: ChartsService,
    private imageCompress: NgxImageCompressService,
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
          this.getDataCategorie(x.id)
        }
      }
    )
  }

  getDataCategorie(data) {
    this._servicesGet.getRequest('category').subscribe(
      {
        next: (x: any) => {

            this.categories = x.datas;
            this.getData(data)
            this.showloading = false;

        },
        error: x => console.error(x)
      }
    );
  }

  getUser() {
    return 1;
  }

  onSubmit(form: NgForm, thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;
    console.log(form.value)
    let data = form.value;
    data.user_id = this.getUser();
    this._servicesPost.postRequest(data, "category").subscribe(
      {
        next: (x: any)=> {
          if (x.success) {
            console.log(x)
            this.showloading = false;
          // this.getData();
          // this.closeModal(thirdModal);
            this.onCloseSuccess();
          }else {
            console.log(x)
            // this.closeModal(thirdModal);
            this.showloading = false;
            this.onCloseError();

          }
        }
      }
    )

  }
  onCloseSuccess() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }

  onCloseError() {
    swal({
      type: 'error',
      title: 'Error!',
      text: 'close it!',
    });
  }


  compressFile() {

    this.imageCompress.uploadFile().then(({image, orientation}) => {

      this.imgResultBeforeCompress = image;
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));

      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.urls = this.imgResultAfterCompress = result;
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));
        }
      );

    });

  }

  onSubmitUpdate(form: NgForm){
    let date_jour = this.getDay();
    this.showloading = true;
    console.log(form.value)

    let data = form.value;
    data.user_id = this.getUser();
    data.image = this.urls
    this._servicesPost.putRequest(data, "post/" + this.article.id).subscribe(
      {
        next: (x: any)=> {
          if (x.success) {
            console.log(x)
            this.showloading = false;
          //this.getData();
            this.onCloseSuccess();
            // this.router.navigate(['./article'])
          }else {
            console.log(x)
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
            console.log(x.datas)
            this.urls = x.datas.image
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
