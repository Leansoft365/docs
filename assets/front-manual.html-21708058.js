import{_ as n,p as e,q as t,J as i}from"./framework-75bf9f82.js";const a={},r=i(`<h2 id="前端部署" tabindex="-1"><a class="header-anchor" href="#前端部署" aria-hidden="true">#</a> 前端部署</h2><p>推荐部署到nginx，不推荐部署到iis(难度系数高新手不适合)</p><h2 id="打包项目" tabindex="-1"><a class="header-anchor" href="#打包项目" aria-hidden="true">#</a> 打包项目</h2><p>不管是将项目部署到 nginx 还是其他服务器，都需要先将项目打包</p><h2 id="打包正式环境" tabindex="-1"><a class="header-anchor" href="#打包正式环境" aria-hidden="true">#</a> 打包正式环境</h2><p>npm run build:prod</p><h2 id="打包预发布环境" tabindex="-1"><a class="header-anchor" href="#打包预发布环境" aria-hidden="true">#</a> 打包预发布环境</h2><p>npm run build:stage 构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件，通常是 .js 、.css、index.html 等静态文件。</p><p>通常情况下 dist 文件夹的静态文件发布到你的 nginx 或者静态服务器即可，其中的 index.html 是后台服务的入口页面。</p><p>环境变量（补充：新手不必看这里）</p><p>所有测试环境或者正式环境变量的配置都在 .env.development 等 .env.xxxx 文件中。</p><p>它们都会通过 webpack.DefinePlugin 插件注入到全局。</p><p>环境变量必须以 VUE_APP为开头。如: VUE_APP_BASE_API 你在代码中可以通过如下方式获取: console.log(p<wbr>rocess.env.VUE_APP_xxxx)</p><p>注意</p><p>Vue3 是 VITE 开头 console.log(i<wbr>mport.meta.env.VITE_APP_XXXX)</p><p>#配置 nginx 在 ngnix/config/nginx.conf http 模块中添加以下配置文件 在 nginx 安装目录中的 html 目录中创建文件夹 zradmin 或者其他目录 将 ZR.Vue 项目的 dist 文件夹上传到刚刚创建的 zradmin 中（注意：vue3是单独项目） 浏览器中访问 http://域名/外网IP:port server { #修改要监听的端口 listen 80; #修改要绑定的域名或IP地址 server_name 域名/外网IP; # 例如：www.xxx.com/0.0.0.0</p><pre><code># charset koi8-r;
access_log  logs/logs.access.log  main;   # 注意：要将http模块中的 main日志格式化语句注释去掉

# 文件存储 访问 参数设置访问路径需要设置为 http://www.xxx.com/uploads
# 不用清忽略，仅作为学习记录
location /uploads {
	# 设置资源存储路径地址
	root	D:\\home\\website;
	# linux下对应 /home/website

	autoindex on;
}

# vue项目配置
location / {
	root html/zradmin/dist;
	index index.html;
	# 避免出现404
	try_files $uri $uri/ /index.html;
}

# redirect server error pages to the static page /50x.html
error_page 500 502 503 504  /50x.html;
location = /50x.html {
	root html;
}
</code></pre><p>} #二级目录部署 nginx 配置 server { #修改要监听的端口 listen 80; #修改要绑定的域名或IP地址 server_name [www.yourdomain.com] 0.0.0.0;</p><pre><code># charset koi8-r;
access_log  logs/logs.access.log  main;

# vue项目配置
location /admin {
	alias html/zradmin/dist;
	index index.html;
	try_files $uri $uri/ /admin/index.html;
}
</code></pre><p>} 打包配置 修改 前端项目根目录下的.env.production 键值，如下 Vue2 Vue3 VUE_APP_ROUTER_PREFIX = &quot;/admin&quot;; #重启 nginx 浏览器中输入 http://www.yourdomain.com/admin</p>`,20),o=[r];function s(d,c){return e(),t("div",null,o)}const p=n(a,[["render",s],["__file","front-manual.html.vue"]]);export{p as default};
