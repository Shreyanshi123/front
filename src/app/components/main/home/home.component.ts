import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { RelateddataComponent } from "../relateddata/relateddata.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, RelateddataComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
