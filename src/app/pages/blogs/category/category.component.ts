import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetRequestService } from '../../../shared/services/get-request.service';
import { PostRequestService } from '../../../shared/services/post-request.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  colonne: any = [
    'Title',
    'Slug',
    'Actions',
  ];

  partenaires: any = [];
  equipes: any = [];

  /* pagination Info */
  pageSize: any = 10;
  pageNumber = 1;
  showloading: boolean = true;
  listProduit: any = [];

  tabledata: any;
  categorie: any = {};

  constructor(
    //private _chartsService: ChartsService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }


  ngOnInit() {
    this.getData();

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

  onSubmitUpdate(form: NgForm, thirdModal: any){
    let date_jour = this.getDay();
    this.showloading = true;
    console.log(form.value)

    let data = form.value;
    this._servicesPost.putRequest(data, "category/" + this.categorie.id).subscribe(
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

    this._servicesGet.delectRequest("category/" + this.categorie.id).subscribe(
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
    this._servicesGet.getRequest('category').subscribe(
      {
        next: (x: any) => {

            this.tabledata = x.datas;
            this.showloading = false;

        },
        error: x => console.error(x)
      }
    );
  }



  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  openModal(modal, data) {
    this.categorie = data;
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
