import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  dev = {
    "id": "",
    "name": "",
    "email": ""
}
  constructor(private service:DataService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit()
   {
         this.route.paramMap.subscribe((result)=>{
          let id = result.get("id");
          console.log(id);
          this.service.selectById(id).subscribe((data)=>{
            this.dev = data[0];
            })
         })
  }
  update()
  {
    this.service.update(this.dev).subscribe((res)=>{
       console.log(res);
       this.router.navigate(['/home']);
    })
  }

}
