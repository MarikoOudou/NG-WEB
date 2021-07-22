import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from '../../../shared/constants/role';
import { GetRequestService } from '../../../shared/services/get-request.service';
import { PostRequestService } from '../../../shared/services/post-request.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.scss']
})
export class ListProduitComponent implements OnInit {

  tableData: Array<any>;
  nameTable: string = "Liste des produits";
  /* pagination Info */
  pageSize = 10;
  loading: boolean = true;
  ajouter_produit: boolean =  false;
  pageNumber = 1;
  column : any = [
    'Code produit',
    'libelle',
    'Type',
    'localité',
    'surface',
    'prix',
    'Actions',
  ];
  roles: any = Role;
  produit: any = {};
  defaultContent = '<h3>Friday favorites - Homemade pizza</h3><p><br></p><p>Friday is finally here! I know it’s been an exhausting week and the last thing on your mind right</p><p> now is getting stuck in the kitchen preparing a snack to accompany you during your regular Netflix session.</p><img src="http://f10.baidu.com/it/u=870634439,1838112237&amp;fm=72">'
  urls: any[] = [];
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


  constructor(
    //private _chartsService: ChartsService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }


  ngOnInit() {
    this.getData();
    document.getElementById('text-output').innerHTML = this.defaultContent;

  }

  delect(modal) {
    console.log(this.produit.id)
    this.loading = true;
    this._servicesGet.delectRequest('produits/' + this.produit.id).subscribe(
      {
        next: (x:any)=> {
          if (x.success) {
            this.loading = false;
            this.produit = {};
            this.onCloseSuccess();
            this.getData();
            this.getData();
          }else {
            this.onCloseError();
            this.loading = false;
            console.log(x)
          }
        }
      }
    )
    modal.close();
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

  getData() {
    this._servicesGet.getRequest('produits').subscribe(
      {
        next: (x: any) => {

            this.tableData = x.datas;
            this.loading = false;

        },
        error: x => console.error(x)
      }
    );
  }


  onSubmit(form: NgForm) {
    this.loading = true;
    let data = form.value;
    data.image = this.urls[0]
    data.acd = this.monfichier
    data.active = true;
    data.user_id = this.getUser();
    console.log(data)

    this._servicesPost.postRequest(data, "produits" ).subscribe({
      next: (x: any) => {
        if(x.success) {
          // this.closeModal(thirdModal);
          this.onCloseSuccess();
          console.log('reponse success ', x)
          this.loading = false;
          this.ajouter_produit = false;
          form.resetForm();
          this.getData();
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



  pageChanged(pN: number): void {
    this.pageNumber = pN;
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
