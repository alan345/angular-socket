/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '../../../../src/app/video/videoDeleteDialog.component';
import * as import2 from '@angular/material';
var styles_VideoDeleteDialog = [];
export var RenderType_VideoDeleteDialog = import0.ɵcrt({
    encapsulation: 2,
    styles: styles_VideoDeleteDialog,
    data: {}
});
export function View_VideoDeleteDialog_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 10, 'div', [[
                'class',
                'areusure'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [[
                'style',
                'max-width: 280px;'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['This action is not reversible. Are you sure you want to delete?'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'justkd'
            ],
            [
                'type',
                'button'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.dialogRefDelete.close('') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Cancel'])),
        (l()(), import0.ɵted(null, ['\n  '])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'dltfrv'
            ],
            [
                'type',
                'button'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.dialogRefDelete.close('delete') !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Delete'])),
        (l()(), import0.ɵted(null, ['\n'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], null, null);
}
function View_VideoDeleteDialog_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'videoDeleteDialog', [], null, null, null, View_VideoDeleteDialog_0, RenderType_VideoDeleteDialog)),
        import0.ɵdid(24576, null, 0, import1.VideoDeleteDialog, [import2.MdDialogRef], null, null)
    ], null, null);
}
export var VideoDeleteDialogNgFactory = import0.ɵccf('videoDeleteDialog', import1.VideoDeleteDialog, View_VideoDeleteDialog_Host_0, {}, {}, []);
//# sourceMappingURL=videoDeleteDialog.component.ngfactory.js.map