# 简介
桥接名称 | 桥接作用 | H5负责人 | Android对接人 | IOS对接人 | Android起始版本 | IOS起始版本
--- | --- | --- | --- | --- | --- | ---
{{bridgeName}} | {{bridgeEffect}} | {{bridgeH5Man}} | {{bridgeNativeAndroidMan}} | {{bridgeNativeIOSMan}} | {{bridgeVersionAndroidStr}} | {{bridgeVersionIOS}}

# 基本用法
```javascript
//! 推荐使用ES规范
import {{TplBracketStart}} {{bridgeName}} {{TplBracketEnd}} from '@qtt/qukanbridge'

//! 不支持ES规范，可使用CommonJS规范
const {{bridgeName}} = require('@qtt/qukanbridge').{{bridgeName}}
```