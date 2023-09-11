import{_ as e,p as n,q as i,J as t}from"./framework-75bf9f82.js";const a={},r=t(`<h2 id="front-end-deployment" tabindex="-1"><a class="header-anchor" href="#front-end-deployment" aria-hidden="true">#</a> Front-end deployment</h2><p>Recommended to deploy to nginx, not recommended to deploy to iis (the difficulty factor is not suitable for new hands)</p><h2 id="package-the-project" tabindex="-1"><a class="header-anchor" href="#package-the-project" aria-hidden="true">#</a> Package the project</h2><p>Whether you deploy your project to nginx or another server, you need to package your project first</p><h2 id="package-the-official-environment" tabindex="-1"><a class="header-anchor" href="#package-the-official-environment" aria-hidden="true">#</a> Package the official environment</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build:prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="package-the-pre-release-environment" tabindex="-1"><a class="header-anchor" href="#package-the-pre-release-environment" aria-hidden="true">#</a> Package the pre-release environment</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build:stage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After the build is successfully packaged, a dist folder is created in the root directory, which contains the packaged files, usually static files such as .js, .css, index.html, and so on.</p><p>Usually, the static files in the dist folder are published to your nginx or static server, where index.html is the entry page of the backend service.</p><p>Environment variables (add: newbies don&#39;t need to look here)</p><p>All test environment or official environment variables are configured in .env.development and other .env.xxxx files.</p><p>They are injected globally via the webpack.DefinePlugin plugin.</p><p>Environment variables must start with VUE_APP. E.g.: VUE_APP_BASE_API You can get it in your code as follows: console.log(p<wbr>rocess.env.VUE_APP_xxxx)</p><p>Note that</p><p>Vue3 starts with VITE console.log(i<wbr>mport.meta.env.VITE_APP_XXXX)</p><p>#Configure nginx Add the following configuration file to the ngnix/config/nginx.conf http module Create a folder zradmin in the html directory of the nginx installation directory or another directory Upload the dist folder of the ZR.Vue project to the zradmin folder you just created (note: vue3 is a separate project) Visit http://域名/外网IP:port in your browser</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
	#Modify the port to listen on
	listen 80.
	#Modify the domain name or IP address to bind to
 	server_name domain/extranet IP; # Example: www.xxx.com/0.0.0.0

	# charset koi8-r.
	access_log logs/logs.access.log main; # Note: To remove the comment from the main log formatting statement in the http module

	# file storage access parameter setting access path needs to be set to http://www.xxx.com/uploads
	# Don&#39;t ignore it, just use it as a learning record
	location /uploads {
		# Set the resource storage path address
		root D:\\home\\website.
		# /home/website under linux

		autoindex on.
	}

	# vue project configuration
	location / {
		root html/zradmin/dist.
		index index.html.
		# Avoid 404
		try_files $uri $uri/ /index.html.
	}

	# redirect server error pages to the static page /50x.html
	error_page 500 502 503 504 /50x.html.
	location = /50x.html {
		root html.
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="secondary-directory-deployment" tabindex="-1"><a class="header-anchor" href="#secondary-directory-deployment" aria-hidden="true">#</a> Secondary Directory Deployment</h1><p>nginx configuration</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
	#Modify the port to listen on
	listen 80.
	#Modify the domain name or IP address to bind to
	server_name [www.yourdomain.com] 0.0.0.0.

	# charset koi8-r.
	access_log logs/logs.access.log main.

	# vue project configuration
	location /admin {
		alias html/zradmin/dist.
		index index.html.
		try_files $uri $uri/ /admin/index.html.
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Package configuration Modify the .env.production key in the root of the front-end project as follows Vue2 Vue3 VUE_APP_ROUTER_PREFIX = &quot;/admin&quot;.</p><h1 id="restart-nginx" tabindex="-1"><a class="header-anchor" href="#restart-nginx" aria-hidden="true">#</a> Restart nginx</h1><p>Type http://www.yourdomain.com/admin into your browser</p>`,24),d=[r];function s(o,l){return n(),i("div",null,d)}const v=e(a,[["render",s],["__file","front-manual.html.vue"]]);export{v as default};
