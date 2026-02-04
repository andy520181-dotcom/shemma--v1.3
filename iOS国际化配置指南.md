# iOS 应用名称国际化 - 简易配置说明

## 总结
我已经创建了国际化文件，但还需要在 Xcode 中完成最后的配置步骤。

## 已完成的工作

### 1. 创建了本地化文件
- ✅ `/ios/App/App/zh-Hans.lproj/InfoPlist.strings` - 中文配置
- ✅ `/ios/App/App/en.lproj/InfoPlist.strings` - 英文配置

### 2. 修复了语言切换按钮
- ✅ 中文环境显示"中"
- ✅ 英文环境显示"EN"

## 需要你完成的步骤

### 方法一：使用 Xcode（推荐）⭐

1. **打开项目**
   ```bash
   cd "/Users/andy/Desktop/Matoto马吐吐/ios/App"
   open App.xcodeproj
   ```

2. **添加本地化语言**
   - 点击左侧蓝色的 `App` 项目图标
   - 选择 `PROJECT` → `App` （不是 TARGET）
   - 在 `Info` 标签页找到 `Localizations`
   - 点击 `+` 添加 `Chinese (Simplified)`
   - 在弹出窗口中，取消勾选所有文件（我们不需要本地化 storyboard）
   - 点击 `Finish`

3. **添加 InfoPlist.strings 引用**
   - 在左侧文件树中，右键点击 `App` 文件夹
   - 选择 `Add Files to "App"...`
   - 找到并选择这两个文件夹：
     - `zh-Hans.lproj`
     - `en.lproj`
   - ⚠️ 重要：确保勾选 `Create groups`
   - 点击 `Add`

4. **配置文件本地化**
   - 找到并点击任一 `InfoPlist.strings` 文件
   - 右侧面板（File Inspector）中找到 `Localization` 部分
   - 确保 `English` 和 `Chinese (Simplified)` 都被勾选

5. **构建并测试**
   ```bash
   # 清理构建
   # 在 Xcode 菜单: Product → Clean Build Folder (Shift+Cmd+K)
   
   # 重新构建
   # 在 Xcode 菜单: Product → Build (Cmd+B)
   ```

### 方法二：手动编辑项目文件（备选）

如果你熟悉 Xcode 项目文件，可以直接编辑 `project.pbxproj`，但这比较容易出错。我建议使用方法一。

## 测试方法

### 测试应用名称国际化
1. **中文环境测试**
   - 确保 iOS 系统语言为中文
   - 主屏幕上应用名称应显示：**马吐吐**

2. **英文环境测试**
   - 设置 → 通用 → 语言与地区
   - 将系统语言改为 English
   - 返回主屏幕
   - 应用名称应显示：**Matoto**

### 测试应用内语言切换
1. 打开应用
2. 点击右上角的语言切换按钮
3. 中文环境下应显示"中"，英文环境下应显示"EN"
4. 点击按钮可以在两种语言间切换

## 关于应用图标

如果你的应用图标上包含中文文字，建议：

### 选项 1：使用纯图形图标（推荐）
- 移除图标上的所有文字
- 只保留图形元素（如马头）
- 这样无需为不同语言创建不同图标

### 选项 2：为每种语言创建不同图标
如果必须在图标上显示文字：
1. 准备两套图标：
   - 中文版：带"马吐吐"文字
   - 英文版：带"Matoto"文字或纯图形
2. 在 Xcode 中为 AppIcon 添加本地化变体
3. 分别上传对应的图标资源

## 当前配置文件内容预览

### zh-Hans.lproj/InfoPlist.strings（中文）
```
"CFBundleDisplayName" = "马吐吐";
"CFBundleName" = "马吐吐";
"NSCameraUsageDescription" = "需要访问相机以拍摄头像照片";
"NSPhotoLibraryAddUsageDescription" = "需要访问相册以保存和选择头像照片";
"NSPhotoLibraryUsageDescription" = "需要访问相册以选择头像照片";
```

### en.lproj/InfoPlist.strings（英文）
```
"CFBundleDisplayName" = "Matoto";
"CFBundleName" = "Matoto";
"NSCameraUsageDescription" = "Camera access is needed to take avatar photos";
"NSPhotoLibraryAddUsageDescription" = "Photo library access is needed to save and select avatar photos";
"NSPhotoLibraryUsageDescription" = "Photo library access is needed to select avatar photos";
```

## 常见问题

**Q: 为什么修改后应用名称还是显示中文？**
A: 请按以下步骤排查：
1. 确认已在 Xcode 中添加了本地化文件引用
2. 在 Xcode 中 Clean Build Folder
3. 完全删除设备上的应用
4. 重新构建并安装
5. 如果还不行，重启设备

**Q: Info.plist 中是否需要删除中文描述？**
A: 不需要！Info.plist 中的描述会作为后备（fallback）。当系统找不到对应语言的 InfoPlist.strings 时，会使用 Info.plist 中的值。

**Q: 如何验证配置成功？**
A: 在 Xcode 项目设置中，`Localizations` 应该显示：
- English - X Files Localized
- Chinese (Simplified) - X Files Localized

## 需要帮助？
如果遇到问题：
1. 检查文件是否在 Xcode 项目导航器中可见
2. 确认文件的本地化设置是否正确
3. 清理构建缓存并重新构建
