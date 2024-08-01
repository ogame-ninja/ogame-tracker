"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[1818],{6798:(e,s,t)=>{t.r(s),t.d(s,{default:()=>B});var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("select",{directives:[{name:"model",rawName:"v-model.number",value:e.ship,expression:"ship",modifiers:{number:!0}}],staticStyle:{display:"block","margin-bottom":"4px"},on:{change:function(s){var t=Array.prototype.filter.call(s.target.options,(function(e){return e.selected})).map((function(s){var t="_value"in s?s._value:s.value;return e._n(t)}));e.ship=s.target.multiple?t:t[0]}}},e._l(e.Ships,(function(s){return t("option",{key:s,domProps:{value:s,textContent:e._s(e.$i18n.$t.ogame.ships[s])}})})),0),t("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits},scopedSlots:e._u([{key:"header",fn:function(){return[t("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"start"}},[t("span",[t("o-ship",{staticClass:"mr-2",attrs:{ship:e.ship}}),t("span",{domProps:{textContent:e._s(e.$i18n.$t.ogame.ships[e.ship])}})],1)])]},proxy:!0}])})],1)},n=[],o=t(655),a=t(147),r=t(3418),l=t(4846),p=t(9751),h=t(8395),m=t(1786),c=t(4028),u=t(3894),d=t(2057),g=t(248),f=t(7848),b=t(7377);let y=class extends c.w3{bonusTypes=[{key:"armor",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.ships.armor},{key:"shield",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.ships.shield},{key:"damage",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.ships.damage},{key:"cargo",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.ships.cargo},{key:"speed",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.ships.speed}];technologies=l.$z;get techs(){return this.technologies.filter((e=>e.appliesTo(this.ship))).map((e=>e.type))}get limits(){const e=(0,f.K)({type:b.f.StatsBonus,tech:this.ship});return{armor:s=>null!=e?Math.min(s,e):s,shield:s=>null!=e?Math.min(s,e):s,damage:s=>null!=e?Math.min(s,e):s,cargo:s=>null!=e?Math.min(s,e):s,speed:s=>null!=e?Math.min(s,e):s}}ship=d.g.largeCargo;Ships=g.GI;get planets(){return(0,p.r)(h.p.empire.planetOrder.map((e=>h.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.technologies.map((s=>{const t=this.getPlanetBonus(s,e);return{planet:e,technologyType:s.type,bonuses:(0,p.a)(["armor","shield","damage","cargo","speed"],(e=>({base:t.base[e],buildings:t.buildings[e],level:t.level[e],total:t.total[e]})))}}))))}get experience(){return h.p.lifeformExperience}getPlanetBonus(e,s){const t={base:{armor:0,shield:0,damage:0,cargo:0,speed:0},level:{armor:0,shield:0,damage:0,cargo:0,speed:0},buildings:{armor:0,shield:0,damage:0,cargo:0,speed:0},buildingsBoost:0,total:{armor:0,shield:0,damage:0,cargo:0,speed:0}};if(s.activeLifeform==r.e5.none||!s.activeLifeformTechnologies.includes(e.type)||!e.appliesTo(this.ship))return t;const i=Math.min((0,m.io)(s),(0,f.K)({type:b.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);t.buildingsBoost+=i;const n=e.getStatsBonus(this.ship,s.lifeformTechnologies[e.type]),o={armor:"armor",shield:"shield",damage:"damage",cargo:"cargo",speed:"speed"};return Object.entries(o).forEach((e=>{const[o,r]=e,l=n[r],p=l*(0,a.g1)(this.experience[s.activeLifeform]),h=l*i,m=l+p+h;t.base[o]+=l,t.level[o]+=p,t.buildings[o]+=h,t.total[o]+=m})),t}};y=(0,o.gn)([(0,c.wA)({components:{LifeformBonusesBreakdown:u.Z}})],y);const v=y,x=v;var k=t(1001),$=(0,k.Z)(x,i,n,!1,null,null,null);const B=$.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a2Rvd24vU2hpcHMudnVlP2FkM2MiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL1NoaXBzLnZ1ZT8xNDNmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL1NoaXBzLnZ1ZT9lZjY5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL1NoaXBzLnZ1ZT8xZDdkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLFtfYygnc2VsZWN0Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsLm51bWJlclwiLHZhbHVlOihfdm0uc2hpcCksZXhwcmVzc2lvbjpcInNoaXBcIixtb2RpZmllcnM6e1wibnVtYmVyXCI6dHJ1ZX19XSxzdGF0aWNTdHlsZTp7XCJkaXNwbGF5XCI6XCJibG9ja1wiLFwibWFyZ2luLWJvdHRvbVwiOlwiNHB4XCJ9LG9uOntcImNoYW5nZVwiOmZ1bmN0aW9uKCRldmVudCl7dmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLGZ1bmN0aW9uKG8pe3JldHVybiBvLnNlbGVjdGVkfSkubWFwKGZ1bmN0aW9uKG8pe3ZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7cmV0dXJuIF92bS5fbih2YWwpfSk7IF92bS5zaGlwPSRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXX19fSxfdm0uX2woKF92bS5TaGlwcyksZnVuY3Rpb24oc2hpcCl7cmV0dXJuIF9jKCdvcHRpb24nLHtrZXk6c2hpcCxkb21Qcm9wczp7XCJ2YWx1ZVwiOnNoaXAsXCJ0ZXh0Q29udGVudFwiOl92bS5fcyhfdm0uJGkxOG4uJHQub2dhbWUuc2hpcHNbc2hpcF0pfX0pfSksMCksX2MoJ2xpZmVmb3JtLWJvbnVzZXMtYnJlYWtkb3duJyx7YXR0cnM6e1widHlwZXNcIjpfdm0uYm9udXNUeXBlcyxcInRlY2hub2xvZ2llc1wiOl92bS50ZWNocyxcInBsYW5ldHNcIjpfdm0ucGxhbmV0cyxcImxpbWl0c1wiOl92bS5saW1pdHN9LHNjb3BlZFNsb3RzOl92bS5fdShbe2tleTpcImhlYWRlclwiLGZuOmZ1bmN0aW9uKCl7cmV0dXJuIFtfYygnZGl2Jyx7c3RhdGljU3R5bGU6e1wiZGlzcGxheVwiOlwiZmxleFwiLFwiZmxleC1kaXJlY3Rpb25cIjpcImNvbHVtblwiLFwiYWxpZ24taXRlbXNcIjpcInN0YXJ0XCJ9fSxbX2MoJ3NwYW4nLFtfYygnby1zaGlwJyx7c3RhdGljQ2xhc3M6XCJtci0yXCIsYXR0cnM6e1wic2hpcFwiOl92bS5zaGlwfX0pLF9jKCdzcGFuJyx7ZG9tUHJvcHM6e1widGV4dENvbnRlbnRcIjpfdm0uX3MoX3ZtLiRpMThuLiR0Lm9nYW1lLnNoaXBzW192bS5zaGlwXSl9fSldLDEpXSldfSxwcm94eTp0cnVlfV0pfSldLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxzZWxlY3Qgdi1tb2RlbC5udW1iZXI9XCJzaGlwXCIgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogNHB4XCI+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJzaGlwIGluIFNoaXBzXCIgOmtleT1cInNoaXBcIiA6dmFsdWU9XCJzaGlwXCIgdi10ZXh0PVwiJGkxOG4uJHQub2dhbWUuc2hpcHNbc2hpcF1cIiAvPlxyXG4gICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICA8bGlmZWZvcm0tYm9udXNlcy1icmVha2Rvd24gOnR5cGVzPVwiYm9udXNUeXBlc1wiIDp0ZWNobm9sb2dpZXM9XCJ0ZWNoc1wiIDpwbGFuZXRzPVwicGxhbmV0c1wiIDpsaW1pdHM9XCJsaW1pdHNcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlICNoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IHN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvLXNoaXAgOnNoaXA9XCJzaGlwXCIgY2xhc3M9XCJtci0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi10ZXh0PVwiJGkxOG4uJHQub2dhbWUuc2hpcHNbc2hpcF1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvbGlmZWZvcm0tYm9udXNlcy1icmVha2Rvd24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBQbGFuZXREYXRhIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL2VtcGlyZS9QbGFuZXREYXRhJztcclxuICAgIGltcG9ydCB7IGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL2V4cGVyaWVuY2UnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UZWNobm9sb2d5VHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1UZWNobm9sb2d5VHlwZSc7XHJcbiAgICBpbXBvcnQgeyBMaWZlZm9ybVR5cGUsIFZhbGlkTGlmZWZvcm1UeXBlIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVR5cGUnO1xyXG4gICAgaW1wb3J0IHsgU3RhdHNCb251cywgU3RhdHNCb251c0xpZmVmb3JtVGVjaG5vbG9neSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvdGVjaG5vbG9naWVzL2ludGVyZmFjZXMnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UZWNobm9sb2dpZXNCeVR5cGUsIFN0YXRzQm9udXNMaWZlZm9ybVRlY2hub2xvZ2llcyB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvdGVjaG5vbG9naWVzL0xpZmVmb3JtVGVjaG5vbG9naWVzJztcclxuICAgIGltcG9ydCB7IGNyZWF0ZU1hcHBlZFJlY29yZCwgY3JlYXRlUmVjb3JkIH0gZnJvbSAnQC9zaGFyZWQvdXRpbHMvY3JlYXRlUmVjb3JkJztcclxuICAgIGltcG9ydCB7IEVtcGlyZURhdGFNb2R1bGUgfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2RhdGEvRW1waXJlRGF0YU1vZHVsZSc7XHJcbiAgICBpbXBvcnQgeyBnZXRQbGFuZXRMaWZlZm9ybVRlY2hub2xvZ3lCb29zdCB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvbW9kZWxzL2xpZmVmb3Jtcyc7XHJcbiAgICBpbXBvcnQgeyBDb21wb25lbnQsIFZ1ZSB9IGZyb20gJ3Z1ZS1wcm9wZXJ0eS1kZWNvcmF0b3InO1xyXG4gICAgaW1wb3J0IExpZmVmb3JtQm9udXNlc0JyZWFrZG93biwgeyBMaWZlZm9ybUJvbnVzZXNCcmVha2Rvd25UeXBlLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd24gfSBmcm9tICdAL3ZpZXdzL3N0YXRzL2NvbXBvbmVudHMvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNlc0JyZWFrZG93bi52dWUnO1xyXG4gICAgaW1wb3J0IHsgU2hpcFR5cGUgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvc2hpcHMvU2hpcFR5cGUnO1xyXG4gICAgaW1wb3J0IHsgU2hpcFR5cGVzIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL3NoaXBzL1NoaXBUeXBlcyc7XHJcbmltcG9ydCB7IGdldExpZmVmb3JtQm9udXNMaW1pdCB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1Cb251c0xpbWl0cyc7XHJcbmltcG9ydCB7IExpZmVmb3JtQm9udXNUeXBlSWQgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNUeXBlJztcclxuXHJcbiAgICB0eXBlIFN0YXRzQm9udXNlcyA9IHtcclxuICAgICAgICBhcm1vcjogbnVtYmVyO1xyXG4gICAgICAgIHNoaWVsZDogbnVtYmVyO1xyXG4gICAgICAgIGRhbWFnZTogbnVtYmVyO1xyXG4gICAgICAgIGNhcmdvOiBudW1iZXI7XHJcbiAgICAgICAgc3BlZWQ6IG51bWJlcjtcclxuICAgIH07XHJcblxyXG4gICAgdHlwZSBTaGlwQm9udXNCcmVha2Rvd24gPSB7XHJcbiAgICAgICAgYmFzZTogU3RhdHNCb251c2VzO1xyXG4gICAgICAgIGxldmVsOiBTdGF0c0JvbnVzZXM7XHJcbiAgICAgICAgYnVpbGRpbmdzOiBTdGF0c0JvbnVzZXM7XHJcbiAgICAgICAgYnVpbGRpbmdzQm9vc3Q6IG51bWJlcjtcclxuICAgICAgICB0b3RhbDogU3RhdHNCb251c2VzO1xyXG4gICAgfTtcclxuXHJcbiAgICBAQ29tcG9uZW50KHtcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIExpZmVmb3JtQm9udXNlc0JyZWFrZG93bixcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwZWRpdGlvbnMgZXh0ZW5kcyBWdWUge1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGJvbnVzVHlwZXM6IExpZmVmb3JtQm9udXNlc0JyZWFrZG93blR5cGU8a2V5b2YgU3RhdHNCb251c2VzPltdID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdhcm1vcicsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMuc2hpcHMuYXJtb3IsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3NoaWVsZCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMuc2hpcHMuc2hpZWxkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdkYW1hZ2UnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuJGkxOG4uJHQuZXh0ZW5zaW9uLmVtcGlyZS5saWZlZm9ybXMucmVzZWFyY2hCb251c2VzLnNoaXBzLmRhbWFnZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAga2V5OiAnY2FyZ28nLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuJGkxOG4uJHQuZXh0ZW5zaW9uLmVtcGlyZS5saWZlZm9ybXMucmVzZWFyY2hCb251c2VzLnNoaXBzLmNhcmdvLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdzcGVlZCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMuc2hpcHMuc3BlZWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSB0ZWNobm9sb2dpZXMgPSBTdGF0c0JvbnVzTGlmZWZvcm1UZWNobm9sb2dpZXM7XHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgdGVjaHMoKTogTGlmZWZvcm1UZWNobm9sb2d5VHlwZVtdIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVjaG5vbG9naWVzXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHRlY2ggPT4gdGVjaC5hcHBsaWVzVG8odGhpcy5zaGlwKSlcclxuICAgICAgICAgICAgICAgIC5tYXAodCA9PiB0LnR5cGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgbGltaXRzKCk6IFJlY29yZDxrZXlvZiBTdGF0c0JvbnVzZXMsICh2YWx1ZTogbnVtYmVyKSA9PiBudW1iZXI+IHtcclxuICAgICAgICAgICAgY29uc3QgbGltaXQgPSBnZXRMaWZlZm9ybUJvbnVzTGltaXQoeyB0eXBlOiBMaWZlZm9ybUJvbnVzVHlwZUlkLlN0YXRzQm9udXMsIHRlY2g6IHRoaXMuc2hpcCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGFybW9yOiB2YWx1ZSA9PiBsaW1pdCAhPSBudWxsID8gTWF0aC5taW4odmFsdWUsIGxpbWl0KSA6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2hpZWxkOiB2YWx1ZSA9PiBsaW1pdCAhPSBudWxsID8gTWF0aC5taW4odmFsdWUsIGxpbWl0KSA6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGFtYWdlOiB2YWx1ZSA9PiBsaW1pdCAhPSBudWxsID8gTWF0aC5taW4odmFsdWUsIGxpbWl0KSA6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgY2FyZ286IHZhbHVlID0+IGxpbWl0ICE9IG51bGwgPyBNYXRoLm1pbih2YWx1ZSwgbGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICBzcGVlZDogdmFsdWUgPT4gbGltaXQgIT0gbnVsbCA/IE1hdGgubWluKHZhbHVlLCBsaW1pdCkgOiB2YWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2hpcCA9IFNoaXBUeXBlLmxhcmdlQ2FyZ287XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBTaGlwcyA9IFNoaXBUeXBlcztcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgcGxhbmV0cygpOiBSZWNvcmQ8bnVtYmVyLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd248a2V5b2YgU3RhdHNCb251c2VzPltdPiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVNYXBwZWRSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICBFbXBpcmVEYXRhTW9kdWxlLmVtcGlyZS5wbGFuZXRPcmRlclxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoaWQgPT4gRW1waXJlRGF0YU1vZHVsZS5lbXBpcmUucGxhbmV0c1tpZF0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihwbGFuZXQgPT4gIXBsYW5ldC5pc01vb24pIGFzIFBsYW5ldERhdGFbXSxcclxuICAgICAgICAgICAgICAgIHBsYW5ldCA9PiBwbGFuZXQuaWQsXHJcbiAgICAgICAgICAgICAgICBwbGFuZXQgPT4gdGhpcy50ZWNobm9sb2dpZXNcclxuICAgICAgICAgICAgICAgICAgICAubWFwPExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93bjxrZXlvZiBTdGF0c0JvbnVzZXM+Pih0ZWNoID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxhbmV0Qm9udXNlcyA9IHRoaXMuZ2V0UGxhbmV0Qm9udXModGVjaCwgcGxhbmV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZWNobm9sb2d5VHlwZTogdGVjaC50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9udXNlczogY3JlYXRlUmVjb3JkPGtleW9mIFN0YXRzQm9udXNlcywgTGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duWydib251c2VzJ11bc3RyaW5nXT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydhcm1vcicsICdzaGllbGQnLCAnZGFtYWdlJywgJ2NhcmdvJywgJ3NwZWVkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2U6IHBsYW5ldEJvbnVzZXMuYmFzZVtrZXldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsZGluZ3M6IHBsYW5ldEJvbnVzZXMuYnVpbGRpbmdzW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBwbGFuZXRCb251c2VzLmxldmVsW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBwbGFuZXRCb251c2VzLnRvdGFsW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldCBleHBlcmllbmNlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1waXJlRGF0YU1vZHVsZS5saWZlZm9ybUV4cGVyaWVuY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBsYW5ldEJvbnVzKHRlY2g6IFN0YXRzQm9udXNMaWZlZm9ybVRlY2hub2xvZ3ksIHBsYW5ldDogUGxhbmV0RGF0YSk6IFNoaXBCb251c0JyZWFrZG93biB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogU2hpcEJvbnVzQnJlYWtkb3duID0ge1xyXG4gICAgICAgICAgICAgICAgYmFzZTogeyBhcm1vcjogMCwgc2hpZWxkOiAwLCBkYW1hZ2U6IDAsIGNhcmdvOiAwLCBzcGVlZDogMCB9LFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IHsgYXJtb3I6IDAsIHNoaWVsZDogMCwgZGFtYWdlOiAwLCBjYXJnbzogMCwgc3BlZWQ6IDAgfSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogeyBhcm1vcjogMCwgc2hpZWxkOiAwLCBkYW1hZ2U6IDAsIGNhcmdvOiAwLCBzcGVlZDogMCB9LFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzQm9vc3Q6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogeyBhcm1vcjogMCwgc2hpZWxkOiAwLCBkYW1hZ2U6IDAsIGNhcmdvOiAwLCBzcGVlZDogMCB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHBsYW5ldC5hY3RpdmVMaWZlZm9ybSA9PSBMaWZlZm9ybVR5cGUubm9uZVxyXG4gICAgICAgICAgICAgICAgfHwgIXBsYW5ldC5hY3RpdmVMaWZlZm9ybVRlY2hub2xvZ2llcy5pbmNsdWRlcyh0ZWNoLnR5cGUpXHJcbiAgICAgICAgICAgICAgICB8fCAhdGVjaC5hcHBsaWVzVG8odGhpcy5zaGlwKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWlsZGluZ3NCb29zdCA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgZ2V0UGxhbmV0TGlmZWZvcm1UZWNobm9sb2d5Qm9vc3QocGxhbmV0KSxcclxuICAgICAgICAgICAgICAgIGdldExpZmVmb3JtQm9udXNMaW1pdCh7IHR5cGU6IExpZmVmb3JtQm9udXNUeXBlSWQuTGlmZWZvcm1SZXNlYXJjaEJvbnVzQm9vc3QgfSkgPz8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5idWlsZGluZ3NCb29zdCArPSBidWlsZGluZ3NCb29zdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvbnVzZXMgPSB0ZWNoLmdldFN0YXRzQm9udXModGhpcy5zaGlwLCBwbGFuZXQubGlmZWZvcm1UZWNobm9sb2dpZXNbdGVjaC50eXBlXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXBwaW5nOiBSZWNvcmQ8a2V5b2YgU3RhdHNCb251c2VzLCBrZXlvZiBTdGF0c0JvbnVzPiA9IHtcclxuICAgICAgICAgICAgICAgIGFybW9yOiAnYXJtb3InLFxyXG4gICAgICAgICAgICAgICAgc2hpZWxkOiAnc2hpZWxkJyxcclxuICAgICAgICAgICAgICAgIGRhbWFnZTogJ2RhbWFnZScsXHJcbiAgICAgICAgICAgICAgICBjYXJnbzogJ2NhcmdvJyxcclxuICAgICAgICAgICAgICAgIHNwZWVkOiAnc3BlZWQnLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAoT2JqZWN0LmVudHJpZXMobWFwcGluZykgYXMgW2tleW9mIFN0YXRzQm9udXNlcywga2V5b2YgU3RhdHNCb251c11bXSkuZm9yRWFjaChwYWlyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFtib251c1R5cGUsIHN0YXRzVHlwZV0gPSBwYWlyO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2VCb251cyA9IGJvbnVzZXNbc3RhdHNUeXBlXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtTGV2ZWxCb251cyA9IGJhc2VCb251cyAqIGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXModGhpcy5leHBlcmllbmNlW3BsYW5ldC5hY3RpdmVMaWZlZm9ybSBhcyBWYWxpZExpZmVmb3JtVHlwZV0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGlmZWZvcm1CdWlsZGluZ0JvbnVzID0gYmFzZUJvbnVzICogYnVpbGRpbmdzQm9vc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBiYXNlQm9udXMgKyBsaWZlZm9ybUxldmVsQm9udXMgKyBsaWZlZm9ybUJ1aWxkaW5nQm9udXM7XHJcblxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmJhc2VbYm9udXNUeXBlXSArPSBiYXNlQm9udXM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQubGV2ZWxbYm9udXNUeXBlXSArPSBsaWZlZm9ybUxldmVsQm9udXM7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYnVpbGRpbmdzW2JvbnVzVHlwZV0gKz0gbGlmZWZvcm1CdWlsZGluZ0JvbnVzO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRvdGFsW2JvbnVzVHlwZV0gKz0gdG90YWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGlwcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TaGlwcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoaXBzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNGMwZDEwOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaGlwcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NoaXBzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sIm5hbWVzIjpbInJlbmRlciIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsImRpcmVjdGl2ZXMiLCJuYW1lIiwicmF3TmFtZSIsInZhbHVlIiwiZXhwcmVzc2lvbiIsIm1vZGlmaWVycyIsInN0YXRpY1N0eWxlIiwib24iLCIkZXZlbnQiLCIkJHNlbGVjdGVkVmFsIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmaWx0ZXIiLCJjYWxsIiwidGFyZ2V0Iiwib3B0aW9ucyIsIm8iLCJzZWxlY3RlZCIsIm1hcCIsInZhbCIsIl92YWx1ZSIsIl9uIiwic2hpcCIsIm11bHRpcGxlIiwiX2wiLCJrZXkiLCJkb21Qcm9wcyIsIl9zIiwiJGkxOG4iLCIkdCIsIm9nYW1lIiwic2hpcHMiLCJhdHRycyIsImJvbnVzVHlwZXMiLCJ0ZWNocyIsInBsYW5ldHMiLCJsaW1pdHMiLCJzY29wZWRTbG90cyIsIl91IiwiZm4iLCJzdGF0aWNDbGFzcyIsInByb3h5Iiwic3RhdGljUmVuZGVyRm5zIiwiY29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==