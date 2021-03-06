/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './login.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../../../../src/app/user/login/login.component';
import * as import3 from '@angular/forms';
import * as import4 from '@angular/common';
import * as import5 from '@angular/router';
import * as import6 from '../../../../../src/app/auth/auth.service';
import * as import7 from 'ng2-toastr/src/toast-manager';
const styles_LoginComponent:any[] = [import0.styles];
export const RenderType_LoginComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_LoginComponent,
  data: {}
}
);
export function View_LoginComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    import1.ɵqud(201326592,1,{userEmail: 0}),
      (l()(),import1.ɵeld(0,(null as any),(null as any),54,'div',[[
        'class',
        'single-wrpr beigeback'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),51,'form',[
      [
        'class',
        'login-form'
      ]
      ,
      [
        'novalidate',
        ''
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'ngSubmit'
      ]
      ,
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.LoginComponent = v.component;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,5).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,5).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      if (('ngSubmit' === en)) {
        const pd_2:any = ((<any>co.onSubmit()) !== false);
        ad = (pd_2 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import3.ɵbf,([] as any[]),(null as any),(null as any)),
    import1.ɵdid(270336,(null as any),0,import3.FormGroupDirective,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
      ,{form: [
        0,
        'form'
      ]
    },{ngSubmit: 'ngSubmit'}),
    import1.ɵprd(1024,(null as any),import3.ControlContainer,(null as any),[import3.FormGroupDirective]),
    import1.ɵdid(8192,(null as any),0,import3.NgControlStatusGroup,[import3.ControlContainer],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Welcome to the Phyto Salon App!'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),8,'div',[[
        'class',
        'input-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵeld(0,[
      [
        1,
        0
      ]
      ,
      [
        'userEmail',
        1
      ]

    ]
    ,(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'formControlName',
        'email'
      ]
      ,
      [
        'placeholder',
        'Email'
      ]
      ,
      [
        'type',
        'text'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,15)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,15).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import1.ɵnov(v,15)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import1.ɵnov(v,15)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import3.DefaultValueAccessor,[
      import1.Renderer,
      import1.ElementRef,
      [
        2,
        import3.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import3.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import3.DefaultValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import3.FormControlName,[
      [
        3,
        import3.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import3.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import1.ɵprd(1024,(null as any),import3.NgControl,(null as any),[import3.FormControlName]),
    import1.ɵdid(8192,(null as any),0,import3.NgControlStatus,[import3.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'alert alert-danger'
      ]
      ],[[
        8,
        'hidden',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Please enter a valid email format'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'span',[[
        'class',
        'help-block'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),8,'div',[[
        'class',
        'input-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),5,'input',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'formControlName',
        'password'
      ]
      ,
      [
        'placeholder',
        'Password'
      ]
      ,
      [
        'type',
        'password'
      ]

    ]
    ,[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'input'
      ]
      ,
      [
        (null as any),
        'blur'
      ]
      ,
      [
        (null as any),
        'compositionstart'
      ]
      ,
      [
        (null as any),
        'compositionend'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('input' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,30)._handleInput($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      if (('blur' === en)) {
        const pd_1:any = ((<any>import1.ɵnov(v,30).onTouched()) !== false);
        ad = (pd_1 && ad);
      }
      if (('compositionstart' === en)) {
        const pd_2:any = ((<any>import1.ɵnov(v,30)._compositionStart()) !== false);
        ad = (pd_2 && ad);
      }
      if (('compositionend' === en)) {
        const pd_3:any = ((<any>import1.ɵnov(v,30)._compositionEnd($event.target.value)) !== false);
        ad = (pd_3 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(8192,(null as any),0,import3.DefaultValueAccessor,[
      import1.Renderer,
      import1.ElementRef,
      [
        2,
        import3.COMPOSITION_BUFFER_MODE
      ]

    ]
    ,(null as any),(null as any)),
    import1.ɵprd(512,(null as any),import3.NG_VALUE_ACCESSOR,(p0_0:any) => {
      return [p0_0];
    },[import3.DefaultValueAccessor]),
    import1.ɵdid(335872,(null as any),0,import3.FormControlName,[
      [
        3,
        import3.ControlContainer
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]
      ,
      [
        2,
        import3.NG_VALUE_ACCESSOR
      ]

    ]
      ,{name: [
        0,
        'name'
      ]
    },(null as any)),
    import1.ɵprd(1024,(null as any),import3.NgControl,(null as any),[import3.FormControlName]),
    import1.ɵdid(8192,(null as any),0,import3.NgControlStatus,[import3.NgControl],(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'alert alert-danger'
      ]
      ],[[
        8,
        'hidden',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Password must contain 6 or more characters'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'button',[[
        'type',
        'submit'
      ]
      ],[[
        8,
        'disabled',
        0
      ]
    ],(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import4.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import1.ɵpod([
      'done',
      'pas-done'
    ]
    ),
    (l()(),import1.ɵted((null as any),['Login'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'p',[[
        'class',
        'message'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,47).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(335872,(null as any),0,import5.RouterLinkWithHref,[
      import5.Router,
      import5.ActivatedRoute,
      import4.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Forgot Your Password?'])),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),3,'p',[[
        'class',
        'message'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'a',([] as any[]),[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,52).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(335872,(null as any),0,import5.RouterLinkWithHref,[
      import5.Router,
      import5.ActivatedRoute,
      import4.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['Register'])),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.LoginComponent = v.component;
    const currVal_7:any = co.myForm;
    ck(v,5,0,currVal_7);
    const currVal_15:any = 'email';
    ck(v,17,0,currVal_15);
    const currVal_24:any = 'password';
    ck(v,32,0,currVal_24);
    const currVal_27:any = ck(v,42,0,co.myForm.valid,!co.myForm.valid);
    ck(v,41,0,currVal_27);
    const currVal_30:any = '/user/reset';
    ck(v,47,0,currVal_30);
    const currVal_33:any = '/user/register';
    ck(v,52,0,currVal_33);
  },(ck,v) => {
    var co:import2.LoginComponent = v.component;
    const currVal_0:any = import1.ɵnov(v,7).ngClassUntouched;
    const currVal_1:any = import1.ɵnov(v,7).ngClassTouched;
    const currVal_2:any = import1.ɵnov(v,7).ngClassPristine;
    const currVal_3:any = import1.ɵnov(v,7).ngClassDirty;
    const currVal_4:any = import1.ɵnov(v,7).ngClassValid;
    const currVal_5:any = import1.ɵnov(v,7).ngClassInvalid;
    const currVal_6:any = import1.ɵnov(v,7).ngClassPending;
    ck(v,3,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_8:any = import1.ɵnov(v,19).ngClassUntouched;
    const currVal_9:any = import1.ɵnov(v,19).ngClassTouched;
    const currVal_10:any = import1.ɵnov(v,19).ngClassPristine;
    const currVal_11:any = import1.ɵnov(v,19).ngClassDirty;
    const currVal_12:any = import1.ɵnov(v,19).ngClassValid;
    const currVal_13:any = import1.ɵnov(v,19).ngClassInvalid;
    const currVal_14:any = import1.ɵnov(v,19).ngClassPending;
    ck(v,14,0,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,currVal_14);
    const currVal_16:any = (co.email.valid || co.email.pristine);
    ck(v,22,0,currVal_16);
    const currVal_17:any = import1.ɵnov(v,34).ngClassUntouched;
    const currVal_18:any = import1.ɵnov(v,34).ngClassTouched;
    const currVal_19:any = import1.ɵnov(v,34).ngClassPristine;
    const currVal_20:any = import1.ɵnov(v,34).ngClassDirty;
    const currVal_21:any = import1.ɵnov(v,34).ngClassValid;
    const currVal_22:any = import1.ɵnov(v,34).ngClassInvalid;
    const currVal_23:any = import1.ɵnov(v,34).ngClassPending;
    ck(v,29,0,currVal_17,currVal_18,currVal_19,currVal_20,currVal_21,currVal_22,currVal_23);
    const currVal_25:any = (co.password.valid || co.password.pristine);
    ck(v,37,0,currVal_25);
    const currVal_26:boolean = !co.myForm.valid;
    ck(v,40,0,currVal_26);
    const currVal_28:any = import1.ɵnov(v,47).target;
    const currVal_29:any = import1.ɵnov(v,47).href;
    ck(v,46,0,currVal_28,currVal_29);
    const currVal_31:any = import1.ɵnov(v,52).target;
    const currVal_32:any = import1.ɵnov(v,52).href;
    ck(v,51,0,currVal_31,currVal_32);
  });
}
function View_LoginComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app-login',([] as any[]),(null as any),(null as any),(null as any),View_LoginComponent_0,RenderType_LoginComponent)),
    import1.ɵdid(2154496,(null as any),0,import2.LoginComponent,[
      import3.FormBuilder,
      import6.AuthService,
      import5.Router,
      import7.ToastsManager,
      import1.Renderer
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const LoginComponentNgFactory:import1.ComponentFactory<import2.LoginComponent> = import1.ɵccf('app-login',import2.LoginComponent,View_LoginComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2FsYW4vYXBwL2FsZXMvc2Fsb24vc3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9hbGFuL2FwcC9hbGVzL3NhbG9uL3NyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9hbGFuL2FwcC9hbGVzL3NhbG9uL3NyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2FsYW4vYXBwL2FsZXMvc2Fsb24vc3JjL2FwcC91c2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC50cy5Mb2dpbkNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxkaXYgY2xhc3M9XCJzaW5nbGUtd3JwciBiZWlnZWJhY2tcIj5cbiAgPGZvcm0gW2Zvcm1Hcm91cF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiIGNsYXNzPVwibG9naW4tZm9ybVwiIG5vdmFsaWRhdGU+XG4gICAgPGgzPldlbGNvbWUgdG8gdGhlIFBoeXRvIFNhbG9uIEFwcCE8L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgPGlucHV0ICN1c2VyRW1haWwgdHlwZT1cInRleHRcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgW2hpZGRlbl09XCJlbWFpbC52YWxpZCB8fCBlbWFpbC5wcmlzdGluZVwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgZm9ybWF0PC9kaXY+XG4gICAgPHNwYW4gY2xhc3M9XCJoZWxwLWJsb2NrXCI+PC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBbaGlkZGVuXT1cInBhc3N3b3JkLnZhbGlkIHx8IHBhc3N3b3JkLnByaXN0aW5lXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5QYXNzd29yZCBtdXN0IGNvbnRhaW4gNiBvciBtb3JlIGNoYXJhY3RlcnM8L2Rpdj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS52YWxpZFwiIFtuZ0NsYXNzXT1cInsnZG9uZSc6bXlGb3JtLnZhbGlkLCdwYXMtZG9uZSc6IW15Rm9ybS52YWxpZH1cIj5Mb2dpbjwvYnV0dG9uPlxuICAgIDxwIGNsYXNzPVwibWVzc2FnZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIicvdXNlci9yZXNldCdcIj5Gb3Jnb3QgWW91ciBQYXNzd29yZD88L2E+PC9wPlxuICAgIDxwIGNsYXNzPVwibWVzc2FnZVwiPjxhIFtyb3V0ZXJMaW5rXT1cIicvdXNlci9yZWdpc3RlcidcIj5SZWdpc3RlcjwvYT48L3A+XG4gIDwvZm9ybT5cbjwvZGl2PlxuIiwiPGFwcC1sb2dpbj48L2FwcC1sb2dpbj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBbUM7SUFDakM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQTJCO1FBQUE7UUFBQTtNQUFBO01BQTNCO0lBQUE7Z0JBQUE7Z0JBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBaUY7SUFDL0U7SUFBSTtJQUFvQztNQUN4QztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCO0lBQ3ZCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7OztNQUFBO1FBQUE7O01BQUE7O0lBQUE7S0FBQTtnQkFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBOztNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7O01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO0lBQStGO0lBQzNGO01BQ047UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUU7SUFBdUM7TUFDaEg7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFnQztNQUNoQztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQXlCO0lBQ3ZCO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTs7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtLQUFBO2dCQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBOEY7SUFDMUY7TUFDTjtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUErRTtJQUFnRDtNQUMvSDtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQWlEO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBMkQ7SUFBYztNQUMxSDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW1CO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWdDO0lBQTZCO01BQ2hGO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBbUI7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBbUM7SUFBZ0I7SUFDakU7SUFDSDs7OztJQWZFO0lBQU4sU0FBTSxTQUFOO0lBR2tDO0lBQTlCLFVBQThCLFVBQTlCO0lBS3VCO0lBQXZCLFVBQXVCLFVBQXZCO0lBRytDO0lBQWpELFVBQWlELFVBQWpEO0lBQ3NCO0lBQUgsVUFBRyxVQUFIO0lBQ0c7SUFBSCxVQUFHLFVBQUg7OztJQWJyQjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFNBQUEscUVBQUE7SUFHSTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsMEVBQUE7SUFFRztJQUFMLFVBQUssVUFBTDtJQUdFO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUEsVUFBQSw0RUFBQTtJQUVHO0lBQUwsVUFBSyxVQUFMO0lBQ3NCO0lBQXRCLFVBQXNCLFVBQXRCO0lBQ21CO0lBQUE7SUFBQSxVQUFBLHFCQUFBO0lBQ0E7SUFBQTtJQUFBLFVBQUEscUJBQUE7Ozs7O0lDZHZCO2dCQUFBOzs7Ozs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
