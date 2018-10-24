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
                                                

### Service的注入机制

- 使用组件举例避免`providers`无法插入到`pipe`中的情况,以下组件可以替换为指令进行适配，注入机制同样适用于指令的某些场景

- 如果组件内部配置了`providers`优先使用组件上的配置来创建注入对象，否则向父层组件继续查找，父组件上找不到继续向所属的模块查找，一直查询到根模块 `AppModule` 里面的`providers` 配置

- 最终若未找到指定的服务，则抛出异常

- 同步模块里面配置的 `providers` 是全局可见的，即使是很深的子模块里面配置的 `providers`依然是全局可见的(与深度无关)

- 异步模块里面配置的`providers`只对本模块中的成员可见

- 组件里面配置的 `providers` 对组件自身和所有`子层组件`可见

- `injector`的生命周期与组件自身保持一致，当组件被销毁的时候，对应的`injector`也会被销毁

### @Inject 和 @Injectable

> 与常见的通过`@Injectable`为服务生成元数据之外，也可以通过`@Inject`作为手动挡的方式手动指定元数据类型信息

```typescript
import {Inject, Injectable} from '@angular/core';
import { UUID } from 'angular2-uuid';
import {HttpClient} from '@angular/common/http';

export class InjectTestService {
  private _id: string;
  constructor(
    @Inject(HttpClient) private http
  ) {
    this._id = UUID.UUID();
  }
}
```

> 值得注意的是，用` @Inject` 和用 `@Injectable` 最终编译出来的代码是不一样的

> 用 `@Inject` 生成的代码会多于`@Injectable`导致最后生成的文件变大

#### @Inject的另类用法

> `@Inject`不仅可以注入强类型的对象也可以注入弱类型的对象字面值

```typescript
import { Injectable, Inject } from '@angular/core';
import {MY_CONFIG_TOKEN} from '../my.config';

// @Injectable({
//   providedIn: 'root'
// })
export class LiteralService {

  constructor(
    @Inject(MY_CONFIG_TOKEN) config: object
  ) {
    console.log(config);
  }
}
```

> 前提是

```typescript
import { InjectionToken} from '@angular/core';

export const MY_CONFIG = {
  name: '@Inject标签测试'
};

export const MY_CONFIG_TOKEN = new InjectionToken<string>('my_config.ts');
```

```typescript
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestDirective
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],
  providers: [GlobalService, LiteralService, {provide: MY_CONFIG_TOKEN, useValue: MY_CONFIG}]
})
```

> 只是事实上上述方式也可以通过直接将配置文件直接通过`import`引入服务中实现

> 使用上述方式更多的是一种屠龙之术，只是龙在Angular中是存在的
