import{_ as e,c as t,o as a,a as r}from"./app.9ba91beb.js";const E=JSON.parse('{"title":"万物皆可懒加载","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"三类资源懒加载实现方案","slug":"三类资源懒加载实现方案","link":"#三类资源懒加载实现方案","children":[]}],"relativePath":"code_life/知识分享/04.万物皆可懒加载.md"}'),i={name:"code_life/知识分享/04.万物皆可懒加载.md"},n=r('<h1 id="万物皆可懒加载" tabindex="-1">万物皆可懒加载 <a class="header-anchor" href="#万物皆可懒加载" aria-hidden="true">#</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>最好的代码，就是没有代码。</p><p>同样的，体验最好的网页，就是没有内容的网页。</p><p>这段话乍一听似乎脱离实际，没有内容的网页根本没有加载的必要。</p><p>但静下来分析，却道出了前端体验优化的核心：<strong>精简页面内容</strong>。</p><p>再多优化，都比不上从根源上精简页面的内容，减少加载的资源。</p><p>所以，此节内容为大家讲述：</p><p>前端工程精简加载资源体积和资源数量的解决方案：<strong>懒加载各类资源</strong>。</p><p>资源懒加载一般应用于需要加载外部资源的元素，例如 <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, <code>&lt;iframe&gt;</code>, <code>&lt;picture&gt;</code> 等。</p><p>当懒加载目标元素在视口（ViewPort）外时，不加载对应资源。目标元素接近或进入视口时，才触发加载资源。</p><p>从而减少页面加载资源的数量，精简加载资源体积，优化用户体验。</p><hr><p>作者个人简介：<a href="https://note.wangez.site/business_innovation/%E4%B8%AA%E4%BA%BA%E4%BB%8B%E7%BB%8D.html" target="_blank" rel="noreferrer">Ned同学的个人说明书</a></p><p>大纲（学完则删）：</p><img src="https://img.wangez.site/img/%E4%B8%87%E7%89%A9%E7%9A%86%E5%8F%AF%E6%87%92%E5%8A%A0%E8%BD%BD%E8%84%91%E5%9B%BE.png" width="800"><h2 id="三类资源懒加载实现方案" tabindex="-1">三类资源懒加载实现方案 <a class="header-anchor" href="#三类资源懒加载实现方案" aria-hidden="true">#</a></h2>',17),o=[n];function d(s,_,c,p,l,h){return a(),t("div",null,o)}const f=e(i,[["render",d]]);export{E as __pageData,f as default};
