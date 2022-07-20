import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardResponsiveComponent } from './card-responsive.component';

describe('CardResponsiveComponent', () => {
    let component: CardResponsiveComponent;
    let fixture: ComponentFixture<CardResponsiveComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CardResponsiveComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardResponsiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
