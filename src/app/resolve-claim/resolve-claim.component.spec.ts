import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolveClaimComponent } from './resolve-claim.component';

describe('ResolveClaimComponent', () => {
  let component: ResolveClaimComponent;
  let fixture: ComponentFixture<ResolveClaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResolveClaimComponent]
    });
    fixture = TestBed.createComponent(ResolveClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
