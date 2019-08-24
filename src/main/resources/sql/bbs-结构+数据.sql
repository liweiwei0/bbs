/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80015
 Source Host           : localhost:3306
 Source Schema         : bbs

 Target Server Type    : MySQL
 Target Server Version : 80015
 File Encoding         : 65001

 Date: 31/03/2019 23:11:53
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for hibernate_sequence
-- ----------------------------
DROP TABLE IF EXISTS `hibernate_sequence`;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hibernate_sequence
-- ----------------------------
BEGIN;
INSERT INTO `hibernate_sequence` VALUES (40);
INSERT INTO `hibernate_sequence` VALUES (40);
INSERT INTO `hibernate_sequence` VALUES (40);
INSERT INTO `hibernate_sequence` VALUES (40);
COMMIT;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '内容',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `heat` int(11) DEFAULT NULL COMMENT '热度',
  `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
  `tag` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '标签',
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '标题',
  `user_id` int(11) DEFAULT NULL COMMENT '作者',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=67 DEFAULT CHARSET=utf8 COMMENT='发布信息';

-- ----------------------------
-- Records of message
-- ----------------------------
BEGIN;
INSERT INTO `message` VALUES (1, '比如：\npublic Task<string> test1() {  ......  }\n和\npublic string test2() {  ......  }\n有什么区别？', '2019-03-31 20:40:11', 12, '2019-03-31 20:40:17', 'C#', 'C#函数返回值类型Task<T>和T有什么区别', 20);
INSERT INTO `message` VALUES (54, '字符串+字符串 →称为 \"拼接\"   数字+数字 →称为\"加法运算\"\n一、数据类型：整型、浮点型、布尔类型\n\n1、整型：整数\n注意：python2中长整型需要在后面加l，python3中不区分整型和长整型\n\n2、浮点型：小数\n注意：浮点型和整型的区别就是有无小数点\n\ne记法：科学计数法，会变成浮点型，\n1.5e4=10000\n\n3、布尔类型:特殊的整型\nTrue 和False  →当成整数 1和0（可以用来计算，但是不建议使用）\n\n\n\n二、类型转换\n整型：int()\n浮点型：float()  \n字符串：str()\n\n注意：浮点数转换为整数采取截断处理，没有四舍五入。\n字符串转换为整型或者浮点型，只有数字字符串可以转换，文字不可以\n\n注意：str为一个BIF，但是你也可以强行把他当作变量名，这样的后果就是导致str失去了本身BIF的功能，所以不要乱用BIF.\n\n三、获取关于类型的信息\n（1）type()函数:返回参数的类型\n>>> a=20\n>>> type(a)\n<class \'int\'>\n\n（2）isinstance()\n有两个参数，一个事带确定类型的参数，一个是指定类型的参数\n返回一个布尔值：True表示两个参数类型一致，False表示两个参数类型不一致\n>>> isinstance(320,int)\nTrue', '2019-03-31 20:44:26', 0, '2019-03-31 20:44:26', 'Python', '【python 】数据类型和返回数据类型的函数', 28);
INSERT INTO `message` VALUES (55, '我们在之前的博客中涉及到的函数都没有参数，同时返回值也为void，即不需要返回值。但是在以后的开发中，函数返回值和参数是必须涉及到的。所以现在我们来讨论这个问题。我们还是以People类为例。\n\n（一）有返回值，并且一个参数\n\n（1）在People.h中声明一个对象方法。注意：该方法中“－”是函数类型；“第一个int”是返回值类型；“ showA:”是函数名；\"第二个int\"是参数的类型，“a”是参数名：\n\n-(int)showA:(int)a;\n\n\n\n（2）在People.m中简单实现该方法，目的是获得该参数值，所以只要返回传入的参数值即可：\n\n-(int)showA:(int)a{\n \n    return a;\n}\n\n（3）在main.m中调用showA方法：\nPeople *people = [[People alloc] init];\n        int A = [people showA:10];\nNSLog(@\"A = %d\",A);\n\n（4）输出结果：符合我们的预期。\n。\n\n\n\n（二）有返回值，并且两个参数\n\n（1）在People.h中声明一个对象方法，该方法有两个参数，目的是相加两个参数，并且返回。注意：在该方法中，方法名为(比较特殊)：showAB: andB:   。第一个参数为(int)a,第二个参数为(int)b.\n\n-(int)showAB:(int)a andB:(int)b;\n\n\n\n（2）在People.m中实现该方法：\n\n-(int)showAB:(int)a andB:(int)b{\n \n    return a+b;\n}\n\n（3）在main.m中调用该方法，需要传入两个int类型的参数。\nPeople *people = [[People alloc] init];\nint AplusB = [people showAB:10 andB:20];\nNSLog(@\"AplusB = %d\",AplusB);\n\n（4）输出结果：\n。\n\n\n\n        总结，相对来说，OC的函数调用比C，Java略奇怪，一开始会不适应。后续只要多练习即可。\n\n\n\ngithub主页：https://github.com/chenyufeng1991  。欢迎大家访问！', '2019-03-31 20:45:28', 0, '2019-03-31 20:45:28', 'C & C# & C++', 'Objective-C学习笔记——函数的返回值与参数类型', 28);
INSERT INTO `message` VALUES (56, '《C++primer》第三和第四章分别介绍了上述四种常用复合数据类型，它们均有自己的长度，除了数组意外，其他均有本身定义的size()函数，但是size()返回类型不一样。\n\nsize_type:\n\n \n\n由string类类型和vector类类型定义的类型，用以保存任意string对象或vector对象的长度，标准库类型将size_type定义为unsigned类型\n\n　　string抽象意义是字符串， size（）的抽象意义是字符串的尺寸， string::size_type抽象意义是尺寸单位类型\n\n　　string::size_type它在不同的机器上，长度是可以不同的，并非固定的长度。但只要你使用了这个类型，就使得你的程序适合这个机器。与实际机器匹配。\n\n　　eg:\n\n　　string::size_type从本质上来说，是一个整型数。关键是由于机器的环境，它的长度有可能不同。 例如：我们在使用 string::find的函数的时候，它返回的类型就是 string::size_type类型。而当find找不到所要找的字符的时候，它返回的是 npos的值，这个值是与size_type相关的。假如，你是用 string s; int rc = s.find(.....); 然后判断，if ( rc == string::npos ) 这样在不同的机器平台上表现就不一样了。如果，你的平台的string::size_type的长度正好和int相匹配，那么这个判断会侥幸正确。但换成另外的平台，有可能 string::size_type的类型是64位长度的，那么判断就完全不正确了。 所以，正确的应该是： string::size_type rc = s.find(.....); 这个时候使用 if ( rc == string::npos )就回正确了。\n\n　　st.size()表示st中的字符数量，字符数量的统计是由 1 开始累计计算的，所以字符数量正好比字符串的下标索引数（由 0 开始累计计算）大 1 ，这里的index != st.size();的效果等同于index < st.size();\n\n \n\n \n\nsize_t\n\n \n\nsize_t不是容器概念。\nsize_type是容器概念，没有容器不能使用。\n见例程：\n\n[cpp] view plaincopy\n\n#include<iostream>  \n#include<vector>  \nusing namespace std;  \nint main()  \n{  \n cout<<\" typeid(size_t).name() = \"<<typeid(size_t).name()<<endl;  \n cout<<\" typeid(vector<int>::size_type).name() = \"<<typeid(vector<int>::size_type).name()<<endl;  \n  \n return 0;  \n}   \n \n\nfrom:http://blog.sina.com.cn/s/blog_5ff6e6ed0100da4j.html\n\n \n\n先是看到了在看标准库string时size_type，后来在学习标准库bitset的时候有碰到了size_t，晕啊\n\n先说说是在什么样的机缘巧合下与size_type相遇的吧，O(∩_∩)O\n\n标准库string里面有个函数size，用来返回字符串中的字符个数，具体用法如下：\n\nstring st(\"The expense of spirit/n\");\n\ncout << \"The size of \"<<st<<\"is\"<<st.size()\n\n     << \"characters, including the newline\"<<endl;\n\n那么size()这个函数返回的类型到底是什么呢？一定要记住，绝对不是整形，而是size_type类型的，所以千万不要把size的返回值赋给一个int变量。\n\n那么size_type到底是一种什么样的类型呢？\n\nstring类类型和许多其他库类型都定义了一些配套类型（companion type）。通过这些配套类型，库类型的使用就能与机器无关。size_type就是这些配套类型中的一种。\n\nsize_type被定义为与unsigned型（unsigned int, unsigned long）具有相同的含义，而且可以保证足够大能够存储任意string对象的长度。为而来使用由string类型定义的size_type类型。程序员必须加上作用于操作符来说明所使用的size_type类型是由string类定义的。\n\n我们为什么不适用int变量来保存string的size呢？\n\n使用int变量的问题是：有些机器上的int变量的表示范围太小，甚至无法存储实际并不长的string对象。如在有16位int型的机器上，int类型变量最大只能表示32767个字符的string对象。而能容纳一个文件内容的string对象轻易就能超过这个数字，因此，为了避免溢出，保存一个string对象的size的最安全的方法就是使用标准库类型string：：size_type().\n\n一点注意：虽然是在学习标准库string的时候巧遇了size_type类型，但是，其实vector库也可以定义size_type类型，在vector库中还有一个difference_type类型，该类型用来存储任何两个迭代器对象间的距离，所以是signed类型的。\n\n什么是size_t类型呢？其实本质上和size_type没有多大区别\n\n其实size_t和size_type类似，size_t 类型定义在cstddef头文件中,该文件是C标准库的头文件stddef.h的C++版本.它是一个与机器相关的unsigned类型,其大小足以保证存储内存中对象的大小。用法如下：\n\nbitset<32> bitvec;\n\nsize_t sz=bitvec.size();\n\n 另外sizeof操作符的返回值的类型也为size_t哦', '2019-03-31 20:46:16', 0, '2019-03-31 20:46:16', 'C++', '关于C++中string、vector、bitset和数组的size()返回类型的总结', 28);
INSERT INTO `message` VALUES (57, '问题：只使用处理I/O的printDigit函数，编写一个函数来输出任意double型变量（可以是负数）\n\n解决：要输出double型变量，首先要输出任意整数（可以是负数），然后才能输出实数（可以是负数）\n\n代码：\n\n输出任意整数（可以是负数）的c++代码如下：\n\n#include<iostream>\n#include<math.h>//math.h库\nusing namespace std;\nvoid printDigit(int n);\nvoid main(){\nint n;\ncin>>n;\nprintDigit(n);\n\n}\nvoid printDigit(int n){\n\nif(abs(n)>=10){\nprintDigit(n/10);\ncout<<abs(n)%10;\n}\nelse cout<<n%10;\n\n}\n\n\n\n下面考虑输出任意实数，整数和实数主要是小数点的区别，小数点前一部分和后一部分均为整数\n\n思路：\n\n1.  获得实数的整数部分：intPart = n    intPart 为int 型，n为double 型\n\n2.  打印出整数部分：printDigit(intPart)。\n\n3.  如果有小数部分，跟着打印小数点：printf(“.”)；然后获得小数部分：dicPart = n – intPart    dicPart 为double型。\n\n4.  如果有小数部分，将小数部分转换为整数，然后用printDigit（）函数打出。\n\n  for(i = 0; i < pointNum;i++)\n\n              {\n\n                   dicPart *= 10;\n\n              }\n\n          //小数部分都为正整数，整个实数的符号位已经由整数部分处理好了\n\n              Int dicInt = abs(dicPart);\n\n         //打印\n\n         printDigit(dicInt);\n\n代码：\n\n#include<iostream>\n#include<math.h>\nusing namespace std;\nvoid printDigit(int n);\nvoid printReal(double n,int pointNum);\nvoid main(){\ndouble n;\nint pointNum;\ncin>>n>>pointNum;\nprintReal(n,pointNum);\n}\nvoid printDigit(int n){\nif(abs(n)>=10){\nprintDigit(n/10);\ncout<<abs(n%10);\n}\nelse cout<<n%10; \n}\nvoid printReal(double n,int pointNum){\nint intPart;\ndouble dicPart;\nintPart=(int)n;\ndicPart=(double)(n-intPart);\nprintDigit(intPart);\nif(pointNum>0){\nfor(int i=0;i<pointNum;i++){\ndicPart*=10;\n} \ncout<<\".\";\nprintDigit(abs(dicPart));\ncout<<dicPart;\n}\n}', '2019-03-31 20:47:29', 0, '2019-03-31 20:47:29', 'C# & JAVA', '数据结构之递归打印实数', 27);
INSERT INTO `message` VALUES (58, '小编提示：\n\n        下面的程序代码用C++程序实现，适合初学者参考学习。同样的，我在写程序的过程中，会注释一些个人感觉值得注意的地方的一些见解。相互指正。\n\n【程序1】 \n题目：有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？ \n\n#include<iostream>\nusing namespace std;\n \n/*\n1.程序分析：可填在百位、十位、个位的数字都是1、2、3、4。组成所有的排列后再去 \n掉不满足条件的排列。\n*/\nvoid combine(){\n    int count = 0;\n    for(int i=1;i<5;i++){\n        for(int j=1;j<5;j++){\n            for(int k=1;k<5;k++){\n                if(i!=k && j!=i && k!=j){\n                    count++;\n                    cout<<i<<j<<k<<\" \";\n                    if(count%10==0)\n                        cout<<endl;\n                }\n            }\n        }\n    }\n    cout<<endl;\n    cout<<\"一共的数字共有：\"<<count<<\"个\"<<endl;\n}\nint main(){\n    combine();\n    return 0;\n}\n【程序2】 \n题目：企业发放的奖金根据利润提成。利润(I)低于或等于10万元时，奖金可提10%；利润高 \n于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可可提 \n成7.5%；20万到40万之间时，高于20万元的部分，可提成5%；40万到60万之间时高于 \n40万元的部分，可提成3%；60万到100万之间时，高于60万元的部分，可提成1.5%，高于 \n100万元时，超过100万元的部分按1%提成，从键盘输入当月利润I，求应发放奖金总数？ \n\n#include<iostream>\nusing namespace std;\n \n/* \n	分析：\n		设利润是x      奖金y \n		x<=10(万元)       y=0.1x\n		10>x>=20(万元)    y=0.1*10+(x-10)*0.075\n		20>x>=40(万元)    y=0.1*10+10*0.075+(x-20)*0.05\n		40>x>=60(万元)    y=0.1*10+10*0.075+20*0.05+(x-40)*0.03\n		60>x>=100(万元)   y=0.1*10+10*0.075+20*0.05+20*0.03+(x-60)*0.015\n		x>100(万元)       y=0.1*10+10*0.075+10*0.05+20*0.03+40*0.015+(x-100)*0.01 \n*/\n \nfloat calculate(int x){\n	if(x<=10){\n		return 0.1*x;\n	}else if(x>10 && x<=20){\n		return 0.1*10+(x-10)*0.075;\n	}else if(x>20 && x<=40){\n		return 0.1*10+10*0.075+(x-20)*0.05;\n	}else if(x>40 && x<=60){\n		return 0.1*10+10*0.075+20*0.05+(x-40)*0.03;\n	}else if(x>60 && x<=100){\n		return 0.1*10+10*0.075+20*0.05+20*0.03+(x-60)*0.015;\n	}else if(x>100){\n		return 0.1*10+10*0.075+10*0.05+20*0.03+40*0.015+(x-100)*0.01 ;\n	}	\n}\n \n/*\n	这里问题值得注意的一点就是关于返回值用什么类型：我们不妨复习一下C++中所具有的数据类型：\n	布尔型	    bool\n	字符型	    char\n	整型	    int\n	浮点型	    float         4 个字节	+/- 3.4e +/- 38 (~7 个数字)\n	双浮点型	double        8 个字节	+/- 1.7e +/- 308 (~15 个数字)\n	无类型	    void\n	宽字符型	wchar_t \n一些基本类型可以使用一个或多个类型修饰符进行修饰：\n	signed\n	unsigned\n	short\n	long\n	\n	如：long int   long double等\n	\n	由于这里没有涉及比较精密的计算，还在我们可以常规能接收的范围，所以用float \n*/\n \nint main(){\n	float a = calculate(55);\n	cout<<a<<endl;\n	return 0;\n}\n【程序3】 \n题目：一个整数，它加上100后是一个完全平方数，再加上168又是一个完全平方数，请问该数是多少？ \n\n#include<iostream>\n#include<cmath>\nusing namespace std;\n/*\n	提示：By:weizu_cool\n	不妨采用break跳出循环控制，找到后输出;或者直接输出，再break; \n	我们需要使用sqrt函数，导入<cmath>\n	double sqrt(double);   该函数返回参数的平方根。 \n*/\n \nint find(n){\n	int count=0;\n	long num =0, x = 0, y = 0;\n	while(1){\n		num++;\n		x = sqrt(num+100);\n		y = sqrt(num+268);   //注意：这里不要想当然的定义x,y为double来存储，因为我们后面的if条件判断就是基于整型变量的\n							//截取整数部分来进行，从而得出的判断。double的话，每次都相等了，判断就失去了意义。 \n		if(x*x==num+100 && y*y==num+268){\n			cout<<\"num=\"<<num<<endl;\n			count++;\n			if(count==n)\n				break; \n		} \n	}\n	return 0;\n} \nint main(void){\n	\n	int n = 3;//这里n是希望找到的满足条件的数的个数 ，实际上经过测试好像也只有三个\n	find();\n	return 0;\n}', '2019-03-31 20:48:22', 0, '2019-03-31 20:48:22', 'C & C# & C++', 'C++（初学者）练习题-day one', 27);
INSERT INTO `message` VALUES (59, 'HttpServletRequest cannot be resolved to a type。 \nMultiple markers at this line \n- The import javax.servlet.http cannot be resolved \n- The import javax.servlet.http cannot be resolved \n- The import javax.servlet.http cannot be resolved\n\n解决思路： \n1、右键项目属性， \n2、选择Targeted Runtimes， \n3、选择服务器，例如Tomcat， \n4、单击应用，就可以解决上述所遇到问题。', '2019-03-31 20:50:32', 0, '2019-03-31 20:50:32', 'Web App框架 & JAVA', 'springmvc开发中所遇到的问题', 26);
INSERT INTO `message` VALUES (60, '今天按照学习的视频写了个SpringMVC框架的helloworld的程序，其中遇到了一些错误\n\n \n\n在配置web.xml文件时，处出现了出现Element type \"web-app\" must be followed by either attribute specifications,\">\",\"/>\"的错误，经过查询后得知，此错误是因为在网页上的编码格式与eclipse中的编码格式不同导致的，复制以前配置spring环境时的web.xml文件中相同的部分得以解决\n\n \n\n \n\n解决上述问题后上传tomcat运行发现又有新的报错，这次的报错显示为HTTP Status 500 - Servlet.init() for servlet springDispatcherServlet threw exception\n\n元素 \'beans\' 必须不含字符 [子级], 因为该类型的内容类型为“仅元素”。\n经过查询后得知该错误是因为写注释时多加了一个>删除后成功解决该问题\n\n \n\n \n\n解决上述问题后，运行发现又出现了新问题，显示HTTP Status 404 - /springmvc-1/WEB-INF/viewssuccess.jsp，发现配置springmvc.xml时，  views后少了“/”因此前缀加上中间部分加上后缀变为了WEB-INF/viewssuccess.jsp，改正后成功运行', '2019-03-31 20:52:05', 0, '2019-03-31 20:52:05', 'Web App框架 & JAVA', '学习springMVC时遇到的问题', 27);
INSERT INTO `message` VALUES (61, '入门之路\n以下是入门阶段不错的书籍和资料\n\nHTML先看《HTML & CSS: Design and Build Websites》1-9章，然后《HTML5: The Missing Manual》1-4章。\nCSS先看《CSS: The Missing Manual》，然后《CSS权威指南》\njavascript先看《javascript高级程序设计》，然后《javascript权威指南》\nHTTP看HTTP权威指南\n在整个学习过程中HTML CSS JavaScript会有很多地方需要互相结合，实际工作中也是这样，一个简单的功能模块都需要三者结合才能实现。\n动手是学习的重要组成部分，书籍重点讲解知识点，例子可能不是很充足，这就需要利用搜索引擎寻找一些简单教程，照着教程实现功能。以下是一些比较好的教程网址\n可以搜索各大公司前端校招笔试面试题作为练习题或者他人总结的前端面试题还有个人总结的面试题（带参考答案）\nhttp://code.tutsplus.com有各种各样的教程\nMDN也有很多教程，更重要的是里面有详细的文档，需要查找某个功能时在Google搜索：xxx site:https://developer.mozilla.org\nhttp://www.html5rocks.com/zh/也有很多优质教程\nhttp://www.sitepoint.com/\nhttp://alistapart.com/\n原生javascript是需要重点掌握的技能，在掌握原生javascript的基础上推荐熟练掌握jQuery，在实际工作中用处很大，这方面的书籍有《Learning jQuery》或者去jQuery官网\n建一个https://github.com/账号，保存平时学习中的各种代码和项目。\n有了一定基础之后可以搭建一个个人博客，记录学习过程中遇到的问题和解决方法，方便自己查阅也为其他人提供了帮助。也可以去http://www.cnblogs.com/或者http://www.csdn.net/这样的网站注册账号，方便实用\n经常实用Google搜索英文资料应该经常找到来自http://stackoverflow.com/的高质量答案，遇到问题可以直接在这里搜索，如果有精力，注册一个账号为别人解答问题也能极大提高个人能力。\n经典书籍熟读之后，可以打开前面必备基础技能部分的链接。认真读对应标准，全面掌握知识\n继续提高\n有了前面的基础之后，前端基本算是入门了，这时候可能每个人心中都有了一些学习方向，如果还是没有。 可以参考前面必备技能部分提到的那两个项目，从里面选一些进行发展学习。以下是一些不错的方面：\n\nGrunt：前端自动化工具，提高工作效率\nless css：优秀的CSS预处理器\nbootstrap：优秀的CSS框架，对没有设计师的团队很不错，与less结合使用效果完美\nrequirejs：AMD规范的模块加载器，前端模块化趋势的必备工具\nNode.js：JavaScript也可以做后台，前端工程师地位更上一步\nAngularJS：做Single Page Application的好工具\n移动端web开发：智能手机的普及让移动端的流量正在逐步赶超PC端\nJavascript内存管理：SPA长期运行需要注意内存泄露的问题\nHigh Performance JavaScript(Build Faster Web Application Interfaces)\nBest Practices for Speeding Up Your Web Site：重要技能\n一些个人经历\nLingyuCoder的学习经历\n上面的大神都总结得差不多了，我这里就胡扯一些吧\n\n####工具\n\nchrome dev tools：前端开发调试利器，着重注意几个功能：\nconsole（废话）\nelements:元素样式调整，很常用\nsources：代码中添加断点，单步调试，以及单步调试过程中查看内存中的对象\nwatch expression：通过表达式查看当前内存中的值\ncall stack：查看调用栈，开启async，可以看异步调用栈（这个非常有用，尤其是ajax调试的时候）\nscope variables：作用域链上的变量，非常有用\nnetwork：抓包查看每个请求，非常重要，前后端联调必备\ntimeline：分析渲染、js执行等等各个阶段，性能优化利器\nemulation：模拟移动端环境，mobile页面开发必备\n一些插件:\nliveload: 修改页面后自动刷新，不用按F5\ndimensions：直接在页面上测量的利器\nlivestyle：css样式修改后自动起效果，不需要刷新，elements修改后也能同步到代码中\nimage tool：测量，取色\nUC二维码：移动端调试扫码必备\npagespeed，YSlow：页面性能分析和优化插件\n马克飞象：优秀的在线markdown编辑器，快速写周报，做记录\nsublime text3：编码方便，插件多，速度快，性能好\nemmet：提升html编码速度必备\nsublimelinter + 各种语言的lint和hint：代码纠错\n一些snippets：自动补全，提升开发效率\nIntellij IDEA和WebStorm：集成开发环境，集成了各种功能，开发比sublime要方便，但会比较吃性能\nMark Men：测量、取色、标注利器，拿到视觉稿之后第一个打开的软件\nGFW Fucker：我用红杏，可以的话买个虚拟服务器当梯子\niHosts：非常优秀的hosts管理软件，轻松修改hosts，开发调试必备\nCharles：Mac 平台最好用的抓包分析工具\nRythem：AlloyTeam出品的代理抓包软件，非常轻量，安装简单，移动端（真机）开发调试很好用\nWunderlist：一个非常不错的Todo List，任务、需求多的时候管理起来很方便\n####技能 前端的技能其实除了JavaScript（包括NodeJS）、HTML、CSS以外，还有很多。其实前端的技能树很大，这里只能列一些我开发中见到的说一说 #####语言基础 JavaScript：\n\n作用域链、闭包、运行时上下文、this\n原型链、继承\nNodeJS基础和常用API\nCSS：\n\n选择器\n浏览器兼容性及常见的hack处理\nCSS布局的方式和原理（盒子模型、BFC、IFC等等）\nCSS 3，如animation、gradient、等等\nHTML：\n\n语义化标签\n#####进阶 JavaScript:\n\n异步控制（Promise、ES6 generator、Async）\n模块化的开发方式（AMD、CMD、KMD等等）\nJavaScript解释器的一些相关知识\n异步IO实现\n垃圾回收\n事件队列\n常用框架使用及其原理\njQuery：基于选择器的框架，但个人认为不能叫框架，应该算工具库，因为不具备模块加载机制，其中源码很适合阅读钻研\nAngularJS/Avalon等MVVM框架：着重理解MVVM模式本身的理念和双向绑定的实现，如何解耦\nunderscore：优秀的工具库，方便的理解常用工具代码片段的实现\npolymer/React: 组件化开发，面向未来，理解组件化开发的原理\nCSS和HTML：主要是CSS3的特性和HTML5的特性，以及浏览器处理的流程和绘制原理\n\nDOM树、CSSOM树、渲染树的构建流程及页面渲染的过程\n解析HTML、CSS、JavaScript时造成的阻塞\nHTML5相关\nSVG及矢量图原理\nCanvas开发及动画原理（帧动画）\nVideo和Audio\nflex box布局方式\nicon fonts的使用\n常用NodeJs的package：\n\nkoa\nexpress\nunderscore\nasync\ngulp\ngrunt\nconnect\nrequest\n一些理念：\n\n响应式Web\n优雅降级、渐进增强\ndon\'t make me think\n网页可用性、可访问性、其中的意义\nSEO搜索引擎优化，了解搜索引擎的原理\nSPA的好处和问题\n性能优化：\n\n减少请求数量（sprite、combo）\n善用缓存（application cache、http缓存、CDN、localstorage、sessionstorage，备忘录模式）\n减少选择器消耗（从右到左），减少DOM操作（DOM和JavaScript解释器的分离）\nCSS的回流与重绘\n#####项目\n\n版本管理：首推Git，用过Git都不会想用SVN了\nGit：本地版本管理的机制\nSVN：远程中心的版本管理机制\n自动化构建：主要就是less、模板、coffee等的预处理以及对代码压缩和合并\nGulp：基于流构建，速度快、模块质量好\nGrunt：独立任务构建，速度慢，配置蛋疼，灵活性高\n预处理和模板引擎\nless：语法简单，但功能有限\njade、ejs、velocity等模板引擎，各有各的长处    - caffe：python工程师最爱，我没用过\n环境搭建：主要是将线上代码映射到本地，并在本地启动一个demo服务器，至于模拟数据的mock，见仁见智了\n本地代理：ihosts\n自动化测试：在业务较为稳定的情况下，可以通过自动化测试来减少测试的事件，但需求较多的时候，维护测试用例的成本会很高，可能用自动化测试会起到反效果\njasmine\nmocha\n生态系统\nnpm\nbower\nspm\n搭建一个属于自己的博客\ngit pages\nhexo\njekyll\n#####未来\n\nWeb Componets：面向未来的组件化开发方式\nHTML模板\nShadow DOM\nCustom Elements\nHTML Import\n移动端Native开发：这也是需要了解的，以后前端工程师会经常地和webview打交道，也要了解native开发\n#####其他 有些东西不是考敲码就能弄好的，我参与实习的时候感受到了很多，这些是我遇到的也是我感觉自己做的不好的地方\n\n对于业务的思考：我个人这方面非常欠缺，所以放在最前面，在敲码前要多思考业务\n交流和沟通能力：这个非常重要，前端同时需要与项目经理、产品、交互、后台打交道，沟通不善会导致很多无用功，延缓项目\n知识管理、时间管理：input和output的平衡，output是最好的input。如何做好分享，参与社区，做好交流，作好记录\n对新技术的渴望，以及敢于尝试\n####入门书 入门可以通过啃书，但书本上的东西很多都已经过时了，在啃书的同时，也要持续关注技术的新动态。这里推几本我觉着不错的书：\n\n《JavaScript高级编程》：可以作为入门书籍，但同时也是高级书籍，可以快速吸收基础，等到提升再回来重新看\n《JavaScript权威指南》：不太适合入门，但是必备，不理解的地方就去查阅一下，很有帮助\n《编写可维护的JavaScript》\n《JavaScript DOM编程艺术》学习JavaScript和DOM开发的必读之作。\n《Node.js开发指南》：不错的Nodejs入门书籍\n《深入浅出Node.js》：Nodejs进阶书籍，必备\n《JavaScript异步编程》：理解JS异步的编程理念\n《JavaScript模式》和《JavaScript设计模式》：JavaScript的代码模式和设计模式，将开发思维转变到JavaScript，非常好的书\n《JavaScript框架设计》：在用轮子同时，应当知道轮子是怎么转起来的，讲解很详细，从源码级别讲解框架的各个部分的实现，配合一个现有框架阅读，可以学到很多东西\n《Don`t make me think》：网页设计的理念，了解用户行为，非常不错\n《CSS禅意花园》：经久不衰的一部著作，同样传递了网页设计中的理念以及设计中需要注意的问题\n《高性能JavaScript》和《高性能HTML5》：强调性能的书，其中不只是性能优化，还有很多原理层面的东西值得学习\n《HTML5 Canvas核心技术》：我正在读的一本书，对于canvas的使用，动画的实现，以及动画框架的开发都非常有帮助\n《HTTP权威指南》：HTTP协议相关必备，前端开发调试的时候也会经常涉及到其中的知识\n《响应式Web设计》：技术本身不难，重要的是响应式网页的设计理念，以及移动先行的思想\n《JavaScript语言精粹》：老道的书，也是普及JavaScript的开发思维的一本好书，非常适合入门\n####一些不错的网站\n\ngithub：没啥好说的，多阅读别人的源码，多上传自己的源码，向世界各地的大牛学习\ncodepen：感受前端之美的必选之地，里面有很多酷炫的效果和优秀的插件\nechojs：快速了解js新资讯的网站\nstackoverflow和segmentfault：基本上各种问题都能在上面获得解答\ngoogle web fundamentals：每篇文章都适合仔细阅读\nstatic files：开放的CDN，很好用\niconfont：阿里的矢量图标库，非常不错，支持CDN而且支持项目\nhtml5 rocks: 一个不错的网站，很多浏览器的新特性以及前沿的技术，都能在这上面找到文章\ncss tricks：如何活用CSS，以及了解CSS新特性，这里可以满足你\nJavaScript 秘密花园 JavaScript初学必看，非常不错\nw3cplus：一个前端学习的网站，里面的文章质量都挺不错的\nnode school：一个不错的node学习网站\nlearn git branch：一个git学习网站，交互很棒\n前端乱炖：一个前端文章分享的社区，有很多优秀文章\n正则表达式：一个正则表达式入门教程，非常值得一看\n阮一峰的博客和张鑫旭的博客：快速了解某些知识的捷径，但是如果需要深挖，还需要其他的资源\n各路大牛的博客：这个太多了，就不贴了，知乎上有很全的\n各种规范的官方网站，不懂得时候读规范\n####历程 以前是做Java SSH的，半路出家做的前端，所以水平比较弱，遇到问题也比较多。基本上入门靠看书和W3C School上的教程，以及一些前端博客，如汤姆大叔的博客。以前也只是使用jQuery，原生js也没有太多的钻研，后来逐渐看了很多本动物书，比如老道的语言精粹等等。从这些书中学到了很多语言层面的知识。但这显然是不够的，所以我经常会去社区上看看大家在谈论什么，然后去看看相关的资料，感兴趣就会多找些资料看看，或者写一写demo。学CSS主要就是通过这种方式。后来开始更多的关注各路大牛的博客和一些比较深的书籍，以及关注一些新的知识和框架，并且不断地练手提交代码到github，这样也学到了很多知识。在实习的过程中，切身参与到实际项目开发之中，能学到很多在学校学不到的理念和思维，这点也有很大的帮助。不说了，我要去搬砖求offer了...\n\nMrRaindrop的学习经历\n应qiu神的邀请分享一下前端学习经验，这里对前端知识体系架构就不做总结了，各位大神们的总结已经相当到位了，我就贡献几个个人认为还比较有用的链接大家研究研究就好，然后主要分享一下我在前端学习过程中遇到的问题和总结的经验教训吧，如果能帮到想要入门的FE初学者（我就姑且假定为本文的读者受众类型了），让他们少走点弯路，每走一步都知道自己下一步的方向，这是最好了。各位大神的总结和分享详见qiu神整理的FE-learning。\n\n先说下，前端这个东西每个人都可以有适合自己的学习方法，这篇仅作参考，写的有点乱，各位凑合看。\n\n缘起\n我是属于误打误撞进了前端，之前一直往做游戏的方向去来着，搞过游戏网站，玩过游戏引擎，比如unity，unreal这种商业引擎，捣鼓了几个游戏原型，不过自打研一进了实验室，直接就被导师派去写了js，导师给了我半个月时间让我写个基于百度地图api的数据展示页面，虽然这个时间还是相当宽裕的，不过之前没怎么写过js，也不会用地图api，于是我就一边啃着《Javascript权威指南》（犀牛书）一边参考实验室前人留下的“代码”，总算是把功能都写出来了。那个页面算我的js入门作了，也是我前端学习路线的开始。\n\n现在想来，虽然指派了去做前端，但是一直做下去并做好还是得靠兴趣维持，当然前端是一个趣味性十足的技术领域，而且社区每天都很“热闹”。\n\n项目，下一个项目\n我个人认为前端的学习，初学阶段你可以完全脱离开书本，以项目驱动。虽然我个人是从犀牛书开始啃的，不过如果你没有充足的时间，或者觉得啃大部头乏而无味的话，还是别像我这样。当然了如果决定啃书最好是把书里的例子都跟着敲一遍的。我上研之前没接触过js，4月份还没开学呢就被直接被导师甩了个百度地图api的项目到脸上，接着就是各种ERP，地图数据展示，虽然换着花样来一点不重样，不过基本上都是前端的活，SSH和android开发也打过酱油，整个实验室就我一个人写前端敢信？富客户端SPA时代的后端就是一个restful接口，代码量基本都在前端啊，写的我一个人怎一个爽字了得...期间跟着导师感受了一把创业，每天从7点搞到晚上10点，也算是经历了一段快速成长期。\n\n掌握一门技术先掌握它的大体框架，想一个能实现的点子，做一个能跑就行的demo，再去完善它的细节，等到demo完成了，对这门技术有了一个感性的认识，再去啃书，收获会大很多。我从开始原生js写到jquery，再到extjs，再到angularjs，从导师指定技术，到自己做技术选型，一个项目接着一个项目的练，就跟打怪升级似的。当然没有项目就去自己创造项目，动手实现自己的想法是件有乐趣和成就感的事。\n\n收集癖和知识管理\n前端学习有个特点，很多东西都很零碎，分散，需要你自己去整理、归纳和总结。在微博、知乎上follow了众多的大神，你不仅仅是为了听八卦，大神们的只言片语有时候留下的是无尽的余味，很有可能一个不经意提到的一个词就成为你下一个学习的目标。收集这些信息，善用google，提问，思考。就像游戏里的收集要素，前端学习也是充满搜集要素的一个“游戏”，只不过你需要一个知识管理工具来充当物品栏和仓库，我所知道的大牛们无一不是知识管理工具的重度使用者。以前用的oneNote，那时候还没绑定到云存储，现在基本上用evernote，笔记已经累计到1200+篇。书签一直打算用delicious，因为它是基于tag管理的，但一直没用起来。当然重点不在于这些工具，但是趁手的工具可以提高你的学习效率。最关键当然是随时保持旺盛的学习欲望，你的目标是了解有关前端的一切（当然不是所有都要掌握，因为毕竟你的精力有限，而且现实的说这也不太可能）。\n\n跟对神\n这个可控性貌似不大...跟对老大这个就不多说了，一定程度要看造化。不过话说回来，多跟身边的高手交流是王道，这个高手不一定要多高，但是一定要对技术有热情。研一的时候热情高涨，每天7点进实验室门，然后发现有个家伙居然比我还早到。后来发现这家伙上午就走了，下午又来了，而且导师对此习以为常，原来这家伙晚上不睡觉通宵写代码，上午才跑回去睡。后来经常和这位神讨论问题，每次感觉经验值蹭蹭蹭的往上涨。然后实验室还有一位神，被前面这位通宵神形容为“只能望其项背，一直在追赶，从来没赶上”，两位神的特点都是什么都了解一点，所以什么都能跟你讨论得起来，我有段时间做了个读书计划，从c/c++到vc/mfc再到unix网络编程，最后一路看到java核心技术和MSDN上的C#编程指南，和神们也能扯得很high了。\n\n总之就是这两位神把我拉进了坑，或者说从一个坑跳进另一坑，虽然两位神都不是搞前端的，不过技术之间总有相通之处。\n\n读书\n读书，多读书，读好书。在刘未鹏的博客里看到过一个公式，你第一个月的工资等于之前买过（读过）的技术书价格总和（这里说的技术书指那些经典的公认的好书）。讨论这个公式的正确性似乎没什么意义，然而它的合理性是毋庸置疑的，那就是多读经典技术书。最极端的一个例子，google的徐宥在我的大学里面说他扫荡了图书馆的整个TP312书架...对于前端的经典书籍，后面列了一个我收集的前端书列（如果有遗漏的前端经典好书，还请留言告诉我），有条件可以尝试刷一遍这些书，我也是在找完整的时间去啃完它们。之前说的，前端知识点松散，收集零散的知识点，从博客里快速学习等，这些只是前端学习的一个方面，如果你要想深入理解一个知识体系，了解它的来龙去脉，对它建立系统认识，读经典书还是必不可少的。\n\n我从最开始啃完犀牛书，然后接着去看了其他一些和前端干系不大的经典技术书，再后来通过实验室的项目和自己弄的一些小项目逐渐对前端领域比较上路以后，又看了《Javascript模式》、《Javascript设计模式》、《编写可维护的Javascript》，后来了解到node并开始用node搞点小玩意儿，又看了本《NodeJS up and run》和《Mongodb权威指南》，不过感觉前者略坑。那会儿朴灵那本深入浅出（晒书么么哒）还没出，后来出了就去图书馆借来看完，这么看下来感觉还不错，不过感觉看的还是偏少了，还需要继续刷（参照上面的书列）。\n\n前端的定位\n前端的定位关乎到你需要吸收什么样的知识和技能，决定在技术世界里你对什么需要格外敏感。如果你认为前端仅仅停留在切页面，实现交互和视觉的要求，那你对前端的认识还停留在初级阶段。阿里终面的时候我问了考官这么个问题：前端技术日新月异，范围越扩越宽，标准越来越丰富，似乎任何一个触角都能伸出很远。怎么给前端一个合适的定位？考官给我分析了半天，然后总结成一句话，就是用户和网站的联结者，用户体验的创造者（原话不是这样，但大体是这个意思）。也就是说前端的终极目标其实就是创造用户体验，提升用户体验，以用户体验为中心。不管你是从交互设计上下手，还是从性能优化出发，或者改进工作流提升工作流效率，最终都是为了创造和提升用户体验，最终都要体现到用户体验这一点上来。我认为这个总结非常有道理（当然“用户体验”这个词太宽泛了，并且不仅仅是前端工程师的范畴，比如开发后台的时候对一个数据处理过程进行优化，提升了整体性能，这也是对用户体验的一个提升）。\n\n现在的前端工程师做到一定阶段不可避免会接触到很多比切页面、实现视觉要求、实现交互等更深入的问题，比如前端自动化、图像编程、性能优化等等，再往后推一点就是PHP/JSP/ASP/nodeJs，过去后端模板一般属于后端的范畴，现在随着前端架构的演进，可能会让你去写后端模板的代码，需要用到后端语言（PHP/Java/C#等），这就是所谓大前端（然而这与前端的定位并不是相背离的，大前端处理的依然是与用户接触的部分，仍然是对用户体验的优化）。可能最常见或者被谈论最多的就是node，其实这几种技术选型都可以，bat三家据说百度用PHP比较多，阿里用node比较多。\n玉伯在他的博客里提过所谓全端是横向的，全栈是纵向的。全端即所有的终端说白了都是前端，因为都关乎到用户体验，直接和用户接触。适应多终端的开发，要求你在web前端的基础上，可能还要去扩展android开发和ios开发的知识，好在由于hybrid开发方式的流行，对使用native语言开发的技能会要求的不那么深入。\n全栈可以说是最适合初创公司的一种发展类型，广义上认为是从前端干到后端，从开发干到运维，这种就不说了，一般人应该不会想要去往这个方向发展，想要成为这种意义上的full-stack dev的，可能用不着来看我这篇文章了；而狭义上的全栈特指使用js语言从前端写到架设在nodeJs上的后端，前后端统一语言，统一编程模型，甚至公用同一套代码。更多了解全栈开发可以看看玉伯这篇说说全栈工程师。\n\n以上是我对前端以及衍生出来的技术路线的一些浅薄理解，学习一个领域掌握它的整体上的走向和趋势还是挺重要的。另外如果想要对前端学习方向、职业成长路径有一个整体的认识，推荐看看拔赤总结的这篇前端开发十日谈。\n\n最后\n有需要的可以加我个人微信号：xmtxtt，备注前端，我们建个群聊！', '2019-03-31 20:53:29', 0, '2019-03-31 20:53:29', 'Flash & Javascript & HTML & JSP & CSS & JS', '前端该怎么学？推荐一个学习路线', 26);
INSERT INTO `message` VALUES (62, '定义一个数组a，当中放一个堆，另有一个heapsize存放堆大小，将此堆打印成三角形式', '2019-03-31 20:54:56', 0, '2019-03-31 20:54:56', 'JAVA', '堆排序 ', 26);
INSERT INTO `message` VALUES (63, '线程池里面的线程怎么修改名字', '2019-03-31 20:55:25', 0, '2019-03-31 20:55:25', 'Web App框架 & JAVA', '线程池', 26);
INSERT INTO `message` VALUES (64, '求解释下述代码的执行情况，为何不会发生栈溢出？\nJava code\n?\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15\n16\n    public static void main(String[] args) {\n        foo();\n    }\n \n    private static void foo() {\n        try {\n            System.out.println(\"try\");\n            foo();\n        }catch (Exception e){\n            System.out.println(\"catch\");\n            foo();\n        }finally {\n            System.out.println(\"finally\");\n            foo();\n        }\n    }', '2019-03-31 20:56:20', 0, '2019-03-31 20:56:20', 'JAVA', '递归中的try、finally', 26);
INSERT INTO `message` VALUES (65, 'public class Server {\n    public static final int port=1234;\n    public static void main(String[] args) throws IOException {\n        ServerSocket server=new ServerSocket(port);\n        server.accept();\n    }\n}\n\npublic class Client {\n	public static void main(String[] args) throws UnknownHostException, IOException {\n		String host = \"127.0.0.1\"; \n	    int port = 1111;\n	    // 与服务端建立连接\n	    Socket socket = new Socket(host, port);\n	}\n}\n\n服务器正常启动，未报错，客户端与服务器建立连接就报错，\n服务器运行server.accept();在cmd中运行netstat -ano 就会发现0.0.0.8011 被监听，8011的PID和1234端口的PID为同一个，如果没有这行就不会被监听，然后客户端一运行就报\nPlain Text code\n?\n1\n2\n错误: 代理抛出异常 : java.rmi.server.ExportException: Listen failed on port: 8011; nested exception is: \n    java.net.SocketException: Unrecognized Windows Sockets error: 0: JVM_Bind\n\n\nMyEclipse10换了个工作空间都不行，请问什么情况？\n之前一直都是好好的。开机关机都不行，而且一直都是提示8011', '2019-03-31 21:00:20', 0, '2019-03-31 21:00:20', 'JAVA', 'Socket报错', 26);
INSERT INTO `message` VALUES (66, 'IDEA 全称IntelliJ IDEA，是用于java语言开发的集成环境（也可用于其他语言），IntelliJ在业界被公认为最好的java开发工具之一，尤其在智能代码助手、代码自动提示、重构、J2EE支持、Ant、JUnit、CVS整合、代码审查、 创新的GUI设计等方面的功能可以说是超常的。IDEA是JetBrains公司的产品，这家公司总部位于捷克共和国的首都布拉格，开发人员以严谨著称的东欧程序员为主。\n', '2019-03-31 21:08:03', 0, '2019-03-31 21:08:03', 'JAVA & IDEA', 'idea （java语言开发的集成环境）', 20);
COMMIT;

-- ----------------------------
-- Table structure for message_heat
-- ----------------------------
DROP TABLE IF EXISTS `message_heat`;
CREATE TABLE `message_heat` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键ID',
  `message_id` int(11) DEFAULT NULL COMMENT '帖子ID',
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='帖子点赞记录';

-- ----------------------------
-- Table structure for review
-- ----------------------------
DROP TABLE IF EXISTS `review`;
CREATE TABLE `review` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci COMMENT '评论内容',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
  `message_id` int(11) DEFAULT NULL COMMENT '帖子ID',
  `user_id` int(11) DEFAULT NULL COMMENT '用户ID',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COMMENT='评论表';

-- ----------------------------
-- Records of review
-- ----------------------------
BEGIN;
INSERT INTO `review` VALUES (43, '而且感觉并没有起一个新的线程，不然更新主线程的控件，应该会报错。', '2019-03-31 20:41:50', '2019-03-31 20:41:50', 1, 28);
INSERT INTO `review` VALUES (42, '目前，c#（实际上其它各种语言、平台）潮流是转向 Task 异步编程模式。就好像是基本的控制流语句一样，以后不懂异步机制就无法当出及程序员了！那么实际上 Task 知识已经非常非常普通了。\n\n简单来说，调用声明为 Task<string> 的函数可以当作调用 string 函数来用，只不过是异步的——不会等待函数结束——立刻执行后边的语句。就是这个区别。', '2019-03-31 20:40:57', '2019-03-31 20:40:57', 1, 26);
INSERT INTO `review` VALUES (44, '想理清楚这个，得先明白“未来完成时”\n\n带task的表示他现在不一定有结果，等有结果了，他会通知你。\n当然实际上的意义就是，CPU现在可以忙别的，等有结果了在去处理你的\n\n想想看医院的医生看病就OK，他让你先做检查，先去化验，等你拿着化验结果过了，他在具体判定。在你去化验的同时医生也不会闲着，他用这段时间给其他病人诊断\n\n\n理解了这个，技术上就能搞清楚了。不管技术上微软是开了线程，还是用了异步委托通知，还是保持上下文等等都是为了实现那个目标。“不空等结果，保存环境，等有结果了，恢复环境继续运行。同时他在等结果的同时去执行其他任务”', '2019-03-31 20:42:47', '2019-03-31 20:42:47', 1, 27);
INSERT INTO `review` VALUES (45, '至于你说那个没有线的例子，也很容易解释。\n\n前面说了一个字“等”，你都没等，他当然不开线程，不保护现场环境，因为立马出结果，他不必等。\n\n所以你试试看在代码里写\nawait testtask()\n\n你告诉他我要“等”，那么他就会启动环境保护，启动基于异步的“未来完成时态”执行动作\n\n当然执行完了，他又会恢复你的现场环境，继续执行后面的代码(其实我们也能用代码控制，让他不恢复现场环境，只不过这是后话，你目前不必掌握)', '2019-03-31 20:42:59', '2019-03-31 20:42:59', 1, 27);
INSERT INTO `review` VALUES (46, '当然效果一样，因为你写的代码虽然用了task<T> 但实际上他就是一个同步代码。如果是异步代码会写成\n\n Task<string> testtask()\n        {\n            return Task.Run<string>(() => {\n                this.label1.Text = \"ab\";\n                Thread.Sleep(1000);\n                return \"abc\";\n            });\n        }', '2019-03-31 20:43:17', '2019-03-31 20:43:17', 1, 28);
INSERT INTO `review` VALUES (47, '每天都有吗', '2019-03-31 20:48:52', '2019-03-31 20:48:52', 58, 28);
INSERT INTO `review` VALUES (48, '不是，这是去年的。今年估计会有更新', '2019-03-31 20:49:05', '2019-03-31 20:49:05', 58, 27);
INSERT INTO `review` VALUES (49, '内容清晰明了', '2019-03-31 20:52:20', '2019-03-31 20:52:20', 60, 26);
INSERT INTO `review` VALUES (50, '这里分享一下个人目前的一个路线\n工具书：犀牛书（这个应该是没什么大毛病的）', '2019-03-31 20:53:46', '2019-03-31 20:53:46', 61, 28);
INSERT INTO `review` VALUES (51, '挺漫长的一段路', '2019-03-31 20:54:08', '2019-03-31 20:54:08', 61, 27);
INSERT INTO `review` VALUES (52, 'Debug情况为，开头输出多行“try”，接着“finally”、“finally”、“try”', '2019-03-31 20:56:37', '2019-03-31 20:56:37', 64, 27);
INSERT INTO `review` VALUES (53, '堆栈溢出，前提是要你创建了对象，你这只是打印，调用的static方法，没有对象产生，不会占用堆栈空间，只会无限循环下去，不会溢出', '2019-03-31 20:56:49', '2019-03-31 20:56:49', 64, 27);
INSERT INTO `review` VALUES (54, '1', '2019-03-31 20:59:06', '2019-03-31 20:59:06', 64, 27);
INSERT INTO `review` VALUES (55, '你确定之前一直运行好好的？\n报错是服务器端报错还是客户端报错？\n你的客户端连接的服务器的端口都不一样，你的服务器端监听的是1234端口，客户端连接的是服务器端的1111端口，服务器端根本监听不到客户端的连接，之前能运行好好的还真神奇了？', '2019-03-31 21:00:39', '2019-03-31 21:00:39', 65, 27);
COMMIT;

-- ----------------------------
-- Table structure for tag
-- ----------------------------
DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID\n',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '标签名称',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COMMENT='标签表';

-- ----------------------------
-- Records of tag
-- ----------------------------
BEGIN;
INSERT INTO `tag` VALUES (1, '2019-03-16 23:52:03', '2019-03-16 23:52:07', 'MySQL');
INSERT INTO `tag` VALUES (2, '2019-03-16 23:52:18', '2019-03-16 23:52:22', 'IDEA');
INSERT INTO `tag` VALUES (3, '2019-03-16 23:52:29', '2019-03-16 23:52:33', 'Redis');
INSERT INTO `tag` VALUES (4, '2019-03-16 23:52:42', '2019-03-16 23:52:46', 'NoSQL');
INSERT INTO `tag` VALUES (5, '2019-03-16 23:53:03', '2019-03-16 23:53:06', 'ORACLE');
INSERT INTO `tag` VALUES (6, '2019-03-16 23:53:19', '2019-03-16 23:53:23', 'JAVA');
INSERT INTO `tag` VALUES (7, '2019-03-16 23:54:00', '2019-03-16 23:54:04', 'JS');
INSERT INTO `tag` VALUES (8, '2019-03-16 23:54:11', '2019-03-16 23:54:16', 'CSS');
INSERT INTO `tag` VALUES (16, '2019-03-31 20:30:24', '2019-03-31 20:30:24', 'EXCEL');
INSERT INTO `tag` VALUES (15, '2019-03-31 20:30:12', '2019-03-31 20:30:12', 'PHP');
INSERT INTO `tag` VALUES (14, '2019-03-31 20:30:02', '2019-03-31 20:30:02', '.NET');
INSERT INTO `tag` VALUES (17, '2019-03-31 20:30:30', '2019-03-31 20:30:30', 'ASP');
INSERT INTO `tag` VALUES (18, '2019-03-31 20:30:56', '2019-03-31 20:30:56', 'C++');
INSERT INTO `tag` VALUES (19, '2019-03-31 20:31:05', '2019-03-31 20:31:05', 'C#');
INSERT INTO `tag` VALUES (20, '2019-03-31 20:31:14', '2019-03-31 20:31:14', 'VB');
INSERT INTO `tag` VALUES (21, '2019-03-31 20:31:20', '2019-03-31 20:31:20', 'C');
INSERT INTO `tag` VALUES (22, '2019-03-31 20:31:37', '2019-03-31 20:31:37', 'JSP');
INSERT INTO `tag` VALUES (23, '2019-03-31 20:31:50', '2019-03-31 20:31:50', 'Web App框架');
INSERT INTO `tag` VALUES (24, '2019-03-31 20:32:05', '2019-03-31 20:32:05', 'HTML');
INSERT INTO `tag` VALUES (25, '2019-03-31 20:32:20', '2019-03-31 20:32:20', 'Javascript');
INSERT INTO `tag` VALUES (26, '2019-03-31 20:32:26', '2019-03-31 20:32:26', 'Flash');
INSERT INTO `tag` VALUES (27, '2019-03-31 20:32:45', '2019-03-31 20:32:45', 'Python');
INSERT INTO `tag` VALUES (28, '2019-03-31 20:32:54', '2019-03-31 20:32:54', 'Perl');
INSERT INTO `tag` VALUES (29, '2019-03-31 20:32:58', '2019-03-31 20:32:58', 'Ruby');
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '邮箱',
  `modify_time` datetime DEFAULT NULL COMMENT '修改时间',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户名称',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '密码',
  `role` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '角色',
  PRIMARY KEY (`id`),
  UNIQUE KEY `u_email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COMMENT='用户表';

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (20, '2019-03-28 13:40:15', '2622026762@qq.com', '2019-03-31 20:36:18', 'liweiwei', '202cb962ac59075b964b07152d234b70', '管理员');
INSERT INTO `user` VALUES (26, '2019-03-31 20:33:23', 'guoxiaohu@163.com', '2019-03-31 20:33:23', 'guoxiaohu', '202cb962ac59075b964b07152d234b70', '普通用户');
INSERT INTO `user` VALUES (28, '2019-03-31 20:33:57', 'wangxiao@163.com', '2019-03-31 20:33:57', 'wangxiao', '202cb962ac59075b964b07152d234b70', '普通用户');
INSERT INTO `user` VALUES (27, '2019-03-31 20:33:40', 'wanganping@163.com', '2019-03-31 20:33:40', 'wanganping', '202cb962ac59075b964b07152d234b70', '普通用户');
INSERT INTO `user` VALUES (29, '2019-03-31 20:34:13', 'cuiyizhe@163.com', '2019-03-31 20:34:13', 'cuiyizhe', '202cb962ac59075b964b07152d234b70', '普通用户');
INSERT INTO `user` VALUES (30, '2019-03-31 20:34:31', 'chenzhixin@163.com', '2019-03-31 20:34:31', 'chenzhixin', '202cb962ac59075b964b07152d234b70', '普通用户');
INSERT INTO `user` VALUES (31, '2019-03-31 20:34:49', '1457159077@qq.com', '2019-03-31 20:34:49', 'gxh', '202cb962ac59075b964b07152d234b70', '普通用户');
INSERT INTO `user` VALUES (32, '2019-03-31 20:35:40', '17611287817@163.com', '2019-03-31 20:35:40', 'lww', '202cb962ac59075b964b07152d234b70', '管理员');
INSERT INTO `user` VALUES (33, '2019-03-31 20:36:11', '2622026762@outlook.com', '2019-03-31 20:36:11', 'liww', '202cb962ac59075b964b07152d234b70', '普通用户');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
