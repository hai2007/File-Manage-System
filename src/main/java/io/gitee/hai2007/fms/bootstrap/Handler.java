package io.gitee.hai2007.fms.bootstrap;

import io.gitee.hai2007.http.Request;
import io.gitee.hai2007.http.Respond;

public class Handler implements io.gitee.hai2007.servicer.Handler {

	// 处理请求
	public String doResolve(String req) {

		Request request = new Request(req);
		Respond respond = new Respond();

		respond.setHeader("Content-Type", "text/html; charset=utf-8");
		respond.setHeader("Access-Control-Allow-Origin", "*");

		return respond.getValue("<div>服务器返回的内容"+request+"</div>");
	}

}
