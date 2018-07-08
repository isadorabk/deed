import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCommunityComponent } from './mini-community.component';

describe('MiniCommunityComponent', () => {
  let component: MiniCommunityComponent;
  let fixture: ComponentFixture<MiniCommunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCommunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
