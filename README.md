# ServiceLifecycle

## Angular中服务的生命周期

> Angular官方教程中只提及了生命周期在组件，指令中的应用而并没有提及服务也有其生命周期

> service同样可以实现OnDestroy, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit接口

> 需要注意的是只有`OnDestroy`接口有实际的调用效果

> 也就是说可以通过`constructor`和`OnDestroy`接口实现对service的监控效果


### 声明在Module中的Service生命周期

> 如果服务申明于模块之中,模块中的每个部分都将会共享同样的服务实例

> 服务将会在某个时间点被构造出来，而这个时间点和依赖注入了该服务的 `组件/ 指令 / 服务 / 管道` 初次被创建的时间点有关
  
> 服务被创建后不会跟随被注入的 `组件/ 指令 / 服务 / 管道`的销毁而被销毁， 而是跟随模块的销毁而销毁

```typescript
// ...
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [GlobalService]
})
```

> 需要注意的是，在同步`NgModule` 里面配置的 `provider` 在整个 APP 范围内都是可见的，

> 亦即，即使在某个子模块里面配置的`provider`服务，它们依然是全局可见的，可以被注射到任意类里面

> 更需要注意的是，异步模块里面配置的`providers`只对本模块中的成员可见

> 如果在其他模块里面引用异步模块里面配置的`provider`会产生异常

> 其本质原因是，Angular会给异步加载的模块创建独立的注射器树
           


### 直接声明于更小颗粒中的Service生命周期

> 如果服务直接申明于` 组件 / 指令 / 管道` 中时，服务会在注入的 `组件 / 指令/ 管道`被创建时创建对于的服务实例

> 该实例依存于创被建的 ` 组件 / 指令 / 管道`，并随着` 组件 / 指令 / 管道`的销毁而销毁

```typescript
// hello.component.ts
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  providers: [LocalService]
})
```

> 如果将service配置在 `组件 / 指令 / 管道`内部的 `providers` 中，服务奖不再是单例模式了

> 每个`组件 / 指令 / 管道`都拥有自己独立的 UserListService 实例, 其内部的`provider`生命周期与其自身保持一致,这才是service生命周期的关键
                                                

