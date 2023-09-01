import{_ as e,c as i,o as l,a as t}from"./app.9c4e23cb.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"导读","slug":"导读","link":"#导读","children":[]},{"level":3,"title":"后台型应用","slug":"后台型应用","link":"#后台型应用","children":[]},{"level":3,"title":"业务场景","slug":"业务场景","link":"#业务场景","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}],"relativePath":"fe_engineer/前端之微前端相关/01.微前端使用场景.md"}'),r={name:"fe_engineer/前端之微前端相关/01.微前端使用场景.md"},n=t('<h3 id="导读" tabindex="-1">导读 <a class="header-anchor" href="#导读" aria-hidden="true">#</a></h3><p>简单了解下微前端的适用场景。</p><p>不能说为了微前端，而去微前端。</p><h3 id="后台型应用" tabindex="-1">后台型应用 <a class="header-anchor" href="#后台型应用" aria-hidden="true">#</a></h3><p>这种应用通常重复率高，公司为降低开发成本，本身会衍生出一些可以复用的东西。或许可以通过 iframe 的形式进行集成，来快速开发降低产研成本。</p><p>随着业务增长，复杂度上升。针对于体验优化和性能优化等要求，很可能要对应用进行区域性重构。</p><p>重构的方案呢，需要具备以下特性：</p><ul><li>可以让新增需求不依赖现有项目技术栈，且支持独立部署</li><li>可以让已有的应用做最少量的改造之后可以集成到现有后台项目，且支持独立部署</li><li>新业务可以使用新技术栈进行开发，也可以使用老方案进行开发</li><li>对于性能极差且无法优化的页面，可以考虑逐步进行技术栈重构，重新进行开发。</li></ul><p>在集成的过程中，需要有一个<strong>主应用</strong>，在根据不同条件去切换不同的项目中去，不需要外部链接。此时采用微前端是一个比较合适的技术选型，它具备以下特性：</p><ul><li><strong>SPA体验</strong>：微前端可以使应用保持原有的 SPA 体验</li><li><strong>技术栈自由</strong>：可以使用不同的技术栈开发，支持独立部署</li><li><strong>性能优化</strong>：微前端可以通过处理应用资源的去重，应用自身的预加载、预渲染和缓存处理，也可以对已加载的页面进行保活处理，增加了性能优化的手段。</li><li><strong>解耦重构</strong>：重构的时候不影响其他页面运行，减少重构带来的影响</li></ul><p><strong>微前端可以降低大型复杂应用的开发、升级、维护以及团队协作的成本。当然，解决历史遗留的难以开发、升级和维护的大型应用，也是使用微前端的一个重要原因。</strong></p><blockquote><p>注意：微前端更多关注于浏览器中如何实现各个模块应用的集成。</p></blockquote><h3 id="业务场景" tabindex="-1">业务场景 <a class="header-anchor" href="#业务场景" aria-hidden="true">#</a></h3><p>在大型 To B 应用中，业务的体量大，功能多，定制的需求相对较多。应用的开发往往需要具备可配置、可维护、可拓展、可组装以及可升级等特性。</p><p>这种情况下使用微前端是一个不错的技术选型。</p><p><img src="https://img.wangez.site/img/vweb_scene.png" alt=""></p><p>当然某些情况也并不适合使用微前端：</p><ul><li>应用业务单一，不存在多个团队并行开发的情况</li><li>应用功能非常完善，不存在大量新需求开发的可能</li><li>团队不想花费大量的时间在应用的改造上，仅保持现有应用的稳定性</li><li>微前端改造成本非常高；</li><li>团队内开发人员不熟悉微前端，无法应对微前端架构的复杂性</li></ul><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-hidden="true">#</a></h3><p>同导读中说过的那句话一样，<strong>不要为了微前端而去微前端</strong>，一定是现有的技术体系真的无法满足开发诉求或者产生无法解决的业务痛点才需要该技术。</p>',20),a=[n];function s(o,p,_,d,c,h){return l(),i("div",null,a)}const f=e(r,[["render",s]]);export{u as __pageData,f as default};
