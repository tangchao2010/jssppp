webpackJsonp([6],{EFtW:function(t,i){},EpRH:function(t,i){},NmBP:function(t,i,e){"use strict";var n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"tabListTen"},[e("div",{staticClass:"tabList2One"},[e("dl",{staticClass:"tab2OneText"},[e("dd",[t._v(t._s(t.tenDd1))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt1))])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"tabList2Two"},[e("div",{staticClass:"tab2TwoText"},[e("dl",[e("dd",[t._v(t._s(t.tenDd2))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt2))])]),t._v(" "),e("dl",[e("dd",[t._v(t._s(t.tenDd3))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt3))])])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"tabList2Three"},[e("div",{staticClass:"tab2ThreeText"},[e("dl",[e("dd",[t._v(t._s(t.tenDd4))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt4))])]),t._v(" "),e("dl",[e("dd",[t._v(t._s(t.tenDd5))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt5))])]),t._v(" "),e("dl",[e("dd",[t._v(t._s(t.tenDd6))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt6))])])]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"tab2ThreeText"},[e("dl",[e("dd",[t._v(t._s(t.tenDd7))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt7))])]),t._v(" "),e("dl",[e("dd",[t._v(t._s(t.tenDd8))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt8))])]),t._v(" "),e("dl",[e("dd",[t._v(t._s(t.tenDd9))]),t._v(" "),e("dt",[t._v(t._s(t.tenDt9))])])])])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("img",{attrs:{src:e("8roH"),alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tab2TwoImg"},[i("img",{attrs:{src:e("G0aL"),alt:""}})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"tab2ThreeImg"},[i("img",{attrs:{src:e("vK5G"),alt:""}})])}]};var d=e("VU/8")({props:["tenDt1","tenDd1","tenDt2","tenDd2","tenDt3","tenDd3","tenDt4","tenDd4","tenDt5","tenDd5","tenDt6","tenDd6","tenDt7","tenDd7","tenDt8","tenDd8","tenDt9","tenDd9"],name:"",data:function(){return{}},components:{}},n,!1,function(t){e("EpRH")},"data-v-385bcfc0",null);i.a=d.exports},n1XG:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("07Oz"),d=e("OuLF"),a=e("jIjH"),s=e("dQCR"),o=e("lX0a"),v=e("nIao"),l=e("ADiW"),r=e("NmBP"),c=e("A67x"),_={name:"page-tab-container",data:function(){return{active:0}},mounted:function(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleClick:function(t,i){console.log(t,i)},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,i=t/100>1?1:t/100;this.$refs.child1.headerBac(i)}},components:{mHeader:n.a,mFooter:s.a,caseTop:d.a,goodsTitle:a.a,ModuleOne:o.a,ModuleTwo:v.a,ModuleThree:l.a,ModuleTen3:r.a,goTop:c.a}},u={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"case"},[e("mHeader",{ref:"child1",attrs:{goBack:"true","head-title":t.$t("individuation.caseTitle")}}),t._v(" "),e("goTop"),t._v(" "),e("div",{staticClass:"caseTop"},[e("caseTop",{attrs:{"head-top":t.$t("individuation.caseTop")}})],1),t._v(" "),e("div",{staticClass:"caseContent"},[e("van-tabs",{staticClass:"caseVantTab",attrs:{active:t.active}},[e("van-tab",[e("div",{attrs:{slot:"title"},slot:"title"},[e("goodsTitle",{attrs:{"goods-title":t.$t("other.goods")}})],1),t._v(" "),e("div",{staticClass:"tabList"},[e("div",{staticClass:"case1"},[e("ModuleOne",{attrs:{titleDt:t.$t("individuation.pimotitleDt"),titleDd:t.$t("individuation.pimotitleDd"),titleSpan:t.$t("individuation.pimotitleSpan"),p1:"true"}})],1),t._v(" "),e("div",{staticClass:"case2"},[e("moduleTwo",{attrs:{twoP:t.$t("individuation.pimttwoP"),twoSpan:t.$t("individuation.pimttwoSpan"),twoSpan2:t.$t("individuation.pimttwoSpan2"),p2:"true",p3:"true"}})],1),t._v(" "),e("div",{staticClass:"case3"},[e("ModuleThree",{attrs:{threeP:t.$t("individuation.pimtthreeP"),threeSpan:t.$t("individuation.pimtthreeSpan"),p4:"true"}})],1)])]),t._v(" "),e("van-tab",[e("div",{attrs:{slot:"title"},slot:"title"},[e("goodsTitle",{attrs:{"goods-title":t.$t("other.details")}})],1),t._v(" "),e("div",{staticClass:"tabList2"},[e("ModuleTen3",{attrs:{tenDt1:t.$t("individuation.pimt3tenDt1"),tenDd1:t.$t("individuation.pimt3tenDd1"),tenDt2:t.$t("individuation.pimt3tenDt2"),tenDd2:t.$t("individuation.pimt3tenDd2"),tenDt3:t.$t("individuation.pimt3tenDt3"),tenDd3:t.$t("individuation.pimt3tenDd3"),tenDt4:t.$t("individuation.pimt3tenDt4"),tenDd4:t.$t("individuation.pimt3tenDd4"),tenDt5:t.$t("individuation.pimt3tenDt5"),tenDd5:t.$t("individuation.pimt3tenDd5"),tenDt6:t.$t("individuation.pimt3tenDt6"),tenDd6:t.$t("individuation.pimt3tenDd6"),tenDt7:t.$t("individuation.pimt3tenDt7"),tenDd7:t.$t("individuation.pimt3tenDd7"),tenDt8:t.$t("individuation.pimt3tenDt8"),tenDd8:t.$t("individuation.pimt3tenDd8"),tenDt9:t.$t("individuation.pimt3tenDt9"),tenDd9:t.$t("individuation.pimt3tenDd9")}})],1)])],1)],1),t._v(" "),e("mFooter")],1)},staticRenderFns:[]};var D=e("VU/8")(_,u,!1,function(t){e("EFtW")},"data-v-5490bf82",null);i.default=D.exports}});
//# sourceMappingURL=6.522986ea4f968fd92a3c.js.map