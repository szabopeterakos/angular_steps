import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailng',
  templateUrl: './detailng.component.html',
  styleUrls: ['./detailng.component.css']
})
export class DetailngComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  book: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(params => {
      console.log('TCL: DetailngComponent -> ngOnInit -> params', params);
      this.updateDetails(params);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateDetails(book) {
    this.book = book;
  }
}
