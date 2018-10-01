import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPhraseComponent } from './dialog-add-phrase.component';

describe('DialogAddPhraseComponent', () => {
  let component: DialogAddPhraseComponent;
  let fixture: ComponentFixture<DialogAddPhraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddPhraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddPhraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
