"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[7108],{8192:(e,t,n)=>{n.r(t),n.d(t,{default:()=>T});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits}})},o=[],i=n(655),l=n(147),r=n(3418),u=n(4846),a=n(9751),p=n(8395),c=n(1786),m=n(4028),f=n(3894),g=n(2057),h=n(7848),b=n(7377);let d=class extends m.w3{bonusTypes=[{key:"fuelConsumption",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.fuelConsumption.header}];technologies=u.TF;get techs(){return this.technologies.map((e=>e.type))}get limits(){const e=(0,h.K)({type:b.f.FuelConsumptionReduction});return{fuelConsumption:t=>null!=e?Math.max(t,-e):t}}get planets(){return(0,a.r)(p.p.empire.planetOrder.map((e=>p.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.technologies.map((t=>{const n=this.getPlanetBonus(t,e);return{planet:e,technologyType:t.type,bonuses:(0,a.a)(["fuelConsumption"],(e=>({base:n.base,buildings:n.buildings,level:n.level,total:n.total})))}}))))}get experience(){return p.p.lifeformExperience}getPlanetBonus(e,t){const n={base:0,level:0,buildings:0,buildingsBoost:0,total:0};if(t.activeLifeform==r.e5.none||!t.activeLifeformTechnologies.includes(e.type))return n;const s=Math.min((0,c.io)(t),(0,h.K)({type:b.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);n.buildingsBoost+=s;const o=-1*e.getFuelConsumptionReduction(g.g.lightFighter,t.lifeformTechnologies[e.type]),i=o*(0,l.g1)(this.experience[t.activeLifeform]),u=o*s,a=o+i+u;return n.base+=o,n.level+=i,n.buildings+=u,n.total+=a,n}};d=(0,i.gn)([(0,m.wA)({components:{LifeformBonusesBreakdown:f.Z}})],d);const y=d,v=y;var k=n(1001),B=(0,k.Z)(v,s,o,!1,null,null,null);const T=B.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvNzEwOC4yODk4ZDliNC5qcyIsIm1hcHBpbmdzIjoiOEpBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsNkJBQTZCLENBQUNFLE1BQU0sQ0FBQyxNQUFRTixFQUFJTyxXQUFXLGFBQWVQLEVBQUlRLE1BQU0sUUFBVVIsRUFBSVMsUUFBUSxPQUFTVCxFQUFJVSxXQUN2TkMsRUFBa0IsRyxzSENnQ3RCLHlCQUVBLFlBQ0EsQ0FDQSxzQkFDQSx3RkFJQSxrQkFFQSxZQUNBLDBDQUdBLGFBQ0EscURBRUEsT0FDQSw2Q0FJQSxjQUNBLGNBQ0EsNEJBQ0EsMkJBQ0Esd0JBQ0EsVUFDQSxxQkFDQSxTQUNBLGlDQUVBLE9BQ0EsU0FDQSxzQkFDQSxnQkFDQSxxQkFDQSxLQUNBLFlBQ0Esc0JBQ0EsY0FDQSx3QkFPQSxpQkFDQSw4QkFHQSxvQkFDQSxTQUNBLE9BQ0EsUUFDQSxZQUNBLGlCQUNBLFNBR0EsaUNBQ0EsOENBRUEsU0FJQSxrQkFDQSxZQUNBLHdFQUVBLG9CQUVBLDBGQUNBLGdEQUNBLE1BQ0EsUUFPQSxPQUxBLFVBQ0EsV0FDQSxlQUNBLFdBRUEsSUFyRkEsYUFMQSxTQUNBLFlBQ0EsaUNBR0EsRyxVQ2pDMGQsSSxjQ090ZEMsR0FBWSxPQUNkLEVBQ0FiLEVBQ0FZLEdBQ0EsRUFDQSxLQUNBLEtBQ0EsTUFJRixRQUFlQyxFQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL0Z1ZWwtQ29uc3VtcHRpb24udnVlP2Q0NTIiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL0Z1ZWwtQ29uc3VtcHRpb24udnVlPzk1MjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vRnVlbC1Db25zdW1wdGlvbi52dWU/NWM0OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9GdWVsLUNvbnN1bXB0aW9uLnZ1ZT9mYzIxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdsaWZlZm9ybS1ib251c2VzLWJyZWFrZG93bicse2F0dHJzOntcInR5cGVzXCI6X3ZtLmJvbnVzVHlwZXMsXCJ0ZWNobm9sb2dpZXNcIjpfdm0udGVjaHMsXCJwbGFuZXRzXCI6X3ZtLnBsYW5ldHMsXCJsaW1pdHNcIjpfdm0ubGltaXRzfX0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XHJcbiAgICA8bGlmZWZvcm0tYm9udXNlcy1icmVha2Rvd24gOnR5cGVzPVwiYm9udXNUeXBlc1wiIDp0ZWNobm9sb2dpZXM9XCJ0ZWNoc1wiIDpwbGFuZXRzPVwicGxhbmV0c1wiIDpsaW1pdHM9XCJsaW1pdHNcIiAvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuICAgIGltcG9ydCB7IFBsYW5ldERhdGEgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvZW1waXJlL1BsYW5ldERhdGEnO1xyXG4gICAgaW1wb3J0IHsgZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvZXhwZXJpZW5jZSc7XHJcbiAgICBpbXBvcnQgeyBMaWZlZm9ybVRlY2hub2xvZ3lUeXBlIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVRlY2hub2xvZ3lUeXBlJztcclxuICAgIGltcG9ydCB7IExpZmVmb3JtVHlwZSwgVmFsaWRMaWZlZm9ybVR5cGUgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtVHlwZSc7XHJcbiAgICBpbXBvcnQgeyBGdWVsQ29uc3VtcHRpb25SZWR1Y3Rpb25MaWZlZm9ybVRlY2hub2xvZ3kgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL3RlY2hub2xvZ2llcy9pbnRlcmZhY2VzJztcclxuICAgIGltcG9ydCB7IEZ1ZWxDb25zdW1wdGlvblJlZHVjdGlvbkxpZmVmb3JtVGVjaG5vbG9naWVzIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy90ZWNobm9sb2dpZXMvTGlmZWZvcm1UZWNobm9sb2dpZXMnO1xyXG4gICAgaW1wb3J0IHsgY3JlYXRlTWFwcGVkUmVjb3JkLCBjcmVhdGVSZWNvcmQgfSBmcm9tICdAL3NoYXJlZC91dGlscy9jcmVhdGVSZWNvcmQnO1xyXG4gICAgaW1wb3J0IHsgRW1waXJlRGF0YU1vZHVsZSB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvZGF0YS9FbXBpcmVEYXRhTW9kdWxlJztcclxuICAgIGltcG9ydCB7IGdldFBsYW5ldExpZmVmb3JtVGVjaG5vbG9neUJvb3N0IH0gZnJvbSAnQC92aWV3cy9zdGF0cy9tb2RlbHMvbGlmZWZvcm1zJztcclxuICAgIGltcG9ydCB7IENvbXBvbmVudCwgVnVlIH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XHJcbiAgICBpbXBvcnQgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duLCB7IExpZmVmb3JtQm9udXNlc0JyZWFrZG93blR5cGUsIExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93biB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvY29tcG9uZW50cy9saWZlZm9ybXMvTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duLnZ1ZSc7XHJcbiAgICBpbXBvcnQgeyBTaGlwVHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9zaGlwcy9TaGlwVHlwZSc7XHJcbmltcG9ydCB7IGdldExpZmVmb3JtQm9udXNMaW1pdCB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1Cb251c0xpbWl0cyc7XHJcbmltcG9ydCB7IExpZmVmb3JtQm9udXNUeXBlSWQgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNUeXBlJztcclxuXHJcbiAgICB0eXBlIERlZmVuc2VCb251c0JyZWFrZG93biA9IHtcclxuICAgICAgICBiYXNlOiBudW1iZXI7XHJcbiAgICAgICAgbGV2ZWw6IG51bWJlcjtcclxuICAgICAgICBidWlsZGluZ3M6IG51bWJlcjtcclxuICAgICAgICBidWlsZGluZ3NCb29zdDogbnVtYmVyO1xyXG4gICAgICAgIHRvdGFsOiBudW1iZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duLFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBGdWVsQ29uc3VtcHRpb24gZXh0ZW5kcyBWdWUge1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGJvbnVzVHlwZXM6IExpZmVmb3JtQm9udXNlc0JyZWFrZG93blR5cGU8J2Z1ZWxDb25zdW1wdGlvbic+W10gPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2Z1ZWxDb25zdW1wdGlvbicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMuZnVlbENvbnN1bXB0aW9uLmhlYWRlcixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHRlY2hub2xvZ2llcyA9IEZ1ZWxDb25zdW1wdGlvblJlZHVjdGlvbkxpZmVmb3JtVGVjaG5vbG9naWVzO1xyXG5cclxuICAgICAgICBwcml2YXRlIGdldCB0ZWNocygpOiBMaWZlZm9ybVRlY2hub2xvZ3lUeXBlW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZWNobm9sb2dpZXMubWFwKHQgPT4gdC50eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGxpbWl0cygpOiBSZWNvcmQ8J2Z1ZWxDb25zdW1wdGlvbicsICh2YWx1ZTogbnVtYmVyKSA9PiBudW1iZXI+IHtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBnZXRMaWZlZm9ybUJvbnVzTGltaXQoeyB0eXBlOiBMaWZlZm9ybUJvbnVzVHlwZUlkLkZ1ZWxDb25zdW1wdGlvblJlZHVjdGlvbiB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBmdWVsQ29uc3VtcHRpb246IHZhbHVlID0+IGxpbWl0ICE9IG51bGwgPyBNYXRoLm1heCh2YWx1ZSwgLWxpbWl0KSA6IHZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgcGxhbmV0cygpOiBSZWNvcmQ8bnVtYmVyLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd248J2Z1ZWxDb25zdW1wdGlvbic+W10+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hcHBlZFJlY29yZChcclxuICAgICAgICAgICAgICAgIEVtcGlyZURhdGFNb2R1bGUuZW1waXJlLnBsYW5ldE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChpZCA9PiBFbXBpcmVEYXRhTW9kdWxlLmVtcGlyZS5wbGFuZXRzW2lkXSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBsYW5ldCA9PiAhcGxhbmV0LmlzTW9vbikgYXMgUGxhbmV0RGF0YVtdLFxyXG4gICAgICAgICAgICAgICAgcGxhbmV0ID0+IHBsYW5ldC5pZCxcclxuICAgICAgICAgICAgICAgIHBsYW5ldCA9PiB0aGlzLnRlY2hub2xvZ2llc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXA8TGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duPCdmdWVsQ29uc3VtcHRpb24nPj4odGVjaCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5ldEJvbnVzZXMgPSB0aGlzLmdldFBsYW5ldEJvbnVzKHRlY2gsIHBsYW5ldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVjaG5vbG9neVR5cGU6IHRlY2gudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvbnVzZXM6IGNyZWF0ZVJlY29yZDwnZnVlbENvbnN1bXB0aW9uJywgTGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duWydib251c2VzJ11bc3RyaW5nXT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydmdWVsQ29uc3VtcHRpb24nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcGxhbmV0Qm9udXNlcy5iYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZGluZ3M6IHBsYW5ldEJvbnVzZXMuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogcGxhbmV0Qm9udXNlcy5sZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHBsYW5ldEJvbnVzZXMudG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBleHBlcmllbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1waXJlRGF0YU1vZHVsZS5saWZlZm9ybUV4cGVyaWVuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBsYW5ldEJvbnVzKHRlY2g6IEZ1ZWxDb25zdW1wdGlvblJlZHVjdGlvbkxpZmVmb3JtVGVjaG5vbG9neSwgcGxhbmV0OiBQbGFuZXREYXRhKTogRGVmZW5zZUJvbnVzQnJlYWtkb3duIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBEZWZlbnNlQm9udXNCcmVha2Rvd24gPSB7XHJcbiAgICAgICAgICAgICAgICBiYXNlOiAwLFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IDAsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IDAsXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3NCb29zdDogMCxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHBsYW5ldC5hY3RpdmVMaWZlZm9ybSA9PSBMaWZlZm9ybVR5cGUubm9uZVxyXG4gICAgICAgICAgICAgICAgfHwgIXBsYW5ldC5hY3RpdmVMaWZlZm9ybVRlY2hub2xvZ2llcy5pbmNsdWRlcyh0ZWNoLnR5cGUpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1aWxkaW5nc0Jvb3N0ID0gTWF0aC5taW4oXHJcbiAgICAgICAgICAgICAgICBnZXRQbGFuZXRMaWZlZm9ybVRlY2hub2xvZ3lCb29zdChwbGFuZXQpLFxyXG4gICAgICAgICAgICAgICAgZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5MaWZlZm9ybVJlc2VhcmNoQm9udXNCb29zdCB9KSA/PyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmVzdWx0LmJ1aWxkaW5nc0Jvb3N0ICs9IGJ1aWxkaW5nc0Jvb3N0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZUJvbnVzID0gLTEgKiB0ZWNoLmdldEZ1ZWxDb25zdW1wdGlvblJlZHVjdGlvbihTaGlwVHlwZS5saWdodEZpZ2h0ZXIsIHBsYW5ldC5saWZlZm9ybVRlY2hub2xvZ2llc1t0ZWNoLnR5cGVdKTtcclxuICAgICAgICAgICAgY29uc3QgbGlmZWZvcm1MZXZlbEJvbnVzID0gYmFzZUJvbnVzICogZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyh0aGlzLmV4cGVyaWVuY2VbcGxhbmV0LmFjdGl2ZUxpZmVmb3JtIGFzIFZhbGlkTGlmZWZvcm1UeXBlXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtQnVpbGRpbmdCb251cyA9IGJhc2VCb251cyAqIGJ1aWxkaW5nc0Jvb3N0O1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGJhc2VCb251cyArIGxpZmVmb3JtTGV2ZWxCb251cyArIGxpZmVmb3JtQnVpbGRpbmdCb251cztcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdC5iYXNlICs9IGJhc2VCb251cztcclxuICAgICAgICAgICAgcmVzdWx0LmxldmVsICs9IGxpZmVmb3JtTGV2ZWxCb251cztcclxuICAgICAgICAgICAgcmVzdWx0LmJ1aWxkaW5ncyArPSBsaWZlZm9ybUJ1aWxkaW5nQm9udXM7XHJcbiAgICAgICAgICAgIHJlc3VsdC50b3RhbCArPSB0b3RhbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRnVlbC1Db25zdW1wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GdWVsLUNvbnN1bXB0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRnVlbC1Db25zdW1wdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGRkOWM2ZDgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRnVlbC1Db25zdW1wdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Z1ZWwtQ29uc3VtcHRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwibmFtZXMiOlsicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwiYXR0cnMiLCJib251c1R5cGVzIiwidGVjaHMiLCJwbGFuZXRzIiwibGltaXRzIiwic3RhdGljUmVuZGVyRm5zIiwiY29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==