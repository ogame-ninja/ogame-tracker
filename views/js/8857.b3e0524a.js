"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[8857],{5483:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(9751),o=n(147),s=n(3418),i=n(6119);function l(e){const t=Object.values(e.planets).filter((e=>!e.isMoon)),n=(0,r.a)(t.map((e=>e.id)),0),l=(0,r.a)(s.p3,(t=>(0,o.g1)(e.lifeformExperience[t])));for(const r of t){if(r.activeLifeform==s.e5.none)continue;const e=l[r.activeLifeform],t=i.cQ[r.activeLifeform],o=t.reduce(((e,t)=>{const n=r.lifeformBuildings[t.type],o=t.getLifeformTechnologyBonus(n);return e+o}),0),u=e+o;n[r.id]=u}return n}},147:(e,t,n)=>{n.d(t,{g1:()=>o,g4:()=>s,_Z:()=>i});const r=.001;function o(e){const t=s(e);return t*r}function s(e){for(let t=0;;t++){const n=i(t+1);if(n>e)return t}}function i(e){return 900*e*(e+1)/2}},6402:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("lifeform-planet-bonuses-component",{attrs:{technologyBonuses:e.technologyBonuses,types:e.bonusTypes,buildings:e.buildings,planets:e.planets,limits:e.limits,"research-bonus-breakdown-route-name":"lifeforms/bonus-breakdown/resource-production"}})},o=[],s=n(655),i=n(4028),l=n(2593),u=n(7848),a=n(7377),c=n(2816),m=n(6119),f=n(9751),g=n(8395),p=n(4846),d=n(5483);let h=class extends i.w3{get bonusTypes(){return[{key:"metal",label:this.$i18n.$t.ogame.resources.metal},{key:"crystal",label:this.$i18n.$t.ogame.resources.crystal},{key:"deuterium",label:this.$i18n.$t.ogame.resources.deuterium},{key:"energy",label:this.$i18n.$t.ogame.resources.energy}]}buildings=m.yn.map((e=>e.type));get limits(){const e=(0,u.K)({type:a.f.ResourceProductionBonus});return{metal:t=>null!=e?Math.min(t,e):t,crystal:t=>null!=e?Math.min(t,e):t,deuterium:t=>null!=e?Math.min(t,e):t,energy:t=>null!=e?Math.min(t,e):t}}techs=p.rE;get technologyBonuses(){const e=["metal","crystal","deuterium","energy"],t=(0,f.a)(e,(()=>0)),n=(0,d.c)(g.p.empire);return this.empirePlanets.forEach((r=>{this.techs.filter((e=>r.activeLifeformTechnologies.includes(e.type))).forEach((o=>e.forEach((e=>{const s=o.getProductionBonus(r.lifeformTechnologies[o.type])[e],i=n[r.id];t[e]+=s*(1+i)}))))})),t}get empirePlanets(){return g.p.empire.planetOrder.map((e=>g.p.empire.planets[e])).filter((e=>!e.isMoon))}get planets(){return(0,f.r)(this.empirePlanets,(e=>e.id),(e=>{const t=c.IU[e.activeLifeform].filter((e=>this.buildings.includes(e))),n=(0,f.a)(["metal","crystal","deuterium","energy"],(n=>(0,f.a)(t,(t=>m.ry[t].getProductionBonus(e.lifeformBuildings[t])[n]))));return{planet:e,bonusByBuilding:n}}))}};h=(0,s.gn)([(0,i.wA)({components:{LifeformPlanetBonusesComponent:l.Z}})],h);const y=h,b=y;var k=n(1001),B=(0,k.Z)(b,r,o,!1,null,null,null);const v=B.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvODg1Ny5iM2UwNTI0YS5qcyIsIm1hcHBpbmdzIjoiNExBT08sU0FBU0EsRUFBMkJDLEdBQ3ZDLE1BQU1DLEVBQVVDLE9BQU9DLE9BQU9ILEVBQU9DLFNBQVNHLFFBQU9DLElBQU1BLEVBQUVDLFNBQ3ZEQyxHQUEwQixPQUFhTixFQUFRTyxLQUFJSCxHQUFLQSxFQUFFSSxLQUFLLEdBRS9EQyxHQUF1QixPQUN6QixNQUNBQyxJQUFNLFFBQWdDWCxFQUFPWSxtQkFBbUJELE1BRXBFLElBQUssTUFBTUUsS0FBVVosRUFBUyxDQUMxQixHQUFJWSxFQUFPQyxnQkFBa0IsVUFDekIsU0FHSixNQUFNQyxFQUFhTCxFQUFxQkcsRUFBT0MsZ0JBRXpDRSxFQUEyQixLQUFtREgsRUFBT0MsZ0JBQ3JGRyxFQUFrQkQsRUFBeUJFLFFBQU8sQ0FBQ0MsRUFBT0MsS0FDNUQsTUFBTUMsRUFBUVIsRUFBT1Msa0JBQWtCRixFQUFTRyxNQUMxQ0MsRUFBUUosRUFBU3JCLDJCQUEyQnNCLEdBQ2xELE9BQU9GLEVBQVFLLElBQ2hCLEdBRUdDLEVBQWlCVixFQUFhRSxFQUNwQ1YsRUFBd0JNLEVBQU9KLElBQU1nQixFQUd6QyxPQUFPbEIsSSxrRENqQ1gsTUFBTW1CLEVBQWdCLEtBRWYsU0FBU0MsRUFBZ0NDLEdBQzVDLE1BQU1QLEVBQVFRLEVBQWlCRCxHQUMvQixPQUFPUCxFQUFRSyxFQUdaLFNBQVNHLEVBQWlCRCxHQUM3QixJQUFJLElBQUlQLEVBQVEsR0FBS0EsSUFBUyxDQUMxQixNQUFNUyxFQUFjQyxFQUFvQ1YsRUFBUSxHQUNoRSxHQUFHUyxFQUFjRixFQUNiLE9BQU9QLEdBU1osU0FBU1UsRUFBb0NWLEdBQ2hELE9BQU8sSUFBTUEsR0FBU0EsRUFBUSxHQUFLLEksNkNDckJ2QyxJQUFJVyxFQUFTLFdBQWEsSUFBSUMsRUFBSUMsS0FBU0MsRUFBR0YsRUFBSUcsZUFBbUJDLEVBQUdKLEVBQUlLLE1BQU1ELElBQUlGLEVBQUcsT0FBT0UsRUFBRyxvQ0FBb0MsQ0FBQ0UsTUFBTSxDQUFDLGtCQUFvQk4sRUFBSU8sa0JBQWtCLE1BQVFQLEVBQUlRLFdBQVcsVUFBWVIsRUFBSVMsVUFBVSxRQUFVVCxFQUFJaEMsUUFBUSxPQUFTZ0MsRUFBSVUsT0FBTyxzQ0FBc0Msb0RBQ3RUQyxFQUFrQixHLDZHQ2dDdEIseUJBQ0EsaUJBQ0EsT0FDQSxDQUNBLFlBQ0EsMkNBRUEsQ0FDQSxjQUNBLDZDQUVBLENBQ0EsZ0JBQ0EsK0NBRUEsQ0FDQSxhQUNBLDZDQUtBLGdDQUVBLGFBQ0Esb0RBQ0EsT0FDQSxpQ0FDQSxtQ0FDQSxxQ0FDQSxtQ0FJQSxXQUVBLHdCQUNBLGlEQUNBLHFCQUVBLHNCQVdBLE9BVkEsZ0NBQ0Esc0VBQ0EsMkJBQ0EsZ0VBQ0EsVUFFQSxzQkFJQSxFQUdBLG9CQUNBLG1DQUNBLDJCQUNBLHVCQUdBLGNBQ0EsY0FDQSxvQkFFQSxVQUNBLElBQ0EsdUVBQ0EsVUFDQSwwQ0FDQSxXQUNBLEdBQ0EsV0FDQSxrREFJQSxPQUNBLFNBQ0Esd0JBOUVBLGFBTEEsU0FDQSxZQUNBLHVDQUdBLEcsVUNqQzZkLEksY0NPemRDLEdBQVksT0FDZCxFQUNBYixFQUNBWSxHQUNBLEVBQ0EsS0FDQSxLQUNBLE1BSUYsUUFBZUMsRUFBaUIiLCJzb3VyY2VzIjpbIm9nYW1lLXRyYWNrZXI6Ly8vLi9zcmMvc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvYnVpbGRpbmdzL2dldExpZmVmb3JtVGVjaG5vbG9neUJvbnVzLnRzIiwib2dhbWUtdHJhY2tlcjovLy8uL3NyYy9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9leHBlcmllbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvcGxhbmV0LWJvbnVzZXMvUmVzb3VyY2UtUHJvZHVjdGlvbi52dWU/ZWNiMyIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9wbGFuZXQtYm9udXNlcy9SZXNvdXJjZS1Qcm9kdWN0aW9uLnZ1ZT84NDM0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvcGxhbmV0LWJvbnVzZXMvUmVzb3VyY2UtUHJvZHVjdGlvbi52dWU/YWQ5OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL3BsYW5ldC1ib251c2VzL1Jlc291cmNlLVByb2R1Y3Rpb24udnVlPzFiNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxQbGF5ZXJEYXRhIH0gZnJvbSBcIkAvc2hhcmVkL21vZGVscy9lbXBpcmUvTG9jYWxQbGF5ZXJEYXRhXCI7XHJcbmltcG9ydCB7IFBsYW5ldERhdGEgfSBmcm9tIFwiQC9zaGFyZWQvbW9kZWxzL2VtcGlyZS9QbGFuZXREYXRhXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVJlY29yZCB9IGZyb20gXCJAL3NoYXJlZC91dGlscy9jcmVhdGVSZWNvcmRcIjtcclxuaW1wb3J0IHsgZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyB9IGZyb20gXCIuLi9leHBlcmllbmNlXCI7XHJcbmltcG9ydCB7IExpZmVmb3JtVHlwZSwgVmFsaWRMaWZlZm9ybVR5cGVzIH0gZnJvbSBcIi4uL0xpZmVmb3JtVHlwZVwiO1xyXG5pbXBvcnQgeyBMaWZlZm9ybVRlY2hub2xvZ3lCb251c0xpZmVmb3JtQnVpbGRpbmdzQnlMaWZlZm9ybSB9IGZyb20gXCIuL0xpZmVmb3JtQnVpbGRpbmdzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlmZWZvcm1UZWNobm9sb2d5Qm9udXMocGxheWVyOiBMb2NhbFBsYXllckRhdGEpOiBSZWNvcmQ8bnVtYmVyLCBudW1iZXI+IHtcclxuICAgIGNvbnN0IHBsYW5ldHMgPSBPYmplY3QudmFsdWVzKHBsYXllci5wbGFuZXRzKS5maWx0ZXIocCA9PiAhcC5pc01vb24pIGFzIFBsYW5ldERhdGFbXTtcclxuICAgIGNvbnN0IHRlY2hub2xvZ3lCb251c0J5UGxhbmV0ID0gY3JlYXRlUmVjb3JkKHBsYW5ldHMubWFwKHAgPT4gcC5pZCksIDApO1xyXG4gICAgXHJcbiAgICBjb25zdCBsZXZlbFRlY2hub2xvZ3lCb251cyA9IGNyZWF0ZVJlY29yZChcclxuICAgICAgICBWYWxpZExpZmVmb3JtVHlwZXMsXHJcbiAgICAgICAgbGYgPT4gZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyhwbGF5ZXIubGlmZWZvcm1FeHBlcmllbmNlW2xmXSksXHJcbiAgICApO1xyXG4gICAgZm9yIChjb25zdCBwbGFuZXQgb2YgcGxhbmV0cykge1xyXG4gICAgICAgIGlmIChwbGFuZXQuYWN0aXZlTGlmZWZvcm0gPT0gTGlmZWZvcm1UeXBlLm5vbmUpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBsZXZlbEJvbnVzID0gbGV2ZWxUZWNobm9sb2d5Qm9udXNbcGxhbmV0LmFjdGl2ZUxpZmVmb3JtXTtcclxuXHJcbiAgICAgICAgY29uc3QgdGVjaG5vbG9neUJvbnVzQnVpbGRpbmdzID0gTGlmZWZvcm1UZWNobm9sb2d5Qm9udXNMaWZlZm9ybUJ1aWxkaW5nc0J5TGlmZWZvcm1bcGxhbmV0LmFjdGl2ZUxpZmVmb3JtXTtcclxuICAgICAgICBjb25zdCB0ZWNobm9sb2d5Qm9udXMgPSB0ZWNobm9sb2d5Qm9udXNCdWlsZGluZ3MucmVkdWNlKCh0b3RhbCwgYnVpbGRpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWwgPSBwbGFuZXQubGlmZWZvcm1CdWlsZGluZ3NbYnVpbGRpbmcudHlwZV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJvbnVzID0gYnVpbGRpbmcuZ2V0TGlmZWZvcm1UZWNobm9sb2d5Qm9udXMobGV2ZWwpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG90YWwgKyBib251cztcclxuICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG90YWxUZWNoQm9udXMgPSBsZXZlbEJvbnVzICsgdGVjaG5vbG9neUJvbnVzO1xyXG4gICAgICAgIHRlY2hub2xvZ3lCb251c0J5UGxhbmV0W3BsYW5ldC5pZF0gPSB0b3RhbFRlY2hCb251cztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGVjaG5vbG9neUJvbnVzQnlQbGFuZXQ7XHJcbn0iLCJjb25zdCBib251c1BlckxldmVsID0gMC4wMF8xOyAvLzAuMSVcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaWZlZm9ybUxldmVsVGVjaG5vbG9neUJvbnVzKGV4cGVyaWVuY2U6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBsZXZlbCA9IGdldExpZmVmb3JtTGV2ZWwoZXhwZXJpZW5jZSk7XHJcbiAgICByZXR1cm4gbGV2ZWwgKiBib251c1BlckxldmVsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlmZWZvcm1MZXZlbChleHBlcmllbmNlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgZm9yKGxldCBsZXZlbCA9IDA7IDsgbGV2ZWwrKykge1xyXG4gICAgICAgIGNvbnN0IGV4cEZvckxldmVsID0gZ2V0TGlmZWZvcm1FeHBlcmllbmNlTmVlZGVkRm9yTGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgICAgICBpZihleHBGb3JMZXZlbCA+IGV4cGVyaWVuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGxldmVsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4cGVyaWVuY2VOZWVkZWRGb3JMZXZlbFVwKGxldmVsOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIDkwMCAqIGxldmVsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlmZWZvcm1FeHBlcmllbmNlTmVlZGVkRm9yTGV2ZWwobGV2ZWw6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gOTAwICogbGV2ZWwgKiAobGV2ZWwgKyAxKSAvIDI7IC8vIGdhdXNzaWFuIHN1bW1hdGlvbiBmb3JtdWxhXHJcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnbGlmZWZvcm0tcGxhbmV0LWJvbnVzZXMtY29tcG9uZW50Jyx7YXR0cnM6e1widGVjaG5vbG9neUJvbnVzZXNcIjpfdm0udGVjaG5vbG9neUJvbnVzZXMsXCJ0eXBlc1wiOl92bS5ib251c1R5cGVzLFwiYnVpbGRpbmdzXCI6X3ZtLmJ1aWxkaW5ncyxcInBsYW5ldHNcIjpfdm0ucGxhbmV0cyxcImxpbWl0c1wiOl92bS5saW1pdHMsXCJyZXNlYXJjaC1ib251cy1icmVha2Rvd24tcm91dGUtbmFtZVwiOlwibGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9yZXNvdXJjZS1wcm9kdWN0aW9uXCJ9fSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxsaWZlZm9ybS1wbGFuZXQtYm9udXNlcy1jb21wb25lbnRcclxuICAgICAgICA6dGVjaG5vbG9neUJvbnVzZXM9XCJ0ZWNobm9sb2d5Qm9udXNlc1wiIFxyXG4gICAgICAgIDp0eXBlcz1cImJvbnVzVHlwZXNcIiBcclxuICAgICAgICA6YnVpbGRpbmdzPVwiYnVpbGRpbmdzXCIgXHJcbiAgICAgICAgOnBsYW5ldHM9XCJwbGFuZXRzXCIgXHJcbiAgICAgICAgOmxpbWl0cz1cImxpbWl0c1wiIFxyXG4gICAgICAgIHJlc2VhcmNoLWJvbnVzLWJyZWFrZG93bi1yb3V0ZS1uYW1lPVwibGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9yZXNvdXJjZS1wcm9kdWN0aW9uXCIgXHJcbiAgICAvPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdCBsYW5nPVwidHNcIj5cclxuICAgIGltcG9ydCB7IFBsYW5ldERhdGEgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvZW1waXJlL1BsYW5ldERhdGEnO1xyXG4gICAgaW1wb3J0IHsgQ29zdCB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9jb21tb24vQ29zdCc7XHJcbiAgICBpbXBvcnQgeyBDb21wb25lbnQsIFZ1ZSB9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG4gICAgaW1wb3J0IExpZmVmb3JtUGxhbmV0Qm9udXNlc0NvbXBvbmVudCwgeyBMaWZlZm9ybVBsYW5ldEJvbnVzZXNUeXBlLCBMaWZlZm9ybVBsYW5ldEJvbnVzZXMgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2NvbXBvbmVudHMvbGlmZWZvcm1zL0xpZmVmb3JtUGxhbmV0Qm9udXNlcy52dWUnO1xyXG4gICAgaW1wb3J0IHsgZ2V0TGlmZWZvcm1Cb251c0xpbWl0IH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzTGltaXRzJztcclxuICAgIGltcG9ydCB7IExpZmVmb3JtQm9udXNUeXBlSWQgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNUeXBlJztcclxuICAgIGltcG9ydCB7IExpZmVmb3JtQnVpbGRpbmdUeXBlLCBMaWZlZm9ybUJ1aWxkaW5nVHlwZXNCeUxpZmVmb3JtIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybUJ1aWxkaW5nVHlwZSc7XHJcbiAgICBpbXBvcnQgeyBMaWZlZm9ybUJ1aWxkaW5nc0J5VHlwZSwgUmVzb3VyY2VQcm9kdWN0aW9uQm9udXNMaWZlZm9ybUJ1aWxkaW5ncyB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvYnVpbGRpbmdzL0xpZmVmb3JtQnVpbGRpbmdzJztcclxuICAgIGltcG9ydCB7IGNyZWF0ZU1hcHBlZFJlY29yZCwgY3JlYXRlUmVjb3JkIH0gZnJvbSAnQC9zaGFyZWQvdXRpbHMvY3JlYXRlUmVjb3JkJztcclxuICAgIGltcG9ydCB7IEVtcGlyZURhdGFNb2R1bGUgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2RhdGEvRW1waXJlRGF0YU1vZHVsZSc7XHJcbiAgICBpbXBvcnQgeyBSZXNvdXJjZVByb2R1Y3Rpb25Cb251c0xpZmVmb3JtQnVpbGRpbmcgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL2J1aWxkaW5ncy9pbnRlcmZhY2VzJztcclxuICAgIGltcG9ydCB7IFJlc291cmNlUHJvZHVjdGlvbkJvbnVzTGlmZWZvcm1UZWNobm9sb2dpZXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL3RlY2hub2xvZ2llcy9MaWZlZm9ybVRlY2hub2xvZ2llcyc7XHJcbiAgICBpbXBvcnQgeyBnZXRMaWZlZm9ybVRlY2hub2xvZ3lCb251cyB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvYnVpbGRpbmdzL2dldExpZmVmb3JtVGVjaG5vbG9neUJvbnVzJztcclxuICAgIGltcG9ydCB7IFJlc291cmNlUHJvZHVjdGlvbkJvbnVzTGlmZWZvcm1UZWNobm9sb2d5IH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy90ZWNobm9sb2dpZXMvaW50ZXJmYWNlcyc7XHJcblxyXG5cclxuICAgIEBDb21wb25lbnQoe1xyXG4gICAgICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgTGlmZWZvcm1QbGFuZXRCb251c2VzQ29tcG9uZW50LFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNvdXJjZVByb2R1Y3Rpb24gZXh0ZW5kcyBWdWUge1xyXG4gICAgICAgIHByaXZhdGUgZ2V0IGJvbnVzVHlwZXMoKTogTGlmZWZvcm1QbGFuZXRCb251c2VzVHlwZTxrZXlvZiBDb3N0PltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdtZXRhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuJGkxOG4uJHQub2dhbWUucmVzb3VyY2VzLm1ldGFsLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdjcnlzdGFsJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5vZ2FtZS5yZXNvdXJjZXMuY3J5c3RhbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZGV1dGVyaXVtJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5vZ2FtZS5yZXNvdXJjZXMuZGV1dGVyaXVtLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6ICdlbmVyZ3knLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLiRpMThuLiR0Lm9nYW1lLnJlc291cmNlcy5lbmVyZ3ksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBidWlsZGluZ3M6IExpZmVmb3JtQnVpbGRpbmdUeXBlW10gPSBSZXNvdXJjZVByb2R1Y3Rpb25Cb251c0xpZmVmb3JtQnVpbGRpbmdzLm1hcChiID0+IGIudHlwZSk7XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGxpbWl0cygpOiBSZWNvcmQ8a2V5b2YgQ29zdCwgKHZhbHVlOiBudW1iZXIpID0+IG51bWJlcj4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaW1pdCA9IGdldExpZmVmb3JtQm9udXNMaW1pdCh7IHR5cGU6IExpZmVmb3JtQm9udXNUeXBlSWQuUmVzb3VyY2VQcm9kdWN0aW9uQm9udXMgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtZXRhbDogdmFsdWUgPT4gbGltaXQgIT0gbnVsbCA/IE1hdGgubWluKHZhbHVlLCBsaW1pdCkgOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGNyeXN0YWw6IHZhbHVlID0+IGxpbWl0ICE9IG51bGwgPyBNYXRoLm1pbih2YWx1ZSwgbGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkZXV0ZXJpdW06IHZhbHVlID0+IGxpbWl0ICE9IG51bGwgPyBNYXRoLm1pbih2YWx1ZSwgbGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBlbmVyZ3k6IHZhbHVlID0+IGxpbWl0ICE9IG51bGwgPyBNYXRoLm1pbih2YWx1ZSwgbGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHRlY2hzOiBSZXNvdXJjZVByb2R1Y3Rpb25Cb251c0xpZmVmb3JtVGVjaG5vbG9neVtdID0gUmVzb3VyY2VQcm9kdWN0aW9uQm9udXNMaWZlZm9ybVRlY2hub2xvZ2llcztcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgdGVjaG5vbG9neUJvbnVzZXMoKTogUmVjb3JkPGtleW9mIENvc3QsIG51bWJlcj4ge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzOiAoa2V5b2YgQ29zdClbXSA9IFsnbWV0YWwnLCAnY3J5c3RhbCcsICdkZXV0ZXJpdW0nLCAnZW5lcmd5J107XHJcbiAgICAgICAgICAgIGNvbnN0IGdsb2JhbEJvbnVzZXM6IFJlY29yZDxrZXlvZiBDb3N0LCBudW1iZXI+ID0gY3JlYXRlUmVjb3JkKGtleXMsICgpID0+IDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGlmZWZvcm1UZWNobm9sb2d5Qm9vc3RQZXJQbGFuZXQgPSBnZXRMaWZlZm9ybVRlY2hub2xvZ3lCb251cyhFbXBpcmVEYXRhTW9kdWxlLmVtcGlyZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1waXJlUGxhbmV0cy5mb3JFYWNoKHBsYW5ldCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlY2hzLmZpbHRlcih0ZWNoID0+IHBsYW5ldC5hY3RpdmVMaWZlZm9ybVRlY2hub2xvZ2llcy5pbmNsdWRlcyh0ZWNoLnR5cGUpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5mb3JFYWNoKHRlY2ggPT4ga2V5cy5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlY2hCb251cyA9IHRlY2guZ2V0UHJvZHVjdGlvbkJvbnVzKHBsYW5ldC5saWZlZm9ybVRlY2hub2xvZ2llc1t0ZWNoLnR5cGVdKVtrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZWNoQm9vc3QgPSBsaWZlZm9ybVRlY2hub2xvZ3lCb29zdFBlclBsYW5ldFtwbGFuZXQuaWRdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xvYmFsQm9udXNlc1trZXldICs9IHRlY2hCb251cyAqICgxICsgdGVjaEJvb3N0KTtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIGdsb2JhbEJvbnVzZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBlbXBpcmVQbGFuZXRzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1waXJlRGF0YU1vZHVsZS5lbXBpcmUucGxhbmV0T3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGlkID0+IEVtcGlyZURhdGFNb2R1bGUuZW1waXJlLnBsYW5ldHNbaWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocGxhbmV0ID0+ICFwbGFuZXQuaXNNb29uKSBhcyBQbGFuZXREYXRhW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBwbGFuZXRzKCk6IFJlY29yZDxudW1iZXIsIExpZmVmb3JtUGxhbmV0Qm9udXNlczxrZXlvZiBDb3N0Pj4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTWFwcGVkUmVjb3JkKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbXBpcmVQbGFuZXRzLFxyXG5cclxuICAgICAgICAgICAgICAgIHBsYW5ldCA9PiBwbGFuZXQuaWQsXHJcbiAgICAgICAgICAgICAgICBwbGFuZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUJ1aWxkaW5nVHlwZXMgPSBMaWZlZm9ybUJ1aWxkaW5nVHlwZXNCeUxpZmVmb3JtW3BsYW5ldC5hY3RpdmVMaWZlZm9ybV0uZmlsdGVyKGIgPT4gdGhpcy5idWlsZGluZ3MuaW5jbHVkZXMoYikpOyBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib251c0J5QnVpbGRpbmcgPSBjcmVhdGVSZWNvcmQ8a2V5b2YgQ29zdCwgUmVjb3JkPExpZmVmb3JtQnVpbGRpbmdUeXBlLCBudW1iZXI+PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnbWV0YWwnLCAnY3J5c3RhbCcsICdkZXV0ZXJpdW0nLCAnZW5lcmd5J10sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+IGNyZWF0ZVJlY29yZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVCdWlsZGluZ1R5cGVzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0+IChMaWZlZm9ybUJ1aWxkaW5nc0J5VHlwZVt0eXBlXSBhcyBSZXNvdXJjZVByb2R1Y3Rpb25Cb251c0xpZmVmb3JtQnVpbGRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UHJvZHVjdGlvbkJvbnVzKHBsYW5ldC5saWZlZm9ybUJ1aWxkaW5nc1t0eXBlXSlba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmV0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib251c0J5QnVpbGRpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Jlc291cmNlLVByb2R1Y3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzb3VyY2UtUHJvZHVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Jlc291cmNlLVByb2R1Y3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY1Yzk3MzkwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Jlc291cmNlLVByb2R1Y3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXNvdXJjZS1Qcm9kdWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sIm5hbWVzIjpbImdldExpZmVmb3JtVGVjaG5vbG9neUJvbnVzIiwicGxheWVyIiwicGxhbmV0cyIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsInAiLCJpc01vb24iLCJ0ZWNobm9sb2d5Qm9udXNCeVBsYW5ldCIsIm1hcCIsImlkIiwibGV2ZWxUZWNobm9sb2d5Qm9udXMiLCJsZiIsImxpZmVmb3JtRXhwZXJpZW5jZSIsInBsYW5ldCIsImFjdGl2ZUxpZmVmb3JtIiwibGV2ZWxCb251cyIsInRlY2hub2xvZ3lCb251c0J1aWxkaW5ncyIsInRlY2hub2xvZ3lCb251cyIsInJlZHVjZSIsInRvdGFsIiwiYnVpbGRpbmciLCJsZXZlbCIsImxpZmVmb3JtQnVpbGRpbmdzIiwidHlwZSIsImJvbnVzIiwidG90YWxUZWNoQm9udXMiLCJib251c1BlckxldmVsIiwiZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyIsImV4cGVyaWVuY2UiLCJnZXRMaWZlZm9ybUxldmVsIiwiZXhwRm9yTGV2ZWwiLCJnZXRMaWZlZm9ybUV4cGVyaWVuY2VOZWVkZWRGb3JMZXZlbCIsInJlbmRlciIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsImF0dHJzIiwidGVjaG5vbG9neUJvbnVzZXMiLCJib251c1R5cGVzIiwiYnVpbGRpbmdzIiwibGltaXRzIiwic3RhdGljUmVuZGVyRm5zIiwiY29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==