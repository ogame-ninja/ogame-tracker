"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[9122],{2017:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits}})},o=[],l=n(655),i=n(147),a=n(3418),r=n(4846),u=n(9751),c=n(8395),p=n(1786),g=n(4028),h=n(3894),f=n(7848),m=n(7377);let b=class extends g.w3{bonusTypes=[{key:"range",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.phalanxRange.header}];technologies=r.Qs;get techs(){return this.technologies.map((e=>e.type))}get limits(){const e=(0,f.K)({type:m.f.PhalanxRangeBonus});return{range:t=>null!=e?Math.min(t,e):t}}get planets(){return(0,u.r)(c.p.empire.planetOrder.map((e=>c.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.technologies.map((t=>{const n=this.getPlanetBonus(t,e);return{planet:e,technologyType:t.type,bonuses:(0,u.a)(["range"],(e=>({base:n.base,buildings:n.buildings,level:n.level,total:n.total})))}}))))}get experience(){return c.p.lifeformExperience}getPlanetBonus(e,t){const n={base:0,level:0,buildings:0,buildingsBoost:0,total:0};if(t.activeLifeform==a.e5.none||!t.activeLifeformTechnologies.includes(e.type))return n;const s=Math.min((0,p.io)(t),(0,f.K)({type:m.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);n.buildingsBoost+=s;const o=e.getPhalanxRangeBonus(t.lifeformTechnologies[e.type]),l=o*(0,i.g1)(this.experience[t.activeLifeform]),r=o*s,u=o+l+r;return n.base+=o,n.level+=l,n.buildings+=r,n.total+=u,n}};b=(0,l.gn)([(0,g.wA)({components:{LifeformBonusesBreakdown:h.Z}})],b);const d=b,y=d;var B=n(1001),v=(0,B.Z)(y,s,o,!1,null,null,null);const k=v.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvOTEyMi43Yzk2ZWZmZC5qcyIsIm1hcHBpbmdzIjoiOEpBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsNkJBQTZCLENBQUNFLE1BQU0sQ0FBQyxNQUFRTixFQUFJTyxXQUFXLGFBQWVQLEVBQUlRLE1BQU0sUUFBVVIsRUFBSVMsUUFBUSxPQUFTVCxFQUFJVSxXQUN2TkMsRUFBa0IsRyw0R0NnQ3RCLHlCQUVBLFlBQ0EsQ0FDQSxZQUNBLHFGQUlBLGtCQUVBLFlBQ0EsMENBR0EsYUFDQSw4Q0FFQSxPQUNBLGtDQUlBLGNBQ0EsY0FDQSw0QkFDQSwyQkFDQSx3QkFDQSxVQUNBLHFCQUNBLFNBQ0EsaUNBRUEsT0FDQSxTQUNBLHNCQUNBLGdCQUNBLFdBQ0EsS0FDQSxZQUNBLHNCQUNBLGNBQ0Esd0JBT0EsaUJBQ0EsOEJBR0Esb0JBQ0EsU0FDQSxPQUNBLFFBQ0EsWUFDQSxpQkFDQSxTQUdBLGlDQUNBLDhDQUVBLFNBSUEsa0JBQ0EsWUFDQSx3RUFFQSxvQkFFQSwrREFDQSxnREFDQSxNQUVBLFFBT0EsT0FMQSxVQUNBLFdBQ0EsZUFDQSxXQUVBLElBdEZBLGFBTEEsU0FDQSxZQUNBLGlDQUdBLEcsVUNqQ3VkLEksY0NPbmRDLEdBQVksT0FDZCxFQUNBYixFQUNBWSxHQUNBLEVBQ0EsS0FDQSxLQUNBLE1BSUYsUUFBZUMsRUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9QaGFsYW54LVJhbmdlLnZ1ZT9hNWVkIiwid2VicGFjazovLy9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9QaGFsYW54LVJhbmdlLnZ1ZT9kNDUzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL1BoYWxhbngtUmFuZ2UudnVlPzhlOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vUGhhbGFueC1SYW5nZS52dWU/M2ZkYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbGlmZWZvcm0tYm9udXNlcy1icmVha2Rvd24nLHthdHRyczp7XCJ0eXBlc1wiOl92bS5ib251c1R5cGVzLFwidGVjaG5vbG9naWVzXCI6X3ZtLnRlY2hzLFwicGxhbmV0c1wiOl92bS5wbGFuZXRzLFwibGltaXRzXCI6X3ZtLmxpbWl0c319KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGxpZmVmb3JtLWJvbnVzZXMtYnJlYWtkb3duIDp0eXBlcz1cImJvbnVzVHlwZXNcIiA6dGVjaG5vbG9naWVzPVwidGVjaHNcIiA6cGxhbmV0cz1cInBsYW5ldHNcIiA6bGltaXRzPVwibGltaXRzXCIgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBQbGFuZXREYXRhIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL2VtcGlyZS9QbGFuZXREYXRhJztcclxuICAgIGltcG9ydCB7IGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL2V4cGVyaWVuY2UnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UZWNobm9sb2d5VHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1UZWNobm9sb2d5VHlwZSc7XHJcbiAgICBpbXBvcnQgeyBMaWZlZm9ybVR5cGUsIFZhbGlkTGlmZWZvcm1UeXBlIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVR5cGUnO1xyXG4gICAgaW1wb3J0IHsgUGhhbGFueFJhbmdlQm9udXNMaWZlZm9ybVRlY2hub2xvZ3kgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL3RlY2hub2xvZ2llcy9pbnRlcmZhY2VzJztcclxuICAgIGltcG9ydCB7IFBoYWxhbnhSYW5nZUJvbnVzTGlmZWZvcm1UZWNobm9sb2dpZXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL3RlY2hub2xvZ2llcy9MaWZlZm9ybVRlY2hub2xvZ2llcyc7XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVNYXBwZWRSZWNvcmQsIGNyZWF0ZVJlY29yZCB9IGZyb20gJ0Avc2hhcmVkL3V0aWxzL2NyZWF0ZVJlY29yZCc7XHJcbiAgICBpbXBvcnQgeyBFbXBpcmVEYXRhTW9kdWxlIH0gZnJvbSAnQC92aWV3cy9zdGF0cy9kYXRhL0VtcGlyZURhdGFNb2R1bGUnO1xyXG4gICAgaW1wb3J0IHsgZ2V0UGxhbmV0TGlmZWZvcm1UZWNobm9sb2d5Qm9vc3QgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL21vZGVscy9saWZlZm9ybXMnO1xyXG4gICAgaW1wb3J0IHsgQ29tcG9uZW50LCBWdWUgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcclxuICAgIGltcG9ydCBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd24sIHsgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duVHlwZSwgTGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duIH0gZnJvbSAnQC92aWV3cy9zdGF0cy9jb21wb25lbnRzL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzZXNCcmVha2Rvd24udnVlJztcclxuaW1wb3J0IHsgZ2V0TGlmZWZvcm1Cb251c0xpbWl0IH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzTGltaXRzJztcclxuaW1wb3J0IHsgTGlmZWZvcm1Cb251c1R5cGVJZCB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1Cb251c1R5cGUnO1xyXG5cclxuXHJcbiAgICB0eXBlIEJvbnVzQnJlYWtkb3duID0ge1xyXG4gICAgICAgIGJhc2U6IG51bWJlcjtcclxuICAgICAgICBsZXZlbDogbnVtYmVyO1xyXG4gICAgICAgIGJ1aWxkaW5nczogbnVtYmVyO1xyXG4gICAgICAgIGJ1aWxkaW5nc0Jvb3N0OiBudW1iZXI7XHJcbiAgICAgICAgdG90YWw6IG51bWJlcjtcclxuICAgIH07XHJcblxyXG4gICAgQENvbXBvbmVudCh7XHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd24sXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoYWxhbnhSYW5nZSBleHRlbmRzIFZ1ZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYm9udXNUeXBlczogTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duVHlwZTwncmFuZ2UnPltdID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdyYW5nZScsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMucGhhbGFueFJhbmdlLmhlYWRlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHRlY2hub2xvZ2llcyA9IFBoYWxhbnhSYW5nZUJvbnVzTGlmZWZvcm1UZWNobm9sb2dpZXM7XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IHRlY2hzKCk6IExpZmVmb3JtVGVjaG5vbG9neVR5cGVbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlY2hub2xvZ2llcy5tYXAodCA9PiB0LnR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgbGltaXRzKCk6IFJlY29yZDwncmFuZ2UnLCAodmFsdWU6IG51bWJlcikgPT4gbnVtYmVyPiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5QaGFsYW54UmFuZ2VCb251cyB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByYW5nZTogdmFsdWUgPT4gbGltaXQgIT0gbnVsbCA/IE1hdGgubWluKHZhbHVlLCBsaW1pdCkgOiB2YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IHBsYW5ldHMoKTogUmVjb3JkPG51bWJlciwgTGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duPCdyYW5nZSc+W10+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hcHBlZFJlY29yZChcclxuICAgICAgICAgICAgICAgIEVtcGlyZURhdGFNb2R1bGUuZW1waXJlLnBsYW5ldE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChpZCA9PiBFbXBpcmVEYXRhTW9kdWxlLmVtcGlyZS5wbGFuZXRzW2lkXSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBsYW5ldCA9PiAhcGxhbmV0LmlzTW9vbikgYXMgUGxhbmV0RGF0YVtdLFxyXG4gICAgICAgICAgICAgICAgcGxhbmV0ID0+IHBsYW5ldC5pZCxcclxuICAgICAgICAgICAgICAgIHBsYW5ldCA9PiB0aGlzLnRlY2hub2xvZ2llc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXA8TGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duPCdyYW5nZSc+Pih0ZWNoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhbmV0Qm9udXNlcyA9IHRoaXMuZ2V0UGxhbmV0Qm9udXModGVjaCwgcGxhbmV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWNobm9sb2d5VHlwZTogdGVjaC50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9udXNlczogY3JlYXRlUmVjb3JkPCdyYW5nZScsIExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93blsnYm9udXNlcyddW3N0cmluZ10+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsncmFuZ2UnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcGxhbmV0Qm9udXNlcy5iYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZGluZ3M6IHBsYW5ldEJvbnVzZXMuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogcGxhbmV0Qm9udXNlcy5sZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHBsYW5ldEJvbnVzZXMudG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBleHBlcmllbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1waXJlRGF0YU1vZHVsZS5saWZlZm9ybUV4cGVyaWVuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBsYW5ldEJvbnVzKHRlY2g6IFBoYWxhbnhSYW5nZUJvbnVzTGlmZWZvcm1UZWNobm9sb2d5LCBwbGFuZXQ6IFBsYW5ldERhdGEpOiBCb251c0JyZWFrZG93biB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogQm9udXNCcmVha2Rvd24gPSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiAwLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IDAsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3NCb29zdDogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHBsYW5ldC5hY3RpdmVMaWZlZm9ybSA9PSBMaWZlZm9ybVR5cGUubm9uZVxyXG4gICAgICAgICAgICAgICAgfHwgIXBsYW5ldC5hY3RpdmVMaWZlZm9ybVRlY2hub2xvZ2llcy5pbmNsdWRlcyh0ZWNoLnR5cGUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkaW5nc0Jvb3N0ID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICBnZXRQbGFuZXRMaWZlZm9ybVRlY2hub2xvZ3lCb29zdChwbGFuZXQpLFxyXG4gICAgICAgICAgICAgICAgZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5MaWZlZm9ybVJlc2VhcmNoQm9udXNCb29zdCB9KSA/PyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmVzdWx0LmJ1aWxkaW5nc0Jvb3N0ICs9IGJ1aWxkaW5nc0Jvb3N0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZUJvbnVzID0gdGVjaC5nZXRQaGFsYW54UmFuZ2VCb251cyhwbGFuZXQubGlmZWZvcm1UZWNobm9sb2dpZXNbdGVjaC50eXBlXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtTGV2ZWxCb251cyA9IGJhc2VCb251cyAqIGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXModGhpcy5leHBlcmllbmNlW3BsYW5ldC5hY3RpdmVMaWZlZm9ybSBhcyBWYWxpZExpZmVmb3JtVHlwZV0pO1xyXG4gICAgICAgICAgICBjb25zdCBsaWZlZm9ybUJ1aWxkaW5nQm9udXMgPSBiYXNlQm9udXMgKiBidWlsZGluZ3NCb29zdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gYmFzZUJvbnVzICsgbGlmZWZvcm1MZXZlbEJvbnVzICsgbGlmZWZvcm1CdWlsZGluZ0JvbnVzO1xyXG5cclxuICAgICAgICAgICAgcmVzdWx0LmJhc2UgKz0gYmFzZUJvbnVzO1xyXG4gICAgICAgICAgICByZXN1bHQubGV2ZWwgKz0gbGlmZWZvcm1MZXZlbEJvbnVzO1xyXG4gICAgICAgICAgICByZXN1bHQuYnVpbGRpbmdzICs9IGxpZmVmb3JtQnVpbGRpbmdCb251cztcclxuICAgICAgICAgICAgcmVzdWx0LnRvdGFsICs9IHRvdGFsO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QaGFsYW54LVJhbmdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1BoYWxhbngtUmFuZ2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QaGFsYW54LVJhbmdlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NjQ1NTNlMiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QaGFsYW54LVJhbmdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUGhhbGFueC1SYW5nZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJhdHRycyIsImJvbnVzVHlwZXMiLCJ0ZWNocyIsInBsYW5ldHMiLCJsaW1pdHMiLCJzdGF0aWNSZW5kZXJGbnMiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9