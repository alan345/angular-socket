/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './companie.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/forms';
import * as import3 from '../../../../src/app/companie/companiePictures.component';
import * as import4 from '../../../node_modules/@angular/material/typings/index.ngfactory';
import * as import5 from '@angular/material';
import * as import6 from '@angular/common';
import * as import7 from '../../../../src/app/companie/companie.service';
import * as import8 from 'ng2-toastr/src/toast-manager';
import * as import9 from '@angular/router';
var styles_CompaniePicturesComponent = [import0.styles];
export var RenderType_CompaniePicturesComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_CompaniePicturesComponent,
    data: {}
});
function View_CompaniePicturesComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 15, 'div', [[
                'class',
                'flt-lft'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n            '])),
        (l()(), import1.ɵeld(0, null, null, 12, 'div', [[
                'class',
                'fll-pge'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n              '])),
        (l()(), import1.ɵeld(0, null, null, 9, 'div', [[
                'class',
                'pic-list'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], null, null, null, null)),
        import1.ɵdid(106496, null, 0, import2.FormGroupName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import1.ɵprd(1024, null, import2.ControlContainer, null, [import2.FormGroupName]),
        import1.ɵdid(8192, null, 0, import2.NgControlStatusGroup, [import2.ControlContainer], null, null),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵeld(0, null, null, 0, 'img', [
            [
                'onerror',
                'this.src =\'assets/images/no-image-found.jpg\''
            ],
            [
                'width',
                '150'
            ]
        ], [[
                8,
                'src',
                4
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n                '])),
        (l()(), import1.ɵeld(0, null, null, 0, 'span', [[
                'class',
                'glyphicon glyphicon-remove pull-right  dlt-img'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.removeForm(v.context.index) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵted(null, ['\n              '])),
        (l()(), import1.ɵted(null, ['\n            '])),
        (l()(), import1.ɵted(null, ['\n          ']))
    ], function (ck, v) {
        var currVal_7 = v.context.index;
        ck(v, 5, 0, currVal_7);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = import1.ɵnov(v, 7).ngClassUntouched;
        var currVal_1 = import1.ɵnov(v, 7).ngClassTouched;
        var currVal_2 = import1.ɵnov(v, 7).ngClassPristine;
        var currVal_3 = import1.ɵnov(v, 7).ngClassDirty;
        var currVal_4 = import1.ɵnov(v, 7).ngClassValid;
        var currVal_5 = import1.ɵnov(v, 7).ngClassInvalid;
        var currVal_6 = import1.ɵnov(v, 7).ngClassPending;
        ck(v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = import1.ɵinlineInterpolate(2, './uploads/forms/', co.fetchedCompanie.forms[v.context.index].owner, '/', co.fetchedCompanie.forms[v.context.index].imagePath, '');
        ck(v, 10, 0, currVal_8);
    });
}
export function View_CompaniePicturesComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 43, 'div', [[
                'class',
                'container'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'goldgradient beigeborder subnav'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'subnav-btnleft'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.goBack() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import1.ɵeld(0, null, null, 0, 'i', [[
                'class',
                'fa fa-chevron-left'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 1, 'h3', [[
                'style',
                'text-align: center;'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['My Salon'])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵeld(0, null, null, 31, 'div', [[
                'class',
                'img-row phyto-ctnr'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵeld(0, null, null, 28, 'form', [
            [
                'class',
                'img-frm phyto-ctnr'
            ],
            [
                'novalidate',
                ''
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'ngSubmit'
            ],
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('submit' === en)) {
                var pd_0 = (import1.ɵnov(v, 15).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import1.ɵnov(v, 15).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (co.save() !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)),
        import1.ɵdid(8192, null, 0, import2.ɵbf, [], null, null),
        import1.ɵdid(270336, null, 0, import2.FormGroupDirective, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { form: [
                0,
                'form'
            ]
        }, { ngSubmit: 'ngSubmit' }),
        import1.ɵprd(1024, null, import2.ControlContainer, null, [import2.FormGroupDirective]),
        import1.ɵdid(8192, null, 0, import2.NgControlStatusGroup, [import2.ControlContainer], null, null),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵeld(0, null, null, 9, 'div', [[
                'class',
                'addpic-wrpr'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 6, 'button', [
            [
                'class',
                'addpic-rectgl mat-button'
            ],
            [
                'md-button',
                ''
            ],
            [
                'type',
                'button'
            ]
        ], [[
                8,
                'disabled',
                0
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.openDialog('img') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, import4.View_MdButton_0, import4.RenderType_MdButton)),
        import1.ɵdid(8192, null, 0, import5.MdPrefixRejector, [
            [
                2,
                import5.MATERIAL_COMPATIBILITY_MODE
            ],
            import1.ElementRef
        ], null, null),
        import1.ɵdid(90112, null, 0, import5.MdButton, [
            import1.ElementRef,
            import1.Renderer2,
            import5.Platform,
            import5.FocusOriginMonitor
        ], null, null),
        import1.ɵdid(8192, null, 0, import5.MdButtonCssMatStyler, [], null, null),
        (l()(), import1.ɵted(0, ['Add Picture'])),
        (l()(), import1.ɵeld(0, null, 0, 0, 'br', [], null, null, null, null, null)),
        (l()(), import1.ɵeld(0, null, 0, 0, 'i', [[
                'class',
                'fa fa-plus'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵeld(0, null, null, 10, 'div', [[
                'class',
                'phyto-ctnr'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵeld(0, null, null, 7, 'div', [
            [
                'class',
                'phyto-ctnr'
            ],
            [
                'formArrayName',
                'forms'
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], null, null, null, null)),
        import1.ɵdid(106496, null, 0, import2.FormArrayName, [
            [
                3,
                import2.ControlContainer
            ],
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], { name: [
                0,
                'name'
            ]
        }, null),
        import1.ɵprd(1024, null, import2.ControlContainer, null, [import2.FormArrayName]),
        import1.ɵdid(8192, null, 0, import2.NgControlStatusGroup, [import2.ControlContainer], null, null),
        (l()(), import1.ɵted(null, ['\n          '])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_CompaniePicturesComponent_1)),
        import1.ɵdid(401408, null, 0, import6.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n        '])),
        (l()(), import1.ɵted(null, ['\n      '])),
        (l()(), import1.ɵted(null, ['\n    '])),
        (l()(), import1.ɵted(null, ['\n  '])),
        (l()(), import1.ɵted(null, ['\n'])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_7 = co.myForm;
        ck(v, 15, 0, currVal_7);
        var currVal_16 = 'forms';
        ck(v, 33, 0, currVal_16);
        var currVal_17 = co.getObjects(co.myForm);
        ck(v, 38, 0, currVal_17);
    }, function (ck, v) {
        var currVal_0 = import1.ɵnov(v, 17).ngClassUntouched;
        var currVal_1 = import1.ɵnov(v, 17).ngClassTouched;
        var currVal_2 = import1.ɵnov(v, 17).ngClassPristine;
        var currVal_3 = import1.ɵnov(v, 17).ngClassDirty;
        var currVal_4 = import1.ɵnov(v, 17).ngClassValid;
        var currVal_5 = import1.ɵnov(v, 17).ngClassInvalid;
        var currVal_6 = import1.ɵnov(v, 17).ngClassPending;
        ck(v, 13, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = (import1.ɵnov(v, 23).disabled || null);
        ck(v, 21, 0, currVal_8);
        var currVal_9 = import1.ɵnov(v, 35).ngClassUntouched;
        var currVal_10 = import1.ɵnov(v, 35).ngClassTouched;
        var currVal_11 = import1.ɵnov(v, 35).ngClassPristine;
        var currVal_12 = import1.ɵnov(v, 35).ngClassDirty;
        var currVal_13 = import1.ɵnov(v, 35).ngClassValid;
        var currVal_14 = import1.ɵnov(v, 35).ngClassInvalid;
        var currVal_15 = import1.ɵnov(v, 35).ngClassPending;
        ck(v, 32, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
    });
}
function View_CompaniePicturesComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'app-companie', [], null, null, null, View_CompaniePicturesComponent_0, RenderType_CompaniePicturesComponent)),
        import1.ɵdid(57344, null, 0, import3.CompaniePicturesComponent, [
            import7.CompanieService,
            import8.ToastsManager,
            import5.MdDialog,
            import9.Router,
            import6.Location,
            import9.ActivatedRoute,
            import2.FormBuilder
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var CompaniePicturesComponentNgFactory = import1.ɵccf('app-companie', import3.CompaniePicturesComponent, View_CompaniePicturesComponent_Host_0, {}, {}, []);
//# sourceMappingURL=companiePictures.component.ngfactory.js.map