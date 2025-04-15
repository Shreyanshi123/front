import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelateddataComponent } from './relateddata.component';

describe('RelateddataComponent', () => {
  let component: RelateddataComponent;
  let fixture: ComponentFixture<RelateddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelateddataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelateddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
