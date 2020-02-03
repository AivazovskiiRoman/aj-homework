import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativesOfCampaignComponent } from './creatives-of-campaign.component';

describe('CreativesOfCampaignComponent', () => {
  let component: CreativesOfCampaignComponent;
  let fixture: ComponentFixture<CreativesOfCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreativesOfCampaignComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativesOfCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
