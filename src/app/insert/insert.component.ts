import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private service:DataService,
    private route:ActivatedRoute,private router:Router) { }
    dev = {
      "id": "",
      "name": "",
      "email": ""
  }
  ngOnInit() {

  }
  insert()
  {
    this.service.insert(this.dev).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['/home']);
      
    })
  }

}
