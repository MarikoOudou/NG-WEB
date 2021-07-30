import { NgxImageCompressService } from 'ngx-image-compress';
import { Slider } from './../../../shared/models/slider';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { GetRequestService } from '../../../shared/services/get-request.service';
import { PostRequestService } from '../../../shared/services/post-request.service';

@Component({
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  [x: string]: any;

  colonneEquipe: any = [
    'Nom complet',
    'Poste',
    'Contact',
    'Actions',
  ];
  colonnePartenaire: any = [
    'Nom du partenaire',
    'Site Web',
    'Actions',
  ];

  colonneSliders: any = [
    'Titre',
    'Contenu',
    'Actions',
  ];

  partenaires: any = [];
  equipes: any = [];

  /* pagination Info */
  pageSize: any = 5;
  pageNumber = 1;
  showloading: boolean = true;
  listProduit: any = [];
  vente: any;
  sliders: any;
  slider: any;
  urls: any = "";
  dataUpdate: any = {}
  imgResultBeforeCompress:string;
  imgResultAfterCompress:string;

  constructor(
    //private _chartsService: ChartsService,
    private imageCompress: NgxImageCompressService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }


  ngOnInit() {
    this.getData();

  }

  getUser() {
    return 1;
  }


  // sliders methode
  onSubmitSlider(form: NgForm, thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;
    let data = form.value;
    data.image = this.urls

    data.user_id = this.getUser();
    console.log(data)

    if (this.dataUpdate.id) {
      console.log("id existe ")

      this._servicesPost.putRequest(data, 'sliders/' + this.dataUpdate.id).subscribe(
        {
          next: (x: any) => {
            console.log(x)
            if (x.success) {
              this.getData();
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseSuccess();
            } else {
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseError();
            }
          }
        }
      );

    } else {

      this._servicesPost.postRequest(data, 'sliders').subscribe(
        {
          next: (x: any) => {
            console.log(x)
            if (x.success) {
              this.getData();
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseSuccess();
            } else {
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseError();
            }
          }
        }
      );
    }



  }

  onSubmitDeletSlider(thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;

    console.log(this.dataUpdate.id)

    this._servicesGet.delectRequest("sliders/" + this.dataUpdate.id).subscribe(
      {
        next: (x: any) => {
          if (x.success) {
            console.log(x)
            this.showloading = false;
            this.getData();
            this.closeModal(thirdModal);
            this.onCloseSuccess();
          } else {
            console.log(x)
            this.closeModal(thirdModal);
            this.showloading = false;
            this.onCloseError();

          }
        }
      }
    )
  }

  // equipe methode
  onSubmitEquipe(form: NgForm, thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;
    let data = form.value;
    data.image = this.urls
    data.user_id = this.getUser();
    console.log(data)

    if (this.dataUpdate.id) {
      console.log("id existe ")

      this._servicesPost.putRequest(data, 'equipes/' + this.dataUpdate.id).subscribe(
        {
          next: (x: any) => {
            console.log(x)
            if (x.success) {
              this.getData();
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseSuccess();
            } else {
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseError();
            }
          }
        }
      );

    } else {

      this._servicesPost.postRequest(data, 'equipes').subscribe(
        {
          next: (x: any) => {
            console.log(x)
            if (x.success) {
              this.getData();
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseSuccess();
            } else {
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseError();
            }
          }
        }
      );
    }



  }

  onSubmitDeletEquipe(thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;

    console.log(this.dataUpdate.id)

    this._servicesGet.delectRequest("equipes/" + this.dataUpdate.id).subscribe(
      {
        next: (x: any) => {
          if (x.success) {
            console.log(x)
            this.showloading = false;
            this.getData();
            this.closeModal(thirdModal);
            this.onCloseSuccess();
          } else {
            console.log(x)
            this.closeModal(thirdModal);
            this.showloading = false;
            this.onCloseError();

          }
        }
      }
    )
  }

  // partenaire methode
  onSubmitPartenaire(form: NgForm, thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;
    let data = form.value;
    data.image = this.urls
    data.user_id = this.getUser();
    console.log(data)

    if (this.dataUpdate.id) {
      console.log("id existe ")

      this._servicesPost.putRequest(data, 'partenaires/' + this.dataUpdate.id).subscribe(
        {
          next: (x: any) => {
            console.log(x)
            if (x.success) {
              this.getData();
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseSuccess();
            } else {
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseError();
            }
          }
        }
      );

    } else {

      this._servicesPost.postRequest(data, 'partenaires').subscribe(
        {
          next: (x: any) => {
            console.log(x)
            if (x.success) {
              this.getData();
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseSuccess();
            } else {
              this.closeModal(thirdModal);
              this.showloading = false;
              this.onCloseError();
            }
          }
        }
      );
    }



  }

  onSubmitDeletPartenaire(thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;

    console.log(this.dataUpdate.id)

    this._servicesGet.delectRequest("partenaires/" + this.dataUpdate.id).subscribe(
      {
        next: (x: any) => {
          if (x.success) {
            console.log(x)
            this.showloading = false;
            this.getData();
            this.closeModal(thirdModal);
            this.onCloseSuccess();
          } else {
            console.log(x)
            this.closeModal(thirdModal);
            this.showloading = false;
            this.onCloseError();

          }
        }
      }
    )
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
    this._servicesGet.getRequest('accueil').subscribe(
      {
        next: (x: any) => {

          this.sliders = x.datas.sliders;
          this.equipes = x.datas.equipes;
          this.partenaires = x.datas.partenaires;
          this.showloading = false;

        },
        error: x => console.error(x)
      }
    );
  }
/*
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

  }*/

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


  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  openModal(modal, data) {
    console.log(modal)
    if (data != {}) {
      this.urls = data.image
      this.dataUpdate = data;
    } else {
      this.urls = ""
      this.dataUpdate = {}
    }
    modal.open();
  }

  modif(modal, data) {
    this.vente = data;
    console.log(data)
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
