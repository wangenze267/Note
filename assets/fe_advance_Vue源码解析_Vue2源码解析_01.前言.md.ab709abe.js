import{_ as s,c as n,o as a,a as e}from"./app.0a8e041a.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"源码目录结构","slug":"源码目录结构","link":"#源码目录结构","children":[]}],"relativePath":"fe_advance/Vue源码解析/Vue2源码解析/01.前言.md"}'),l={name:"fe_advance/Vue源码解析/Vue2源码解析/01.前言.md"},p=e(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>前端的竞争日益激烈，相信大家在面试中有所体会，如何在竞争中脱颖而出，阅读源码是必不可少的技能；目前国内 vue 和 react 最为火热， react 源码相对较难，最好从 vue 先入手，vue 一万行多代码该如何下手，也是很多人放弃看源码的原因，那我们就不妨慢慢来吧。</p><p>相信会有收获！</p><blockquote><p>v2.6.11版本</p></blockquote><h2 id="源码目录结构" tabindex="-1">源码目录结构 <a class="header-anchor" href="#源码目录结构" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">├─ .circleci                 # 包含CircleCI持续集成/持续部署工具的配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ benchmarks                # 基准和性能测试文件，vue的跑分demo，例如大数据量的table或者渲染大量的SVG</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ dist                      # 构建后输出的不同版本vue文件（UMD、common.js、生产和开发包）</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ examples                  # 用vue写的一些小demo</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ flow                      # 进行静态类型检测，静态类型检测类型声明文件(https://flow.org/)</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ packages                  # 包含服务端渲染和模块编译器两种不同的NPM包，是提供不同使用场景使用的</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ scripts                   # 存放npm脚本配置文件，结合webpack、rollup进行编译、测试、构建等操作</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── config.js             # 包含在\`dist\`中找到的所有文件的生成配置 </span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── build.js              # 对config.js中所有的rollup配置进行构建</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ src                       # 主要源码所在位置，核心内容</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── compiler             # 编译器代码，将template编译成render函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── core                 # vue核心代码，包括内置组件、全局API封装、vue实例化、观察者、虚拟DOM、工具函数等</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── components       # 组件相关属性，主要是keep-Alive</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── global-api       # vue全局api。例如：Vue.use Vue.extend vue.mixin</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── instance         # 实例化相关内容，生命周期，事件等</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── observe          # 响应式核心目录，双向绑定相关文件</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── util             # 工具方法</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── vdom             # 包括虚拟DOM，创建（creation）和打补丁（patching）的代码</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── platforms            # 包含平台特有的相关代码，vue是一个跨平台的mvvm框架（web、weex）</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── web              # web端</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── compiler     # web端编译相关代码，用来编译模版或render函数</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── runtime      # web端运行是相关代码，用来创建vue实例等</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   ├── server       # 服务端渲染</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── util         # 相关工具类</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── weex             # 基于通用跨平台的web开发语言和开发经验，来构建Android、ios和web应用</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── server               # 服务端渲染（ssr）</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── sfc                  # 转换单文件组件（*.vue）</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── shared               # 全局共享的方法和常量</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ test                      # test测试用例</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ types                     # vue新版本支持TypeScript，主要是用typeScript声明文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .editorconfig             # 文本编码样式配置文件      </span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .eslintignore             # eslint校验忽略文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .eslintrc.js              # eslint配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ .flowconfig               # flow配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">├─ LICENSE                   # 项目开源协议</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div>`,6),r=[p];function c(i,o,t,b,u,C){return a(),n("div",null,r)}const d=s(l,[["render",c]]);export{m as __pageData,d as default};
