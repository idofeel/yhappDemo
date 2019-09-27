# yhappDemo

typescript react-native

 在项目目录中，可以运行：

### yarn

    安装依赖

### yarn ios

    运行 ios

### yarn andriod

    运行 安卓

##### ios 可能出现问题解决方案：

If you don't have cocoa pods installed you need to sudo gem install cocoapods

cd /ios
run pod install
cd ..
delete build folder
run react-native run-ios
if error persists,

delete build folder again
open the /ios folder in x-code
navigate File -> Project Settings -> Build System -> change (Shared workspace settings and Per-User workspace settings): Build System -> Legacy Build System
