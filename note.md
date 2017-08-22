# EventEmitter
EventEmiter大概只是用在*Component*和*directive*中，用于子窗口中发射事件。内部使用了subject,下面是官方的说法：

>Use by directives and components to emit custom Events

用法如下所示：

在child component中使用
`@Output('change') counterChange:EventEmitter<any>`

在parent component中调用
`<parent (change)='onChange($event)'></parent>`

# DI
Angular2是有分层域的，所以可以设置DI的作用域范围
**DI container is hierarchical, but angular1 is not
lazy loading** , angular1中之所以不能应用，一部分原因是因为DI没有作用范围，全局的DI和局部定义的DI如果没有分开就会有冲突。

DI可以实现变量注入，可以使用OpaqueToken(*在angular4中使用InjectToken*)防止name collision。

AOT（Ahead Of Time）,JIT(just in time),AOT是提前编译文件，JIT是在浏览器中编译存放在内存中（on the fly）
任务：动态新建dom，有很多种方式，其中包括compiler，ComponentFactoryResolver

Angular2有默认一个DI context，
Feature module/Shared module
但是有一个pitfall：当appMoudle和lazy module同时需要shared module中的某个prodiver，这个时候就会有重复，angular2做法是lazy module
会有自己的DI Context，而且这个DI context是其他module无法使用的，RouteModule.forRoot会为lazy module创建新的DI context。这个主要是
因为在compile的时候，非lazy module在编译时是可以确定他们的依赖provide的，而且这是将他们的provide提到root module中。

问题，为什么在正常的feature module中还要调用commonModule，不是说好的和appmodule一个DI context吗？？？？？？
答案：尽管我们是在appmodule注册了common module，但是其他module中对于这种情况也要显式的import common module。但是如果是子module中
provide会自动的被其他子module引用，这个要分清楚。

# Change Detection
是不是可以这样理解，由于onpush了，所以如果不人工添加markforcheck就一直不更新这个component（不对）

应该这么说，markForCheck是标志从这个节点一直到root都需要被更新，而OnPush表示只有当输入值引用有变化时
才会被触发检测。2者一般用于immtuable object。
还有，是否加入了onpush，就表示好像使用了immutuable object一样的方式，指是检查对象是否
immutable object不同于observable objects ，前者永远来自root（input），而后者来自各个地方，so问题明朗点

这个时候需要markForCheck通知这里到root这条线上需要更新，good
onPush表示只有当@Input标识的属性变化时才标识为变化(no)

总结：angular2 change detection 默认情况下在检测component中的表达式变量，而不是所有的class中的变量，这点很重要。
一般3种类型会触发change detection： 
1. event
2. async
3. setTimeOut

使用onPush只是当表达式变量的引用不变时不会触发change detection，但是事件任然会触发，所以使用onPush时很迷糊到底是什么触发（confusing）
 if one of our components causes any additional side effects after the first run during change detection, Angular will throw an error
 不懂？？？？？

 有个例子，ng2-dynamic-component-loading中应用了动态添加component，说明了再一次更新了后，ng2会再此检查结构树是否稳定。不稳定会err。
 OnChanges 如果觀察的 input 是物件，則只有更換新物件（參考變更）才會執行，只變更物件 property 不會執行，此時要改用 DoCheck
是否正确？？？这个是正确的。doCheck是任何变化都会执行，所以在这个函数体中要特别注意，很有可能影响性能。

OnChanges观察所有模板中使用的@input是否有更新，而且是引用更新，如果需要使用到所有的更新，比如person下的name更新，就要在docheck中进行设置。
[Change detection](http://juristr.com/blog/2016/04/angular2-change-detection/)
***
在docheck中使用KeyValuediffers，IterableDiffers时需要注意，KeyValueDiffers for objects and IterableDiffers for Iterable(当然Array就在包括其中了)
本例中使用在child.component.ts, angular源码中ng_for.ts也有使用。
[如何强制刷新component](http://stackoverflow.com/questions/35105374/how-to-force-a-components-re-rendering-in-angular-2/35106069#35106069)



[NgZone, good example](http://blog.thoughtram.io/angular/2016/02/01/zones-in-angular-2.html)

route相关的说明可以看：`router/src/config.d.ts`

ng2-translate用于多语言版本


 >typings，because we use TypeScript, but javascript library we want to use, lodash for example so TypeScript needs to know about javascript library definition, typings is coming!!!
to see details about router, see Routes link

使用`<ng-container *ngIf=enabled></ng-container>`, 不会产生新的tag， 更简洁不会影响style
[官方解释](https://github.com/angular/angular.io/issues/2303), [博客中的解释](https://netbasal.com/getting-to-know-the-ng-container-directive-in-angular-a97b7a33c8ea#.usmorbgf4), [还有stackoverflow解释](http://stackoverflow.com/questions/39547858/angular-2-ng-container)

可不可以这么说，ViewContainerRef总是跟Template联系在一起的，只有Template才有ViewContainerRef？？？？
意思是这个意思，但是不是这么说的一般我们手工添加控件的时候，需要使用ViewComtainerRef.createEmbeddedView(tmeplate, context, index),这里的
template就是了，内部其实还是调用template去做视图上的操作，这个只是封装了下，方便终端使用。

angular2 编译过程：

1. [Angular2编译过程1](http://www.jianshu.com/p/1f58321a52f7)

2. [Angular2编译过程2](http://www.jianshu.com/p/dd085c38f238)

`platformBrowserDynamic(providers:any[]).bootstrapModule(AppModule);(in main.ts)`所有的故事都是从这个地方开始的。

TypeScript中的metadata只有在有decorator修饰的时候才会emit metadata，不然就会产生很多无用的代码（metadata info）

# ng2 upgrade to ng4
1. "template" change to "ng-template"

#Typescript tsconfig.json

- "module"代表我们编译后的代码采用哪种module类型
- "lib"代表我们编译的时候需要用到哪些lib支持

<http://www.baidu.com>

# RxJS
The heart of an observable data service is the RxJs Subject. Subjects implement both the Observer and the Observable interfaces, meaning that we can use them to both emit values and register subscriptors.

` let subject = new Subject();`

`subject.next(newValue);`

`subject.subscribe(value => console.log('Received new subject value: '))`

BehaviorSubject将会给所有的subscriber所有的值，即使是后来订阅的，这样保证所有的数据都是一致的。

