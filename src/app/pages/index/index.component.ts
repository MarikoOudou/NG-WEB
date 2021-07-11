import { Component, OnInit } from '@angular/core';
import { GetRequestService } from '../../shared/services/get-request.service';
import { PostRequestService } from '../../shared/services/post-request.service';
import { ChartsService } from '../charts/components/echarts/charts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = true;

  dataState: any = {};

  public AnimationBarOption;

  constructor(
    //private _chartsService: ChartsService,
    private _servicesGet: GetRequestService,
    private _servicesPost: PostRequestService) { }

  ngOnInit() {
    // this.AnimationBarOption = this._chartsService.getAnimationBarOption();
    this.postData();
  }

  getData() {
    this._servicesGet.getRequest('state/dashbord').subscribe(
      x => console.log(x)
    );
  }

  postData() {
    let data: any = {};
    //data.date_jour = "20210-10-20";
    data.date_jour = this.getDay();
    this._servicesPost.postRequest(data, 'state/dashbord').subscribe(
      {
        next: (x: any) => {

            this.dataState = x.datas;
            this.showloading = false;

        },
        error: x => console.error(x)
      }
    );
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

}
