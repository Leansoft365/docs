import{_ as a,p as l,q as t,s as e,G as n,t as d,J as s,n as r}from"./framework-75bf9f82.js";const v={},c=s(`<h2 id="如何开发" tabindex="-1"><a class="header-anchor" href="#如何开发" aria-hidden="true">#</a> 如何开发</h2><ul><li>fork 代码到自己的仓库</li><li>新增一个分支用来开发自己的业务 比如：business；</li><li>主分支用来拉取同步最新代码之后将拉取到的最新代码合并到自己的 business 分支上</li></ul><h2 id="开发准备" tabindex="-1"><a class="header-anchor" href="#开发准备" aria-hidden="true">#</a> 开发准备</h2><p>vs2022 及以上 以及 vscode(开发前端用到)</p><p>vsCode 建议安装以下插件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>volar(vue3)
vetur(vue2)
Chinese (Simplified),
eslint,
i18n Ally(多语言)
vue-component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u={href:"https://dotnet.microsoft.com/zh-cn/download/dotnet",target:"_blank",rel:"noopener noreferrer"},o=s(`<p>数据库任选以下其中一种(通过测试的)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- MySql &gt;= 5.7.0
- SqlServer &gt;= 2008(推荐 2012 以上)
- Oracle
- PgSql &gt;=15
- 其他数据库理论上也支持（如果有需要可以提供测试库测试）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node 环境</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Node &gt;= 16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),m={href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/zhouyu2017/p/6485265.html",target:"_blank",rel:"noopener noreferrer"},p=s(`<p>注意</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>前端安装完 node 后，最好设置下淘宝镜像源，不建议使用 cnpm(可能会出现奇怪的问题)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --registry=https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 node 安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\admin&gt;node -v
v16.15.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\admin&gt;npm -v
9.4.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>新版本的 node 已经集成了 npm 所以不需要额外的安装</p><p>查看 npm 镜像地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  C:\\Users\\admin&gt;npm get registry
  https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装 vue 脚手架</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>因为本项目是前后端分离的，所以需要前后端都启动好，才能进行访问
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="后端启动" tabindex="-1"><a class="header-anchor" href="#后端启动" aria-hidden="true">#</a> 后端启动</h2><p>1.拉取项目</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## 克隆项目
git clone https://github.com/Lean365/LaplaceNet.git d:/LaplaceNet/

## 进入项目
cd LaplaceNet

## 打开项目
打开 Laplace.Net.sln 解决方案

## 运行项目
设置 La.WebApi 为启动项目 在项目根目录中运行startup.bat进行启动

## 打包发布
选择 La.WebApi 右键菜单点击发布
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建 Laplace_Dev 数据库并创建数据库表，文件在根目录document，选择自己对应的数据库文件，也可以通过codefirst建库</p><p>1、通过数据库脚本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document
│
├─mysql
│      admin-mysql-初始化数据.sql			 			-&gt;种子数据
│      admin-mysql.sql							 			 -&gt;数据库表
│
├─pgsql
│      admin-pg15.sql											-&gt;数据库表
│      admin-pg15初始化数据.sql							-&gt;种子数据
│
└─sqlserver
│      admin-sqlserver-初始化数据.sql				-&gt;种子数据
│      admin-sqlserver-表字段说明导入.sql
│      admin-sqlserver.sql								-&gt;数据库表
└─oracle
│      seq.text														-&gt;oracle 序列
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、通过 codefirst 建库建表（建议） 目前仅支持 框架 net7 以上使用</p><p>设置 appsettings.json 配置文件，将下面的 false 设置为 true，然后重新启动程序既可自动创建数据库表， 下一步导入种子数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;InitDb&quot;: false //是否初始化db
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 appsettings.json 配置文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dbConfigs&quot;: [
	// 业务库
	{
		&quot;Conn&quot;: &quot;Data Source=LAPTOP-STKF2M8H\\\\SQLEXPRESS;User ID=admin;Password=admin123;Initial Catalog=ZrAdmin;&quot;,
		&quot;DbType&quot;: 1, //数据库类型 MySql = 0, SqlServer = 1, Oracle = 3，PgSql = 4
		&quot;ConfigId&quot;: &quot;0&quot;,//
		&quot;IsAutoCloseConnection&quot;: true //是否自动释放
	},
	//代码生成使用
	{
		&quot;Conn&quot;: &quot;Data Source=LAPTOP-STKF2M8H\\\\SQLEXPRESS;User ID=admin;Password=admin123;Initial Catalog={dbName};&quot;,
		&quot;DbType&quot;: 1,
		&quot;IsAutoCloseConnection&quot;: true,
		&quot;DbName&quot;: &quot;ZrAdmin&quot;,//代码生成默认连接数据库
		&quot;IsGenerateDb&quot;: true //是否代码生成使用库，不要改动
	}
	//...下面添加更多的数据库源
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库连接字符串格式参考</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MySQL
#系统内置 mysql 驱动不需要安装
Data Source=localhost;port=3306;User ID=sa;Password=zradmin123;Database=ZrAdmin;CharSet=utf8;sslmode=none;

sqlserver
Data Source=localhost;Initial Catalog=ZrAdmin;User ID=sa;Password=zradmin123;

Oracle
# 需要自行安装驱动：Oracle.ManagedDataAccess.Core
data source = localhost/orcl;user id= ZrAdmin; password=zradmin123;persist security info=false

PgSql
# 需要自行安装驱动：Npgsql
HOST=localhost;PORT=5342;DATABASE=ZrAdmin;USERID=xxx;PASSWORD=zradmin123;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动成功会出现以下内容，如果启动失败请查看项目目录 admninLogs 文件夹日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   __                __                  _   __     __
   / /   ____ _____  / /___ _________    / | / /__  / /_
  / /   / __ \`/ __ \\/ / __ \`/ ___/ _ \\  /  |/ / _ \\/ __/
 / /___/ /_/ / /_/ / / /_/ / /__/  __/ / /|  /  __/ /_
/_____/\\__,_/ .___/_/\\__,_/\\___/\\___(_)_/ |_/\\___/\\__/
           /_/

                                                  Author: Davis.Cheng
                                                    Date:---
SwaggerDoc: La.WebApi.xml
源码地址: https://github.com/Lean365/LaplaceNet
官方文档：https://laplacenet.github.io/
打赏作者：https://laplacenet.github.io/docs/others/donate.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端运行成功可以通过(http://localhost:8888) 访问，但是不会出现静态页面，可以继续参考下面步骤部署前端，然后通过前端地址来访问。</p><h3 id="建议不要修改启动端口地址" tabindex="-1"><a class="header-anchor" href="#建议不要修改启动端口地址" aria-hidden="true">#</a> 建议不要修改启动端口地址</h3><p>关于种子数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、可以通过上面脚本导入
2、通过接口导入（推荐） http://localhost:8888/common/initseedData
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="前端启动" tabindex="-1"><a class="header-anchor" href="#前端启动" aria-hidden="true">#</a> 前端启动</h2><p>请确保你已经安装了 node 环境</p><p>vue3.x</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 克隆代码(项目中包含vue3.x)
git clone https://github.com/Lean365/LaplaceNet.git

# 进入项目目录
cd La.vue

# 安装依赖
npm install

# 启动服务
npm run dev

# 构建测试环境 npm build:stage
# 构建生产环境 npm build:prod
# 前端访问地址 http://localhost:8887

# 如果使用yarn构建 安装 npm install yarn

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开浏览器，输入：(http://localhost:8887) 默认账户/密码 admin/123456 若能正确展示登录页面，并能成功登录，菜单及页面展示正常，则表明环境搭建成功</p><h2 id="npm-配置-非必要" tabindex="-1"><a class="header-anchor" href="#npm-配置-非必要" aria-hidden="true">#</a> npm 配置(非必要)</h2><p>node 安装过程：略 这里将 node 安装到 D:\\nodejs 目录</p><p>先配置 npm 的全局模块的存放路径以及cache路径 具体方法：在 d:\\nodejs 目录新建 node_cache、node_global 两个文件夹</p><p>启动 cmd，然后执行以下 2 个命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set prefix &quot;D:\\nodejs\\node_global&quot;
npm config set cache &quot;D:\\nodejs\\node_cache&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要看是否设置成功，可在 cmd 里输入如下命令查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config get prefix
//如果输出 D:\\nodejs\\node_global表示成功
npm config get cache
//将会输出 D:\\nodejs\\node_cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，我们要修改系统环境变量（“此电脑--右键--属性--高级系统设置---环境变量”）。首先在 用户变量 里新建一个变量NODE_PATH,值为安装 nodejs 文件夹下的 node_modules ，即：D:\\nodejs\\node_modules</p><p>然后，在系统变量的 Path 变量里添加 node_global ，新建将 D:\\nodejs\\node_global 粘贴进去 node</p>`,46);function g(_,h){const i=r("ExternalLinkIcon");return l(),t("div",null,[c,e("p",null,[n("安装.netSdk"),e("a",u,[n("(https://dotnet.microsoft.com/zh-cn/download/dotnet)"),d(i)])]),o,e("p",null,[n("node "),e("a",m,[n("下载地址"),d(i)])]),e("p",null,[n("node "),e("a",b,[n("安装步骤"),d(i)])]),p])}const q=a(v,[["render",g],["__file","getting-started.html.vue"]]);export{q as default};
