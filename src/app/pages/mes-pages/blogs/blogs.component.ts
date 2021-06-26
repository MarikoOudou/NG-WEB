import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  defaultContent = '<h3>Friday favorites - Homemade pizza</h3><p><br></p><p>Friday is finally here! I know it’s been an exhausting week and the last thing on your mind right</p><p> now is getting stuck in the kitchen preparing a snack to accompany you during your regular Netflix session.</p><img src="http://f10.baidu.com/it/u=870634439,1838112237&amp;fm=72">'

  tableData: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor() { }

  ngOnInit() {
    document.getElementById('text-output').innerHTML = this.defaultContent;
    this.loadData();
  }

  loadData() {
    this.tableData = [
      {
          id: 1,
          firstName: 'Mark',
          lastName: 'Otto',
          username: '@mdo',
          email: 'mdo@gmail.com',
          age: '28'
      },
      {
          id: 2,
          firstName: 'Jacob',
          lastName: 'Thornton',
          username: '@fat',
          email: 'fat@yandex.ru',
          age: '45'
      },
      {
          id: 3,
          firstName: 'Larry',
          lastName: 'Bird',
          username: '@twitter',
          email: 'twitter@outlook.com',
          age: '18'
      },
      {
          id: 4,
          firstName: 'John',
          lastName: 'Snow',
          username: '@snow',
          email: 'snow@gmail.com',
          age: '20'
      },
      {
          id: 5,
          firstName: 'Jack',
          lastName: 'Sparrow',
          username: '@jack',
          email: 'jack@yandex.ru',
          age: '30'
      },
      {
          id: 6,
          firstName: 'Ann',
          lastName: 'Smith',
          username: '@ann',
          email: 'ann@gmail.com',
          age: '21'
      },
      {
          id: 7,
          firstName: 'Barbara',
          lastName: 'Black',
          username: '@barbara',
          email: 'barbara@yandex.ru',
          age: '43'
      },
      {
          id: 8,
          firstName: 'Sevan',
          lastName: 'Bagrat',
          username: '@sevan',
          email: 'sevan@outlook.com',
          age: '13'
      },
      {
          id: 9,
          firstName: 'Ruben',
          lastName: 'Vardan',
          username: '@ruben',
          email: 'ruben@gmail.com',
          age: '22'
      },
      {
          id: 10,
          firstName: 'Karen',
          lastName: 'Sevan',
          username: '@karen',
          email: 'karen@yandex.ru',
          age: '33'
      },
      {
          id: 11,
          firstName: 'Mark',
          lastName: 'Otto',
          username: '@mark',
          email: 'mark@gmail.com',
          age: '38'
      },
      {
          id: 12,
          firstName: 'Jacob',
          lastName: 'Thornton',
          username: '@jacob',
          email: 'jacob@yandex.ru',
          age: '48'
      },
      {
          id: 13,
          firstName: 'Haik',
          lastName: 'Hakob',
          username: '@haik',
          email: 'haik@outlook.com',
          age: '48'
      },
      {
          id: 14,
          firstName: 'Garegin',
          lastName: 'Jirair',
          username: '@garegin',
          email: 'garegin@gmail.com',
          age: '40'
      },
      {
          id: 15,
          firstName: 'Krikor',
          lastName: 'Bedros',
          username: '@krikor',
          email: 'krikor@yandex.ru',
          age: '32'
      }
  ];
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }


  onContentChange(event: string) {
    document.getElementById('text-output').innerHTML = event;
  }
}
