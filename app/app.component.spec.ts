import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ToolbarService }  from './toolbar.service';
import { CoreModule }      from './core/core.module';


describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ CoreModule, RouterTestingModule ],
      providers: [ ToolbarService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('div'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected headline text', () => {
    const content = de.nativeElement;
    expect(content.innerText).toMatch(/Grocery list/i,
      'headline should contains the app name "Grocery list"');
  });
});
