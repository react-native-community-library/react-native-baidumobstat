# react-native-baidumobstat - 百度移动统计 react-native (ios)

## Installation

```sh
npm install @darkce/react-native-baidumobstat

yarn @darkce/react-native-baidumobstat
```

```sh
cd ios && pod install
```

// AppDelegate.m
````objective-c
/**
 * 导入百度移动统计
 */
#import "BaiduMobStat.h"
/***********************************************/

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

/**
 * 初始化百度移动统计
 */
  BaiduMobStat *baiduMobStat = [BaiduMobStat defaultStat];
  // 设置app类型，1: react-native:
  baiduMobStat.platformType = 1;
  // App key
  [baiduMobStat startWithAppId:@"xxx"];
  /***********************************************/
````

## Usage

```js
import BaiduMobStat from '@darkce/react-native-baidumobstat';
````

#### 参数说明

- `eventId：` 事件 Id，提前在网站端创建
- `eventLabel`： 事件标签，附加参数，不能为空字符串
- `attributes`： 事件属性，对应的 key 需要在网站上创建，注意：value 只接受 string 类型

### 无时长事件

```js
BaiduMobStat.onEvent('event1', '事件一');
BaiduMobStat.onEventWithAttributes('event4', '事件四', { 分类: '分类一' });
```

### 固定时长事件

```js
BaiduMobStat.onEventDuration('event2', '事件二', 1000);
BaiduMobStat.onEventDurationWithAttributes('event5', '事件五', 1000, {
  分类: '分类一',
});
```

### 自定义时长事件

```js
BaiduMobStat.onEventStart('event6', '事件六');
BaiduMobStat.onEventEnd('event3', '事件三');
BaiduMobStat.onEventEndWithAttributes('event6', '事件六', { 分类: '分类一' });
```

### 页面分析

```js
BaiduMobStat.onPageStart('页面一');
BaiduMobStat.onPageEnd('页面一');
```

## License

MIT
