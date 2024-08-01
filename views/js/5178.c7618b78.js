"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[5178],{9027:(t,e,s)=>{s.d(e,{Z:()=>g});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fake-table"},[s("div",{staticClass:"fake-table-header"},[s("span",{domProps:{textContent:t._s(t.$i18n.$t.extension.settings.combats.ignoreEspionageCombats.title)}})]),s("div",{staticClass:"fake-table-body"},[s("checkbox",{attrs:{value:t.ignoreEspionageCombats,label:t.$i18n.$t.extension.settings.combats.ignoreEspionageCombats.label},on:{input:function(e){return t.setIgnoreEspionageCombats(e)}}})],1)])},n=[],o=s(655),r=s(4028),i=s(917);let c=class extends r.w3{get ignoreEspionageCombats(){return i.V.settings.combatTracking.ignoreEspionageFights}setIgnoreEspionageCombats(t){i.V.updateSettings({...i.V.settings,combatTracking:{ignoreEspionageFights:t}})}};c=(0,o.gn)([(0,r.wA)({})],c);const u=c,l=u;var m=s(1001),d=(0,m.Z)(l,a,n,!1,null,"3b222f56",null);const g=d.exports},2546:(t,e,s)=>{s.d(e,{Z:()=>g});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fake-table expedition-ship-resource-units-factor-settings"},[s("div",{staticClass:"fake-table-header"},[s("span",{domProps:{textContent:t._s(t.$i18n.$t.extension.settings.combats.resourceUnitFactorsOfLostShips)}})]),s("div",{staticClass:"fake-table-body"},[s("span",{staticClass:"inputs"},[s("span",[s("span",{staticClass:"two-resources"},[s("o-resource",{attrs:{resource:"metal"}}),s("o-resource",{attrs:{resource:"crystal"}})],1),s("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.factor,expression:"factor",modifiers:{number:!0,lazy:!0}}],attrs:{type:"number",min:"0",max:"1",step:"0.01"},domProps:{value:t.factor},on:{change:[function(e){t.factor=t._n(e.target.value)},function(e){return t.updateFactors()}],focus:function(e){t.isFocused=!0},blur:[function(e){return t.onBlur()},function(e){return t.$forceUpdate()}]}})]),s("span",[s("o-resource",{attrs:{resource:"deuterium"}}),s("input",{directives:[{name:"model",rawName:"v-model.number.lazy",value:t.deuteriumFactor,expression:"deuteriumFactor",modifiers:{number:!0,lazy:!0}}],attrs:{type:"number",min:"0",max:"1",step:"0.01"},domProps:{value:t.deuteriumFactor},on:{change:[function(e){t.deuteriumFactor=t._n(e.target.value)},function(e){return t.updateFactors()}],focus:function(e){t.isFocused=!0},blur:[function(e){return t.onBlur()},function(e){return t.$forceUpdate()}]}})],1)])])])},n=[],o=s(655),r=s(4028),i=s(917);let c=class extends r.w3{factor=1;deuteriumFactor=1;isFocused=!1;get factors(){return i.V.settings.lostShipsResourceUnits}onFactorsChanged(){const{factor:t,deuteriumFactor:e}=this.factors;this.isFocused||(this.factor=t,this.deuteriumFactor=e)}updateFactors(){i.V.updateSettings({...i.V.settings,lostShipsResourceUnits:{factor:this.factor,deuteriumFactor:this.deuteriumFactor}})}onBlur(){this.isFocused=!1,this.onFactorsChanged()}};(0,o.gn)([(0,r.RL)("factors",{immediate:!0})],c.prototype,"onFactorsChanged",null),c=(0,o.gn)([(0,r.wA)({})],c);const u=c,l=u;var m=s(1001),d=(0,m.Z)(l,a,n,!1,null,"7b3b1bc9",null);const g=d.exports},5178:(t,e,s)=>{s.r(e),s.d(e,{default:()=>p});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"combat-settings"},[s("lost-ship-resource-units-factor-settings"),s("combat-tracking-ignore-espionage-combats-settings")],1)},n=[],o=s(655),r=s(4028),i=s(2546),c=s(9027);let u=class extends r.w3{};u=(0,o.gn)([(0,r.wA)({components:{LostShipResourceUnitsFactorSettings:i.Z,CombatTrackingIgnoreEspionageCombatsSettings:c.Z}})],u);const l=u,m=l;var d=s(1001),g=(0,d.Z)(m,a,n,!1,null,"1d23be6b",null);const p=g.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBU0MsR0FBUW5CLEVBQUlxQyxnQkFBZ0JyQyxFQUFJK0IsR0FBR1osRUFBT2EsT0FBT0wsUUFBUSxTQUFTUixHQUFRLE9BQU9uQixFQUFJaUMsa0JBQWtCLE1BQVEsU0FBU2QsR0FBUW5CLEVBQUlrQyxXQUFZLEdBQU0sS0FBTyxDQUFDLFNBQVNmLEdBQVEsT0FBT25CLEVBQUltQyxVQUFVLFNBQVNoQixHQUFRLE9BQU9uQixFQUFJb0MscUJBQXFCLFVBQ3ZuRGYsRUFBa0IsRyw0QkMrQ3RCLHlCQUNBLFNBQ0Esa0JBQ0EsYUFFQSxjQUNBLDJDQUlBLG1CQUNBLCtDQUVBLGlCQUNBLGNBQ0Esd0JBSUEsZ0JBQ0EsdUJBQ0EsYUFDQSx3QkFDQSxtQkFDQSx3Q0FLQSxTQUNBLGtCQUNBLDJCQXJCQSxVQURBLG1DLHFDQVRBLGFBREEsYUFDQSxHLFVDaEQ4ZCxJLGNDUTFkQyxHQUFZLE9BQ2QsRUFDQXZCLEVBQ0FzQixHQUNBLEVBQ0EsS0FDQSxXQUNBLE1BSUYsUUFBZUMsRUFBaUIsUyw2Q0NuQmhDLElBQUl2QixFQUFTLFdBQWEsSUFBSUMsRUFBSUMsS0FBU0MsRUFBR0YsRUFBSUcsZUFBbUJDLEVBQUdKLEVBQUlLLE1BQU1ELElBQUlGLEVBQUcsT0FBT0UsRUFBRyxNQUFNLENBQUNFLFlBQVksbUJBQW1CLENBQUNGLEVBQUcsNENBQTRDQSxFQUFHLHNEQUFzRCxJQUM5T2lCLEVBQWtCLEcsdUNDaUJ0Qix3Q0FOQSxTQUNBLFlBQ0Esd0NBQ0EscURBR0EsRyxVQ2xCa2MsSSxjQ1E5YkMsR0FBWSxPQUNkLEVBQ0F2QixFQUNBc0IsR0FDQSxFQUNBLEtBQ0EsV0FDQSxNQUlGLFFBQWVDLEVBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL2NvbXBvbmVudHMvc2V0dGluZ3MvQ29tYmF0VHJhY2tpbmdJZ25vcmVFc3Bpb25hZ2VDb21iYXRzU2V0dGluZ3MudnVlP2ZhZDgiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9zdGF0cy9jb21wb25lbnRzL3NldHRpbmdzL0NvbWJhdFRyYWNraW5nSWdub3JlRXNwaW9uYWdlQ29tYmF0c1NldHRpbmdzLnZ1ZT82NTY0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy9jb21wb25lbnRzL3NldHRpbmdzL0NvbWJhdFRyYWNraW5nSWdub3JlRXNwaW9uYWdlQ29tYmF0c1NldHRpbmdzLnZ1ZT8zOGM1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy9jb21wb25lbnRzL3NldHRpbmdzL0NvbWJhdFRyYWNraW5nSWdub3JlRXNwaW9uYWdlQ29tYmF0c1NldHRpbmdzLnZ1ZT8yZWJjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy9jb21wb25lbnRzL3NldHRpbmdzL0xvc3RTaGlwUmVzb3VyY2VVbml0c0ZhY3RvclNldHRpbmdzLnZ1ZT85ZDZmIiwid2VicGFjazovLy9zcmMvdmlld3Mvc3RhdHMvY29tcG9uZW50cy9zZXR0aW5ncy9Mb3N0U2hpcFJlc291cmNlVW5pdHNGYWN0b3JTZXR0aW5ncy52dWU/ZGEwNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvY29tcG9uZW50cy9zZXR0aW5ncy9Mb3N0U2hpcFJlc291cmNlVW5pdHNGYWN0b3JTZXR0aW5ncy52dWU/ZjY2MiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvY29tcG9uZW50cy9zZXR0aW5ncy9Mb3N0U2hpcFJlc291cmNlVW5pdHNGYWN0b3JTZXR0aW5ncy52dWU/ODg4YyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3Mvc2V0dGluZ3MvQ29tYmF0cy52dWU/ZDZhOCIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL3NldHRpbmdzL0NvbWJhdHMudnVlPzZjMzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL3NldHRpbmdzL0NvbWJhdHMudnVlP2NiMjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL3NldHRpbmdzL0NvbWJhdHMudnVlP2UwYmYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZmFrZS10YWJsZVwifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZmFrZS10YWJsZS1oZWFkZXJcIn0sW19jKCdzcGFuJyx7ZG9tUHJvcHM6e1widGV4dENvbnRlbnRcIjpfdm0uX3MoX3ZtLiRpMThuLiR0LmV4dGVuc2lvbi5zZXR0aW5ncy5jb21iYXRzLmlnbm9yZUVzcGlvbmFnZUNvbWJhdHMudGl0bGUpfX0pXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZmFrZS10YWJsZS1ib2R5XCJ9LFtfYygnY2hlY2tib3gnLHthdHRyczp7XCJ2YWx1ZVwiOl92bS5pZ25vcmVFc3Bpb25hZ2VDb21iYXRzLFwibGFiZWxcIjpfdm0uJGkxOG4uJHQuZXh0ZW5zaW9uLnNldHRpbmdzLmNvbWJhdHMuaWdub3JlRXNwaW9uYWdlQ29tYmF0cy5sYWJlbH0sb246e1wiaW5wdXRcIjpmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uc2V0SWdub3JlRXNwaW9uYWdlQ29tYmF0cygkZXZlbnQpfX19KV0sMSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZha2UtdGFibGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFrZS10YWJsZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gdi10ZXh0PVwiJGkxOG4uJHQuZXh0ZW5zaW9uLnNldHRpbmdzLmNvbWJhdHMuaWdub3JlRXNwaW9uYWdlQ29tYmF0cy50aXRsZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZha2UtdGFibGUtYm9keVwiPlxyXG4gICAgICAgICAgICA8Y2hlY2tib3hcclxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cImlnbm9yZUVzcGlvbmFnZUNvbWJhdHNcIlxyXG4gICAgICAgICAgICAgICAgQGlucHV0PVwic2V0SWdub3JlRXNwaW9uYWdlQ29tYmF0cygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIDpsYWJlbD1cIiRpMThuLiR0LmV4dGVuc2lvbi5zZXR0aW5ncy5jb21iYXRzLmlnbm9yZUVzcGlvbmFnZUNvbWJhdHMubGFiZWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG4gICAgaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wLCBWdWUgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcclxuICAgIGltcG9ydCB7IFNldHRpbmdzRGF0YU1vZHVsZSB9IGZyb20gJy4uLy4uL2RhdGEvU2V0dGluZ3NEYXRhTW9kdWxlJztcclxuXHJcbiAgICBAQ29tcG9uZW50KHt9KVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmF0VHJhY2tpbmdJZ25vcmVFc3Bpb25hZ2VDb21iYXRzU2V0dGluZ3MgZXh0ZW5kcyBWdWUge1xyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBpZ25vcmVFc3Bpb25hZ2VDb21iYXRzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2V0dGluZ3NEYXRhTW9kdWxlLnNldHRpbmdzLmNvbWJhdFRyYWNraW5nLmlnbm9yZUVzcGlvbmFnZUZpZ2h0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2V0SWdub3JlRXNwaW9uYWdlQ29tYmF0cyhpZ25vcmVFc3Bpb25hZ2VGaWdodHM6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NEYXRhTW9kdWxlLnVwZGF0ZVNldHRpbmdzKHtcclxuICAgICAgICAgICAgICAgIC4uLlNldHRpbmdzRGF0YU1vZHVsZS5zZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgIGNvbWJhdFRyYWNraW5nOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlRXNwaW9uYWdlRmlnaHRzLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gICAgLmZha2UtdGFibGUge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tY29sb3IpLCAwLjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICAmLWhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKHZhcigtLWNvbG9yKSwgMC41KSwgcmdiYSh2YXIoLS1jb2xvciksIDAuNykpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtaGVhZGVyLFxyXG4gICAgICAgICYtYm9keSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tYmF0VHJhY2tpbmdJZ25vcmVFc3Bpb25hZ2VDb21iYXRzU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tYmF0VHJhY2tpbmdJZ25vcmVFc3Bpb25hZ2VDb21iYXRzU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db21iYXRUcmFja2luZ0lnbm9yZUVzcGlvbmFnZUNvbWJhdHNTZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2IyMjJmNTYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29tYmF0VHJhY2tpbmdJZ25vcmVFc3Bpb25hZ2VDb21iYXRzU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db21iYXRUcmFja2luZ0lnbm9yZUVzcGlvbmFnZUNvbWJhdHNTZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vQ29tYmF0VHJhY2tpbmdJZ25vcmVFc3Bpb25hZ2VDb21iYXRzU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2IyMjJmNTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzYjIyMmY1NlwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImZha2UtdGFibGUgZXhwZWRpdGlvbi1zaGlwLXJlc291cmNlLXVuaXRzLWZhY3Rvci1zZXR0aW5nc1wifSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZmFrZS10YWJsZS1oZWFkZXJcIn0sW19jKCdzcGFuJyx7ZG9tUHJvcHM6e1widGV4dENvbnRlbnRcIjpfdm0uX3MoX3ZtLiRpMThuLiR0LmV4dGVuc2lvbi5zZXR0aW5ncy5jb21iYXRzLnJlc291cmNlVW5pdEZhY3RvcnNPZkxvc3RTaGlwcyl9fSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJmYWtlLXRhYmxlLWJvZHlcIn0sW19jKCdzcGFuJyx7c3RhdGljQ2xhc3M6XCJpbnB1dHNcIn0sW19jKCdzcGFuJyxbX2MoJ3NwYW4nLHtzdGF0aWNDbGFzczpcInR3by1yZXNvdXJjZXNcIn0sW19jKCdvLXJlc291cmNlJyx7YXR0cnM6e1wicmVzb3VyY2VcIjpcIm1ldGFsXCJ9fSksX2MoJ28tcmVzb3VyY2UnLHthdHRyczp7XCJyZXNvdXJjZVwiOlwiY3J5c3RhbFwifX0pXSwxKSxfYygnaW5wdXQnLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWwubnVtYmVyLmxhenlcIix2YWx1ZTooX3ZtLmZhY3RvciksZXhwcmVzc2lvbjpcImZhY3RvclwiLG1vZGlmaWVyczp7XCJudW1iZXJcIjp0cnVlLFwibGF6eVwiOnRydWV9fV0sYXR0cnM6e1widHlwZVwiOlwibnVtYmVyXCIsXCJtaW5cIjpcIjBcIixcIm1heFwiOlwiMVwiLFwic3RlcFwiOlwiMC4wMVwifSxkb21Qcm9wczp7XCJ2YWx1ZVwiOihfdm0uZmFjdG9yKX0sb246e1wiY2hhbmdlXCI6W2Z1bmN0aW9uKCRldmVudCl7X3ZtLmZhY3Rvcj1fdm0uX24oJGV2ZW50LnRhcmdldC52YWx1ZSl9LGZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS51cGRhdGVGYWN0b3JzKCl9XSxcImZvY3VzXCI6ZnVuY3Rpb24oJGV2ZW50KXtfdm0uaXNGb2N1c2VkID0gdHJ1ZX0sXCJibHVyXCI6W2Z1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5vbkJsdXIoKX0sZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLiRmb3JjZVVwZGF0ZSgpfV19fSldKSxfYygnc3BhbicsW19jKCdvLXJlc291cmNlJyx7YXR0cnM6e1wicmVzb3VyY2VcIjpcImRldXRlcml1bVwifX0pLF9jKCdpbnB1dCcse2RpcmVjdGl2ZXM6W3tuYW1lOlwibW9kZWxcIixyYXdOYW1lOlwidi1tb2RlbC5udW1iZXIubGF6eVwiLHZhbHVlOihfdm0uZGV1dGVyaXVtRmFjdG9yKSxleHByZXNzaW9uOlwiZGV1dGVyaXVtRmFjdG9yXCIsbW9kaWZpZXJzOntcIm51bWJlclwiOnRydWUsXCJsYXp5XCI6dHJ1ZX19XSxhdHRyczp7XCJ0eXBlXCI6XCJudW1iZXJcIixcIm1pblwiOlwiMFwiLFwibWF4XCI6XCIxXCIsXCJzdGVwXCI6XCIwLjAxXCJ9LGRvbVByb3BzOntcInZhbHVlXCI6KF92bS5kZXV0ZXJpdW1GYWN0b3IpfSxvbjp7XCJjaGFuZ2VcIjpbZnVuY3Rpb24oJGV2ZW50KXtfdm0uZGV1dGVyaXVtRmFjdG9yPV92bS5fbigkZXZlbnQudGFyZ2V0LnZhbHVlKX0sZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLnVwZGF0ZUZhY3RvcnMoKX1dLFwiZm9jdXNcIjpmdW5jdGlvbigkZXZlbnQpe192bS5pc0ZvY3VzZWQgPSB0cnVlfSxcImJsdXJcIjpbZnVuY3Rpb24oJGV2ZW50KXtyZXR1cm4gX3ZtLm9uQmx1cigpfSxmdW5jdGlvbigkZXZlbnQpe3JldHVybiBfdm0uJGZvcmNlVXBkYXRlKCl9XX19KV0sMSldKV0pXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJmYWtlLXRhYmxlIGV4cGVkaXRpb24tc2hpcC1yZXNvdXJjZS11bml0cy1mYWN0b3Itc2V0dGluZ3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFrZS10YWJsZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gdi10ZXh0PVwiJGkxOG4uJHQuZXh0ZW5zaW9uLnNldHRpbmdzLmNvbWJhdHMucmVzb3VyY2VVbml0RmFjdG9yc09mTG9zdFNoaXBzXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmFrZS10YWJsZS1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXRzXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR3by1yZXNvdXJjZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG8tcmVzb3VyY2UgcmVzb3VyY2U9XCJtZXRhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvLXJlc291cmNlIHJlc291cmNlPVwiY3J5c3RhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwubnVtYmVyLmxhenk9XCJmYWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlRmFjdG9ycygpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiaXNGb2N1c2VkID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwib25CbHVyKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvLXJlc291cmNlIHJlc291cmNlPVwiZGV1dGVyaXVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWwubnVtYmVyLmxhenk9XCJkZXV0ZXJpdW1GYWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlRmFjdG9ycygpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGZvY3VzPVwiaXNGb2N1c2VkID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBibHVyPVwib25CbHVyKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW49XCIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9XCIwLjAxXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBDb21wb25lbnQsIFByb3AsIFZ1ZSwgV2F0Y2ggfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcclxuICAgIGltcG9ydCB7IFNldHRpbmdzRGF0YU1vZHVsZSB9IGZyb20gJy4uLy4uL2RhdGEvU2V0dGluZ3NEYXRhTW9kdWxlJztcclxuXHJcbiAgICBAQ29tcG9uZW50KHt9KVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZWRpdGlvblNoaXBSZXNvdXJjZVVuaXRzRmFjdG9yU2V0dGluZ3MgZXh0ZW5kcyBWdWUge1xyXG4gICAgICAgIHByaXZhdGUgZmFjdG9yID0gMTtcclxuICAgICAgICBwcml2YXRlIGRldXRlcml1bUZhY3RvciA9IDE7XHJcbiAgICAgICAgcHJpdmF0ZSBpc0ZvY3VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgZmFjdG9ycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFNldHRpbmdzRGF0YU1vZHVsZS5zZXR0aW5ncy5sb3N0U2hpcHNSZXNvdXJjZVVuaXRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQFdhdGNoKCdmYWN0b3JzJywgeyBpbW1lZGlhdGU6IHRydWUgfSlcclxuICAgICAgICBwcml2YXRlIG9uRmFjdG9yc0NoYW5nZWQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZmFjdG9yLCBkZXV0ZXJpdW1GYWN0b3IgfSA9IHRoaXMuZmFjdG9ycztcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFjdG9yID0gZmFjdG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXV0ZXJpdW1GYWN0b3IgPSBkZXV0ZXJpdW1GYWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgdXBkYXRlRmFjdG9ycygpIHtcclxuICAgICAgICAgICAgU2V0dGluZ3NEYXRhTW9kdWxlLnVwZGF0ZVNldHRpbmdzKHtcclxuICAgICAgICAgICAgICAgIC4uLlNldHRpbmdzRGF0YU1vZHVsZS5zZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgIGxvc3RTaGlwc1Jlc291cmNlVW5pdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBmYWN0b3I6IHRoaXMuZmFjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIGRldXRlcml1bUZhY3RvcjogdGhpcy5kZXV0ZXJpdW1GYWN0b3IsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgb25CbHVyKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm9uRmFjdG9yc0NoYW5nZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgICAuZXhwZWRpdGlvbi1zaGlwLXJlc291cmNlLXVuaXRzLWZhY3Rvci1zZXR0aW5ncyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbHVtbi1nYXA6IDE2cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuXHJcbiAgICAgICAgPiAqIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5wdXRzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgY29sdW1uLWdhcDogOHB4O1xyXG5cclxuICAgICAgICAgICAgPiAqIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnR3by1yZXNvdXJjZXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICA+IC5vLXJlc291cmNlOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDAgMTAwJSwgMTAwJSAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgPiAuby1yZXNvdXJjZTpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAxMDAlLCAwIDEwMCUsIDEwMCUgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mYWtlLXRhYmxlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWNvbG9yKSwgMC41KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgICAgICYtaGVhZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2tcclxuICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgICAgICAgICAwZGVnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJnYmEodmFyKC0tY29sb3IpLCAwLjUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJnYmEodmFyKC0tY29sb3IpLCAwLjcpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYtaGVhZGVyLFxyXG4gICAgICAgICYtYm9keSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9zdFNoaXBSZXNvdXJjZVVuaXRzRmFjdG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9zdFNoaXBSZXNvdXJjZVVuaXRzRmFjdG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb3N0U2hpcFJlc291cmNlVW5pdHNGYWN0b3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2IzYjFiYzkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9zdFNoaXBSZXNvdXJjZVVuaXRzRmFjdG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb3N0U2hpcFJlc291cmNlVW5pdHNGYWN0b3JTZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTG9zdFNoaXBSZXNvdXJjZVVuaXRzRmFjdG9yU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2IzYjFiYzkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YjNiMWJjOVwiLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbWJhdC1zZXR0aW5nc1wifSxbX2MoJ2xvc3Qtc2hpcC1yZXNvdXJjZS11bml0cy1mYWN0b3Itc2V0dGluZ3MnKSxfYygnY29tYmF0LXRyYWNraW5nLWlnbm9yZS1lc3Bpb25hZ2UtY29tYmF0cy1zZXR0aW5ncycpXSwxKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbWJhdC1zZXR0aW5nc1wiPlxyXG4gICAgICAgIDxsb3N0LXNoaXAtcmVzb3VyY2UtdW5pdHMtZmFjdG9yLXNldHRpbmdzIC8+XHJcbiAgICAgICAgPGNvbWJhdC10cmFja2luZy1pZ25vcmUtZXNwaW9uYWdlLWNvbWJhdHMtc2V0dGluZ3MgLz5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuICAgIGltcG9ydCB7IENvbXBvbmVudCwgUHJvcCwgVnVlIH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XHJcbiAgICBpbXBvcnQgTG9zdFNoaXBSZXNvdXJjZVVuaXRzRmFjdG9yU2V0dGluZ3MgZnJvbSAnQHN0YXRzL2NvbXBvbmVudHMvc2V0dGluZ3MvTG9zdFNoaXBSZXNvdXJjZVVuaXRzRmFjdG9yU2V0dGluZ3MudnVlJztcclxuICAgIGltcG9ydCBDb21iYXRUcmFja2luZ0lnbm9yZUVzcGlvbmFnZUNvbWJhdHNTZXR0aW5ncyBmcm9tICdAc3RhdHMvY29tcG9uZW50cy9zZXR0aW5ncy9Db21iYXRUcmFja2luZ0lnbm9yZUVzcGlvbmFnZUNvbWJhdHNTZXR0aW5ncy52dWUnO1xyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgTG9zdFNoaXBSZXNvdXJjZVVuaXRzRmFjdG9yU2V0dGluZ3MsXHJcbiAgICAgICAgICAgIENvbWJhdFRyYWNraW5nSWdub3JlRXNwaW9uYWdlQ29tYmF0c1NldHRpbmdzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tYmF0cyBleHRlbmRzIFZ1ZSB7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgICAuY29tYmF0LXNldHRpbmdzIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHJvdy1nYXA6IDE2cHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbWJhdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29tYmF0cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbWJhdHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFkMjNiZTZiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbWJhdHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db21iYXRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9Db21iYXRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFkMjNiZTZiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWQyM2JlNmJcIixcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwibmFtZXMiOlsicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwic3RhdGljQ2xhc3MiLCJkb21Qcm9wcyIsIl9zIiwiJGkxOG4iLCIkdCIsImV4dGVuc2lvbiIsInNldHRpbmdzIiwiY29tYmF0cyIsImlnbm9yZUVzcGlvbmFnZUNvbWJhdHMiLCJ0aXRsZSIsImF0dHJzIiwibGFiZWwiLCJvbiIsIiRldmVudCIsInNldElnbm9yZUVzcGlvbmFnZUNvbWJhdHMiLCJzdGF0aWNSZW5kZXJGbnMiLCJjb21wb25lbnQiLCJyZXNvdXJjZVVuaXRGYWN0b3JzT2ZMb3N0U2hpcHMiLCJkaXJlY3RpdmVzIiwibmFtZSIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJtb2RpZmllcnMiLCJmYWN0b3IiLCJfbiIsInRhcmdldCIsInVwZGF0ZUZhY3RvcnMiLCJpc0ZvY3VzZWQiLCJvbkJsdXIiLCIkZm9yY2VVcGRhdGUiLCJkZXV0ZXJpdW1GYWN0b3IiXSwic291cmNlUm9vdCI6IiJ9