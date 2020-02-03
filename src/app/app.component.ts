import { HttpClient } from '@angular/common/http';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Component, OnInit, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit{
  title: string;


  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId, 
    @Optional() @Inject(REQUEST) private request: Request) {}

  ngOnInit(): void {
    if (isPlatformServer(this.platformId)) {
      
      // should see this in stdout of node process, or wherever node logs
      console.log('rendering server side for request:', this.request.headers);
      this.http.get('http://localhost:8080/test', {responseType: 'text'}).subscribe(
        res => {
          this.title = res;
        }
      )
      /* use req */
    } else {
        // browser console should print null
        console.log('working browser side, request should be null');
        fetch('http://localhost:8080/test').then(res => {
          res.text().then(
            test => this.title = test
          )
        })
    }

  }
}