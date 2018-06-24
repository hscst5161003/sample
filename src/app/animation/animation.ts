import { trigger, style, state, transition, animate } from '@angular/animations';

export class Aanie {
    public static anies = [
        trigger('a', [
            state('aa', style({ transform: 'translateX(0px)' })),
            state('ab', style({ transform: 'translateX(70px)' })),
            transition('aa => ab', animate('0.1s ease')),
            transition('ab => aa', animate('0.08s ease'))
        ]),
        trigger('fadeLine', [
            state('inline', style({ background: 'white' })),
            state('outline', style({ background: 'aquamarine' })),
            transition('inline => outline', animate('0.5s linear')),
            transition('outline => inline', animate('0.5s linear')),
        ]),
        trigger('rotate', [
            state('a', style({ transform: 'rotate(0deg)'})),
            state('b', style({ transform: 'rotate(360deg)'})),
            transition('a => b', animate('0.5s linear')),
            transition('b => a', animate('0.5s linear')),
        ]),
    ];
}
