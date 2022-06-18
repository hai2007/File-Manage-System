package io.gitee.hai2007.fms.bootstrap;

public class Handler implements io.gitee.hai2007.servicer.Handler {

	// 处理请求
	public String doResolve(String request) {

		System.out.println("[请求内容]"+request);

		String lineSeparator = System.getProperty("line.separator", "\n");

		return "HTTP/1.1 200 OK" + lineSeparator + "Content-Type: text/html; charset=utf-8" + lineSeparator
				+ "Access-Control-Allow-Origin: *" + lineSeparator + lineSeparator + "<h1>[来自服务器的数据]你好呀！</h1>"
				+ lineSeparator;
	}

}
