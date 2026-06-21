package com.rewear;

import org.apache.catalina.Context;
import org.apache.catalina.startup.Tomcat;

import java.io.File;

public class Main {
    public static void main(String[] args) throws Exception {
        String webappDirLocation = "src/main/webapp/";
        Tomcat tomcat = new Tomcat();

        String webPort = System.getenv("PORT");
        if(webPort == null || webPort.isEmpty()) {
            webPort = "8080";
        }

        tomcat.setPort(Integer.valueOf(webPort));

        // Define a web application context.
        Context ctx = tomcat.addContext("", new File(".").getAbsolutePath());

        // Add CORS Filter
        org.apache.tomcat.util.descriptor.web.FilterDef filterDef = new org.apache.tomcat.util.descriptor.web.FilterDef();
        filterDef.setFilterName("CorsFilter");
        filterDef.setFilterClass("com.rewear.CorsFilter");
        ctx.addFilterDef(filterDef);

        org.apache.tomcat.util.descriptor.web.FilterMap filterMap = new org.apache.tomcat.util.descriptor.web.FilterMap();
        filterMap.setFilterName("CorsFilter");
        filterMap.addURLPattern("/*");
        ctx.addFilterMap(filterMap);

        // Add Servlets
        Tomcat.addServlet(ctx, "AuthServlet", new AuthServlet());
        ctx.addServletMappingDecoded("/api/auth/*", "AuthServlet");

        Tomcat.addServlet(ctx, "ProductServlet", new ProductServlet());
        ctx.addServletMappingDecoded("/api/products/*", "ProductServlet");

        Tomcat.addServlet(ctx, "OrderServlet", new OrderServlet());
        ctx.addServletMappingDecoded("/api/orders/*", "OrderServlet");

        tomcat.getConnector(); // trigger creation of default connector
        tomcat.start();
        System.out.println("Tomcat server started on port " + webPort);
        tomcat.getServer().await();
    }
}
