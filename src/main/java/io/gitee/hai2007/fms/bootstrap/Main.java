package io.gitee.hai2007.fms.bootstrap;

import io.gitee.hai2007.servicer.Servicer;

public class Main {
	public static void main(String[] args) throws Exception {
		
		// 启动服务器并传递请求处理实例
		new Servicer(9999).run(new Handler());

	}

}
