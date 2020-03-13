import { Component } from '@angular/core';
//HttpClient used to make the rest api call.
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    //declare result variable
    //result variable used to hold the server response
    private result:any;
    //create the object to HttpClient
    //dependency injection
    //where obj is the HttpClient Object
    constructor(private obj:HttpClient){}
    ngOnInit(){
        this.obj.get("http://localhost:8080/products")
                                    .subscribe((posRes)=>{
            this.result = posRes;
        },(errRes)=>{
          console.log(errRes);
        });
    }
}