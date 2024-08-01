"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[7983],{6205:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits}})},l=[],o=n(655),i=n(147),r=n(3418),u=n(4846),a=n(9751),c=n(8395),p=n(1786),f=n(4028),g=n(3894),m=n(7848),h=n(7377);let b=class extends f.w3{bonusTypes=[{key:"fuelReturn",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.fuelReturn.bonus}];technologies=u.Du;get techs(){return this.technologies.map((e=>e.type))}get limits(){const e=(0,m.K)({type:h.f.FuelReturn});return{fuelReturn:t=>null!=e?Math.min(t,e):t}}get planets(){return(0,a.r)(c.p.empire.planetOrder.map((e=>c.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.technologies.map((t=>{const n=this.getPlanetBonus(t,e);return{planet:e,technologyType:t.type,bonuses:(0,a.a)(["fuelReturn"],(e=>({base:n.base,buildings:n.buildings,level:n.level,total:n.total})))}}))))}get experience(){return c.p.lifeformExperience}getPlanetBonus(e,t){const n={base:0,level:0,buildings:0,buildingsBoost:0,total:0};if(t.activeLifeform==r.e5.none||!t.activeLifeformTechnologies.includes(e.type))return n;const s=Math.min((0,p.io)(t),(0,m.K)({type:h.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);n.buildingsBoost+=s;const l=e.getFuelReturn(t.lifeformTechnologies[e.type]),o=l*(0,i.g1)(this.experience[t.activeLifeform]),u=l*s,a=l+o+u;return n.base+=l,n.level+=o,n.buildings+=u,n.total+=a,n}};b=(0,o.gn)([(0,f.wA)({components:{LifeformBonusesBreakdown:g.Z}})],b);const d=b,y=d;var v=n(1001),k=(0,v.Z)(y,s,l,!1,null,null,null);const B=k.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvNzk4My5iOTA2MDMxZS5qcyIsIm1hcHBpbmdzIjoiOEpBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsNkJBQTZCLENBQUNFLE1BQU0sQ0FBQyxNQUFRTixFQUFJTyxXQUFXLGFBQWVQLEVBQUlRLE1BQU0sUUFBVVIsRUFBSVMsUUFBUSxPQUFTVCxFQUFJVSxXQUN2TkMsRUFBa0IsRyw0R0MrQnRCLHlCQUVBLFlBQ0EsQ0FDQSxpQkFDQSxrRkFJQSxrQkFFQSxZQUNBLDBDQUdBLGFBQ0EsdUNBRUEsT0FDQSx1Q0FJQSxjQUNBLGNBQ0EsNEJBQ0EsMkJBQ0Esd0JBQ0EsVUFDQSxxQkFDQSxTQUNBLGlDQUVBLE9BQ0EsU0FDQSxzQkFDQSxnQkFDQSxnQkFDQSxLQUNBLFlBQ0Esc0JBQ0EsY0FDQSx3QkFPQSxpQkFDQSw4QkFHQSxvQkFDQSxTQUNBLE9BQ0EsUUFDQSxZQUNBLGlCQUNBLFNBR0EsaUNBQ0EsOENBRUEsU0FJQSxrQkFDQSxZQUNBLHdFQUVBLG9CQUVBLHdEQUNBLGdEQUNBLE1BQ0EsUUFPQSxPQUxBLFVBQ0EsV0FDQSxlQUNBLFdBRUEsSUFyRkEsYUFMQSxTQUNBLFlBQ0EsaUNBR0EsRyxVQ2hDMmQsSSxjQ092ZEMsR0FBWSxPQUNkLEVBQ0FiLEVBQ0FZLEdBQ0EsRUFDQSxLQUNBLEtBQ0EsTUFJRixRQUFlQyxFQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL0ZsZWV0LUZ1ZWwtUmV0dXJuLnZ1ZT8xZDdiIiwid2VicGFjazovLy9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9GbGVldC1GdWVsLVJldHVybi52dWU/MWQwNyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9GbGVldC1GdWVsLVJldHVybi52dWU/YjMwMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9GbGVldC1GdWVsLVJldHVybi52dWU/NDE4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbGlmZWZvcm0tYm9udXNlcy1icmVha2Rvd24nLHthdHRyczp7XCJ0eXBlc1wiOl92bS5ib251c1R5cGVzLFwidGVjaG5vbG9naWVzXCI6X3ZtLnRlY2hzLFwicGxhbmV0c1wiOl92bS5wbGFuZXRzLFwibGltaXRzXCI6X3ZtLmxpbWl0c319KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGxpZmVmb3JtLWJvbnVzZXMtYnJlYWtkb3duIDp0eXBlcz1cImJvbnVzVHlwZXNcIiA6dGVjaG5vbG9naWVzPVwidGVjaHNcIiA6cGxhbmV0cz1cInBsYW5ldHNcIiA6bGltaXRzPVwibGltaXRzXCIgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBQbGFuZXREYXRhIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL2VtcGlyZS9QbGFuZXREYXRhJztcclxuICAgIGltcG9ydCB7IGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL2V4cGVyaWVuY2UnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UZWNobm9sb2d5VHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1UZWNobm9sb2d5VHlwZSc7XHJcbiAgICBpbXBvcnQgeyBMaWZlZm9ybVR5cGUsIFZhbGlkTGlmZWZvcm1UeXBlIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVR5cGUnO1xyXG4gICAgaW1wb3J0IHsgRmxlZXRGdWVsUmV0dXJuTGlmZWZvcm1UZWNobm9sb2d5IH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy90ZWNobm9sb2dpZXMvaW50ZXJmYWNlcyc7XHJcbiAgICBpbXBvcnQgeyBGbGVldEZ1ZWxSZXR1cm5MaWZlZm9ybVRlY2hub2xvZ2llcyB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvdGVjaG5vbG9naWVzL0xpZmVmb3JtVGVjaG5vbG9naWVzJztcclxuICAgIGltcG9ydCB7IGNyZWF0ZU1hcHBlZFJlY29yZCwgY3JlYXRlUmVjb3JkIH0gZnJvbSAnQC9zaGFyZWQvdXRpbHMvY3JlYXRlUmVjb3JkJztcclxuICAgIGltcG9ydCB7IEVtcGlyZURhdGFNb2R1bGUgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2RhdGEvRW1waXJlRGF0YU1vZHVsZSc7XHJcbiAgICBpbXBvcnQgeyBnZXRQbGFuZXRMaWZlZm9ybVRlY2hub2xvZ3lCb29zdCB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvbW9kZWxzL2xpZmVmb3Jtcyc7XHJcbiAgICBpbXBvcnQgeyBDb21wb25lbnQsIFZ1ZSB9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG4gICAgaW1wb3J0IExpZmVmb3JtQm9udXNlc0JyZWFrZG93biwgeyBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd25UeXBlLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd24gfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2NvbXBvbmVudHMvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNlc0JyZWFrZG93bi52dWUnO1xyXG5pbXBvcnQgeyBnZXRMaWZlZm9ybUJvbnVzTGltaXQgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNMaW1pdHMnO1xyXG5pbXBvcnQgeyBMaWZlZm9ybUJvbnVzVHlwZUlkIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzVHlwZSc7XHJcblxyXG4gICAgdHlwZSBCb251c0JyZWFrZG93biA9IHtcclxuICAgICAgICBiYXNlOiBudW1iZXI7XHJcbiAgICAgICAgbGV2ZWw6IG51bWJlcjtcclxuICAgICAgICBidWlsZGluZ3M6IG51bWJlcjtcclxuICAgICAgICBidWlsZGluZ3NCb29zdDogbnVtYmVyO1xyXG4gICAgICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGbGVldEZ1ZWxSZXR1cm4gZXh0ZW5kcyBWdWUge1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGJvbnVzVHlwZXM6IExpZmVmb3JtQm9udXNlc0JyZWFrZG93blR5cGU8J2Z1ZWxSZXR1cm4nPltdID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdmdWVsUmV0dXJuJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLiRpMThuLiR0LmV4dGVuc2lvbi5lbXBpcmUubGlmZWZvcm1zLnJlc2VhcmNoQm9udXNlcy5mdWVsUmV0dXJuLmJvbnVzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdGVjaG5vbG9naWVzID0gRmxlZXRGdWVsUmV0dXJuTGlmZWZvcm1UZWNobm9sb2dpZXM7XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IHRlY2hzKCk6IExpZmVmb3JtVGVjaG5vbG9neVR5cGVbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlY2hub2xvZ2llcy5tYXAodCA9PiB0LnR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgbGltaXRzKCk6IFJlY29yZDwnZnVlbFJldHVybicsICh2YWx1ZTogbnVtYmVyKSA9PiBudW1iZXI+IHtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBnZXRMaWZlZm9ybUJvbnVzTGltaXQoeyB0eXBlOiBMaWZlZm9ybUJvbnVzVHlwZUlkLkZ1ZWxSZXR1cm4gfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgZnVlbFJldHVybjogdmFsdWUgPT4gbGltaXQgIT0gbnVsbCA/IE1hdGgubWluKHZhbHVlLCBsaW1pdCkgOiB2YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IHBsYW5ldHMoKTogUmVjb3JkPG51bWJlciwgTGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duPCdmdWVsUmV0dXJuJz5bXT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTWFwcGVkUmVjb3JkKFxyXG4gICAgICAgICAgICAgICAgRW1waXJlRGF0YU1vZHVsZS5lbXBpcmUucGxhbmV0T3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGlkID0+IEVtcGlyZURhdGFNb2R1bGUuZW1waXJlLnBsYW5ldHNbaWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocGxhbmV0ID0+ICFwbGFuZXQuaXNNb29uKSBhcyBQbGFuZXREYXRhW10sXHJcbiAgICAgICAgICAgICAgICBwbGFuZXQgPT4gcGxhbmV0LmlkLFxyXG4gICAgICAgICAgICAgICAgcGxhbmV0ID0+IHRoaXMudGVjaG5vbG9naWVzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcDxMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd248J2Z1ZWxSZXR1cm4nPj4odGVjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5ldEJvbnVzZXMgPSB0aGlzLmdldFBsYW5ldEJvbnVzKHRlY2gsIHBsYW5ldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaG5vbG9neVR5cGU6IHRlY2gudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbnVzZXM6IGNyZWF0ZVJlY29yZDwnZnVlbFJldHVybicsIExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93blsnYm9udXNlcyddW3N0cmluZ10+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZnVlbFJldHVybiddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlOiBwbGFuZXRCb251c2VzLmJhc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogcGxhbmV0Qm9udXNlcy5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBwbGFuZXRCb251c2VzLmxldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogcGxhbmV0Qm9udXNlcy50b3RhbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGV4cGVyaWVuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbXBpcmVEYXRhTW9kdWxlLmxpZmVmb3JtRXhwZXJpZW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0UGxhbmV0Qm9udXModGVjaDogRmxlZXRGdWVsUmV0dXJuTGlmZWZvcm1UZWNobm9sb2d5LCBwbGFuZXQ6IFBsYW5ldERhdGEpOiBCb251c0JyZWFrZG93biB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogQm9udXNCcmVha2Rvd24gPSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiAwLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IDAsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3NCb29zdDogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHBsYW5ldC5hY3RpdmVMaWZlZm9ybSA9PSBMaWZlZm9ybVR5cGUubm9uZVxyXG4gICAgICAgICAgICAgICAgfHwgIXBsYW5ldC5hY3RpdmVMaWZlZm9ybVRlY2hub2xvZ2llcy5pbmNsdWRlcyh0ZWNoLnR5cGUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkaW5nc0Jvb3N0ID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICBnZXRQbGFuZXRMaWZlZm9ybVRlY2hub2xvZ3lCb29zdChwbGFuZXQpLFxyXG4gICAgICAgICAgICAgICAgZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5MaWZlZm9ybVJlc2VhcmNoQm9udXNCb29zdCB9KSA/PyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmVzdWx0LmJ1aWxkaW5nc0Jvb3N0ICs9IGJ1aWxkaW5nc0Jvb3N0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZUJvbnVzID0gdGVjaC5nZXRGdWVsUmV0dXJuKHBsYW5ldC5saWZlZm9ybVRlY2hub2xvZ2llc1t0ZWNoLnR5cGVdKTtcclxuICAgICAgICAgICAgY29uc3QgbGlmZWZvcm1MZXZlbEJvbnVzID0gYmFzZUJvbnVzICogZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyh0aGlzLmV4cGVyaWVuY2VbcGxhbmV0LmFjdGl2ZUxpZmVmb3JtIGFzIFZhbGlkTGlmZWZvcm1UeXBlXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtQnVpbGRpbmdCb251cyA9IGJhc2VCb251cyAqIGJ1aWxkaW5nc0Jvb3N0O1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGJhc2VCb251cyArIGxpZmVmb3JtTGV2ZWxCb251cyArIGxpZmVmb3JtQnVpbGRpbmdCb251cztcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdC5iYXNlICs9IGJhc2VCb251cztcclxuICAgICAgICAgICAgcmVzdWx0LmxldmVsICs9IGxpZmVmb3JtTGV2ZWxCb251cztcclxuICAgICAgICAgICAgcmVzdWx0LmJ1aWxkaW5ncyArPSBsaWZlZm9ybUJ1aWxkaW5nQm9udXM7XHJcbiAgICAgICAgICAgIHJlc3VsdC50b3RhbCArPSB0b3RhbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxlZXQtRnVlbC1SZXR1cm4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxlZXQtRnVlbC1SZXR1cm4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GbGVldC1GdWVsLVJldHVybi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTE1ODFkNjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmxlZXQtRnVlbC1SZXR1cm4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GbGVldC1GdWVsLVJldHVybi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJhdHRycyIsImJvbnVzVHlwZXMiLCJ0ZWNocyIsInBsYW5ldHMiLCJsaW1pdHMiLCJzdGF0aWNSZW5kZXJGbnMiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9