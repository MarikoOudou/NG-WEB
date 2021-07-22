import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetRequestService } from '../../shared/services/get-request.service';
import { PostRequestService } from '../../shared/services/post-request.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;

  constructor(
    //private _chartsService: ChartsService,
    private router: Router,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.loading = true;

    let data = form.value;

    console.log(data)

    this._servicesPost.postRequest(data, "login" ).subscribe({
      next: (x: any) => {
        if(x.success) {
          // this.closeModal(thirdModal);

          this.onCloseSuccess();
          // console.log('reponse success ', x)
          localStorage.setItem('user_profil', JSON.stringify(x.datas));
          this.router.navigate(['pages/index'])
          this.loading = false;
          // form.resetForm();
        }else {
          this.onCloseError();
          this.loading = false;
          console.log(x)
        }

      },
      error: (x)=> {
        this.onCloseError();
        this.loading = false;
        console.log(x)
      }
    });


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
