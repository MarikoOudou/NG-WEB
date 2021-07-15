import { User } from './../../shared/models/users';
import { Role } from './../../shared/constants/role';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { GetRequestService } from '../../shared/services/get-request.service';
import { PostRequestService } from '../../shared/services/post-request.service';


@Component({
  selector: 'ngx-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {

  tableData: Array<any>;
  nameTable: string = "Liste des utilisateurs";
  /* pagination Info */
  pageSize = 10;
  loading: boolean = true;
  pageNumber = 1;
  column: any = [
    'Nom complet',
    'email',
    'role',
    'Actions',
  ];
  roles: any = Role;
  utilisateur: any = {};
  dataUpdate: any;

  constructor(
    //private _chartsService: ChartsService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }


  ngOnInit() {
    this.getData();

  }

  getData() {
    this._servicesGet.getRequest('users').subscribe(
      {
        next: (x: any) => {

          this.tableData = x.datas;
          this.loading = false;

        },
        error: x => console.error(x)
      }
    );
  }

  onSubmit(form: NgForm, thirdModal: any) {
    this.loading = true;
    let data = form.value;
    console.log(data)

    if (this.utilisateur.id) {
      console.log("id existe ")

      this._servicesPost.putRequest(data, 'users/' + this.utilisateur.id).subscribe(
        {
          next: (x: any) => {
            console.log(x)
            if (x.success) {
              this.getData();
              this.closeModal(thirdModal);
              this.loading = false;
              this.onCloseSuccess();
            } else {
              this.closeModal(thirdModal);
              this.loading = false;
              this.onCloseError();
            }
          }
        }
      );

    } else {

      this._servicesPost.postRequest(data, 'users').subscribe(
        {
          next: (x: any) => {
            console.log(x)
            if (x.success) {
              this.getData();
              this.closeModal(thirdModal);
              this.loading = false;
              this.onCloseSuccess();
            } else {
              this.closeModal(thirdModal);
              this.loading = false;
              this.onCloseError();
            }
          }
        }
      );
    }



  }

  onSubmitDelet(thirdModal: any) {
    this.loading = true;

    console.log(this.utilisateur.id)

    this._servicesGet.delectRequest("users/" + this.utilisateur.id).subscribe(
      {
        next: (x: any) => {
          if (x.success) {
            console.log(x)
            this.loading = false;
            this.getData();
            this.closeModal(thirdModal);
            this.onCloseSuccess();
          } else {
            console.log(x)
            this.closeModal(thirdModal);
            this.loading = false;
            this.onCloseError();

          }
        }
      }
    )
  }

  openModal(modal, data) {
    console.log(modal)
    this.utilisateur = {}
    this.utilisateur = data;
    modal.open();
  }


  pageChanged(pN: number): void {
    this.pageNumber = pN;
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
