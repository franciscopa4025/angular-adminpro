import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
// @ts-ignore
declare function customInitFunctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private settingsService:SettingsService){
    customInitFunctions();
  }

  ngOnInit(): void {
    customInitFunctions();
  }


}
