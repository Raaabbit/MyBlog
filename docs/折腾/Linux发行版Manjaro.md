# Minux发行版Manjaro
我又双叒叕换了一个linux发行版——Manjaro，年轻嘛，总是想要折腾一下的，事实证明这都是值得滴。
> 之所以暂时不使用`deepin`是因为`deepin`的电量管理确实又不小的问题（deepin15.8+DDE桌面+大黄蜂显卡驱动+官方省电模式浏览网页写博客大概2小时断电），希望官方加油呀～

## 官方介绍
Manjaro基于Arch Linux，继承了Arch Linux滚动更新的特点，可以直接使用AUR上最齐全的软件。

针对ArchLinux的“硬伤”、对新手不友好的“弱点”，Manjaro采用了图形化安装程序，使安装过程非常轻松、人性化，同时也把安装ArchLinux后的大量繁琐工作——安装配置显卡驱动、AUR、X服务、桌面环境、中文输入法、Flash插件、音频解码器、显示管理器等——全都做到位了，为新手解决了大麻烦，为高级用户节省了大量时间。

事实证明，上面这些绝非虚言！

## 重点
**遇到任何问题，优先查看官方文档以及wiki以及论坛**
官网：[https://manjaro.org/](https://manjaro.org/)
官方英文论坛：[https://forum.manjaro.org/](https://forum.manjaro.org/)

## 镜像下载
我是在中文站下载的镜像，[https://www.manjaro.cn/](https://www.manjaro.cn/)
除了官方提供的`manjaro-kde`，`manjaro-gnome`，`manjaro-xfce`，`manjaro`还支持各种社区桌面环境。
[戳此看详情：](https://manjaro.org/community-editions/)包括`Awesome (17.1.12)`，`Bspwm (17.1.7)`，`Budgie (17.1.12)`，`Cinnamon (17.1.12)`，`Deepin (17.1.12)`，`i3 (18.0)`，`LXDE / LXQT (17.1.12)`，`Mate (17.1.12)`，`Openbox (17.1.12)`
![社区桌面系统](https://img-blog.csdnimg.cn/20181126160416565.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==,size_16,color_FFFFFF,t_70)
作为一个deepin用户，强烈推荐尝试deepin桌面环境。
## 安装
作为一个安装了n多次系统的老司机，这次竟然翻车了，用`Rufus`刻录好启动盘，开机，然后就进入到了grub的修复模式`unknown filesystem`。随后在论坛中查看，找到的解决方案[https://forum.manjaro.org/t/dell-xps-9350-usb-rufus-error-unknown-filesystem-unable-to-install-solved/64430](https://forum.manjaro.org/t/dell-xps-9350-usb-rufus-error-unknown-filesystem-unable-to-install-solved/64430)
使用`Etcher`进行刻录，成功解决了（虽然感觉这个解决方法很不讲道理，据说是因为`manjaro`的grub的版本比较高）

至于安装的流程，确实是没什么好说的，插上U盘后先进入live系统体验一下，其中`Manjaro Hello`程序中间就是一个`install`按钮，然后就跟随指导一路向下就好啦。
## 第一步，配置软件源
虽然我没有经过任何配置就惊奇地发现我可以使用~~`google`~~ ，但是还是把软件源换到国内速度更快。
网上的教程由于时间可能比较老了，有一些命令是不能用的，本文写于2018-11-26使用命令如下：
```shell
sudo pacman-mirrors -i -c China -m rank #对镜像排名
```
![执行命令后结果](https://img-blog.csdnimg.cn/20181126161330515.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==,size_16,color_FFFFFF,t_70)
选择想使用的源勾选，然后点击ok既可（我全选了）。
但是有时教育网会出现种种问题（消音），安装时会提示文件有问题，这时候我们可以修改文件`/etc/pacman.d/mirrorlist `，将提示出问题的镜像注释掉/删除掉（我写这篇博客的时候清华源刚好不能用了）。
同时`archlinux`的资源也不能浪费，在文件` /etc/pacman.conf`末尾加上
```
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
```
随后
```shell
sudo pacman-mirrors -g  ## 更新源列表
sudo pacman -Syyu	## 更新pacman数据库并全面更新系统
```
不得不说，`arch/manjaro`非常又竞争力的一点是软件极为丰富，在自带的应用管理器中基本都可以找得到，同时还有`aur`的超强加持，一般大家都会安装`yaourt`，但是我看到一篇blog表示`yaourt`已经停止维护了，这一点待我确认后更新。
## 美化
我使用Gnome的原因就是它的高度可定制性，但是安装好后感觉没什么好美化的，已经很满意了（实名diss`ubuntu`的配色不好看），关于Gnome的美化问题，大家看其他大佬的文章吧。
## 部分软件安装
大部分软件可以通过`pacman`安装，安装的命令参见wiki：[wiki](https://wiki.archlinux.org/index.php/Pacman_%28%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87%29)
甚至你可以安装`dpkg`，然后安装`.deb`
### 中文输入法
```shell
sudo pacman -S fcitx-im #默认全部安装
sudo pacman -S fcitx-configtool
sudo pacman -S fcitx-sogoupinyin #安装搜狗拼音（我没有使用搜狗，大家自行选择）
sudo nano ~/.xprofile #配置文件（默认自带nano，需要使用vim的自行安装）
```
然后在文件中添加
```shell
export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS="@im=fcitx"
```
注销后生效
### Tim或QQ
在此再次感谢deepin团队封装了deepin-wine版本的QQ和Tim
在这里我搜索到了两种Tim，分别来在自于官方和deepin的一位用户，大家可以试用体验后下载。
![通过软件管理安装Tim](https://img-blog.csdnimg.cn/20181127232003232.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==,size_16,color_FFFFFF,t_70)
### 浏览器
在更新时火狐会自动更新到最新版，另外可以安装chrome
```
sudo pacman -S google-chrome
```
### nodejs和npm
```
sudo pacman -S nodejs
sudo pacman -S npm
sudo pacman -S yarn
```
arch的仓库非常新，直接安装到了node11和npm6
### vscode
这个是通过官网的源码编译安装的
### mongodb
这个我也是直接用软件管理安装的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20181126165238456.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==,size_16,color_FFFFFF,t_70)
启动命令也和之前在`deepin`上略有不同，参见wiki[https://wiki.archlinux.org/index.php/MongoDB](https://wiki.archlinux.org/index.php/MongoDB)

## 结束
前端的开发环境已经大致搭建好了，其他细节的请自行搜索吧～，加油哇
