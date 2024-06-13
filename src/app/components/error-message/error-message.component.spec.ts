import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ErrorMessageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
  }));

  // it('should show error message on filed touche and error present', () => {
  //   component.mostrarErro = new FormGroup({ email: new FormControl() });

  //   component.field.markAsTouched();
  //   component.field.setErrors({ required: true });

  //   expect(component.shouldShowComponent()).toBeTruthy();
  // });
});
