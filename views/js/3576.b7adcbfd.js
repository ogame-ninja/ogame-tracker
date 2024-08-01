"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[3576],{407:(e,t,s)=>{s.r(t),s.d(t,{default:()=>T});var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits}})},i=[],o=s(655),l=s(147),r=s(3418),a=s(4846),p=s(9751),u=s(8395),c=s(1786),f=s(4028),g=s(3894),m=s(5794),d=s(7848),h=s(7377);let b=class extends f.w3{bonusTypes=[{key:"speed",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.expeditionSpeed.bonus}];technologies=a.YO.filter((e=>e.appliesTo(m.q.expedition)));get techs(){return this.technologies.map((e=>e.type))}get limits(){const e=(0,d.K)({type:h.f.FleetSpeedBonus,missionType:m.q.expedition});return{speed:t=>null!=e?Math.min(t,e):t}}get planets(){return(0,p.r)(u.p.empire.planetOrder.map((e=>u.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.technologies.map((t=>{const s=this.getPlanetBonus(t,e);return{planet:e,technologyType:t.type,bonuses:(0,p.a)(["speed"],(e=>({base:s.base,buildings:s.buildings,level:s.level,total:s.total})))}}))))}get experience(){return u.p.lifeformExperience}getPlanetBonus(e,t){const s={base:0,level:0,buildings:0,buildingsBoost:0,total:0};if(t.activeLifeform==r.e5.none||!t.activeLifeformTechnologies.includes(e.type))return s;const n=Math.min((0,c.io)(t),(0,d.K)({type:h.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);s.buildingsBoost+=n;const i=e.getFleetSpeedBonus(m.q.expedition,t.lifeformTechnologies[e.type]),o=i*(0,l.g1)(this.experience[t.activeLifeform]),a=i*n,p=i+o+a;return s.base+=i,s.level+=o,s.buildings+=a,s.total+=p,s}};b=(0,o.gn)([(0,f.wA)({components:{LifeformBonusesBreakdown:g.Z}})],b);const y=b,B=y;var v=s(1001),x=(0,v.Z)(B,n,i,!1,null,null,null);const T=x.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvMzU3Ni5iN2FkY2JmZC5qcyIsIm1hcHBpbmdzIjoiNkpBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsNkJBQTZCLENBQUNFLE1BQU0sQ0FBQyxNQUFRTixFQUFJTyxXQUFXLGFBQWVQLEVBQUlRLE1BQU0sUUFBVVIsRUFBSVMsUUFBUSxPQUFTVCxFQUFJVSxXQUN2TkMsRUFBa0IsRyxzSENpQ3RCLHlCQUVBLFlBQ0EsQ0FDQSxZQUNBLHVGQUlBLDJEQUVBLFlBQ0EsMENBR0EsYUFDQSx1RUFFQSxPQUNBLGtDQUlBLGNBQ0EsY0FDQSw0QkFDQSwyQkFDQSx3QkFDQSxVQUNBLHFCQUNBLFNBQ0EsaUNBRUEsT0FDQSxTQUNBLHNCQUNBLGdCQUNBLFdBQ0EsS0FDQSxZQUNBLHNCQUNBLGNBQ0Esd0JBT0EsaUJBQ0EsOEJBR0Esb0JBQ0EsU0FDQSxPQUNBLFFBQ0EsWUFDQSxpQkFDQSxTQUdBLGlDQUNBLDhDQUVBLFNBSUEsa0JBQ0EsWUFDQSx3RUFFQSxvQkFFQSw0RUFDQSxnREFDQSxNQUVBLFFBT0EsT0FMQSxVQUNBLFdBQ0EsZUFDQSxXQUVBLElBdEZBLGFBTEEsU0FDQSxZQUNBLGlDQUdBLEcsVUNsQ2dlLEksY0NPNWRDLEdBQVksT0FDZCxFQUNBYixFQUNBWSxHQUNBLEVBQ0EsS0FDQSxLQUNBLE1BSUYsUUFBZUMsRUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9FeHBlZGl0aW9uLUZsZWV0LVNwZWVkLnZ1ZT9jNzFlIiwid2VicGFjazovLy9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9FeHBlZGl0aW9uLUZsZWV0LVNwZWVkLnZ1ZT83MTNjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL0V4cGVkaXRpb24tRmxlZXQtU3BlZWQudnVlPzVkYTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vRXhwZWRpdGlvbi1GbGVldC1TcGVlZC52dWU/NTM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbGlmZWZvcm0tYm9udXNlcy1icmVha2Rvd24nLHthdHRyczp7XCJ0eXBlc1wiOl92bS5ib251c1R5cGVzLFwidGVjaG5vbG9naWVzXCI6X3ZtLnRlY2hzLFwicGxhbmV0c1wiOl92bS5wbGFuZXRzLFwibGltaXRzXCI6X3ZtLmxpbWl0c319KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGxpZmVmb3JtLWJvbnVzZXMtYnJlYWtkb3duIDp0eXBlcz1cImJvbnVzVHlwZXNcIiA6dGVjaG5vbG9naWVzPVwidGVjaHNcIiA6cGxhbmV0cz1cInBsYW5ldHNcIiA6bGltaXRzPVwibGltaXRzXCIgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBQbGFuZXREYXRhIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL2VtcGlyZS9QbGFuZXREYXRhJztcclxuICAgIGltcG9ydCB7IGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL2V4cGVyaWVuY2UnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UZWNobm9sb2d5VHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1UZWNobm9sb2d5VHlwZSc7XHJcbiAgICBpbXBvcnQgeyBMaWZlZm9ybVR5cGUsIFZhbGlkTGlmZWZvcm1UeXBlIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVR5cGUnO1xyXG4gICAgaW1wb3J0IHsgRmxlZXRTcGVlZEJvbnVzTGlmZWZvcm1UZWNobm9sb2d5IH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy90ZWNobm9sb2dpZXMvaW50ZXJmYWNlcyc7XHJcbiAgICBpbXBvcnQgeyBGbGVldFNwZWVkQm9udXNMaWZlZm9ybVRlY2hub2xvZ2llcyB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvdGVjaG5vbG9naWVzL0xpZmVmb3JtVGVjaG5vbG9naWVzJztcclxuICAgIGltcG9ydCB7IGNyZWF0ZU1hcHBlZFJlY29yZCwgY3JlYXRlUmVjb3JkIH0gZnJvbSAnQC9zaGFyZWQvdXRpbHMvY3JlYXRlUmVjb3JkJztcclxuICAgIGltcG9ydCB7IEVtcGlyZURhdGFNb2R1bGUgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2RhdGEvRW1waXJlRGF0YU1vZHVsZSc7XHJcbiAgICBpbXBvcnQgeyBnZXRQbGFuZXRMaWZlZm9ybVRlY2hub2xvZ3lCb29zdCB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvbW9kZWxzL2xpZmVmb3Jtcyc7XHJcbiAgICBpbXBvcnQgeyBDb21wb25lbnQsIFZ1ZSB9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG4gICAgaW1wb3J0IExpZmVmb3JtQm9udXNlc0JyZWFrZG93biwgeyBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd25UeXBlLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd24gfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2NvbXBvbmVudHMvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNlc0JyZWFrZG93bi52dWUnO1xyXG4gICAgaW1wb3J0IHsgRmxlZXRNaXNzaW9uVHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9mbGVldHMvRmxlZXRNaXNzaW9uVHlwZSc7XHJcbmltcG9ydCB7IGdldExpZmVmb3JtQm9udXNMaW1pdCB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1Cb251c0xpbWl0cyc7XHJcbmltcG9ydCB7IExpZmVmb3JtQm9udXNUeXBlSWQgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNUeXBlJztcclxuXHJcblxyXG4gICAgdHlwZSBCb251c0JyZWFrZG93biA9IHtcclxuICAgICAgICBiYXNlOiBudW1iZXI7XHJcbiAgICAgICAgbGV2ZWw6IG51bWJlcjtcclxuICAgICAgICBidWlsZGluZ3M6IG51bWJlcjtcclxuICAgICAgICBidWlsZGluZ3NCb29zdDogbnVtYmVyO1xyXG4gICAgICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBlZGl0aW9uRmxlZXRTcGVlZCBleHRlbmRzIFZ1ZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYm9udXNUeXBlczogTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duVHlwZTwnc3BlZWQnPltdID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzcGVlZCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMuZXhwZWRpdGlvblNwZWVkLmJvbnVzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgdGVjaG5vbG9naWVzID0gRmxlZXRTcGVlZEJvbnVzTGlmZWZvcm1UZWNobm9sb2dpZXMuZmlsdGVyKHRlY2ggPT4gdGVjaC5hcHBsaWVzVG8oRmxlZXRNaXNzaW9uVHlwZS5leHBlZGl0aW9uKSk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IHRlY2hzKCk6IExpZmVmb3JtVGVjaG5vbG9neVR5cGVbXSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlY2hub2xvZ2llcy5tYXAodCA9PiB0LnR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgbGltaXRzKCk6IFJlY29yZDwnc3BlZWQnLCAodmFsdWU6IG51bWJlcikgPT4gbnVtYmVyPiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5GbGVldFNwZWVkQm9udXMsIG1pc3Npb25UeXBlOiBGbGVldE1pc3Npb25UeXBlLmV4cGVkaXRpb24gfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IHZhbHVlID0+IGxpbWl0ICE9IG51bGwgPyBNYXRoLm1pbih2YWx1ZSwgbGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBwbGFuZXRzKCk6IFJlY29yZDxudW1iZXIsIExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93bjwnc3BlZWQnPltdPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVNYXBwZWRSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICBFbXBpcmVEYXRhTW9kdWxlLmVtcGlyZS5wbGFuZXRPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoaWQgPT4gRW1waXJlRGF0YU1vZHVsZS5lbXBpcmUucGxhbmV0c1tpZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwbGFuZXQgPT4gIXBsYW5ldC5pc01vb24pIGFzIFBsYW5ldERhdGFbXSxcclxuICAgICAgICAgICAgICAgIHBsYW5ldCA9PiBwbGFuZXQuaWQsXHJcbiAgICAgICAgICAgICAgICBwbGFuZXQgPT4gdGhpcy50ZWNobm9sb2dpZXNcclxuICAgICAgICAgICAgICAgICAgICAubWFwPExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93bjwnc3BlZWQnPj4odGVjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5ldEJvbnVzZXMgPSB0aGlzLmdldFBsYW5ldEJvbnVzKHRlY2gsIHBsYW5ldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaG5vbG9neVR5cGU6IHRlY2gudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbnVzZXM6IGNyZWF0ZVJlY29yZDwnc3BlZWQnLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd25bJ2JvbnVzZXMnXVtzdHJpbmddPihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3NwZWVkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHBsYW5ldEJvbnVzZXMuYmFzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBwbGFuZXRCb251c2VzLmJ1aWxkaW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IHBsYW5ldEJvbnVzZXMubGV2ZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBwbGFuZXRCb251c2VzLnRvdGFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgZXhwZXJpZW5jZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtcGlyZURhdGFNb2R1bGUubGlmZWZvcm1FeHBlcmllbmNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQbGFuZXRCb251cyh0ZWNoOiBGbGVldFNwZWVkQm9udXNMaWZlZm9ybVRlY2hub2xvZ3ksIHBsYW5ldDogUGxhbmV0RGF0YSk6IEJvbnVzQnJlYWtkb3duIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBCb251c0JyZWFrZG93biA9IHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IDAsXHJcbiAgICAgICAgICAgICAgICBsZXZlbDogMCxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogMCxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nc0Jvb3N0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocGxhbmV0LmFjdGl2ZUxpZmVmb3JtID09IExpZmVmb3JtVHlwZS5ub25lXHJcbiAgICAgICAgICAgICAgICB8fCAhcGxhbmV0LmFjdGl2ZUxpZmVmb3JtVGVjaG5vbG9naWVzLmluY2x1ZGVzKHRlY2gudHlwZSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVpbGRpbmdzQm9vc3QgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgIGdldFBsYW5ldExpZmVmb3JtVGVjaG5vbG9neUJvb3N0KHBsYW5ldCksXHJcbiAgICAgICAgICAgICAgICBnZXRMaWZlZm9ybUJvbnVzTGltaXQoeyB0eXBlOiBMaWZlZm9ybUJvbnVzVHlwZUlkLkxpZmVmb3JtUmVzZWFyY2hCb251c0Jvb3N0IH0pID8/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXN1bHQuYnVpbGRpbmdzQm9vc3QgKz0gYnVpbGRpbmdzQm9vc3Q7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBiYXNlQm9udXMgPSB0ZWNoLmdldEZsZWV0U3BlZWRCb251cyhGbGVldE1pc3Npb25UeXBlLmV4cGVkaXRpb24sIHBsYW5ldC5saWZlZm9ybVRlY2hub2xvZ2llc1t0ZWNoLnR5cGVdKTtcclxuICAgICAgICAgICAgY29uc3QgbGlmZWZvcm1MZXZlbEJvbnVzID0gYmFzZUJvbnVzICogZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyh0aGlzLmV4cGVyaWVuY2VbcGxhbmV0LmFjdGl2ZUxpZmVmb3JtIGFzIFZhbGlkTGlmZWZvcm1UeXBlXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtQnVpbGRpbmdCb251cyA9IGJhc2VCb251cyAqIGJ1aWxkaW5nc0Jvb3N0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG90YWwgPSBiYXNlQm9udXMgKyBsaWZlZm9ybUxldmVsQm9udXMgKyBsaWZlZm9ybUJ1aWxkaW5nQm9udXM7XHJcblxyXG4gICAgICAgICAgICByZXN1bHQuYmFzZSArPSBiYXNlQm9udXM7XHJcbiAgICAgICAgICAgIHJlc3VsdC5sZXZlbCArPSBsaWZlZm9ybUxldmVsQm9udXM7XHJcbiAgICAgICAgICAgIHJlc3VsdC5idWlsZGluZ3MgKz0gbGlmZWZvcm1CdWlsZGluZ0JvbnVzO1xyXG4gICAgICAgICAgICByZXN1bHQudG90YWwgKz0gdG90YWw7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGVkaXRpb24tRmxlZXQtU3BlZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRXhwZWRpdGlvbi1GbGVldC1TcGVlZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0V4cGVkaXRpb24tRmxlZXQtU3BlZWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhYzJhN2EyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0V4cGVkaXRpb24tRmxlZXQtU3BlZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FeHBlZGl0aW9uLUZsZWV0LVNwZWVkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sIm5hbWVzIjpbInJlbmRlciIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsImF0dHJzIiwiYm9udXNUeXBlcyIsInRlY2hzIiwicGxhbmV0cyIsImxpbWl0cyIsInN0YXRpY1JlbmRlckZucyIsImNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=