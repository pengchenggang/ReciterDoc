# JAVA百问百答

## vscode 新建 springboot java项目

### 1. 安装javaJDK

**软件下载** 
* 下载地址： [https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
* Windows x64	210.18 MB  	jdk-8u231-windows-x64.exe
* 我现在版本是 jdk1.8.0_151，主要大版本就是 1.8 和 1.7， 现在最新下的都是1.8，还没用处什么区别。
* 安装前准备工作，D盘新建文件夹JAVA，在JAVA文件夹中新建两个文件夹：jdk和jre。 JDK安装会先后安装jdk和jre，更改对应的文件夹位置即可。jdk文件下会默认安装jre，因此，安装包进行安装jre时不能选择和jdk相同的文件夹

**配置环境变量**

* Java 的运行环境需要配置 JAVA_HOME,classpath 和 Path三个参数，按一下方法分别配置。
* 环境变量设置：此电脑->属性->高级系统设置->高级->环境变量->系统变量
* 1、新建JAVA_HOME环境变量，就是刚才安装目录 例如 `D:\Tools\JAVA\jdk`
* 2、新建classpath环境变量 `.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar`
* 3、编辑Path变量 添加 `%JAVA_HOME%\bin` 放置顶端。

**查看是否安装成功**

* cmd中输入`java -version` 查看java版本
* 输入`javac -version`查看javac 版本

参考文章：[java jdk1.8.0_221 安装步骤](https://blog.csdn.net/u010058695/article/details/100983213)

### 2. 安装Maven

**软件下载**

* 下载地址：[http://maven.apache.org/download.cgi](http://maven.apache.org/download.cgi)
* 下载这个文件 解压本地 Binary zip archive	apache-maven-3.6.3-bin.zip

**配置maven环境变量**

* 新建 ：M2_HOME   值：E:\apache-maven-3.0.4(自己maven插件的路径)
* 在PATH中加上`%M2_HOME%\bin;`
* 用mvn -v检查是否安装成功

**创建本地maven jar包仓库** 
`我还没有创建本地库，回来可以看看`

1. 新建文件夹用于存放jar包的仓库
2. 修改：`apache-maven-3.0.3\conf\settings.xml` 中的`<settings>`节点中添加下面这句关联本地jar包仓库

```xml
<localRepository>D:\software\mavenFactory</localRepository>
```


参考文章：[Maven编程环境搭建以及VS code Maven设置](https://blog.csdn.net/jzlswc_7620255/article/details/94590020)
### 3. 安装vscode插件

** java vscode 插件，安装下面这两个后，其他插件会连带安装**

* Java Extension Pack
* Spring Boot Extension Pack

参考文章：[VsCode搭建springboot 并配置maven环境](https://blog.csdn.net/zhanaolu4821/article/details/84873312)
### 4. 配置vscode环境

**vscode设置 快捷键ctrl+，** `展开代码`
```json
 // java 设置 ----------------------
  "java.errors.incompleteClasspath.severity": "ignore",
  "java.home": "C:\\Program Files\\Java\\jdk1.8.0_151",
  "java.configuration.maven.userSettings": "E:\\myHome\\epan\\javaz\\apache-maven-3.6.3\\conf\\settings.xml",
  "maven.executable.path": "E:\\myHome\\epan\\javaz\\apache-maven-3.6.3\\bin\\mvn.cmd",
  "maven.terminal.useJavaHome": true,
  "maven.terminal.customEnv": [
    {
      "environmentVariable": "JAVA_HOME",
      "value": "C:\\Program Files\\Java\\jdk1.8.0_151"
    }
  ],
  // java 设置 ----------------------
```

::: tip
如配置 阿里云仓库，见[参考文章](https://blog.csdn.net/zhanaolu4821/article/details/84873312)
:::

### 5. 初始化springBoot项目

* 使用快捷键(Ctrl+Shift+P)命令窗口，输入 Spring 选择创建 Maven 项目
* `Spring Initializr: Generate a Maven Project`
* `Java`
* `com.example` 后期自己起名字
* `demo` 这个项目类库的名字
* 选择Spring Boot版本：`2.06` 就看自己第一个是什么 纯数字的
* 选择需要引入的包 `DevTools` `Web` 第一个demo可以就来俩先
* 创建好后vscode右下角会有如下提示，点击Open it 即可打开刚才创建的Spring Boot项目

::: tip
* DevTools（代码修改热更新，无需重启）
* Web（集成tomcat、SpringMVC）
* Lombok（智能生成setter、getter、toString等接口，无需手动生成，代码更简介）
* Thymeleaf （模板引擎）。
:::

参考文章：[VsCode搭建springboot 并配置maven环境](https://blog.csdn.net/zhanaolu4821/article/details/84873312)

### 6. 创建@RestController和@RequestMapping("/")

```java
package com.example.demo1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class DemoApplication {

  public static void main(String[] args) {
    SpringApplication.run(DemoApplication.class, args);
  }

  @RequestMapping("/")
  public String home() {
    return "你好，欢迎使用Visual Studio Code!";
  }

}
```

::: tip
默认生成的架子，没有获取 / ,所以打开是404 错误页，所以需要自己加上 相应的代码
:::




::: tip 
----------我是主题分割线------------
:::
## idea 起项目

* 可以不架Maven库，从默认库idea走，很神奇的一件事情

**启动运行StartUp**
```
src/main/java/com.techCoLtd.***.api/StartUp
```
进到文件里面 右键运行

**链接库文件 application.yml**
application-test.yml 里面配置 数据库