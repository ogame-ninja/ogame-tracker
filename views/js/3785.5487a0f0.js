"use strict";(globalThis["webpackChunkogame_tracker"]=globalThis["webpackChunkogame_tracker"]||[]).push([[3785],{3184:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("select",{directives:[{name:"model",rawName:"v-model",value:e.research,expression:"research"}],staticStyle:{display:"block","margin-bottom":"4px"},on:{change:function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.research=t.target.multiple?s:s[0]}}},[s("optgroup",{attrs:{label:e.$i18n.$t.extension.empire.lifeforms.researchBonuses.researchCostTime.researches}},e._l(e.Researches,(function(t){return s("option",{key:t,domProps:{value:t,textContent:e._s(e.$i18n.$t.ogame.research[t])}})})),0),s("option",{attrs:{value:"lifeform-researches"},domProps:{textContent:e._s(e.$i18n.$t.extension.empire.lifeforms.researchBonuses.researchCostTime.lifeformResearches)}})]),s("lifeform-bonuses-breakdown",{attrs:{types:e.bonusTypes,technologies:e.techs,planets:e.planets,limits:e.limits},scopedSlots:e._u([{key:"header",fn:function(){return["lifeform-researches"==e.research?s("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"start"}},[s("span",{domProps:{textContent:e._s(e.$i18n.$t.extension.empire.lifeforms.researchBonuses.researchCostTime.lifeformResearches)}})]):s("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"start"}},[s("span",[s("o-research",{staticClass:"mr-2",attrs:{research:e.research}}),s("span",{domProps:{textContent:e._s(e.$i18n.$t.ogame.research[e.research])}})],1)])]},proxy:!0}])})],1)},o=[],i=s(655),n=s(147),a=s(9681),c=s(3418),l=s(4846),h=s(9751),m=s(8395),u=s(1786),p=s(4028),f=s(3894),g=s(3738),d=s(1731),b=s(7848),y=s(7377),v=s(7076);let x=class extends p.w3{bonusTypes=[{key:"cost",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.buildingCostTime.cost},{key:"time",label:this.$i18n.$t.extension.empire.lifeforms.researchBonuses.buildingCostTime.time}];technologies=l.LN;get techs(){const e="lifeform-researches"==this.research?a.Nw.intergalacticEnvoys:this.research;return this.technologies.filter((t=>t.appliesTo(e))).map((e=>e.type))}get limits(){const e="lifeform-researches"==this.research?a.Nw.intergalacticEnvoys:this.research,t=(0,b.K)({type:y.f.TechCostReduction,tech:e}),s=(0,b.K)({type:y.f.TechTimeReduction,tech:e});return{cost:e=>null!=t?Math.max(e,-t):e,time:e=>null!=s?Math.max(e,-s):e}}research=g.s.energyTechnology;Researches=d.N.filter((e=>this.technologies.some((t=>t.appliesTo(e)))));get planets(){return(0,h.r)(m.p.empire.planetOrder.map((e=>m.p.empire.planets[e])).filter((e=>!e.isMoon)),(e=>e.id),(e=>this.technologies.map((t=>{const s=this.getPlanetBonus(t,e);return{planet:e,technologyType:t.type,bonuses:(0,h.a)(["cost","time"],(e=>({base:s.base[e],buildings:s.buildings[e],level:s.level[e],total:s.total[e],bugBonus:s.bugBonus[e]})))}}))))}get experience(){return m.p.lifeformExperience}get hasResearchBonusBug(){const[e,t]=v.s.serverSettings.version.split(/[\.\-]/g).map((e=>parseInt(e)));return e<10||10==e&&t<2}getPlanetBonus(e,t){const s={base:{cost:0,time:0},level:{cost:0,time:0},buildings:{cost:0,time:0},buildingsBoost:0,total:{cost:0,time:0},bugBonus:{cost:0,time:0}},r="lifeform-researches"==this.research?a.Nw.intergalacticEnvoys:this.research;if(t.activeLifeform==c.e5.none||!t.activeLifeformTechnologies.includes(e.type)||!e.appliesTo(r))return s;const o=Math.min((0,u.io)(t),(0,b.K)({type:y.f.LifeformResearchBonusBoost})??Number.MAX_SAFE_INTEGER);s.buildingsBoost+=o;const i=e.getResearchCostAndTimeReduction(r,t.lifeformTechnologies[e.type]),l={cost:"cost",time:"time"},h=this.hasResearchBonusBug;return Object.entries(l).forEach((e=>{const[r,a]=e,c=-1*i[a];s.base[r]+=c;const l=(0,n.g1)(this.experience[t.activeLifeform]),m=c*l;s.level[r]+=m;const u=c*o;s.buildings[r]+=u;let p=0;if("time"==r&&h){const e=1+o+l,t=e**2-e;p=t*c}s.bugBonus[r]=p;const f=c+m+u+p;s.total[r]+=f})),s}};x=(0,i.gn)([(0,p.wA)({components:{LifeformBonusesBreakdown:f.Z}})],x);const B=x,T=B;var $=s(1001),C=(0,$.Z)(T,r,o,!1,null,null,null);const _=C.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvMzc4NS41NDg3YTBmMC5qcyIsIm1hcHBpbmdzIjoiOEpBQUEsSUFBSUEsRUFBUyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsTUFBTSxDQUFDQSxFQUFHLFNBQVMsQ0FBQ0UsV0FBVyxDQUFDLENBQUNDLEtBQUssUUFBUUMsUUFBUSxVQUFVQyxNQUFPVCxFQUFZLFNBQUVVLFdBQVcsYUFBYUMsWUFBWSxDQUFDLFFBQVUsUUFBUSxnQkFBZ0IsT0FBT0MsR0FBRyxDQUFDLE9BQVMsU0FBU0MsR0FBUSxJQUFJQyxFQUFnQkMsTUFBTUMsVUFBVUMsT0FBT0MsS0FBS0wsRUFBT00sT0FBT0MsU0FBUSxTQUFTQyxHQUFHLE9BQU9BLEVBQUVDLFlBQVdDLEtBQUksU0FBU0YsR0FBRyxJQUFJRyxFQUFNLFdBQVlILEVBQUlBLEVBQUVJLE9BQVNKLEVBQUVaLE1BQU0sT0FBT2UsS0FBT3hCLEVBQUkwQixTQUFTYixFQUFPTSxPQUFPUSxTQUFXYixFQUFnQkEsRUFBYyxNQUFNLENBQUNWLEVBQUcsV0FBVyxDQUFDd0IsTUFBTSxDQUFDLE1BQVE1QixFQUFJNkIsTUFBTUMsR0FBR0MsVUFBVUMsT0FBT0MsVUFBVUMsZ0JBQWdCQyxpQkFBaUJDLGFBQWFwQyxFQUFJcUMsR0FBSXJDLEVBQWMsWUFBRSxTQUFTMEIsR0FBVSxPQUFPdEIsRUFBRyxTQUFTLENBQUNrQyxJQUFJWixFQUFTYSxTQUFTLENBQUMsTUFBUWIsRUFBUyxZQUFjMUIsRUFBSXdDLEdBQUd4QyxFQUFJNkIsTUFBTUMsR0FBR1csTUFBTWYsU0FBU0EsVUFBZ0IsR0FBR3RCLEVBQUcsU0FBUyxDQUFDd0IsTUFBTSxDQUFDLE1BQVEsdUJBQXVCVyxTQUFTLENBQUMsWUFBY3ZDLEVBQUl3QyxHQUFHeEMsRUFBSTZCLE1BQU1DLEdBQUdDLFVBQVVDLE9BQU9DLFVBQVVDLGdCQUFnQkMsaUJBQWlCTyx5QkFBeUJ0QyxFQUFHLDZCQUE2QixDQUFDd0IsTUFBTSxDQUFDLE1BQVE1QixFQUFJMkMsV0FBVyxhQUFlM0MsRUFBSTRDLE1BQU0sUUFBVTVDLEVBQUk2QyxRQUFRLE9BQVM3QyxFQUFJOEMsUUFBUUMsWUFBWS9DLEVBQUlnRCxHQUFHLENBQUMsQ0FBQ1YsSUFBSSxTQUFTVyxHQUFHLFdBQVcsTUFBTyxDQUFrQix1QkFBaEJqRCxFQUFJMEIsU0FBbUN0QixFQUFHLE1BQU0sQ0FBQ08sWUFBWSxDQUFDLFFBQVUsT0FBTyxpQkFBaUIsU0FBUyxjQUFjLFVBQVUsQ0FBQ1AsRUFBRyxPQUFPLENBQUNtQyxTQUFTLENBQUMsWUFBY3ZDLEVBQUl3QyxHQUFHeEMsRUFBSTZCLE1BQU1DLEdBQUdDLFVBQVVDLE9BQU9DLFVBQVVDLGdCQUFnQkMsaUJBQWlCTyx5QkFBeUJ0QyxFQUFHLE1BQU0sQ0FBQ08sWUFBWSxDQUFDLFFBQVUsT0FBTyxpQkFBaUIsU0FBUyxjQUFjLFVBQVUsQ0FBQ1AsRUFBRyxPQUFPLENBQUNBLEVBQUcsYUFBYSxDQUFDOEMsWUFBWSxPQUFPdEIsTUFBTSxDQUFDLFNBQVc1QixFQUFJMEIsWUFBWXRCLEVBQUcsT0FBTyxDQUFDbUMsU0FBUyxDQUFDLFlBQWN2QyxFQUFJd0MsR0FBR3hDLEVBQUk2QixNQUFNQyxHQUFHVyxNQUFNZixTQUFTMUIsRUFBSTBCLGVBQWUsT0FBT3lCLE9BQU0sUUFBVyxJQUN0dERDLEVBQWtCLEcsb0pDZ0V0Qix5QkFFQSxZQUNBLENBQ0EsV0FDQSxzRkFFQSxDQUNBLFdBQ0EsdUZBSUEsa0JBRUEsWUFDQSxvRkFFQSx5QkFDQSw0QkFDQSxpQkFHQSxhQUNBLDZDQUNBLHlCQUNBLGNBRUEsK0NBQ0EsK0NBRUEsT0FDQSxpQ0FDQSxrQ0FJQSw4QkFDQSx3RUFFQSxjQUNBLGNBQ0EsNEJBQ0EsMkJBQ0Esd0JBQ0EsVUFDQSxxQkFDQSxTQUNBLGlDQUVBLE9BQ0EsU0FDQSxzQkFDQSxnQkFDQSxpQkFDQSxLQUNBLGVBQ0EseUJBQ0EsaUJBQ0EsaUJBQ0EsaUNBT0EsaUJBQ0EsOEJBR0EsMEJBQ0EsNkVBQ0Esd0JBR0Esb0JBQ0EsU0FDQSxxQkFDQSxzQkFDQSwwQkFDQSxpQkFDQSxzQkFDQSwwQkFFQSw4RUFFQSxpQ0FDQSxnREFDQSxlQUVBLFNBSUEsa0JBQ0EsWUFDQSx3RUFFQSxvQkFFQSw0RUFFQSxHQUNBLFlBQ0EsYUFFQSwyQkEyQkEsT0ExQkEsK0JBQ0EsYUFFQSxVQUNBLGFBRUEsb0RBQ0EsTUFDQSxjQUVBLFlBQ0Esa0JBRUEsUUFDQSxpQkFDQSxjQUNBLFNBQ0EsTUFFQSxnQkFHQSxnQkFDQSxpQkFHQSxJQXRJQSxhQUxBLFNBQ0EsWUFDQSxpQ0FHQSxHLFVDakU0ZCxJLGNDT3hkQyxHQUFZLE9BQ2QsRUFDQXRELEVBQ0FxRCxHQUNBLEVBQ0EsS0FDQSxLQUNBLE1BSUYsUUFBZUMsRUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9SZXNlYXJjaC1Db3N0LVRpbWUudnVlPzA5OWQiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9zdGF0cy92aWV3cy9saWZlZm9ybXMvYm9udXMtYnJlYWtkb3duL1Jlc2VhcmNoLUNvc3QtVGltZS52dWU/MmUwZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3RhdHMvdmlld3MvbGlmZWZvcm1zL2JvbnVzLWJyZWFrZG93bi9SZXNlYXJjaC1Db3N0LVRpbWUudnVlP2RkMzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N0YXRzL3ZpZXdzL2xpZmVmb3Jtcy9ib251cy1icmVha2Rvd24vUmVzZWFyY2gtQ29zdC1UaW1lLnZ1ZT8yNjA0Il0sInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7cmV0dXJuIF9jKCdkaXYnLFtfYygnc2VsZWN0Jyx7ZGlyZWN0aXZlczpbe25hbWU6XCJtb2RlbFwiLHJhd05hbWU6XCJ2LW1vZGVsXCIsdmFsdWU6KF92bS5yZXNlYXJjaCksZXhwcmVzc2lvbjpcInJlc2VhcmNoXCJ9XSxzdGF0aWNTdHlsZTp7XCJkaXNwbGF5XCI6XCJibG9ja1wiLFwibWFyZ2luLWJvdHRvbVwiOlwiNHB4XCJ9LG9uOntcImNoYW5nZVwiOmZ1bmN0aW9uKCRldmVudCl7dmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLGZ1bmN0aW9uKG8pe3JldHVybiBvLnNlbGVjdGVkfSkubWFwKGZ1bmN0aW9uKG8pe3ZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7cmV0dXJuIHZhbH0pOyBfdm0ucmVzZWFyY2g9JGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdfX19LFtfYygnb3B0Z3JvdXAnLHthdHRyczp7XCJsYWJlbFwiOl92bS4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMucmVzZWFyY2hDb3N0VGltZS5yZXNlYXJjaGVzfX0sX3ZtLl9sKChfdm0uUmVzZWFyY2hlcyksZnVuY3Rpb24ocmVzZWFyY2gpe3JldHVybiBfYygnb3B0aW9uJyx7a2V5OnJlc2VhcmNoLGRvbVByb3BzOntcInZhbHVlXCI6cmVzZWFyY2gsXCJ0ZXh0Q29udGVudFwiOl92bS5fcyhfdm0uJGkxOG4uJHQub2dhbWUucmVzZWFyY2hbcmVzZWFyY2hdKX19KX0pLDApLF9jKCdvcHRpb24nLHthdHRyczp7XCJ2YWx1ZVwiOlwibGlmZWZvcm0tcmVzZWFyY2hlc1wifSxkb21Qcm9wczp7XCJ0ZXh0Q29udGVudFwiOl92bS5fcyhfdm0uJGkxOG4uJHQuZXh0ZW5zaW9uLmVtcGlyZS5saWZlZm9ybXMucmVzZWFyY2hCb251c2VzLnJlc2VhcmNoQ29zdFRpbWUubGlmZWZvcm1SZXNlYXJjaGVzKX19KV0pLF9jKCdsaWZlZm9ybS1ib251c2VzLWJyZWFrZG93bicse2F0dHJzOntcInR5cGVzXCI6X3ZtLmJvbnVzVHlwZXMsXCJ0ZWNobm9sb2dpZXNcIjpfdm0udGVjaHMsXCJwbGFuZXRzXCI6X3ZtLnBsYW5ldHMsXCJsaW1pdHNcIjpfdm0ubGltaXRzfSxzY29wZWRTbG90czpfdm0uX3UoW3trZXk6XCJoZWFkZXJcIixmbjpmdW5jdGlvbigpe3JldHVybiBbKF92bS5yZXNlYXJjaCA9PSAnbGlmZWZvcm0tcmVzZWFyY2hlcycpP19jKCdkaXYnLHtzdGF0aWNTdHlsZTp7XCJkaXNwbGF5XCI6XCJmbGV4XCIsXCJmbGV4LWRpcmVjdGlvblwiOlwiY29sdW1uXCIsXCJhbGlnbi1pdGVtc1wiOlwic3RhcnRcIn19LFtfYygnc3Bhbicse2RvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKF92bS4kaTE4bi4kdC5leHRlbnNpb24uZW1waXJlLmxpZmVmb3Jtcy5yZXNlYXJjaEJvbnVzZXMucmVzZWFyY2hDb3N0VGltZS5saWZlZm9ybVJlc2VhcmNoZXMpfX0pXSk6X2MoJ2Rpdicse3N0YXRpY1N0eWxlOntcImRpc3BsYXlcIjpcImZsZXhcIixcImZsZXgtZGlyZWN0aW9uXCI6XCJjb2x1bW5cIixcImFsaWduLWl0ZW1zXCI6XCJzdGFydFwifX0sW19jKCdzcGFuJyxbX2MoJ28tcmVzZWFyY2gnLHtzdGF0aWNDbGFzczpcIm1yLTJcIixhdHRyczp7XCJyZXNlYXJjaFwiOl92bS5yZXNlYXJjaH19KSxfYygnc3Bhbicse2RvbVByb3BzOntcInRleHRDb250ZW50XCI6X3ZtLl9zKF92bS4kaTE4bi4kdC5vZ2FtZS5yZXNlYXJjaFtfdm0ucmVzZWFyY2hdKX19KV0sMSldKV19LHByb3h5OnRydWV9XSl9KV0sMSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNlbGVjdCB2LW1vZGVsPVwicmVzZWFyY2hcIiBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tYm90dG9tOiA0cHhcIj5cclxuICAgICAgICAgICAgPG9wdGdyb3VwIDpsYWJlbD1cIiRpMThuLiR0LmV4dGVuc2lvbi5lbXBpcmUubGlmZWZvcm1zLnJlc2VhcmNoQm9udXNlcy5yZXNlYXJjaENvc3RUaW1lLnJlc2VhcmNoZXNcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdi1mb3I9XCJyZXNlYXJjaCBpbiBSZXNlYXJjaGVzXCIgOmtleT1cInJlc2VhcmNoXCIgOnZhbHVlPVwicmVzZWFyY2hcIiB2LXRleHQ9XCIkaTE4bi4kdC5vZ2FtZS5yZXNlYXJjaFtyZXNlYXJjaF1cIiAvPlxyXG4gICAgICAgICAgICA8L29wdGdyb3VwPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGlmZWZvcm0tcmVzZWFyY2hlc1wiIHYtdGV4dD1cIiRpMThuLiR0LmV4dGVuc2lvbi5lbXBpcmUubGlmZWZvcm1zLnJlc2VhcmNoQm9udXNlcy5yZXNlYXJjaENvc3RUaW1lLmxpZmVmb3JtUmVzZWFyY2hlc1wiIC8+XHJcbiAgICAgICAgPC9zZWxlY3Q+XHJcblxyXG4gICAgICAgIDxsaWZlZm9ybS1ib251c2VzLWJyZWFrZG93biA6dHlwZXM9XCJib251c1R5cGVzXCIgOnRlY2hub2xvZ2llcz1cInRlY2hzXCIgOnBsYW5ldHM9XCJwbGFuZXRzXCIgOmxpbWl0cz1cImxpbWl0c1wiPlxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgI2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogc3RhcnRcIiB2LWlmPVwicmVzZWFyY2ggPT0gJ2xpZmVmb3JtLXJlc2VhcmNoZXMnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi10ZXh0PVwiJGkxOG4uJHQuZXh0ZW5zaW9uLmVtcGlyZS5saWZlZm9ybXMucmVzZWFyY2hCb251c2VzLnJlc2VhcmNoQ29zdFRpbWUubGlmZWZvcm1SZXNlYXJjaGVzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBzdGFydFwiIHYtZWxzZT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG8tcmVzZWFyY2ggOnJlc2VhcmNoPVwicmVzZWFyY2hcIiBjbGFzcz1cIm1yLTJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LXRleHQ9XCIkaTE4bi4kdC5vZ2FtZS5yZXNlYXJjaFtyZXNlYXJjaF1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvbGlmZWZvcm0tYm9udXNlcy1icmVha2Rvd24+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQgbGFuZz1cInRzXCI+XHJcbiAgICBpbXBvcnQgeyBQbGFuZXREYXRhIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL2VtcGlyZS9QbGFuZXREYXRhJztcclxuICAgIGltcG9ydCB7IGdldExpZmVmb3JtTGV2ZWxUZWNobm9sb2d5Qm9udXMgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL2V4cGVyaWVuY2UnO1xyXG4gICAgaW1wb3J0IHsgTGlmZWZvcm1UZWNobm9sb2d5VHlwZSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvTGlmZWZvcm1UZWNobm9sb2d5VHlwZSc7XHJcbiAgICBpbXBvcnQgeyBMaWZlZm9ybVR5cGUsIFZhbGlkTGlmZWZvcm1UeXBlIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybVR5cGUnO1xyXG4gICAgaW1wb3J0IHsgUmVzZWFyY2hDb3N0QW5kVGltZVJlZHVjdGlvbkxpZmVmb3JtVGVjaG5vbG9neSB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvdGVjaG5vbG9naWVzL2ludGVyZmFjZXMnO1xyXG4gICAgaW1wb3J0IHsgUmVzZWFyY2hDb3N0QW5kVGltZVJlZHVjdGlvbkxpZmVmb3JtVGVjaG5vbG9naWVzIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy90ZWNobm9sb2dpZXMvTGlmZWZvcm1UZWNobm9sb2dpZXMnO1xyXG4gICAgaW1wb3J0IHsgY3JlYXRlTWFwcGVkUmVjb3JkLCBjcmVhdGVSZWNvcmQgfSBmcm9tICdAL3NoYXJlZC91dGlscy9jcmVhdGVSZWNvcmQnO1xyXG4gICAgaW1wb3J0IHsgRW1waXJlRGF0YU1vZHVsZSB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvZGF0YS9FbXBpcmVEYXRhTW9kdWxlJztcclxuICAgIGltcG9ydCB7IGdldFBsYW5ldExpZmVmb3JtVGVjaG5vbG9neUJvb3N0IH0gZnJvbSAnQC92aWV3cy9zdGF0cy9tb2RlbHMvbGlmZWZvcm1zJztcclxuICAgIGltcG9ydCB7IENvbXBvbmVudCwgVnVlIH0gZnJvbSAndnVlLXByb3BlcnR5LWRlY29yYXRvcic7XHJcbiAgICBpbXBvcnQgTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duLCB7IExpZmVmb3JtQm9udXNlc0JyZWFrZG93blR5cGUsIExpZmVmb3JtQm9udXNlc1BsYW5ldEJyZWFrZG93biB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvY29tcG9uZW50cy9saWZlZm9ybXMvTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duLnZ1ZSc7XHJcbiAgICBpbXBvcnQgeyBDb3N0QW5kVGltZVJlZHVjdGlvbiB9IGZyb20gJ0Avc2hhcmVkL21vZGVscy9vZ2FtZS9saWZlZm9ybXMvY29tbW9uLWludGVyZmFjZXMnO1xyXG4gICAgaW1wb3J0IHsgUmVzZWFyY2hUeXBlIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL3Jlc2VhcmNoL1Jlc2VhcmNoVHlwZSc7XHJcbiAgICBpbXBvcnQgeyBSZXNlYXJjaFR5cGVzIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL3Jlc2VhcmNoL1Jlc2VhcmNoVHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRMaWZlZm9ybUJvbnVzTGltaXQgfSBmcm9tICdAL3NoYXJlZC9tb2RlbHMvb2dhbWUvbGlmZWZvcm1zL0xpZmVmb3JtQm9udXNMaW1pdHMnO1xyXG5pbXBvcnQgeyBMaWZlZm9ybUJvbnVzVHlwZUlkIH0gZnJvbSAnQC9zaGFyZWQvbW9kZWxzL29nYW1lL2xpZmVmb3Jtcy9MaWZlZm9ybUJvbnVzVHlwZSc7XHJcbmltcG9ydCB7IFNlcnZlclNldHRpbmdzRGF0YU1vZHVsZSB9IGZyb20gJ0Avdmlld3Mvc3RhdHMvZGF0YS9TZXJ2ZXJTZXR0aW5nc0RhdGFNb2R1bGUnO1xyXG5pbXBvcnQgeyBwYXJzZUludFNhZmUgfSBmcm9tICdAL3NoYXJlZC91dGlscy9wYXJzZU51bWJlcnMnO1xyXG5cclxuICAgIHR5cGUgQm9udXNlcyA9IHtcclxuICAgICAgICBjb3N0OiBudW1iZXI7XHJcbiAgICAgICAgdGltZTogbnVtYmVyO1xyXG4gICAgfTtcclxuXHJcbiAgICB0eXBlIEJvbnVzQnJlYWtkb3duID0ge1xyXG4gICAgICAgIGJhc2U6IEJvbnVzZXM7XHJcbiAgICAgICAgbGV2ZWw6IEJvbnVzZXM7XHJcbiAgICAgICAgYnVpbGRpbmdzOiBCb251c2VzO1xyXG4gICAgICAgIGJ1aWxkaW5nc0Jvb3N0OiBudW1iZXI7XHJcbiAgICAgICAgdG90YWw6IEJvbnVzZXM7XHJcblxyXG4gICAgICAgIGJ1Z0JvbnVzOiBCb251c2VzO1xyXG4gICAgfTtcclxuXHJcbiAgICBAQ29tcG9uZW50KHtcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIExpZmVmb3JtQm9udXNlc0JyZWFrZG93bixcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzZWFyY2hDb3N0VGltZSBleHRlbmRzIFZ1ZSB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgYm9udXNUeXBlczogTGlmZWZvcm1Cb251c2VzQnJlYWtkb3duVHlwZTxrZXlvZiBCb251c2VzPltdID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBrZXk6ICdjb3N0JyxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLiRpMThuLiR0LmV4dGVuc2lvbi5lbXBpcmUubGlmZWZvcm1zLnJlc2VhcmNoQm9udXNlcy5idWlsZGluZ0Nvc3RUaW1lLmNvc3QsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGtleTogJ3RpbWUnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHRoaXMuJGkxOG4uJHQuZXh0ZW5zaW9uLmVtcGlyZS5saWZlZm9ybXMucmVzZWFyY2hCb251c2VzLmJ1aWxkaW5nQ29zdFRpbWUudGltZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHRlY2hub2xvZ2llcyA9IFJlc2VhcmNoQ29zdEFuZFRpbWVSZWR1Y3Rpb25MaWZlZm9ybVRlY2hub2xvZ2llcztcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgdGVjaHMoKTogTGlmZWZvcm1UZWNobm9sb2d5VHlwZVtdIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzZWFyY2ggPSB0aGlzLnJlc2VhcmNoID09ICdsaWZlZm9ybS1yZXNlYXJjaGVzJyA/IExpZmVmb3JtVGVjaG5vbG9neVR5cGUuaW50ZXJnYWxhY3RpY0Vudm95cyA6IHRoaXMucmVzZWFyY2g7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZWNobm9sb2dpZXNcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGVjaCA9PiB0ZWNoLmFwcGxpZXNUbyhyZXNlYXJjaCkpXHJcbiAgICAgICAgICAgICAgICAubWFwKHQgPT4gdC50eXBlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGxpbWl0cygpOiBSZWNvcmQ8a2V5b2YgQm9udXNlcywgKHZhbHVlOiBudW1iZXIpID0+IG51bWJlcj4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNlYXJjaCA9IHRoaXMucmVzZWFyY2ggPT0gJ2xpZmVmb3JtLXJlc2VhcmNoZXMnXHJcbiAgICAgICAgICAgICAgICA/IExpZmVmb3JtVGVjaG5vbG9neVR5cGUuaW50ZXJnYWxhY3RpY0Vudm95c1xyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnJlc2VhcmNoO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29zdExpbWl0ID0gZ2V0TGlmZWZvcm1Cb251c0xpbWl0KHsgdHlwZTogTGlmZWZvcm1Cb251c1R5cGVJZC5UZWNoQ29zdFJlZHVjdGlvbiwgdGVjaDogcmVzZWFyY2ggfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVMaW1pdCA9IGdldExpZmVmb3JtQm9udXNMaW1pdCh7IHR5cGU6IExpZmVmb3JtQm9udXNUeXBlSWQuVGVjaFRpbWVSZWR1Y3Rpb24sIHRlY2g6IHJlc2VhcmNoIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNvc3Q6IHZhbHVlID0+IGNvc3RMaW1pdCAhPSBudWxsID8gTWF0aC5tYXgodmFsdWUsIC1jb3N0TGltaXQpIDogdmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiB2YWx1ZSA9PiB0aW1lTGltaXQgIT0gbnVsbCA/IE1hdGgubWF4KHZhbHVlLCAtdGltZUxpbWl0KSA6IHZhbHVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByZXNlYXJjaDogUmVzZWFyY2hUeXBlIHwgJ2xpZmVmb3JtLXJlc2VhcmNoZXMnID0gUmVzZWFyY2hUeXBlLmVuZXJneVRlY2hub2xvZ3k7XHJcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBSZXNlYXJjaGVzID0gUmVzZWFyY2hUeXBlcy5maWx0ZXIoYiA9PiB0aGlzLnRlY2hub2xvZ2llcy5zb21lKHRlY2ggPT4gdGVjaC5hcHBsaWVzVG8oYikpKTtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXQgcGxhbmV0cygpOiBSZWNvcmQ8bnVtYmVyLCBMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd248a2V5b2YgQm9udXNlcz5bXT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTWFwcGVkUmVjb3JkKFxyXG4gICAgICAgICAgICAgICAgRW1waXJlRGF0YU1vZHVsZS5lbXBpcmUucGxhbmV0T3JkZXJcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGlkID0+IEVtcGlyZURhdGFNb2R1bGUuZW1waXJlLnBsYW5ldHNbaWRdKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocGxhbmV0ID0+ICFwbGFuZXQuaXNNb29uKSBhcyBQbGFuZXREYXRhW10sXHJcbiAgICAgICAgICAgICAgICBwbGFuZXQgPT4gcGxhbmV0LmlkLFxyXG4gICAgICAgICAgICAgICAgcGxhbmV0ID0+IHRoaXMudGVjaG5vbG9naWVzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcDxMaWZlZm9ybUJvbnVzZXNQbGFuZXRCcmVha2Rvd248a2V5b2YgQm9udXNlcz4+KHRlY2ggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGFuZXRCb251c2VzID0gdGhpcy5nZXRQbGFuZXRCb251cyh0ZWNoLCBwbGFuZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5ldCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlY2hub2xvZ3lUeXBlOiB0ZWNoLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib251c2VzOiBjcmVhdGVSZWNvcmQ8a2V5b2YgQm9udXNlcywgTGlmZWZvcm1Cb251c2VzUGxhbmV0QnJlYWtkb3duWydib251c2VzJ11bc3RyaW5nXT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjb3N0JywgJ3RpbWUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZTogcGxhbmV0Qm9udXNlcy5iYXNlW2tleV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogcGxhbmV0Qm9udXNlcy5idWlsZGluZ3Nba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IHBsYW5ldEJvbnVzZXMubGV2ZWxba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IHBsYW5ldEJvbnVzZXMudG90YWxba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVnQm9udXM6IHBsYW5ldEJvbnVzZXMuYnVnQm9udXNba2V5XSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGV4cGVyaWVuY2UoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbXBpcmVEYXRhTW9kdWxlLmxpZmVmb3JtRXhwZXJpZW5jZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZ2V0IGhhc1Jlc2VhcmNoQm9udXNCdWcoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFttYWpvciwgbWlub3JdID0gU2VydmVyU2V0dGluZ3NEYXRhTW9kdWxlLnNlcnZlclNldHRpbmdzLnZlcnNpb24uc3BsaXQoL1tcXC5cXC1dL2cpLm1hcChzID0+IHBhcnNlSW50KHMpKTtcclxuICAgICAgICAgICAgcmV0dXJuIG1ham9yIDwgMTAgfHwgKG1ham9yID09IDEwICYmIG1pbm9yIDwgMik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFBsYW5ldEJvbnVzKHRlY2g6IFJlc2VhcmNoQ29zdEFuZFRpbWVSZWR1Y3Rpb25MaWZlZm9ybVRlY2hub2xvZ3ksIHBsYW5ldDogUGxhbmV0RGF0YSk6IEJvbnVzQnJlYWtkb3duIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBCb251c0JyZWFrZG93biA9IHtcclxuICAgICAgICAgICAgICAgIGJhc2U6IHsgY29zdDogMCwgdGltZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgbGV2ZWw6IHsgY29zdDogMCwgdGltZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiB7IGNvc3Q6IDAsIHRpbWU6IDAgfSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nc0Jvb3N0OiAwLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHsgY29zdDogMCwgdGltZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgYnVnQm9udXM6IHsgY29zdDogMCwgdGltZTogMCB9LFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zdCByZXNlYXJjaCA9IHRoaXMucmVzZWFyY2ggPT0gJ2xpZmVmb3JtLXJlc2VhcmNoZXMnID8gTGlmZWZvcm1UZWNobm9sb2d5VHlwZS5pbnRlcmdhbGFjdGljRW52b3lzIDogdGhpcy5yZXNlYXJjaDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwbGFuZXQuYWN0aXZlTGlmZWZvcm0gPT0gTGlmZWZvcm1UeXBlLm5vbmVcclxuICAgICAgICAgICAgICAgIHx8ICFwbGFuZXQuYWN0aXZlTGlmZWZvcm1UZWNobm9sb2dpZXMuaW5jbHVkZXModGVjaC50eXBlKVxyXG4gICAgICAgICAgICAgICAgfHwgIXRlY2guYXBwbGllc1RvKHJlc2VhcmNoKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBidWlsZGluZ3NCb29zdCA9IE1hdGgubWluKFxyXG4gICAgICAgICAgICAgICAgZ2V0UGxhbmV0TGlmZWZvcm1UZWNobm9sb2d5Qm9vc3QocGxhbmV0KSxcclxuICAgICAgICAgICAgICAgIGdldExpZmVmb3JtQm9udXNMaW1pdCh7IHR5cGU6IExpZmVmb3JtQm9udXNUeXBlSWQuTGlmZWZvcm1SZXNlYXJjaEJvbnVzQm9vc3QgfSkgPz8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5idWlsZGluZ3NCb29zdCArPSBidWlsZGluZ3NCb29zdDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJvbnVzZXMgPSB0ZWNoLmdldFJlc2VhcmNoQ29zdEFuZFRpbWVSZWR1Y3Rpb24ocmVzZWFyY2gsIHBsYW5ldC5saWZlZm9ybVRlY2hub2xvZ2llc1t0ZWNoLnR5cGVdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcHBpbmc6IFJlY29yZDxrZXlvZiBCb251c2VzLCBrZXlvZiBDb3N0QW5kVGltZVJlZHVjdGlvbj4gPSB7XHJcbiAgICAgICAgICAgICAgICBjb3N0OiAnY29zdCcsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAndGltZScsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc0J1Z0JvbnVzID0gdGhpcy5oYXNSZXNlYXJjaEJvbnVzQnVnO1xyXG4gICAgICAgICAgICAoT2JqZWN0LmVudHJpZXMobWFwcGluZykgYXMgW2tleW9mIEJvbnVzZXMsIGtleW9mIENvc3RBbmRUaW1lUmVkdWN0aW9uXVtdKS5mb3JFYWNoKHBhaXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2JvbnVzVHlwZSwgc3RhdHNUeXBlXSA9IHBhaXI7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZUJvbnVzID0gLTEgKiBib251c2VzW3N0YXRzVHlwZV07XHJcbiAgICAgICAgICAgICAgICByZXN1bHQuYmFzZVtib251c1R5cGVdICs9IGJhc2VCb251cztcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsZXZlbEJvb3N0ID0gZ2V0TGlmZWZvcm1MZXZlbFRlY2hub2xvZ3lCb251cyh0aGlzLmV4cGVyaWVuY2VbcGxhbmV0LmFjdGl2ZUxpZmVmb3JtIGFzIFZhbGlkTGlmZWZvcm1UeXBlXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaWZlZm9ybUxldmVsQm9udXMgPSBiYXNlQm9udXMgKiBsZXZlbEJvb3N0O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmxldmVsW2JvbnVzVHlwZV0gKz0gbGlmZWZvcm1MZXZlbEJvbnVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpZmVmb3JtQnVpbGRpbmdCb251cyA9IGJhc2VCb251cyAqIGJ1aWxkaW5nc0Jvb3N0O1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LmJ1aWxkaW5nc1tib251c1R5cGVdICs9IGxpZmVmb3JtQnVpbGRpbmdCb251cztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGJ1Z0JvbnVzID0gMDtcclxuICAgICAgICAgICAgICAgIGlmKGJvbnVzVHlwZSA9PSAndGltZScgJiYgaGFzQnVnQm9udXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBib251c0ZhY3RvciA9IDEgKyBidWlsZGluZ3NCb29zdCArIGxldmVsQm9vc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYnVnQm9udXNGYWN0b3IgPSBib251c0ZhY3RvciAqKiAyIC0gYm9udXNGYWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVnQm9udXMgPSBidWdCb251c0ZhY3RvciAqIGJhc2VCb251cztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5idWdCb251c1tib251c1R5cGVdID0gYnVnQm9udXM7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbCA9IGJhc2VCb251cyArIGxpZmVmb3JtTGV2ZWxCb251cyArIGxpZmVmb3JtQnVpbGRpbmdCb251cyArIGJ1Z0JvbnVzO1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnRvdGFsW2JvbnVzVHlwZV0gKz0gdG90YWw7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MFswXS5ydWxlc1swXS51c2VbMl0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2dWUvdnVlLWxvYWRlci12MTUvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9SZXNlYXJjaC1Db3N0LVRpbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90aHJlYWQtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtNDBbMF0ucnVsZXNbMF0udXNlWzJdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AdnVlL3Z1ZS1sb2FkZXItdjE1L2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmVzZWFyY2gtQ29zdC1UaW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10cyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmVzZWFyY2gtQ29zdC1UaW1lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNGI2NjlkZiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9SZXNlYXJjaC1Db3N0LVRpbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZXNlYXJjaC1Db3N0LVRpbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQHZ1ZS92dWUtbG9hZGVyLXYxNS9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwibmFtZXMiOlsicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwiZGlyZWN0aXZlcyIsIm5hbWUiLCJyYXdOYW1lIiwidmFsdWUiLCJleHByZXNzaW9uIiwic3RhdGljU3R5bGUiLCJvbiIsIiRldmVudCIsIiQkc2VsZWN0ZWRWYWwiLCJBcnJheSIsInByb3RvdHlwZSIsImZpbHRlciIsImNhbGwiLCJ0YXJnZXQiLCJvcHRpb25zIiwibyIsInNlbGVjdGVkIiwibWFwIiwidmFsIiwiX3ZhbHVlIiwicmVzZWFyY2giLCJtdWx0aXBsZSIsImF0dHJzIiwiJGkxOG4iLCIkdCIsImV4dGVuc2lvbiIsImVtcGlyZSIsImxpZmVmb3JtcyIsInJlc2VhcmNoQm9udXNlcyIsInJlc2VhcmNoQ29zdFRpbWUiLCJyZXNlYXJjaGVzIiwiX2wiLCJrZXkiLCJkb21Qcm9wcyIsIl9zIiwib2dhbWUiLCJsaWZlZm9ybVJlc2VhcmNoZXMiLCJib251c1R5cGVzIiwidGVjaHMiLCJwbGFuZXRzIiwibGltaXRzIiwic2NvcGVkU2xvdHMiLCJfdSIsImZuIiwic3RhdGljQ2xhc3MiLCJwcm94eSIsInN0YXRpY1JlbmRlckZucyIsImNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=