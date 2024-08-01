"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[1986],{7592:(e,s,t)=>{t.r(s),t.d(s,{default:()=>M});var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits}})},i=[],o=t(655),n=t(147),l=t(3418),a=t(4846),u=t(9751),p=t(8395),c=t(1786),f=t(4028),h=t(3894),d=t(5424),m=t(7848),b=t(7377);let g=class extends f.w3{bonusTypes=[{key:"resources",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.expeditionFinds.resources},{key:"ships",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.expeditionFinds.ships},{key:"darkMatter",label:this.$i18n.$t.ogame.premium.darkMatter},{key:"fleetLoss",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.expeditionFinds.fleetLoss}];technologies=[...a.f1,...a.uv];techs=this.technologies.map((e=>e.type));get limits(){const e=(0,m.K)({type:b.f.ExpeditionBonus,event:d.r.resources}),s=(0,m.K)({type:b.f.ExpeditionBonus,event:d.r.fleet}),t=(0,m.K)({type:b.f.ExpeditionBonus,event:d.r.darkMatter}),r=(0,m.K)({type:b.f.ExpeditionEventProbabilityBonus,event:d.r.lostFleet});return{resources:s=>null!=e?Math.min(s,e):s,ships:e=>null!=s?Math.min(e,s):e,darkMatter:e=>null!=t?Math.min(e,t):e,fleetLoss:e=>null!=r?Math.max(e,-r):e}}get planets(){return(0,u.r)(p.p.empire.planetOrder.map((e=>p.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.techs.map((s=>{const t=a.dy[s],r=this.getPlanetBonus(t,e);return{planet:e,technologyType:s,bonuses:(0,u.a)(["resources","ships","darkMatter","fleetLoss"],(e=>({base:r.base[e],buildings:r.buildings[e],level:r.level[e],total:r.total[e]})))}}))))}get experience(){return p.p.lifeformExperience}getPlanetBonus(e,s){const t={base:{resources:0,ships:0,darkMatter:0,fleetLoss:0},level:{resources:0,ships:0,darkMatter:0,fleetLoss:0},buildings:{resources:0,ships:0,darkMatter:0,fleetLoss:0},buildingsBoost:0,total:{resources:0,ships:0,darkMatter:0,fleetLoss:0}};if(s.activeLifeform==l.e5.none||!s.activeLifeformTechnologies.includes(e.type))return t;const r=Math.min((0,c.io)(s),(0,m.K)({type:b.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);t.buildingsBoost+=r;const i={resources:d.r.resources,ships:d.r.fleet,darkMatter:d.r.darkMatter,fleetLoss:d.r.lostFleet};return Object.entries(i).forEach((i=>{const[o,l]=i,a="getExpeditionBonus"in e?e.getExpeditionBonus(l,s.lifeformTechnologies[e.type]):e.getExpeditionEventProbabilityBonus(l,s.lifeformTechnologies[e.type]),u=a*(0,n.g1)(this.experience[s.activeLifeform]),p=a*r,c=a+u+p;t.base[o]+=a,t.level[o]+=u,t.buildings[o]+=p,t.total[o]+=c})),t}};g=(0,o.gn)([(0,f.wA)({components:{LifeformBonusesBreakdown:h.Z}})],g);const k=g,y=k;var x=t(1001),B=(0,x.Z)(y,r,i,!1,null,null,null);const M=B.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvMTk4Ni4xNzI0MTM5My5qcyIsIm1hcHBpbmdzIjoiOEpBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsNkJBQTZCLENBQUNFLE1BQU0sQ0FBQyxNQUFRTixFQUFJTyxXQUFXLGFBQWVQLEVBQUlRLE1BQU0sUUFBVVIsRUFBSVMsUUFBUSxPQUFTVCxFQUFJVSxXQUN2TkMsRUFBa0IsRyxzSEN1Q3RCLHlCQUVBLFlBQ0EsQ0FDQSxnQkFDQSwwRkFFQSxDQUNBLFlBQ0Esc0ZBRUEsQ0FDQSxpQkFDQSw4Q0FFQSxDQUNBLGdCQUNBLDJGQUlBLCtCQUNBLHlDQUdBLGFBQ0EsZ0VBQ0Esc0RBQ0EsMkRBQ0EsMEVBRUEsT0FDQSxxQ0FDQSxpQ0FDQSxzQ0FDQSx1Q0FJQSxjQUNBLGNBQ0EsNEJBQ0EsMkJBQ0Esd0JBQ0EsVUFDQSx1QkFDQSxnQkFDQSwyQkFFQSxPQUNBLFNBQ0EsaUJBQ0EsZ0JBQ0EsZ0RBQ0EsS0FDQSxlQUNBLHlCQUNBLGlCQUNBLDJCQU9BLGlCQUNBLDhCQUdBLG9CQUNBLFNBQ0Esb0RBQ0EscURBQ0EseURBQ0EsaUJBQ0Esc0RBRUEsK0VBQ0EsU0FJQSxrQkFDQSxZQUNBLHdFQUVBLG9CQUVBLFNBQ0Esd0JBQ0EsZ0JBQ0EsMEJBQ0EseUJBbUJBLE9BakJBLCtCQUNBLGFBRUEsMkJBQ0EsdURBQ0EsdUVBQ0EsZ0RBQ0EsTUFFQSxRQUVBLGFBQ0EsY0FDQSxrQkFDQSxpQkFHQSxJQS9HQSxhQUxBLFNBQ0EsWUFDQSxpQ0FHQSxHLFVDeEMwZCxJLGNDT3RkQyxHQUFZLE9BQ2QsRUFDQWIsRUFDQVksR0FDQSxFQUNBLEtBQ0EsS0FDQSxNQUlGLFFBQWVDLEVBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vRXhwZWRpdGlvbi1GaW5kcy52dWU/ODRiNiIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vRXhwZWRpdGlvbi1GaW5kcy52dWU/OGRkZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9FeHBlZGl0aW9uLUZpbmRzLnZ1ZT9mYjA3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL0V4cGVkaXRpb24tRmluZHMudnVlP2MxMzIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2xpZmVmb3JtLWJvbnVzZXMtYnJlYWtkb3duJyx7YXR0cnM6e1widHlwZXNcIjpfdm0uYm9udXNUeXBlcyxcInRlY2hub2xvZ2llc1wiOl92bS50ZWNocyxcInBsYW5ldHNcIjpfdm0ucGxhbmV0cyxcImxpbWl0c1wiOl92bS5saW1pdHN9fSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxsaWZlZm9ybS1ib251c2VzLWJyZWFrZG93biA6dHlwZXM9XCJib251c1R5cGVzXCIgOnRlY2hub2xvZ2llcz1cInRlY2hzXCIgOnBsYW5ldHM9XCJwbGFuZXRzXCIgOmxpbWl0cz1cImxpbWl0c1wiIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0IGxhbmc9XCJ0c1wiPlxyXG4gICAgaW1wb3J0IHsgUGxhbmV0RGF0YSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9lbXBpcmUvUGxhbmV0RGF0YSc7XHJcbiAgICBpbXBvcnQgeyBnZXRMaWZlZm9ybUxldmVsVGVjaG5vbG9neUJvbnVzIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9leHBlcmllbmNlJztcclxuICAgIGltcG9ydCB7IExpZmVmb3JtVGVjaG5vbG9neVR5cGUgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtVGVjaG5vbG9neVR5cGUnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UeXBlLCBWYWxpZExpZmVmb3JtVHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1UeXBlJztcclxuICAgIGltcG9ydCB7IEV4cGVkaXRpb25Cb251c0xpZmVmb3JtVGVjaG5vbG9neSwgRXhwZWRpdGlvbkV2ZW50UHJvYmFiaWxpdHlCb251c0xpZmVmb3JtVGVjaG5vbG9neSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvdGVjaG5vbG9naWVzL2ludGVyZmFjZXMnO1xyXG4gICAgaW1wb3J0IHsgRXhwZWRpdGlvbkJvbnVzTGlmZWZvcm1UZWNobm9sb2dpZXMsIEV4cGVkaXRpb25FdmVudFByb2JhYmlsaXR5Qm9udXNMaWZlZm9ybVRlY2hub2xvZ2llcywgTGlmZWZvcm1UZWNobm9sb2dpZXNCeVR5cGUgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL3RlY2hub2xvZ2llcy9MaWZlZm9ybVRlY2hub2xvZ2llcyc7XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVNYXBwZWRSZWNvcmQsIGNyZWF0ZVJlY29yZCB9IGZyb20gJ0Avc2hhcmVkL3V0aWxzL2NyZWF0ZVJlY29yZCc7XHJcbiAgICBpbXBvcnQgeyBFbXBpcmVEYXRhTW9kdWxlIH0gZnJvbSAnQC92aWV3cy9zdGF0cy9kYXRhL0VtcGlyZURhdGFNb2R1bGUnO1xyXG4gICAgaW1wb3J0IHsgZ2V0UGxhbmV0TGlmZWZvcm1UZWNobm9sb2d5Qm9vc3QgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL21vZGVscy9saWZlZm9ybXMnO1xyXG4gICAgaW1wb3J0IHsgQ29tcG9uZW50LCBWdWUgfSBmcm9tICd2dWUtcHJvcGVydHktZGVjb3JhdG9yJztcclxuICAgIGltcG9ydCBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd24sIHsgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duVHlwZSwgTGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duIH0gZnJvbSAnQC92aWV3cy9zdGF0cy9jb21wb25lbnRzL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzZXNCcmVha2Rvd24udnVlJztcclxuICAgIGltcG9ydCB7IEV4cGVkaXRpb25FdmVudFR5cGUgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvZXhwZWRpdGlvbnMvRXhwZWRpdGlvbkV2ZW50VHlwZSc7XHJcbiAgICBpbXBvcnQgeyBnZXRMaWZlZm9ybUJvbnVzTGltaXQgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNMaW1pdHMnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1Cb251c1R5cGVJZCB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1Cb251c1R5cGUnO1xyXG5cclxuICAgIHR5cGUgRXhwZWRpdGlvbkJvbnVzZXMgPSB7XHJcbiAgICAgICAgcmVzb3VyY2VzOiBudW1iZXI7XHJcbiAgICAgICAgc2hpcHM6IG51bWJlcjtcclxuICAgICAgICBkYXJrTWF0dGVyOiBudW1iZXI7XHJcbiAgICAgICAgZmxlZXRMb3NzOiBudW1iZXI7XHJcbiAgICB9O1xyXG5cclxuICAgIHR5cGUgRXhwZWRpdGlvbkJvbnVzQnJlYWtkb3duID0ge1xyXG4gICAgICAgIGJhc2U6IEV4cGVkaXRpb25Cb251c2VzO1xyXG4gICAgICAgIGxldmVsOiBFeHBlZGl0aW9uQm9udXNlcztcclxuICAgICAgICBidWlsZGluZ3M6IEV4cGVkaXRpb25Cb251c2VzO1xyXG4gICAgICAgIGJ1aWxkaW5nc0Jvb3N0OiBudW1iZXI7XHJcbiAgICAgICAgdG90YWw6IEV4cGVkaXRpb25Cb251c2VzO1xyXG4gICAgfTtcclxuXHJcbiAgICBAQ29tcG9uZW50KHtcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIExpZmVmb3JtQm9udXNlc0JyZWFrZG93bixcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZWRpdGlvbkZpbmRzIGV4dGVuZHMgVnVlIHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBib251c1R5cGVzOiBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd25UeXBlPGtleW9mIEV4cGVkaXRpb25Cb251c2VzPltdID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdyZXNvdXJjZXMnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuJGkxOG4uJHQuZXh0ZW5zaW9uLmVtcGlyZS5saWZlZm9ybXMucmVzZWFyY2hCb251c2VzLmV4cGVkaXRpb25GaW5kcy5yZXNvdXJjZXMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NoaXBzJyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLiRpMThuLiR0LmV4dGVuc2lvbi5lbXBpcmUubGlmZWZvcm1zLnJlc2VhcmNoQm9udXNlcy5leHBlZGl0aW9uRmluZHMuc2hpcHMsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ2RhcmtNYXR0ZXInLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuJGkxOG4uJHQub2dhbWUucHJlbWl1bS5kYXJrTWF0dGVyLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdmbGVldExvc3MnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuJGkxOG4uJHQuZXh0ZW5zaW9uLmVtcGlyZS5saWZlZm9ybXMucmVzZWFyY2hCb251c2VzLmV4cGVkaXRpb25GaW5kcy5mbGVldExvc3MsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZWNobm9sb2dpZXMgPSBbLi4uRXhwZWRpdGlvbkV2ZW50UHJvYmFiaWxpdHlCb251c0xpZmVmb3JtVGVjaG5vbG9naWVzLCAuLi5FeHBlZGl0aW9uQm9udXNMaWZlZm9ybVRlY2hub2xvZ2llc107XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZWNoczogTGlmZWZvcm1UZWNobm9sb2d5VHlwZVtdID0gdGhpcy50ZWNobm9sb2dpZXMubWFwKHQgPT4gdC50eXBlKTtcclxuXHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGxpbWl0cygpOiBSZWNvcmQ8a2V5b2YgRXhwZWRpdGlvbkJvbnVzZXMsICh2YWx1ZTogbnVtYmVyKSA9PiBudW1iZXI+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VzTGltaXQgPSBnZXRMaWZlZm9ybUJvbnVzTGltaXQoeyB0eXBlOiBMaWZlZm9ybUJvbnVzVHlwZUlkLkV4cGVkaXRpb25Cb251cywgZXZlbnQ6IEV4cGVkaXRpb25FdmVudFR5cGUucmVzb3VyY2VzIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwc0xpbWl0ID0gZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5FeHBlZGl0aW9uQm9udXMsIGV2ZW50OiBFeHBlZGl0aW9uRXZlbnRUeXBlLmZsZWV0IH0pO1xyXG4gICAgICAgICAgICBjb25zdCBkYXJrTWF0dGVyTGltaXQgPSBnZXRMaWZlZm9ybUJvbnVzTGltaXQoeyB0eXBlOiBMaWZlZm9ybUJvbnVzVHlwZUlkLkV4cGVkaXRpb25Cb251cywgZXZlbnQ6IEV4cGVkaXRpb25FdmVudFR5cGUuZGFya01hdHRlciB9KTtcclxuICAgICAgICAgICAgY29uc3QgZmxlZXRMb3NzTGltaXQgPSBnZXRMaWZlZm9ybUJvbnVzTGltaXQoeyB0eXBlOiBMaWZlZm9ybUJvbnVzVHlwZUlkLkV4cGVkaXRpb25FdmVudFByb2JhYmlsaXR5Qm9udXMsIGV2ZW50OiBFeHBlZGl0aW9uRXZlbnRUeXBlLmxvc3RGbGVldCB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZXM6IHZhbHVlID0+IHJlc291cmNlc0xpbWl0ICE9IG51bGwgPyBNYXRoLm1pbih2YWx1ZSwgcmVzb3VyY2VzTGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzaGlwczogdmFsdWUgPT4gc2hpcHNMaW1pdCAhPSBudWxsID8gTWF0aC5taW4odmFsdWUsIHNoaXBzTGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkYXJrTWF0dGVyOiB2YWx1ZSA9PiBkYXJrTWF0dGVyTGltaXQgIT0gbnVsbCA/IE1hdGgubWluKHZhbHVlLCBkYXJrTWF0dGVyTGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBmbGVldExvc3M6IHZhbHVlID0+IGZsZWV0TG9zc0xpbWl0ICE9IG51bGwgPyBNYXRoLm1heCh2YWx1ZSwgLWZsZWV0TG9zc0xpbWl0KSA6IHZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgcGxhbmV0cygpOiBSZWNvcmQ8bnVtYmVyLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd248a2V5b2YgRXhwZWRpdGlvbkJvbnVzZXM+W10+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZU1hcHBlZFJlY29yZChcclxuICAgICAgICAgICAgICAgIEVtcGlyZURhdGFNb2R1bGUuZW1waXJlLnBsYW5ldE9yZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChpZCA9PiBFbXBpcmVEYXRhTW9kdWxlLmVtcGlyZS5wbGFuZXRzW2lkXSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHBsYW5ldCA9PiAhcGxhbmV0LmlzTW9vbikgYXMgUGxhbmV0RGF0YVtdLFxyXG4gICAgICAgICAgICAgICAgcGxhbmV0ID0+IHBsYW5ldC5pZCxcclxuICAgICAgICAgICAgICAgIHBsYW5ldCA9PiB0aGlzLnRlY2hzLm1hcDxMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd248a2V5b2YgRXhwZWRpdGlvbkJvbnVzZXM+Pih0ZWNoVHlwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVjaCA9IExpZmVmb3JtVGVjaG5vbG9naWVzQnlUeXBlW3RlY2hUeXBlXSBhcyBFeHBlZGl0aW9uQm9udXNMaWZlZm9ybVRlY2hub2xvZ3kgfCBFeHBlZGl0aW9uRXZlbnRQcm9iYWJpbGl0eUJvbnVzTGlmZWZvcm1UZWNobm9sb2d5O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBsYW5ldEJvbnVzZXMgPSB0aGlzLmdldFBsYW5ldEJvbnVzKHRlY2gsIHBsYW5ldCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5ldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVjaG5vbG9neVR5cGU6IHRlY2hUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib251c2VzOiBjcmVhdGVSZWNvcmQ8a2V5b2YgRXhwZWRpdGlvbkJvbnVzZXMsIExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93blsnYm9udXNlcyddW3N0cmluZ10+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydyZXNvdXJjZXMnLCAnc2hpcHMnLCAnZGFya01hdHRlcicsICdmbGVldExvc3MnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHBsYW5ldEJvbnVzZXMuYmFzZVtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogcGxhbmV0Qm9udXNlcy5idWlsZGluZ3Nba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogcGxhbmV0Qm9udXNlcy5sZXZlbFtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBwbGFuZXRCb251c2VzLnRvdGFsW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBleHBlcmllbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1waXJlRGF0YU1vZHVsZS5saWZlZm9ybUV4cGVyaWVuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBsYW5ldEJvbnVzKHRlY2g6IEV4cGVkaXRpb25Cb251c0xpZmVmb3JtVGVjaG5vbG9neSB8IEV4cGVkaXRpb25FdmVudFByb2JhYmlsaXR5Qm9udXNMaWZlZm9ybVRlY2hub2xvZ3ksIHBsYW5ldDogUGxhbmV0RGF0YSk6IEV4cGVkaXRpb25Cb251c0JyZWFrZG93biB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogRXhwZWRpdGlvbkJvbnVzQnJlYWtkb3duID0ge1xyXG4gICAgICAgICAgICAgICAgYmFzZTogeyByZXNvdXJjZXM6IDAsIHNoaXBzOiAwLCBkYXJrTWF0dGVyOiAwLCBmbGVldExvc3M6IDAgfSxcclxuICAgICAgICAgICAgICAgIGxldmVsOiB7IHJlc291cmNlczogMCwgc2hpcHM6IDAsIGRhcmtNYXR0ZXI6IDAsIGZsZWV0TG9zczogMCB9LFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiB7IHJlc291cmNlczogMCwgc2hpcHM6IDAsIGRhcmtNYXR0ZXI6IDAsIGZsZWV0TG9zczogMCB9LFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzQm9vc3Q6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogeyByZXNvdXJjZXM6IDAsIHNoaXBzOiAwLCBkYXJrTWF0dGVyOiAwLCBmbGVldExvc3M6IDAgfSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHBsYW5ldC5hY3RpdmVMaWZlZm9ybSA9PSBMaWZlZm9ybVR5cGUubm9uZSB8fCAhcGxhbmV0LmFjdGl2ZUxpZmVmb3JtVGVjaG5vbG9naWVzLmluY2x1ZGVzKHRlY2gudHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWlsZGluZ3NCb29zdCA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgZ2V0UGxhbmV0TGlmZWZvcm1UZWNobm9sb2d5Qm9vc3QocGxhbmV0KSxcclxuICAgICAgICAgICAgICAgIGdldExpZmVmb3JtQm9udXNMaW1pdCh7IHR5cGU6IExpZmVmb3JtQm9udXNUeXBlSWQuTGlmZWZvcm1SZXNlYXJjaEJvbnVzQm9vc3QgfSkgPz8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5idWlsZGluZ3NCb29zdCArPSBidWlsZGluZ3NCb29zdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcHBpbmc6IFJlY29yZDxrZXlvZiBFeHBlZGl0aW9uQm9udXNlcywgRXhwZWRpdGlvbkV2ZW50VHlwZT4gPSB7XHJcbiAgICAgICAgICAgICAgICByZXNvdXJjZXM6IEV4cGVkaXRpb25FdmVudFR5cGUucmVzb3VyY2VzLFxyXG4gICAgICAgICAgICAgICAgc2hpcHM6IEV4cGVkaXRpb25FdmVudFR5cGUuZmxlZXQsXHJcbiAgICAgICAgICAgICAgICBkYXJrTWF0dGVyOiBFeHBlZGl0aW9uRXZlbnRUeXBlLmRhcmtNYXR0ZXIsXHJcbiAgICAgICAgICAgICAgICBmbGVldExvc3M6IEV4cGVkaXRpb25FdmVudFR5cGUubG9zdEZsZWV0LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAoT2JqZWN0LmVudHJpZXMobWFwcGluZykgYXMgW2tleW9mIEV4cGVkaXRpb25Cb251c2VzLCBFeHBlZGl0aW9uRXZlbnRUeXBlXVtdKS5mb3JFYWNoKHBhaXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2JvbnVzVHlwZSwgZXZlbnRUeXBlXSA9IHBhaXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZUJvbnVzID0gJ2dldEV4cGVkaXRpb25Cb251cycgaW4gdGVjaFxyXG4gICAgICAgICAgICAgICAgICAgID8gdGVjaC5nZXRFeHBlZGl0aW9uQm9udXMoZXZlbnRUeXBlLCBwbGFuZXQubGlmZWZvcm1UZWNobm9sb2dpZXNbdGVjaC50eXBlXSlcclxuICAgICAgICAgICAgICAgICAgICA6IHRlY2guZ2V0RXhwZWRpdGlvbkV2ZW50UHJvYmFiaWxpdHlCb251cyhldmVudFR5cGUsIHBsYW5ldC5saWZlZm9ybVRlY2hub2xvZ2llc1t0ZWNoLnR5cGVdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtTGV2ZWxCb251cyA9IGJhc2VCb251cyAqIGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXModGhpcy5leHBlcmllbmNlW3BsYW5ldC5hY3RpdmVMaWZlZm9ybSBhcyBWYWxpZExpZmVmb3JtVHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlmZWZvcm1CdWlsZGluZ0JvbnVzID0gYmFzZUJvbnVzICogYnVpbGRpbmdzQm9vc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBiYXNlQm9udXMgKyBsaWZlZm9ybUxldmVsQm9udXMgKyBsaWZlZm9ybUJ1aWxkaW5nQm9udXM7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmJhc2VbYm9udXNUeXBlXSArPSBiYXNlQm9udXM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubGV2ZWxbYm9udXNUeXBlXSArPSBsaWZlZm9ybUxldmVsQm9udXM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYnVpbGRpbmdzW2JvbnVzVHlwZV0gKz0gbGlmZWZvcm1CdWlsZGluZ0JvbnVzO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRvdGFsW2JvbnVzVHlwZV0gKz0gdG90YWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FeHBlZGl0aW9uLUZpbmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTQwWzBdLnJ1bGVzWzBdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0V4cGVkaXRpb24tRmluZHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FeHBlZGl0aW9uLUZpbmRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MDVjZWI2YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FeHBlZGl0aW9uLUZpbmRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRXhwZWRpdGlvbi1GaW5kcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJhdHRycyIsImJvbnVzVHlwZXMiLCJ0ZWNocyIsInBsYW5ldHMiLCJsaW1pdHMiLCJzdGF0aWNSZW5kZXJGbnMiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9