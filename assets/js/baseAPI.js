// 服务器地址
var baseURL = 'http://api-breakingnews-web.itheima.net'

// 拦截所有ajax请求
$.ajaxPrefilter(function(params) {
    params.url = baseURL + params.url
})
