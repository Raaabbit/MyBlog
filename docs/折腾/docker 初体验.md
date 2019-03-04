# docker 初体验
> 在参加RoboCup仿真组的时候遇到了一个很奇怪的问题，实验平台运行的环境是java9+，但是智能体代码的运行环境是java8（高版本不可以）。本来打算起一个虚拟机来运行两份不同的代码，不过室友告诉我一个更好的解决方案，使用docker——更轻量高效的解决方案。

## 什么是docker

摘自[docker中文社区](http://www.docker.org.cn/book/docker/what-is-docker-16.html)：Docker是一个开源的引擎，可以轻松的为任何应用创建一个轻量级的、可移植的、自给自足的容器。开发者在笔记本上编译测试通过的容器可以批量地在生产环境中部署，包括VMs（虚拟机）、bare metal、OpenStack 集群和其他的基础应用平台。

## 为什么我们使用docker
我们已经有了虚拟机这样的很成熟的解决方案，那么我们为什么需要使用docker 呢？
一开始我将docker理解为一个更轻量级，更优化的虚拟机，但是事实上他们是不同的机制。
看到一个很有趣的形容：

- 物理机：一个独栋别墅，有一个房子，独立地基，独立花园
- 虚拟机：一栋公寓楼，一栋楼里里有很多单独套间，所有套间的住户共享这栋楼，同时不共享水电，也不能进入别人的房子。
- 容器：一栋楼，楼房里有很多套件，每个套间里有小房间，住户只拥有一个小房间，同一套间的多个住户共享套间的所有资源，不能进入别人的小房间。
### 举个栗子
以我遇到的情况为例：

- 如果我使用虚拟机：
	- 创建一个虚拟机，安装ubuntu，在虚拟机中配置JAVA10的环境，运行实验平台
	- 创建一个虚拟机，安装ubuntu，在虚拟机中配置JAVA8的环境，运行开发平台
- 如果我使用docker容器：
	- 安装ubuntu的镜像
	- 创建一个容器，配置JAVA10的环境，运行实验平台
	- 创建一个容器，配置JAVA8的环境，运行开发平台

这样说可能还是没有体现 docker 的特点我们来画一个简单的图（为了更形象加上了一个CentOS灵魂画手上线）
![虚拟机与docker容器](https://img-blog.csdn.net/20181001171212559?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 超简单使用入门
### 安装
> 安装这种小事，自己去官网看咯～
> ps：我使用的是deepin15.7系统，安装可以戳-->[博客](https://www.jianshu.com/p/e6b6268956ec)

下面的操作将以ubuntu为例～
### 搜索/查看/添加/删除镜像
- 搜索镜像：`docker search ubuntu`
	![搜索镜像](https://img-blog.csdn.net/20181004210608880?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 下载镜像：`docker pull ubuntu`
	![下载镜像](https://img-blog.csdn.net/20181004211737305?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 查看已经下载的所有镜像：`docker images`
![查看已经下载的镜像](https://img-blog.csdn.net/20181004210832205?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 删除镜像：
![删除镜像](https://img-blog.csdn.net/20181004211231723?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
### 启动新容器

- `docker run  -i -t ubuntu:latest`
> 其中参数-i指交互式，-t指临时终端

![启动容器](https://img-blog.csdn.net/20181004213908668?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
我个人感觉与其说是启动容器，不如说是创建一个新的容器，因为每次用上面的指令创建的容器都是不同的，在这里就不得不提一下踩的一个坑：假设我们先创建了一个容器并进行改动，下次如果还想使用这个改动过的容器不应该使用`docker run` 而是`docker start`，这个我们后面再提～
由于我们没有为这个容器命名，所以docker为这个容器分配了一个随机id，也就是上面图片中的`d8a37fb0aaf8`

### 退出当前容器
- 在容器的终端中输入`exit`或者`ctrl+D`
- （这个就不截图了吧，，，，）

### 查看容器
- docker ps ：列出当前所有正在运行的container
- docker ps -l：列出最近一次启动的container
- docker ps -a ：列出所有的container（包含历史，即运行过的container）    
- docker ps -q ：列出最近一次运行的container ID
![查看容器](https://img-blog.csdn.net/20181004214759269?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

根据上面的`docker ps -a`命令我们可以看到我已经创建过两个容器。
### 启动并进入容器
上面我提到，如果我在一个容器里面进行了修改并退出，那么当我下次`docker run`的时候并不会进入这个我修改过的容器而是创建一个新的容器，大家可以尝试一下下面的代码：

```
docker run -i -t ubuntu:latest /bin/bash	# 创建一个容器
# 下面的操作是在容器中的操作
touch /home/test.txt		# 在新容器的home目录下创建一个test.txt文件夹
exit						# 退出当前容器
docker run -i -t ubuntu:latest /bin/bash	# 再创建一个容器
# 下面的操作是在容器中的操作
cd /home				# 进入home目录
ls						# 查看home目录下的所有内容，（当然是空的）
```
这是为什么呢～因为不同的容器有自己独立的改动层，不同的容器是不互通数据滴～
所以如果我们要使用一个容器的时候要执行的命令是`docker start [容器名/容器id]`，当然在执行这条命令之后是没有任何反应的，还要再加上一条`docker attach [容器名/容器id]`，也可以使用`docker exec -i -t [容器id] /bin/bash`，->看图
![在这里插入图片描述](https://img-blog.csdn.net/20181004222617852?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

### 创建命名的容器
上面我们进行的所有操作都是通过容器id进行的，但是这样很繁琐，如果创建了多个容器可能会混乱，在`docker run `的时候我们就可以进行命名
```
docker run docker run -i -t ubuntu:latest /bin/bash
```
![在这里插入图片描述](https://img-blog.csdn.net/2018100423001542?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
### 删除容器
- 删除容器：`docker rm [容器名/容器id]`
- rm只能删除停止的容器，如果想要删除正在运行的容器可以加上`-f`选项，但是一般来说不建议这样做