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
  loading: boolean = false;
  pageNumber = 1;
  column : any = [
    'Nom complet',
    'email',
    'role',
    'Actions',
  ];
  roles: any = Role;
  utilisateur: any = {};

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
    console.log(form.value)
    this.closeModal(thirdModal);
    this.onCloseSuccess();
  }

  loadData() {
    this.tableData = [
      {
          id: 1,
          nom: 'Mark',
          prenom: 'Otto',
          username: '@mdo',
          email: 'mdo@gmail.com',
          role: 'user'
      },
      {
          id: 2,
          nom: 'Jacob',
          prenom: 'Thornton',
          username: '@fat',
          contact: '@fat',
          email: 'fat@yandex.ru',
          role: 'admin'
      },
      {
          id: 3,
          nom: 'Larry',
          prenom: 'Bird',
          username: '@twitter',
          email: 'twitter@outlook.com',
          role: 'vendeur'
      },
      {
          id: 4,
          nom: 'John',
          prenom: 'Snow',
          username: '@snow',
          email: 'snow@gmail.com',
          role: 'editeur'
      },
      {
          id: 5,
          nom: 'Jack',
          prenom: 'Sparrow',
          username: '@jack',
          email: 'jack@yandex.ru',
          role: '30'
      },
      {
          id: 6,
          nom: 'Ann',
          prenom: 'Smith',
          username: '@ann',
          email: 'ann@gmail.com',
          role: '21'
      },
      {
          id: 7,
          nom: 'Barbara',
          prenom: 'Black',
          username: '@barbara',
          email: 'barbara@yandex.ru',
          role: '43'
      },
      {
          id: 8,
          nom: 'Sevan',
          prenom: 'Bagrat',
          username: '@sevan',
          email: 'sevan@outlook.com',
          role: '13'
      },
      {
          id: 9,
          nom: 'Ruben',
          prenom: 'Vardan',
          username: '@ruben',
          email: 'ruben@gmail.com',
          role: '22'
      },
      {
          id: 10,
          nom: 'Karen',
          prenom: 'Sevan',
          username: '@karen',
          email: 'karen@yandex.ru',
          role: '33'
      },
      {
          id: 11,
          nom: 'Mark',
          prenom: 'Otto',
          username: '@mark',
          email: 'mark@gmail.com',
          role: '38'
      },
      {
          id: 12,
          nom: 'Jacob',
          prenom: 'Thornton',
          username: '@jacob',
          email: 'jacob@yandex.ru',
          role: '48'
      },
      {
          id: 13,
          nom: 'Haik',
          prenom: 'Hakob',
          username: '@haik',
          email: 'haik@outlook.com',
          role: '48'
      },
      {
          id: 14,
          nom: 'Garegin',
          prenom: 'Jirair',
          username: '@garegin',
          email: 'garegin@gmail.com',
          role: '40'
      },
      {
          id: 15,
          nom: 'Krikor',
          prenom: 'Bedros',
          username: '@krikor',
          email: 'krikor@yandex.ru',
          role: '32'
      }
  ];
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  openModal(modal, data) {
    this.utilisateur = data;
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
