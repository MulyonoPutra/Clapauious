import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnimationsComponent } from './card-animations.component';

describe('CardAnimationsComponent', () => {
    let component: CardAnimationsComponent;
    let fixture: ComponentFixture<CardAnimationsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CardAnimationsComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CardAnimationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
