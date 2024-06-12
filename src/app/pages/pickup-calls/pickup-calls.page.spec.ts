import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PickupCallsPage } from './pickup-calls.page';

describe('PickupCallsPage', () => {
  let component: PickupCallsPage;
  let fixture: ComponentFixture<PickupCallsPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to home on create new pickup call', () => {
    spyOn(router, 'navigate');
    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

});
