import { Component, OnInit } from '@angular/core';
import { GetRequestService } from '../../shared/services/get-request.service';
import { PostRequestService } from '../../shared/services/post-request.service';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import pell from 'pell';

@Component({
  selector: 'ngx-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.scss']
})
export class VentesComponent implements OnInit {

  public value: any = ['Athens'];
  public _disabledV: string = '0';
  public disabled: boolean = false;



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
  public items: any[] = [];

  constructor(
    //private _chartsService: ChartsService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) {

    }


  ngOnInit() {
    // this.getProduit();
    this.getData();

  }



  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
    console.log(value)
  }

  public itemsToString(value: Array<any> = []): string {
    return value
      .map((item: any) => {
        return item.text;
      }).join(',');
  }

  onSubmit(form: NgForm, thirdModal: any) {
    let date_jour = this.getDay();
    this.showloading = true;
    console.log(form)

    let data: any = {};
    console.log(form.value)
    data.prix_vente = form.value.prix_vente
    data.produit_id = form.value.produit[0].id
    data.date_vente = date_jour;
    data.user_id = this.getUser();

    console.log(data)

    this._servicesPost.postRequest(data, "ventes" ).subscribe({
      next: (x: any) => {
        if(x.success) {
          this.closeModal(thirdModal);
          this.onCloseSuccess();
          console.log('reponse success ', x)
          this.showloading = false;
          this.tableData = [];
          this.listProduit = [];
          this.items = [];
          form.resetForm();
          this.getData();
          // this.getProduit();
        }else {
          this.closeModal(thirdModal);
          this.onCloseError();
          this.showloading = false;
          console.log(x)
        }

      },
      error: (x)=> {
        this.closeModal(thirdModal);
        this.onCloseError();
        this.showloading = false;
        console.log(x)
      }
    });


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
          console.log(x)
            console.log("x.datas", x.datas)
            this.tableData = x.datas.ventes;
            this.listProduit = x.datas.produits;
            x.datas.produits.forEach((element: any) => {
              console.log(element.code_prod)

              this.items.push(
                {
                  id: element.id,
                  text: element.libelle + " " + element.code_prod
                }
              )
            });
            // this.listeproduit(this.listProduit);
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

  annuler(modal) {
    console.log(this.vente.id)
    this.showloading = true;
    this._servicesGet.getRequest('ventes/annuler/' + this.vente.id).subscribe(
      {
        next: (x:any)=> {
          if (x.success) {
            this.showloading = false;
            this.vente = {};
          this.onCloseSuccess();
          this.getData();
            this.getProduit();
          }else {
            this.onCloseError();
            this.showloading = false;
            console.log(x)
          }
        }
      }
    )
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
  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  getUser() {
    return 1;
  }

}
