"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[6066],{7611:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits}})},l=[],o=n(655),i=n(147),r=n(3418),u=n(4846),a=n(9751),c=n(8395),p=n(1786),f=n(4028),g=n(7385),m=n(7848),h=n(7377);let b=class extends f.w3{bonusTypes=[{key:"fuelReturn",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.fuelReturn.bonus}];technologies=u.Du;get techs(){return this.technologies.map((e=>e.type))}get limits(){const e=(0,m.K)({type:h.f.FuelReturn});return{fuelReturn:t=>null!=e?Math.min(t,e):t}}get planets(){return(0,a.r)(c.p.empire.planetOrder.map((e=>c.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.technologies.map((t=>{const n=this.getPlanetBonus(t,e);return{planet:e,technologyType:t.type,bonuses:(0,a.a)(["fuelReturn"],(e=>({base:n.base,buildings:n.buildings,level:n.level,total:n.total})))}}))))}get experience(){return c.p.lifeformExperience}getPlanetBonus(e,t){const n={base:0,level:0,buildings:0,buildingsBoost:0,total:0};if(t.activeLifeform==r.e5.none||!t.activeLifeformTechnologies.includes(e.type))return n;const s=Math.min((0,p.io)(t)[e.type],(0,m.K)({type:h.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);n.buildingsBoost+=s;const l=e.getFuelReturn(t.lifeformTechnologies[e.type]),o=l*(0,i.g1)(this.experience[t.activeLifeform]),u=l*s,a=l+o+u;return n.base+=l,n.level+=o,n.buildings+=u,n.total+=a,n}};b=(0,o.gn)([(0,f.wA)({components:{LifeformBonusesBreakdown:g.Z}})],b);const d=b,y=d;var v=n(1001),k=(0,v.Z)(y,s,l,!1,null,null,null);const B=k.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvNjA2Ni5kMWI2N2IzOS5qcyIsIm1hcHBpbmdzIjoiOEpBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsNkJBQTZCLENBQUNFLE1BQU0sQ0FBQyxNQUFRTixFQUFJTyxXQUFXLGFBQWVQLEVBQUlRLE1BQU0sUUFBVVIsRUFBSVMsUUFBUSxPQUFTVCxFQUFJVSxXQUN2TkMsRUFBa0IsRyw0R0MrQnRCLHlCQUVBLFlBQ0EsQ0FDQSxpQkFDQSxrRkFJQSxrQkFFQSxZQUNBLDBDQUdBLGFBQ0EsdUNBRUEsT0FDQSx1Q0FJQSxjQUNBLGNBQ0EsNEJBQ0EsMkJBQ0Esd0JBQ0EsVUFDQSxxQkFDQSxTQUNBLGlDQUVBLE9BQ0EsU0FDQSxzQkFDQSxnQkFDQSxnQkFDQSxLQUNBLFlBQ0Esc0JBQ0EsY0FDQSx3QkFPQSxpQkFDQSw4QkFHQSxvQkFDQSxTQUNBLE9BQ0EsUUFDQSxZQUNBLGlCQUNBLFNBR0EsaUNBQ0EsOENBRUEsU0FJQSxrQkFDQSxvQkFDQSx3RUFFQSxvQkFFQSx3REFDQSxnREFDQSxNQUNBLFFBT0EsT0FMQSxVQUNBLFdBQ0EsZUFDQSxXQUVBLElBckZBLGFBTEEsU0FDQSxZQUNBLGlDQUdBLEcsVUNoQzJkLEksY0NPdmRDLEdBQVksT0FDZCxFQUNBYixFQUNBWSxHQUNBLEVBQ0EsS0FDQSxLQUNBLE1BSUYsUUFBZUMsRUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9GbGVldC1GdWVsLVJldHVybi52dWU/MTU4ZCIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vRmxlZXQtRnVlbC1SZXR1cm4udnVlPzFkMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vRmxlZXQtRnVlbC1SZXR1cm4udnVlP2IzMDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vRmxlZXQtRnVlbC1SZXR1cm4udnVlPzQxOGMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2xpZmVmb3JtLWJvbnVzZXMtYnJlYWtkb3duJyx7YXR0cnM6e1widHlwZXNcIjpfdm0uYm9udXNUeXBlcyxcInRlY2hub2xvZ2llc1wiOl92bS50ZWNocyxcInBsYW5ldHNcIjpfdm0ucGxhbmV0cyxcImxpbWl0c1wiOl92bS5saW1pdHN9fSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxsaWZlZm9ybS1ib251c2VzLWJyZWFrZG93biA6dHlwZXM9XCJib251c1R5cGVzXCIgOnRlY2hub2xvZ2llcz1cInRlY2hzXCIgOnBsYW5ldHM9XCJwbGFuZXRzXCIgOmxpbWl0cz1cImxpbWl0c1wiIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG4gICAgaW1wb3J0IHsgUGxhbmV0RGF0YSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9lbXBpcmUvUGxhbmV0RGF0YSc7XHJcbiAgICBpbXBvcnQgeyBnZXRMaWZlZm9ybUxldmVsVGVjaG5vbG9neUJvbnVzIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9leHBlcmllbmNlJztcclxuICAgIGltcG9ydCB7IExpZmVmb3JtVGVjaG5vbG9neVR5cGUgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtVGVjaG5vbG9neVR5cGUnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UeXBlLCBWYWxpZExpZmVmb3JtVHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1UeXBlJztcclxuICAgIGltcG9ydCB7IEZsZWV0RnVlbFJldHVybkxpZmVmb3JtVGVjaG5vbG9neSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvdGVjaG5vbG9naWVzL2ludGVyZmFjZXMnO1xyXG4gICAgaW1wb3J0IHsgRmxlZXRGdWVsUmV0dXJuTGlmZWZvcm1UZWNobm9sb2dpZXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL3RlY2hub2xvZ2llcy9MaWZlZm9ybVRlY2hub2xvZ2llcyc7XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVNYXBwZWRSZWNvcmQsIGNyZWF0ZVJlY29yZCB9IGZyb20gJ0Avc2hhcmVkL3V0aWxzL2NyZWF0ZVJlY29yZCc7XHJcbiAgICBpbXBvcnQgeyBFbXBpcmVEYXRhTW9kdWxlIH0gZnJvbSAnQC92aWV3cy9zdGF0cy9kYXRhL0VtcGlyZURhdGFNb2R1bGUnO1xyXG4gICAgaW1wb3J0IHsgZ2V0UGxhbmV0TGlmZWZvcm1UZWNobm9sb2d5Qm9vc3QgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL21vZGVscy9saWZlZm9ybXMnO1xyXG4gICAgaW1wb3J0IHsgQ29tcG9uZW50LCBWdWUgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcclxuICAgIGltcG9ydCBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd24sIHsgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duVHlwZSwgTGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duIH0gZnJvbSAnQC92aWV3cy9zdGF0cy9jb21wb25lbnRzL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzZXNCcmVha2Rvd24udnVlJztcclxuaW1wb3J0IHsgZ2V0TGlmZWZvcm1Cb251c0xpbWl0IH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzTGltaXRzJztcclxuaW1wb3J0IHsgTGlmZWZvcm1Cb251c1R5cGVJZCB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1Cb251c1R5cGUnO1xyXG5cclxuICAgIHR5cGUgQm9udXNCcmVha2Rvd24gPSB7XHJcbiAgICAgICAgYmFzZTogbnVtYmVyO1xyXG4gICAgICAgIGxldmVsOiBudW1iZXI7XHJcbiAgICAgICAgYnVpbGRpbmdzOiBudW1iZXI7XHJcbiAgICAgICAgYnVpbGRpbmdzQm9vc3Q6IG51bWJlcjtcclxuICAgICAgICB0b3RhbDogbnVtYmVyO1xyXG4gICAgfTtcclxuXHJcbiAgICBAQ29tcG9uZW50KHtcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIExpZmVmb3JtQm9udXNlc0JyZWFrZG93bixcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxlZXRGdWVsUmV0dXJuIGV4dGVuZHMgVnVlIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBib251c1R5cGVzOiBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd25UeXBlPCdmdWVsUmV0dXJuJz5bXSA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnZnVlbFJldHVybicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMuZnVlbFJldHVybi5ib251cyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHRlY2hub2xvZ2llcyA9IEZsZWV0RnVlbFJldHVybkxpZmVmb3JtVGVjaG5vbG9naWVzO1xyXG5cclxuICAgICAgICBwcml2YXRlIGdldCB0ZWNocygpOiBMaWZlZm9ybVRlY2hub2xvZ3lUeXBlW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZWNobm9sb2dpZXMubWFwKHQgPT4gdC50eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGxpbWl0cygpOiBSZWNvcmQ8J2Z1ZWxSZXR1cm4nLCAodmFsdWU6IG51bWJlcikgPT4gbnVtYmVyPiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbWl0ID0gZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5GdWVsUmV0dXJuIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGZ1ZWxSZXR1cm46IHZhbHVlID0+IGxpbWl0ICE9IG51bGwgPyBNYXRoLm1pbih2YWx1ZSwgbGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBwbGFuZXRzKCk6IFJlY29yZDxudW1iZXIsIExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93bjwnZnVlbFJldHVybic+W10+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hcHBlZFJlY29yZChcclxuICAgICAgICAgICAgICAgIEVtcGlyZURhdGFNb2R1bGUuZW1waXJlLnBsYW5ldE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChpZCA9PiBFbXBpcmVEYXRhTW9kdWxlLmVtcGlyZS5wbGFuZXRzW2lkXSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBsYW5ldCA9PiAhcGxhbmV0LmlzTW9vbikgYXMgUGxhbmV0RGF0YVtdLFxyXG4gICAgICAgICAgICAgICAgcGxhbmV0ID0+IHBsYW5ldC5pZCxcclxuICAgICAgICAgICAgICAgIHBsYW5ldCA9PiB0aGlzLnRlY2hub2xvZ2llc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXA8TGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duPCdmdWVsUmV0dXJuJz4+KHRlY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGFuZXRCb251c2VzID0gdGhpcy5nZXRQbGFuZXRCb251cyh0ZWNoLCBwbGFuZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5ldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlY2hub2xvZ3lUeXBlOiB0ZWNoLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib251c2VzOiBjcmVhdGVSZWNvcmQ8J2Z1ZWxSZXR1cm4nLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd25bJ2JvbnVzZXMnXVtzdHJpbmddPihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2Z1ZWxSZXR1cm4nXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcGxhbmV0Qm9udXNlcy5iYXNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZGluZ3M6IHBsYW5ldEJvbnVzZXMuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogcGxhbmV0Qm9udXNlcy5sZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHBsYW5ldEJvbnVzZXMudG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBleHBlcmllbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1waXJlRGF0YU1vZHVsZS5saWZlZm9ybUV4cGVyaWVuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBsYW5ldEJvbnVzKHRlY2g6IEZsZWV0RnVlbFJldHVybkxpZmVmb3JtVGVjaG5vbG9neSwgcGxhbmV0OiBQbGFuZXREYXRhKTogQm9udXNCcmVha2Rvd24ge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQ6IEJvbnVzQnJlYWtkb3duID0ge1xyXG4gICAgICAgICAgICAgICAgYmFzZTogMCxcclxuICAgICAgICAgICAgICAgIGxldmVsOiAwLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiAwLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzQm9vc3Q6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwbGFuZXQuYWN0aXZlTGlmZWZvcm0gPT0gTGlmZWZvcm1UeXBlLm5vbmVcclxuICAgICAgICAgICAgICAgIHx8ICFwbGFuZXQuYWN0aXZlTGlmZWZvcm1UZWNobm9sb2dpZXMuaW5jbHVkZXModGVjaC50eXBlKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWlsZGluZ3NCb29zdCA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgZ2V0UGxhbmV0TGlmZWZvcm1UZWNobm9sb2d5Qm9vc3QocGxhbmV0KVt0ZWNoLnR5cGVdLFxyXG4gICAgICAgICAgICAgICAgZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5MaWZlZm9ybVJlc2VhcmNoQm9udXNCb29zdCB9KSA/PyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUixcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmVzdWx0LmJ1aWxkaW5nc0Jvb3N0ICs9IGJ1aWxkaW5nc0Jvb3N0O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYmFzZUJvbnVzID0gdGVjaC5nZXRGdWVsUmV0dXJuKHBsYW5ldC5saWZlZm9ybVRlY2hub2xvZ2llc1t0ZWNoLnR5cGVdKTtcclxuICAgICAgICAgICAgY29uc3QgbGlmZWZvcm1MZXZlbEJvbnVzID0gYmFzZUJvbnVzICogZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyh0aGlzLmV4cGVyaWVuY2VbcGxhbmV0LmFjdGl2ZUxpZmVmb3JtIGFzIFZhbGlkTGlmZWZvcm1UeXBlXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtQnVpbGRpbmdCb251cyA9IGJhc2VCb251cyAqIGJ1aWxkaW5nc0Jvb3N0O1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGJhc2VCb251cyArIGxpZmVmb3JtTGV2ZWxCb251cyArIGxpZmVmb3JtQnVpbGRpbmdCb251cztcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdC5iYXNlICs9IGJhc2VCb251cztcclxuICAgICAgICAgICAgcmVzdWx0LmxldmVsICs9IGxpZmVmb3JtTGV2ZWxCb251cztcclxuICAgICAgICAgICAgcmVzdWx0LmJ1aWxkaW5ncyArPSBsaWZlZm9ybUJ1aWxkaW5nQm9udXM7XHJcbiAgICAgICAgICAgIHJlc3VsdC50b3RhbCArPSB0b3RhbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxlZXQtRnVlbC1SZXR1cm4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxlZXQtRnVlbC1SZXR1cm4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GbGVldC1GdWVsLVJldHVybi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGUxYTM5NDQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmxlZXQtRnVlbC1SZXR1cm4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GbGVldC1GdWVsLVJldHVybi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJhdHRycyIsImJvbnVzVHlwZXMiLCJ0ZWNocyIsInBsYW5ldHMiLCJsaW1pdHMiLCJzdGF0aWNSZW5kZXJGbnMiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9