import{_ as i,p as n,q as e,J as s}from"./framework-75bf9f82.js";const d={},l=s(`<h2 id="front-end" tabindex="-1"><a class="header-anchor" href="#front-end" aria-hidden="true">#</a> Front End</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─.vscode
├─bat
├─dist
├─html
├─public
├─src
│  ├─api
│  │  ├─article
│  │  ├─business
│  │  ├─monitor
│  │  ├─system
│  │  │  └─dict
│  │  └─tool
│  ├─assets
│  │  ├─401_images
│  │  ├─404_images
│  │  ├─iconfont
│  │  ├─icons
│  │  │  └─svg
│  │  ├─images
│  │  ├─logo
│  │  └─styles
│  ├─components
│  │  ├─Breadcrumb
│  │  ├─Crontab
│  │  ├─DictTag
│  │  ├─Echarts
│  │  ├─Editor
│  │  ├─FileUpload
│  │  ├─Hamburger
│  │  ├─HeaderSearch
│  │  ├─IconSelect
│  │  ├─iFrame
│  │  ├─ImagePreview
│  │  ├─ImageUpload
│  │  ├─LangSelect
│  │  ├─Notice
│  │  ├─Pagination
│  │  ├─ParentView
│  │  ├─RightToolbar
│  │  ├─Screenfull
│  │  ├─SizeSelect
│  │  ├─SvgIcon
│  │  ├─TopNav
│  │  ├─vue3-cron-core
│  │  └─Zr
│  │      ├─Doc
│  │      └─Git
│  ├─directive
│  │  ├─module
│  │  └─permission
│  ├─i18n
│  │  ├─lang
│  │  └─pages
│  │      ├─login
│  │      └─menu
│  ├─layout
│  │  └─components
│  │      ├─IframeToggle
│  │      ├─InnerLink
│  │      ├─Settings
│  │      ├─Sidebar
│  │      └─TagsView
│  ├─plugins
│  ├─router
│  ├─store
│  │  └─modules
│  ├─utils
│  └─views
│      ├─business
│      ├─components
│      │  ├─CommonMenu
│      │  └─icons
│      ├─dashboard
│      ├─error
│      ├─monitor
│      │  ├─cache
│      │  ├─job
│      │  ├─logininfor
│      │  ├─operlog
│      │  └─server
│      ├─redirect
│      ├─system
│      │  ├─article
│      │  ├─commonLang
│      │  ├─config
│      │  ├─dept
│      │  ├─dict
│      │  ├─menu
│      │  ├─notice
│      │  ├─oauth
│      │  ├─post
│      │  ├─role
│      │  ├─roleusers
│      │  └─user
│      │      └─profile
│      └─tool
│          ├─build
│          ├─email
│          ├─file
│          ├─gen
│          └─swagger
└─vite
    └─plugins
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="back-end" tabindex="-1"><a class="header-anchor" href="#back-end" aria-hidden="true">#</a> Back End</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─La.Infra                          -&gt;[基础层类库]：数据类型，I/O以及其他类库；
├─La.Common                         -&gt;[公共层类库]：包括数据、正则、字符串等的Helper；
├─La.Service                        -&gt;[服务层类库]：提供WebApi接口调用；
├─La.Repository                     -&gt;[仓库层类库]：方便提供有执行存储过程的操作；
├─La.Model                          -&gt;[实体层类库]：提供项目中的数据库表、数据传输对象；
├─La.WebApi                         -&gt;[webapi接口]：为Vue版或其他三方系统提供接口服务。
├─La.Tasks                          -&gt;[定时任务类库]：提供项目定时任务实现功能；
├─La.CodeGenerator                  -&gt;[代码生成功能]：包含模板、方法、代码、下载。
├─La.Vue                            -&gt;[前端UI]：vue3.0版本UI层。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),v=[l];function a(r,c){return n(),e("div",null,v)}const u=i(d,[["render",a],["__file","directory-file.html.vue"]]);export{u as default};
