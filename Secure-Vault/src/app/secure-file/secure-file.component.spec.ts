import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureFileComponent } from './secure-file.component';

describe('SecureFileComponent', () => {
  let component: SecureFileComponent;
  let fixture: ComponentFixture<SecureFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
