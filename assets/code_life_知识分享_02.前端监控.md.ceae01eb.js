import{_ as e,c as a,o as s,a as l}from"./app.c40b650b.js";const b=JSON.parse('{"title":"前端监控实践","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"为什么要去做前端监控？","slug":"为什么要去做前端监控","link":"#为什么要去做前端监控","children":[]},{"level":2,"title":"前端监控有哪些方向？","slug":"前端监控有哪些方向","link":"#前端监控有哪些方向","children":[]},{"level":2,"title":"前端监控有哪些流程？","slug":"前端监控有哪些流程","link":"#前端监控有哪些流程","children":[{"level":3,"title":"前端埋点","slug":"前端埋点","link":"#前端埋点","children":[]},{"level":3,"title":"数据采集","slug":"数据采集","link":"#数据采集","children":[]},{"level":3,"title":"数据上报","slug":"数据上报","link":"#数据上报","children":[]},{"level":3,"title":"数据监控以及预警","slug":"数据监控以及预警","link":"#数据监控以及预警","children":[]}]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"relativePath":"code_life/知识分享/02.前端监控.md"}'),n={name:"code_life/知识分享/02.前端监控.md"},t=l(`<h1 id="前端监控实践" tabindex="-1">前端监控实践 <a class="header-anchor" href="#前端监控实践" aria-hidden="true">#</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>对于前端监控体系的兴趣还是起源于之前分享的字节的一次分享会...</p><p>这应该会是一个系列专栏...吧。</p><h2 id="为什么要去做前端监控" tabindex="-1">为什么要去做前端监控？ <a class="header-anchor" href="#为什么要去做前端监控" aria-hidden="true">#</a></h2><blockquote><p>或者说是，我们前端监控的目的何在？</p></blockquote><ol><li>提高用户体验</li><li>能够更快的发现应用中的异常，能够更快的定位异常发生的位置，能够做到及时报警，并迅速解决</li><li>能够了解业务数据，并借此引领产品升级。（数据驱动服务）</li></ol><blockquote><p>指的是通过一定的手段来获取用户行为以及跟踪产品在用户端的使用情况，并以监控数据为基础，为产品优化指明方向，为用户提供更加精确、完善的服务。</p></blockquote><h2 id="前端监控有哪些方向" tabindex="-1">前端监控有哪些方向？ <a class="header-anchor" href="#前端监控有哪些方向" aria-hidden="true">#</a></h2><ol><li>数据监控（监听用户行为）</li><li>性能监控（监听应用性能）</li><li>异常监控（监控代码异常）</li></ol><h2 id="前端监控有哪些流程" tabindex="-1">前端监控有哪些流程？ <a class="header-anchor" href="#前端监控有哪些流程" aria-hidden="true">#</a></h2><p>用一句话来总结：<strong>采集数据&gt;&gt;上报数据&gt;&gt;分析数据&gt;&gt;报警通知</strong></p><blockquote><p>其中最重要的步骤就是 <strong>前端埋点</strong> 和 <strong>数据上报</strong> ，也就是数据的收集阶段，而数据收集的丰富性和准确性会影响对产品线上效果的判别结果</p></blockquote><img width="800px" height="100%" src="https://img.wangez.site/img/%E5%89%8D%E7%AB%AF%E7%9B%91%E6%8E%A7%E5%A4%A7%E8%87%B4%E6%B5%81%E7%A8%8B.jpg"><h3 id="前端埋点" tabindex="-1">前端埋点 <a class="header-anchor" href="#前端埋点" aria-hidden="true">#</a></h3><p>埋点主流方案包括无痕埋点（全埋点），代码埋点，可视化埋点。</p><blockquote><p>先鸽，下次有机会再分享</p></blockquote><h3 id="数据采集" tabindex="-1">数据采集 <a class="header-anchor" href="#数据采集" aria-hidden="true">#</a></h3><p>大概了解了一下，这种库开源的有很多，但是各大厂里大多都采用自己制造的，因为关注的指标大概不同，使用开源就不如去自定义化，方便后续的设置阈值和异常报警，以及数据分析、监控、统计等。</p><p>这两天撸了半个库，简单说下这种库的工作流程以及内容。</p><img width="800px" height="100%" src="https://img.wangez.site/img/website-monitoring%E5%86%85%E9%83%A8%E6%9E%84%E9%80%A0.jpg"><p>目前只做了针对性的做了关于性能监控部分的基础Api，基于 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Performance" target="_blank" rel="noreferrer">Performance</a> 开发。</p><p>针对于页面性能，主要是去算加载时长，耗时越短，说明网页性能越好。</p><img width="800px" height="100%" src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/6/7/1728d024b75c7357~tplv-t2oaga2asx-jj-mark:3024:0:0:0:q75.awebp"><h3 id="数据上报" tabindex="-1">数据上报 <a class="header-anchor" href="#数据上报" aria-hidden="true">#</a></h3><img width="800px" height="100%" src="https://img.wangez.site/img/%E5%89%8D%E7%AB%AF%E6%95%B0%E6%8D%AE%E4%B8%8A%E6%8A%A5%E6%96%B9%E5%BC%8F.jpg"><h4 id="_1-直接发送请求上报-axios" tabindex="-1">1. 直接发送请求上报（Axios） <a class="header-anchor" href="#_1-直接发送请求上报-axios" aria-hidden="true">#</a></h4><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">cosnt url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">api.wangez.site/monitor</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#A6ACCD;">(url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>问题：</strong> 但这种方法有一个问题，就是在页面卸载或刷新时进行上报的话，请求可能会在浏览器关闭或重新加载前还未发送至服务端就被浏览器 cancel 掉，导致数据上报失败。</p><p>我们可以将请求改为同步方法，这样就能保证请求一定能发送到服务端。</p><blockquote><p>实在不是一个好方案</p></blockquote><h4 id="_2-img-方式上报-目前常用" tabindex="-1">2. Img 方式上报（目前常用） <a class="header-anchor" href="#_2-img-方式上报-目前常用" aria-hidden="true">#</a></h4><p>第二种方式就是利用图片的 src 属性发送请求进行数据上报，因为大部分浏览器会延迟卸载（unload）文档以加载图像（只是大多数浏览器，还是存在兼容性的），所以用图片上报就可以解决第一种方法的漏洞。</p><p>用图片上报还有以下<strong>优点：</strong></p><ol><li>图片请求方式不会出现跨域问题，因为打点域名经常不是当前域名；</li><li>防止阻塞页面加载，影响用户体验；</li><li>一般采用 1*1 像素的透明 GIF 进行上报，因为 GIF 图片格式体积小（最小的 BMP 文件需要74个字节，PNG 需要67个字节，而合法的GIF，只需要43个字节）</li></ol><h4 id="_3-sendbeacon-推荐" tabindex="-1">3. sendBeacon（推荐） <a class="header-anchor" href="#_3-sendbeacon-推荐" aria-hidden="true">#</a></h4><p>同样为了解决页面卸载时，数据不能完成上报等问题，web底层新增了sendBeacon方法。</p><blockquote><p>MDN：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon" target="_blank" rel="noreferrer">Navigator.sendBeacon</a></p></blockquote><blockquote><p>这个方法主要用于满足统计和诊断代码的需要，这些代码通常尝试在卸载（unload）文档之前向 Web 服务器发送数据。过早的发送数据可能导致错过收集数据的机会。</p></blockquote><p>然而，对于开发者来说保证在文档卸载期间发送数据一直是一个困难。</p><p>使用 <strong><code>sendBeacon()</code></strong> 方法会使用户代理（浏览器）在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能，这意味着：</p><ol><li>数据发送是可靠的。</li><li>数据异步传输。</li><li>不影响下一个页面的载入。</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">navigator</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sendBeacon</span><span style="color:#A6ACCD;">(url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> data)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="数据监控以及预警" tabindex="-1">数据监控以及预警 <a class="header-anchor" href="#数据监控以及预警" aria-hidden="true">#</a></h3><img width="800px" height="100%" src="https://img.wangez.site/img/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E4%BB%A5%E5%8F%8A%E9%A2%84%E8%AD%A6.jpg"><blockquote><p>先鸽，下次有机会再分享</p></blockquote><h2 id="最后" tabindex="-1">最后 <a class="header-anchor" href="#最后" aria-hidden="true">#</a></h2><p>这个<code>website-monitoring</code>库，会在学习前端监控体系的知识过程中逐渐开发维护，大概会围绕着个人风格来进行封装，如果你也想要学习这方面的知识，可以<code>Fork</code>到你自己的仓库，之后按照自己的习惯开发就好。</p><blockquote><p>欢迎大家存个 star 呀~</p></blockquote><blockquote><p><a href="https://github.com/wangenze267/monitor" target="_blank" rel="noreferrer">https://github.com/wangenze267/monitor</a></p></blockquote>`,50),o=[t];function i(r,p,c,d,h,g){return s(),a("div",null,o)}const m=e(n,[["render",i]]);export{b as __pageData,m as default};
