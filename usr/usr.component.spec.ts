import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrComponent } from './usr.component';

describe('UsrComponent', () => {
  let component: UsrComponent;
  let fixture: ComponentFixture<UsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
