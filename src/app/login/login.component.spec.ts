import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show required error on exit if login is empty', () => {
    const element = fixture.nativeElement;
    element.querySelector('#login').dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    element.querySelector('#login').dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    //element.querySelector('#login').focus();
    //element.querySelector('#login').blur();
    expect(element.querySelector('#loginRequiredError')).not.toBeNull();
  });
});
