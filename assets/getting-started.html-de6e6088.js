import{_ as s,p as d,q as l,s as e,G as n,t as a,J as t,n as r}from"./framework-75bf9f82.js";const o={},c=t(`<h2 id="how-to-develop" tabindex="-1"><a class="header-anchor" href="#how-to-develop" aria-hidden="true">#</a> How to develop</h2><ul><li>fork code to your own repository</li><li>Add a branch to develop your own business e.g. business;</li><li>The master branch is used to pull and sync the latest code and then merge the latest code pulled into your own business branch</li></ul><h2 id="development-preparation" tabindex="-1"><a class="header-anchor" href="#development-preparation" aria-hidden="true">#</a> Development preparation</h2><p>vs2022 and above and vscode (for front-end development)</p><p>vsCode recommends installing the following plugins</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>volar(vue3)
volar(vue3)
vetur(vue2)
Chinese (Simplified).
eslint.
i18n Ally(Multi-language)
vue-component
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u={href:"https://dotnet.microsoft.com/zh-cn/download/dotnet",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>Database either one of the following (tested)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- MySql &gt;= 5.7.0
- SqlServer &gt;= 2008 (recommended 2012 or higher)
- Oracle
- PgSql &gt;= 15
- Other databases are theoretically supported (test libraries can be provided for testing if needed)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node environment</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Node &gt;= 16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),m={href:"https://nodejs.org/en/download",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.cnblogs.com/zhouyu2017/p/6485265.html",target:"_blank",rel:"noopener noreferrer"},p=t(`<p>Note</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>After installing node on the front end, it is best to set the Taobao mirror source, it is not recommended to use cnpm (strange problems may occur)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --registry=https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Check out the node installation</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\admin&gt;node -v
v16.15.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>C:\\Users\\admin&gt;npm -v
9.4.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Newer versions of node already integrate with npm, so no additional installation is needed</p><p>Check the npm mirror address</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  C:\\Users\\admin&gt;npm get registry
  https://registry.npmjs.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Install vue scaffolding</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g @vue/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note that</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Because this project is front- and back-end separated, you need to start both front- and back-end before you can access
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="backend-start" tabindex="-1"><a class="header-anchor" href="#backend-start" aria-hidden="true">#</a> Backend Start</h2><ol><li>Pull items</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>## Clone the project
git clone https://github.com/Lean365/LaplaceNet.git d:/LaplaceNet/

## Access the project
cd LaplaceNet

## Open the project
Open the Laplace.Net.sln solution

## Run the project
Set La.WebApi as the startup project and run startup.bat in the root of the project to start it

## Package and publish
Select La.WebApi right-click menu and click Publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><p>Create Laplace_Dev database and create database table, the file is in the root directory document, choose your own corresponding database file, you can also build the database by codefirst</p></li><li><p>Through the database script</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>document
│
├─mysql
│ admin-mysql-initial-data.sql -&gt; seed data
│ admin-mysql.sql -&gt; database table
│
├─pgsql
│ admin-pg15.sql -&gt; database table
│ admin-pg15-initialization-data.sql -&gt;seed-data
│
└─sqlserver
│ admin-sqlserver-initialization-data.sql -&gt; seed data
│ admin-sqlserver-table-fields-description-import.sql
│ admin-sqlserver.sql -&gt; database table
└─oracle
│ seq.text -&gt;oracle sequence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、Build a database table through codefirst (recommended) Currently only support framework net7 or above use</p><p>Set the appsettings.json configuration file, set the following false to true, then restart the program can automatically create the database table, the next step to import the seed data</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;InitDb&quot;: false // whether to initialize the db
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Modify the appsettings.json configuration file</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;dbConfigs&quot;: [
	// business library
	{
		&quot;Conn&quot;: &quot;Data Source=LAPTOP-STKF2M8H\\\\SQLEXPRESS;User ID=admin;Password=admin123;Initial Catalog=ZrAdmin;&quot;.
		&quot;DbType&quot;: 1, // database type MySql = 0, SqlServer = 1, Oracle = 3, PgSql = 4
		&quot;ConfigId&quot;: &quot;0&quot;,//
		&quot;IsAutoCloseConnection&quot;: true // whether to release automatically
	}.
	// code generation using
	{
		&quot;Conn&quot;: &quot;Data Source=LAPTOP-STKF2M8H\\\\SQLEXPRESS;User ID=admin;Password=admin123;Initial Catalog={dbName};&quot;.
		&quot;DbType&quot;: 1.
		&quot;IsAutoCloseConnection&quot;: true.
		&quot;DbName&quot;: &quot;ZrAdmin&quot;,//code generation default connection to the database
		&quot;IsGenerateDb&quot;: true // whether code generation using the library, do not change
	}
	//... Add more database sources below
].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Database connection string format reference</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MySQL
#The system built-in mysql driver does not need to be installed
Data Source=localhost;port=3306;User ID=sa;Password=zradmin123;Database=ZrAdmin;CharSet=utf8;sslmode=none.

sqlserver
Data Source=localhost;Initial Catalog=ZrAdmin;User ID=sa;Password=zradmin123.

Oracle
# Core
data source = localhost/orcl;user id= ZrAdmin; password=zradmin123;persist security info=false

PgSql
# Need to install driver by yourself: Npgsql
HOST=localhost;PORT=5342;DATABASE=ZrAdmin;USERID=xxx;PASSWORD=zradmin123.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following will appear if the startup is successful, if it fails please check the project directory admninLogs folder log</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>   __                __                  _   __     __
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The backend run successfully can be accessed through (http://localhost:8888), but no static page will appear, you can continue to refer to the following steps to deploy the frontend, and then access through the frontend address.</p><h3 id="it-is-recommended-not-to-change-the-startup-port-address" tabindex="-1"><a class="header-anchor" href="#it-is-recommended-not-to-change-the-startup-port-address" aria-hidden="true">#</a> It is recommended not to change the startup port address</h3><p>About the seed data</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、Can be imported by the above script
2、Import through the interface (recommended) http://localhost:8888/common/initseedData
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Front-end startup Please make sure you have installed node environment</p><p>vue3.x</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Clone the code (project with vue3.x in it)
git clone https://github.com/Lean365/LaplaceNet.git

# Go to the project directory
cd La.vue

# Install the dependencies
npm install

# Start the service
npm run dev

# Build the test environment npm build:stage
# Build the production environment npm build:prod
# Access the front end at http://localhost:8887

# If building with yarn install npm install yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Open the browser and enter: (http://localhost:8887) Default account/password admin/123456 If the login page is displayed correctly and you can log in successfully, and the menu and page are displayed normally, the environment is set up successfully</p><h2 id="npm-configuration-not-necessary" tabindex="-1"><a class="header-anchor" href="#npm-configuration-not-necessary" aria-hidden="true">#</a> npm configuration (not necessary)</h2><p>node installation process: omitted Here node will be installed to D:\\nodejs directory</p><p>First configure the path to the global modules and the cache path of npm by creating two new folders, node_cache and node_global, in the d:\\nodejs directory</p><p>Start cmd, and then execute the following 2 commands</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config set prefix &quot;D:\\nodejs\\node_global&quot;
npm config set cache &quot;D:\\nodejs\\node_cache&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To see if the settings are successful, type the following command in cmd</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm config get prefix
//If you output D:\\nodejs\\node_global, it means success
npm config get cache
//will output D:\\nodejs\\node_cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, we have to modify the system environment variables (&quot;This computer - right click - properties - advanced system settings - environment variables&quot;). First, create a new variable NODE_PATH in the user variables, with the value of node_modules in the nodejs installation folder, i.e. D:\\nodejs\\node_modules</p><p>Then, add node_global to the Path variable of the system variable, and paste D:\\nodejs\\node_global into node</p>`,44);function h(g,_){const i=r("ExternalLinkIcon");return d(),l("div",null,[c,e("p",null,[n("Install .netSdk "),e("a",u,[n("(https://dotnet.microsoft.com/zh-cn/download/dotnet)"),a(i)])]),v,e("p",null,[n("node "),e("a",m,[n("download address"),a(i)])]),e("p",null,[n("node "),e("a",b,[n("installation steps"),a(i)])]),p])}const f=s(o,[["render",h],["__file","getting-started.html.vue"]]);export{f as default};
