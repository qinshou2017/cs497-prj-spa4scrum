import { Component, OnInit, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";
import { LoadingScreenService } from "./loading-screen.service";

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss']
})
export class LoadingScreenComponent implements OnInit {

  debounceTime: number = 200;
  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private loadingScreenService: LoadingScreenService,
              private _elmRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit():void {
    this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe(
      (status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
      }
    );
    this._elmRef.nativeElement.style.display = 'none';
  }

  ngAfterViewInit(): void {
    // this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(
    //   debounceTime(this.debounceTime)).subscribe(
    //     (status: boolean) => {
    //       console.log("asdf")
    //       this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
    //       this._changeDetectorRef.detectChanges();
    //     }
    //   );
    // this.loadingSubscription = this.loadingScreenService.loadingStatus.subscribe(
    //   (status: boolean) => {
    //     console.log("asdf")
    //     this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
    //     this._changeDetectorRef.detectChanges();
    //   }
    // );
    // this._elmRef.nativeElement.style.display = 'none';
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
