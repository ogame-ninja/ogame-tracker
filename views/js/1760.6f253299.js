"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[1760],{8834:(e,n,o)=>{o.r(n),o.d(n,{default:()=>w});var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits}})},s=[],i=o(655),r=o(147),l=o(3418),u=o(4846),p=o(9751),a=o(8395),c=o(1786),m=o(4028),g=o(3894),f=o(7848),h=o(7377);let d=class extends m.w3{bonusTypes=[{key:"production",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.crawlers.productionBonus},{key:"energyConsumption",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.crawlers.energyConsumption}];technologies=u.s5;get techs(){return this.technologies.map((e=>e.type))}get limits(){const e=(0,f.K)({type:h.f.CrawlerEnergyConsumptionReduction}),n=(0,f.K)({type:h.f.CrawlerBonus});return{energyConsumption:n=>null!=e?Math.max(n,-e):n,production:e=>null!=n?Math.min(e,n):e}}get planets(){return(0,p.r)(a.p.empire.planetOrder.map((e=>a.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.technologies.map((n=>{const o=this.getPlanetBonus(n,e);return{planet:e,technologyType:n.type,bonuses:(0,p.a)(["production","energyConsumption"],(e=>({base:o.base[e],buildings:o.buildings[e],level:o.level[e],total:o.total[e]})))}}))))}get experience(){return a.p.lifeformExperience}getPlanetBonus(e,n){const o={base:{production:0,energyConsumption:0},level:{production:0,energyConsumption:0},buildings:{production:0,energyConsumption:0},buildingsBoost:0,total:{production:0,energyConsumption:0}};if(n.activeLifeform==l.e5.none||!n.activeLifeformTechnologies.includes(e.type))return o;const t=Math.min((0,c.io)(n),(0,f.K)({type:h.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);o.buildingsBoost+=t;const s={production:e.getCrawlerProductionBonus(n.lifeformTechnologies[e.type]),energyConsumption:-e.getCrawlerConsumptionReduction(n.lifeformTechnologies[e.type]).energy},i={production:"production",energyConsumption:"energyConsumption"};return Object.entries(i).forEach((e=>{const[i,l]=e,u=s[l],p=u*(0,r.g1)(this.experience[n.activeLifeform]),a=u*t,c=u+p+a;o.base[i]+=u,o.level[i]+=p,o.buildings[i]+=a,o.total[i]+=c})),o}};d=(0,i.gn)([(0,m.wA)({components:{LifeformBonusesBreakdown:g.Z}})],d);const y=d,b=y;var C=o(1001),B=(0,C.Z)(b,t,s,!1,null,null,null);const w=B.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvMTc2MC42ZjI1MzI5OS5qcyIsIm1hcHBpbmdzIjoiOEpBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsNkJBQTZCLENBQUNFLE1BQU0sQ0FBQyxNQUFRTixFQUFJTyxXQUFXLGFBQWVQLEVBQUlRLE1BQU0sUUFBVVIsRUFBSVMsUUFBUSxPQUFTVCxFQUFJVSxXQUN2TkMsRUFBa0IsRyw0R0NvQ3RCLHlCQUVBLFlBQ0EsQ0FDQSxpQkFDQSx5RkFFQSxDQUNBLHdCQUNBLDRGQUlBLGtCQUVBLFlBQ0EsMENBR0EsYUFDQSw4REFDQSxtQ0FFQSxPQUNBLDhDQUNBLHVDQUlBLGNBQ0EsY0FDQSw0QkFDQSwyQkFDQSx3QkFDQSxVQUNBLHFCQUNBLFNBQ0EsaUNBRUEsT0FDQSxTQUNBLHNCQUNBLGdCQUNBLG9DQUNBLEtBQ0EsZUFDQSx5QkFDQSxpQkFDQSwyQkFPQSxpQkFDQSw4QkFHQSxvQkFDQSxTQUNBLHdDQUNBLHlDQUNBLDZDQUNBLGlCQUNBLDBDQUdBLGlDQUNBLDhDQUVBLFNBSUEsa0JBQ0EsWUFDQSx3RUFFQSxvQkFFQSxTQUNBLHVFQUNBLDRGQUdBLEdBQ0Esd0JBQ0EsdUNBaUJBLE9BZkEsK0JBQ0EsYUFFQSxPQUNBLGdEQUNBLE1BRUEsUUFFQSxhQUNBLGNBQ0Esa0JBQ0EsaUJBR0EsSUF6R0EsYUFMQSxTQUNBLFlBQ0EsaUNBR0EsRyxVQ3JDa2QsSSxjQ085Y0MsR0FBWSxPQUNkLEVBQ0FiLEVBQ0FZLEdBQ0EsRUFDQSxLQUNBLEtBQ0EsTUFJRixRQUFlQyxFQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL0NyYXdsZXJzLnZ1ZT8yY2E3Iiwid2VicGFjazovLy9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9DcmF3bGVycy52dWU/MTc0NiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9DcmF3bGVycy52dWU/M2MyNyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9DcmF3bGVycy52dWU/MzUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbGlmZWZvcm0tYm9udXNlcy1icmVha2Rvd24nLHthdHRyczp7XCJ0eXBlc1wiOl92bS5ib251c1R5cGVzLFwidGVjaG5vbG9naWVzXCI6X3ZtLnRlY2hzLFwicGxhbmV0c1wiOl92bS5wbGFuZXRzLFwibGltaXRzXCI6X3ZtLmxpbWl0c319KX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxyXG4gICAgPGxpZmVmb3JtLWJvbnVzZXMtYnJlYWtkb3duIDp0eXBlcz1cImJvbnVzVHlwZXNcIiA6dGVjaG5vbG9naWVzPVwidGVjaHNcIiA6cGxhbmV0cz1cInBsYW5ldHNcIiA6bGltaXRzPVwibGltaXRzXCIgLz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBQbGFuZXREYXRhIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL2VtcGlyZS9QbGFuZXREYXRhJztcclxuICAgIGltcG9ydCB7IGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL2V4cGVyaWVuY2UnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UZWNobm9sb2d5VHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1UZWNobm9sb2d5VHlwZSc7XHJcbiAgICBpbXBvcnQgeyBMaWZlZm9ybVR5cGUsIFZhbGlkTGlmZWZvcm1UeXBlIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVR5cGUnO1xyXG4gICAgaW1wb3J0IHsgQ3Jhd2xlclByb2R1Y3Rpb25Cb251c0FuZENvbnN1bXB0aW9uUmVkdWN0aW9uTGlmZWZvcm1UZWNobm9sb2d5IH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy90ZWNobm9sb2dpZXMvaW50ZXJmYWNlcyc7XHJcbiAgICBpbXBvcnQgeyBDcmF3bGVyUHJvZHVjdGlvbkJvbnVzQW5kQ29uc3VtcHRpb25SZWR1Y3Rpb25MaWZlZm9ybVRlY2hub2xvZ2llcyB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvdGVjaG5vbG9naWVzL0xpZmVmb3JtVGVjaG5vbG9naWVzJztcclxuICAgIGltcG9ydCB7IGNyZWF0ZU1hcHBlZFJlY29yZCwgY3JlYXRlUmVjb3JkIH0gZnJvbSAnQC9zaGFyZWQvdXRpbHMvY3JlYXRlUmVjb3JkJztcclxuICAgIGltcG9ydCB7IEVtcGlyZURhdGFNb2R1bGUgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2RhdGEvRW1waXJlRGF0YU1vZHVsZSc7XHJcbiAgICBpbXBvcnQgeyBnZXRQbGFuZXRMaWZlZm9ybVRlY2hub2xvZ3lCb29zdCB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvbW9kZWxzL2xpZmVmb3Jtcyc7XHJcbiAgICBpbXBvcnQgeyBDb21wb25lbnQsIFZ1ZSB9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG4gICAgaW1wb3J0IExpZmVmb3JtQm9udXNlc0JyZWFrZG93biwgeyBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd25UeXBlLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd24gfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2NvbXBvbmVudHMvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNlc0JyZWFrZG93bi52dWUnO1xyXG5pbXBvcnQgeyBnZXRMaWZlZm9ybUJvbnVzTGltaXQgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNMaW1pdHMnO1xyXG5pbXBvcnQgeyBMaWZlZm9ybUJvbnVzVHlwZUlkIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzVHlwZSc7XHJcblxyXG4gICAgdHlwZSBCb251c2VzID0ge1xyXG4gICAgICAgIHByb2R1Y3Rpb246IG51bWJlcjtcclxuICAgICAgICBlbmVyZ3lDb25zdW1wdGlvbjogbnVtYmVyO1xyXG4gICAgfTtcclxuXHJcbiAgICB0eXBlIEJvbnVzQnJlYWtkb3duID0ge1xyXG4gICAgICAgIGJhc2U6IEJvbnVzZXM7XHJcbiAgICAgICAgbGV2ZWw6IEJvbnVzZXM7XHJcbiAgICAgICAgYnVpbGRpbmdzOiBCb251c2VzO1xyXG4gICAgICAgIGJ1aWxkaW5nc0Jvb3N0OiBudW1iZXI7XHJcbiAgICAgICAgdG90YWw6IEJvbnVzZXM7XHJcbiAgICB9O1xyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDcmF3bGVycyBleHRlbmRzIFZ1ZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYm9udXNUeXBlczogTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duVHlwZTxrZXlvZiBCb251c2VzPltdID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdwcm9kdWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLiRpMThuLiR0LmV4dGVuc2lvbi5lbXBpcmUubGlmZWZvcm1zLnJlc2VhcmNoQm9udXNlcy5jcmF3bGVycy5wcm9kdWN0aW9uQm9udXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2VuZXJneUNvbnN1bXB0aW9uJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLiRpMThuLiR0LmV4dGVuc2lvbi5lbXBpcmUubGlmZWZvcm1zLnJlc2VhcmNoQm9udXNlcy5jcmF3bGVycy5lbmVyZ3lDb25zdW1wdGlvbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHRlY2hub2xvZ2llcyA9IENyYXdsZXJQcm9kdWN0aW9uQm9udXNBbmRDb25zdW1wdGlvblJlZHVjdGlvbkxpZmVmb3JtVGVjaG5vbG9naWVzO1xyXG5cclxuICAgICAgICBwcml2YXRlIGdldCB0ZWNocygpOiBMaWZlZm9ybVRlY2hub2xvZ3lUeXBlW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZWNobm9sb2dpZXMubWFwKHQgPT4gdC50eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGxpbWl0cygpOiBSZWNvcmQ8a2V5b2YgQm9udXNlcywgKHZhbHVlOiBudW1iZXIpID0+IG51bWJlcj4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbmVyZ3lDb25zdW1wdGlvbkxpbWl0ID0gZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5DcmF3bGVyRW5lcmd5Q29uc3VtcHRpb25SZWR1Y3Rpb24gfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3Rpb25MaW1pdCA9IGdldExpZmVmb3JtQm9udXNMaW1pdCh7IHR5cGU6IExpZmVmb3JtQm9udXNUeXBlSWQuQ3Jhd2xlckJvbnVzIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGVuZXJneUNvbnN1bXB0aW9uOiB2YWx1ZSA9PiBlbmVyZ3lDb25zdW1wdGlvbkxpbWl0ICE9IG51bGwgPyBNYXRoLm1heCh2YWx1ZSwgLWVuZXJneUNvbnN1bXB0aW9uTGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uOiB2YWx1ZSA9PiBwcm9kdWN0aW9uTGltaXQgIT0gbnVsbCA/IE1hdGgubWluKHZhbHVlLCBwcm9kdWN0aW9uTGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBwbGFuZXRzKCk6IFJlY29yZDxudW1iZXIsIExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93bjxrZXlvZiBCb251c2VzPltdPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVNYXBwZWRSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICBFbXBpcmVEYXRhTW9kdWxlLmVtcGlyZS5wbGFuZXRPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoaWQgPT4gRW1waXJlRGF0YU1vZHVsZS5lbXBpcmUucGxhbmV0c1tpZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwbGFuZXQgPT4gIXBsYW5ldC5pc01vb24pIGFzIFBsYW5ldERhdGFbXSxcclxuICAgICAgICAgICAgICAgIHBsYW5ldCA9PiBwbGFuZXQuaWQsXHJcbiAgICAgICAgICAgICAgICBwbGFuZXQgPT4gdGhpcy50ZWNobm9sb2dpZXNcclxuICAgICAgICAgICAgICAgICAgICAubWFwPExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93bjxrZXlvZiBCb251c2VzPj4odGVjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5ldEJvbnVzZXMgPSB0aGlzLmdldFBsYW5ldEJvbnVzKHRlY2gsIHBsYW5ldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaG5vbG9neVR5cGU6IHRlY2gudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbnVzZXM6IGNyZWF0ZVJlY29yZDxrZXlvZiBCb251c2VzLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd25bJ2JvbnVzZXMnXVtzdHJpbmddPihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3Byb2R1Y3Rpb24nLCAnZW5lcmd5Q29uc3VtcHRpb24nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcGxhbmV0Qm9udXNlcy5iYXNlW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogcGxhbmV0Qm9udXNlcy5idWlsZGluZ3Nba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IHBsYW5ldEJvbnVzZXMubGV2ZWxba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHBsYW5ldEJvbnVzZXMudG90YWxba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGV4cGVyaWVuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbXBpcmVEYXRhTW9kdWxlLmxpZmVmb3JtRXhwZXJpZW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0UGxhbmV0Qm9udXModGVjaDogQ3Jhd2xlclByb2R1Y3Rpb25Cb251c0FuZENvbnN1bXB0aW9uUmVkdWN0aW9uTGlmZWZvcm1UZWNobm9sb2d5LCBwbGFuZXQ6IFBsYW5ldERhdGEpOiBCb251c0JyZWFrZG93biB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogQm9udXNCcmVha2Rvd24gPSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiB7IHByb2R1Y3Rpb246IDAsIGVuZXJneUNvbnN1bXB0aW9uOiAwIH0sXHJcbiAgICAgICAgICAgICAgICBsZXZlbDogeyBwcm9kdWN0aW9uOiAwLCBlbmVyZ3lDb25zdW1wdGlvbjogMCB9LFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiB7IHByb2R1Y3Rpb246IDAsIGVuZXJneUNvbnN1bXB0aW9uOiAwIH0sXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3NCb29zdDogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiB7IHByb2R1Y3Rpb246IDAsIGVuZXJneUNvbnN1bXB0aW9uOiAwIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocGxhbmV0LmFjdGl2ZUxpZmVmb3JtID09IExpZmVmb3JtVHlwZS5ub25lXHJcbiAgICAgICAgICAgICAgICB8fCAhcGxhbmV0LmFjdGl2ZUxpZmVmb3JtVGVjaG5vbG9naWVzLmluY2x1ZGVzKHRlY2gudHlwZSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVpbGRpbmdzQm9vc3QgPSBNYXRoLm1pbihcclxuICAgICAgICAgICAgICAgIGdldFBsYW5ldExpZmVmb3JtVGVjaG5vbG9neUJvb3N0KHBsYW5ldCksXHJcbiAgICAgICAgICAgICAgICBnZXRMaWZlZm9ybUJvbnVzTGltaXQoeyB0eXBlOiBMaWZlZm9ybUJvbnVzVHlwZUlkLkxpZmVmb3JtUmVzZWFyY2hCb251c0Jvb3N0IH0pID8/IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXN1bHQuYnVpbGRpbmdzQm9vc3QgKz0gYnVpbGRpbmdzQm9vc3Q7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBib251c2VzID0ge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdGlvbjogdGVjaC5nZXRDcmF3bGVyUHJvZHVjdGlvbkJvbnVzKHBsYW5ldC5saWZlZm9ybVRlY2hub2xvZ2llc1t0ZWNoLnR5cGVdKSxcclxuICAgICAgICAgICAgICAgIGVuZXJneUNvbnN1bXB0aW9uOiAtdGVjaC5nZXRDcmF3bGVyQ29uc3VtcHRpb25SZWR1Y3Rpb24ocGxhbmV0LmxpZmVmb3JtVGVjaG5vbG9naWVzW3RlY2gudHlwZV0pLmVuZXJneSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcHBpbmc6IFJlY29yZDxrZXlvZiBCb251c2VzLCBrZXlvZiB0eXBlb2YgYm9udXNlcz4gPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0aW9uOiAncHJvZHVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICBlbmVyZ3lDb25zdW1wdGlvbjogJ2VuZXJneUNvbnN1bXB0aW9uJyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgKE9iamVjdC5lbnRyaWVzKG1hcHBpbmcpIGFzIFtrZXlvZiBCb251c2VzLCBrZXlvZiB0eXBlb2YgYm9udXNlc11bXSkuZm9yRWFjaChwYWlyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtib251c1R5cGUsIHN0YXRzVHlwZV0gPSBwYWlyO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VCb251cyA9IGJvbnVzZXNbc3RhdHNUeXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtTGV2ZWxCb251cyA9IGJhc2VCb251cyAqIGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXModGhpcy5leHBlcmllbmNlW3BsYW5ldC5hY3RpdmVMaWZlZm9ybSBhcyBWYWxpZExpZmVmb3JtVHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlmZWZvcm1CdWlsZGluZ0JvbnVzID0gYmFzZUJvbnVzICogYnVpbGRpbmdzQm9vc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBiYXNlQm9udXMgKyBsaWZlZm9ybUxldmVsQm9udXMgKyBsaWZlZm9ybUJ1aWxkaW5nQm9udXM7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmJhc2VbYm9udXNUeXBlXSArPSBiYXNlQm9udXM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubGV2ZWxbYm9udXNUeXBlXSArPSBsaWZlZm9ybUxldmVsQm9udXM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYnVpbGRpbmdzW2JvbnVzVHlwZV0gKz0gbGlmZWZvcm1CdWlsZGluZ0JvbnVzO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRvdGFsW2JvbnVzVHlwZV0gKz0gdG90YWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmF3bGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmF3bGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NyYXdsZXJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZDAwNGI3ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9DcmF3bGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NyYXdsZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sIm5hbWVzIjpbInJlbmRlciIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsImF0dHJzIiwiYm9udXNUeXBlcyIsInRlY2hzIiwicGxhbmV0cyIsImxpbWl0cyIsInN0YXRpY1JlbmRlckZucyIsImNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=