import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from '../../../shared/constants/role';
import { GetRequestService } from '../../../shared/services/get-request.service';
import { PostRequestService } from '../../../shared/services/post-request.service';
import swal from 'sweetalert2';
import {NgxImageCompressService} from 'ngx-image-compress';


@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.scss']
})
export class UpdateProduitComponent implements OnInit {

  tableData: Array<any>;
  nameTable: string = "Liste des produits";
  /* pagination Info */
  pageSize = 10;
  loading: boolean = true;

  roles: any = Role;
  produit: any = {};
  defaultContent = '<h3>Friday favorites - Homemade pizza</h3><p><br></p><p>Friday is finally here! I know it’s been an exhausting week and the last thing on your mind right</p><p> now is getting stuck in the kitchen preparing a snack to accompany you during your regular Netflix session.</p><img src="http://f10.baidu.com/it/u=870634439,1838112237&amp;fm=72">'
  urls: any = "";
  images: any[] = [];
  sizeFile: any;
  monfichier: string;
  code_terrain = "PRODUIT-" +
                  new Date().getDay() +
                  new Date().getMonth() +
                  new Date().getHours() +
                  new Date().getMinutes() +
                  new Date().getMilliseconds();
  // produit: any = {};
  imgResultBeforeCompress:string;
  imgResultAfterCompress:string;


  constructor(
    //private _chartsService: ChartsService,
    private routerActive: ActivatedRoute,
    private imageCompress: NgxImageCompressService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }


  ngOnInit() {
    this.routerActive.params.subscribe({
      next: x => {
        this.getData(x.id);
      }
    })
    // document.getElementById('text-output').innerHTML = this.defaultContent;

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

  onSelectFile(event, f: NgForm) {
    // this.urls = [];
    this.monfichier = "";
    // console.log(event.target.files[0])
    if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      const reader = new FileReader();
      for (let i = 0; i < filesAmount; i++) {
        reader.onload = (event: any) => {
          console.log("fichier ", event.target.result)
          this.monfichier = event.target.result;
      };
        reader.readAsDataURL(event.target.files[i]);
      }

    }

  }

  onSelectImage(event, f: NgForm) {
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
          console.log(event.target.result)
          this.urls.push(event.target.result);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
    // console.log(this.urls[0]);
    // this.sizeFile = this.images[0].size;

  }

  onContentChange(event: string) {
    document.getElementById('text-output').innerHTML = event;
  }

  getData(id) {
    this._servicesGet.getRequest('produits/' + id).subscribe(
      {
        next: (x: any) => {
            this.urls = x.datas.image
            this.monfichier = x.datas.acd
            this.produit = x.datas;
            this.loading = false;

        },
        error: x => console.error(x)
      }
    );
  }


  onSubmit(form: NgForm) {
    this.loading = true;
    let data = form.value;
    data.image = this.urls
    data.acd = this.monfichier
    data.active = true;
    data.user_id = this.getUser();
    console.log(data)

    this._servicesPost.putRequest(data, "produits/" + this.produit.id ).subscribe({
      next: (x: any) => {
        if(x.success) {
          // this.closeModal(thirdModal);
          this.onCloseSuccess();
          console.log('reponse success ', x)
          this.loading = false;
          // this.ajouter_produit = false;
          // form.resetForm();
          this.getData(this.produit.id);
          // this.getProduit();
        }else {
          // this.closeModal(thirdModal);
          this.onCloseError();
          this.loading = false;
          console.log(x)
        }

      },
      error: (x)=> {
        // this.closeModal(thirdModal);
        this.onCloseError();
        this.loading = false;
        console.log(x)
      }
    });

    //this.closeModal(thirdModal);
    //this.onCloseSuccess();
  }

    getUser() {
    return 1;
  }


  openModal(modal, data) {
    this.produit = data;
    modal.open();
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
