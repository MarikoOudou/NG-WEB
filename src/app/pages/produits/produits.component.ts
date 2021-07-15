import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role } from '../../shared/constants/role';
import { GetRequestService } from '../../shared/services/get-request.service';
import { PostRequestService } from '../../shared/services/post-request.service';
import swal from 'sweetalert2';

@Component({
  selector: 'ngx-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {


  tableData: Array<any>;
  nameTable: string = "Liste des produits";
  /* pagination Info */
  pageSize = 10;
  loading: boolean = true;
  ajouter_produit: boolean =  false;
  pageNumber = 1;
  column : any = [
    'Code produit',
    'Type',
    'localité',
    'surface',
    'prix',
    'Actions',
  ];
  roles: any = Role;
  produit: any = {};
  defaultContent = '<h3>Friday favorites - Homemade pizza</h3><p><br></p><p>Friday is finally here! I know it’s been an exhausting week and the last thing on your mind right</p><p> now is getting stuck in the kitchen preparing a snack to accompany you during your regular Netflix session.</p><img src="http://f10.baidu.com/it/u=870634439,1838112237&amp;fm=72">'


  constructor(
    //private _chartsService: ChartsService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }


  ngOnInit() {
    this.getData();
    // document.getElementById('text-output').innerHTML = this.defaultContent;

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
