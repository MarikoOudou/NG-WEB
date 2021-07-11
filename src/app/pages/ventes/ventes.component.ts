import { Component, OnInit } from '@angular/core';
import { GetRequestService } from '../../shared/services/get-request.service';
import { PostRequestService } from '../../shared/services/post-request.service';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.scss']
})
export class VentesComponent implements OnInit {

  tableData: any = [];
  column : any = [
    'Date de vente',
    'Prix',
    'Code produit',

    'Actions',
  ];
  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;
  showloading: boolean = true;
  listProduit: any = [];
  vente: any;

  constructor(
    //private _chartsService: ChartsService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }


  ngOnInit() {
    this.getData();
    this.getProduit();

  }

  onSubmit(form: NgForm, thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;
    console.log(form.value)
    this.closeModal(thirdModal);
    this.onCloseSuccess();
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
    this._servicesGet.getRequest('ventes').subscribe(
      {
        next: (x: any) => {

            this.tableData = x.datas;
            this.showloading = false;

        },
        error: x => console.error(x)
      }
    );
  }

  getProduit() {
    this._servicesGet.getRequest('produits').subscribe(
      {
        next: (x: any) => {

            this.listProduit = x.datas;
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
