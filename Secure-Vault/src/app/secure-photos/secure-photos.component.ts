import { Component, HostListener, OnInit } from '@angular/core';
import { SecurePhotosService } from './secure-photos.service';

@Component({
  selector: 'app-secure-photos',
  templateUrl: './secure-photos.component.html',
  styleUrls: ['./secure-photos.component.scss']
})

export class SecurePhotosComponent implements OnInit {
 
  title:string='Secure Photos';
  imageList:any=[];
  albumid:number=1;
  constructor(private service:SecurePhotosService) { 
    this.get_securePhotos();
  }

  ngOnInit(): void {
    
  }

  get_securePhotos(){
     this.service.get_securePhotos(this.albumid).subscribe((data:any) => {
     this.imageList=data;
    });
  }

  @HostListener('window:scroll',[]) onWindowScroll()
  {
    this.albumid++;
        if(this.albumid<=5)
        {
          this.service.get_securePhotos(this.albumid).subscribe((data:any) => {        
            if(data.length>0){
              data.forEach((element:any) => {
                this.imageList.push(element);
              });             
            }
          });
        }
}

onDelete(imageitem:any){
this.imageList=this.imageList.filter((s:any)=>(s.title!==imageitem.title ))
}

}
