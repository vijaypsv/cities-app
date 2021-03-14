import { Component, OnInit } from '@angular/core';
import { Response } from '../model/response';
import { CityService } from '../service/city.service';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent implements OnInit {

  response: Response;		

  constructor(private cityService: CityService) {
  	this.response = new Response();
  }

  ngOnInit(): void {
  	this.cityService.sequence().subscribe(data => {
      this.response = data;
    });
  }

}
