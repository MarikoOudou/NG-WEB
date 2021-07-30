import { NgxImageCompressService } from 'ngx-image-compress';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetRequestService } from '../../../shared/services/get-request.service';
import { PostRequestService } from '../../../shared/services/post-request.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {


  colonneEquipe: any = [
    'Date de vente',
    'Prix',
    'Code produit',
    'Actions',
  ];
  colonnePartenaire: any = [
    'Date de vente',
    'Prix',
    'Code produit',
    'Actions',
  ];

  colonneSliders: any = [
    'Titre',
    'Slug',
    'Active',
    'Actions',
  ];

  partenaires: any = [];
  equipes: any = [];

  /* pagination Info */
  pageSize: any = 10;
  pageNumber = 1;
  showloading: boolean = true;
  listProduit: any = [];
  vente: any;
  sliders: any;
  tabledata: any;
  article: any;
  urls: any = "";
  images: any[] = [];
  sizeFile: any = [];
  ajouter_article:boolean = false
  categories: any;

  imgResultBeforeCompress:string;
  imgResultAfterCompress:string;

  constructor(
    //private _chartsService: ChartsService,
    private imageCompress: NgxImageCompressService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }


  ngOnInit() {
    this.getData();
    this.getDataCategorie();

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

  onSubmit(form: NgForm) {
    let date_jour = this.getDay();
    this.showloading = true;
    console.log(form.value)
    let data = form.value;
    data.image = this.urls
    data.user_id = this.getUser();
    console.log("data ", data)
    this._servicesPost.postRequest(data, "post").subscribe(
      {
        next: (x: any)=> {
          if (x.success) {
            console.log(x)
            this.showloading = false;
            form.resetForm();
            this.urls = ""
            this.ajouter_article = false;
            this.getData();
            this.onCloseSuccess();
          }else {
            console.log(x)
            this.showloading = false;
            // form.resetForm();
            // this.urls = ""
            // this.ajouter_article = false;
            this.onCloseError();

          }
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
          this.getData();
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

  onSubmitDelet(thirdModal: any){
    let date_jour = this.getDay();
    this.showloading = true;

    console.log(this.article.id)

    this._servicesGet.delectRequest("post/" + this.article.id).subscribe(
      {
        next: (x: any)=> {
          if (x.success) {
            console.log(x)
            this.showloading = false;
          this.getData();
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

  getData() {
    this._servicesGet.getRequest('post').subscribe(
      {
        next: (x: any) => {

            this.tabledata = x.datas;
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

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  openModal(modal, data) {
    this.article = data;
    console.log(data)
    modal.open();
  }

  getUser() {
    return 1;
  }

  closeModal(modal) {
    modal.close();
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
}
