import { Component, OnInit } from '@angular/core';
import { Response } from '../model/response';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

	response: Response;

  name = '';
  page = 1;
  size = 10;
  pageSizes = [10, 20, 50];


  constructor(private cityService: CityService) {
  	this.response = new Response();
  }

  ngOnInit() {
    this.updateList();
  }

  updateList(): void {
    const params = this.getParams();
    this.cityService.queryByPage(params).subscribe(data => {
      this.response = data;
    });
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.updateList();
  }

  handlePageSizeChange(event: any): void {
    this.size = event.target.value;
    this.page = 1;
    this.updateList();
  }


  private getParams(): any {
    
    let params: any = {};
    if (this.name) {
      params[`name`] = this.name;
    }
    if (this.page) {
      params[`page`] = this.page - 1;
    }
    if (this.size) {
      params[`size`] = this.size;
    }

    return params;
  }
}
