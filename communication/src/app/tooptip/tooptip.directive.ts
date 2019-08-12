import { ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { AwesomeTooltipComponent } from './tooptip.component';

@Directive({ selector: '[awesomeTooltip]' })
export class AwesomeTooltipDirective implements OnInit {

  @Input('awesomeTooltip') text = 'dd';
  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef) {
    console.log('create tooltip directive');
  }

  ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom',
        offsetY: -8,
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    const tooltipRef: ComponentRef<AwesomeTooltipComponent>
      = this.overlayRef.attach(new ComponentPortal(AwesomeTooltipComponent));
    tooltipRef.instance.text = this.text;
    console.log('enter');
  }

  @HostListener('mouseout')
  hide() {
    this.overlayRef.detach();
  }
}
