# Random Thunder Sound Plugin / 随机雷声音效插件

## [English Documentation](#English)
---
# 中文文档

---

## 🎯 概述

一个高度优化的RPG Maker MV/MZ插件，提供逼真的随机雷声音效和同步屏幕闪光效果。采用模块化架构，性能更优，更易于维护。

---

## ✨ 功能特点

- **模块化架构：** 代码按功能模块组织，易于维护
- **真实雷声模拟：** 基于距离的音频效果，参数相互关联
- **屏幕闪光效果：** 同步的闪电效果，距离相关的颜色变化
- **灵活控制：** 完整的插件命令系统
- **性能优化：** 高效的内存使用和计算开销减少
- **错误处理：** 健壮的错误检查和警告系统
- **调试工具：** 内置调试和测试命令

---

## 🏗️ 架构设计

插件分为多个专用模块：

| 模块             | 功能                 |
|------------------|----------------------|
| Config           | 管理插件参数和默认值 |
| State            | 跟踪运行时状态和当前设置 |
| AudioManagerEx   | 处理音频播放和效果   |
| TimerManager     | 管理定时和调度       |
| ConfigManager    | 处理配置变更         |
| DebugTools       | 提供调试功能         |
| SceneHandler     | 管理场景转换         |
| PluginCommands   | 注册所有插件命令     |

---

## ⚙️ 配置参数

| 参数               | 描述                   | 默认值    | 范围           |
|--------------------|------------------------|-----------|----------------|
| thunderSeName      | 音效文件名（无扩展名） | Thunder1  | 任何有效文件名 |
| minInterval        | 雷声最小间隔时间（秒） | 2         | 0.1–60         |
| maxInterval        | 雷声最大间隔时间（秒） | 10        | 0.1–60         |
| minVolume          | 最小音量级别           | 30        | 0–100          |
| maxVolume          | 最大音量级别           | 90        | 0–100          |
| minPan             | 最小声道平衡           | -30       | -100 到 100    |
| maxPan             | 最大声道平衡           | 30        | -100 到 100    |
| minPitch           | 最小音高级别           | 80        | 50–150         |
| maxPitch           | 最大音高级别           | 120       | 50–150         |
| realisticMode      | 启用基于距离的真实模式 | true      | true/false     |
| enableScreenFlash  | 启用屏幕闪光效果       | true      | true/false     |
| flashIntensity     | 最大闪光强度           | 200       | 0–255          |
| flashDuration      | 闪光持续时间（帧数）   | 10        | 1–60           |

---

## 🎮 插件命令

### 控制命令

```javascript
// 开始随机播放雷声
RandomThunderSound startThunder

// 停止播放雷声
RandomThunderSound stopThunder

// 播放一次雷声
RandomThunderSound playThunderOnce
```

### 配置命令

```javascript
// 设置音量范围 (0-100)
RandomThunderSound setVolumeRange min=30 max=90

// 设置声道平衡范围 (-100 到 100)
RandomThunderSound setPanRange min=-30 max=30

// 设置音高范围 (50-150)
RandomThunderSound setPitchRange min=80 max=120

// 切换真实模式
RandomThunderSound setRealisticMode enabled=true

// 切换屏幕闪光
RandomThunderSound setScreenFlash enabled=true

// 更改音效文件
RandomThunderSound setSEName name=Thunder2
```

### 工具命令

```javascript
// 测试音效系统（播放5次雷声）
RandomThunderSound testSound count=5

// 显示调试信息
RandomThunderSound debug
```

---

## 🎵 音频模式

### 真实模式

- **音量：** 随距离减小
- **音高：** 随距离增加（远处雷声更高亢）
- **屏幕闪光：** 强度随距离缩放
- **颜色：** 远处雷声带蓝色调

### 独立模式

- 所有参数独立随机化
- 无距离效果关联

---

## 🔧 技术特性

### 错误处理

- 验证音频文件名
- 捕获并记录音频播放错误
- 检查参数约束

### 性能优化

- 高效的随机数生成
- 优化的定时功能
- 最小的内存占用
- 正确的资源清理

### 场景管理

- 战斗场景中自动停止
- 游戏退出时清洁终止
- 正确的场景转换处理

---

## 📁 文件结构要求

```
audio/se/
  Thunder1.ogg    # 默认雷声音效
  Thunder2.ogg    # 替代音效
  Thunder3.ogg    # 可使用任何名称
```

---

## 🚀 安装方法

1. 将 `RandomThunderSound.js` 添加到 `js/plugins/`
2. 在插件管理器中启用
3. 根据需要配置参数
4. 确保音频文件在 `audio/se/` 文件夹中

---

## 💡 使用示例

### 基本天气系统

```javascript
// 开始下雨时
RandomThunderSound startThunder

// 雨停时
RandomThunderSound stopThunder
```

### 戏剧性事件

```javascript
// 在紧张的故事时刻
RandomThunderSound playThunderOnce
RandomThunderSound setVolumeRange min=80 max=100
```

### 环境变化

```javascript
// 森林环境
RandomThunderSound setVolumeRange min=20 max=60
RandomThunderSound setPitchRange min=90 max=110

// 山地环境
RandomThunderSound setVolumeRange min=40 max=80
RandomThunderSound setRealisticMode enabled=true
```

---
## <a id="English">English Documentation</a>
## 🎯 Overview

A highly optimized RPG Maker MV/MZ plugin that provides realistic random thunder sound effects with synchronized screen flashes.  
The plugin features a modular architecture, improved performance, and extensive configuration.

---

## ✨ Features

- **Modular Architecture:** Code organized into logical modules for better maintainability
- **Realistic Thunder Simulation:** Distance-based audio effects with correlated parameters
- **Screen Flash Effects:** Synchronized lightning flashes with distance-based color variations
- **Flexible Control:** Comprehensive plugin command system
- **Performance Optimized:** Efficient memory usage and reduced computational overhead
- **Error Handling:** Robust error checking and warning system
- **Debug Tools:** Built-in debugging and testing commands

---

## 🏗️ Architecture

The plugin is organized into several specialized modules:

| Module           | Purpose                             |
|------------------|-------------------------------------|
| Config           | Manages plugin parameters and defaults |
| State            | Tracks runtime state and current settings |
| AudioManagerEx   | Handles audio playback and effects  |
| TimerManager     | Manages timing and scheduling       |
| ConfigManager    | Processes configuration changes     |
| DebugTools       | Provides debugging functionality    |
| SceneHandler     | Manages scene transitions           |
| PluginCommands   | Registers all plugin commands       |

---

## ⚙️ Configuration Parameters

| Parameter          | Description                           | Default   | Range         |
|--------------------|---------------------------------------|-----------|---------------|
| thunderSeName      | SE filename (without extension)       | Thunder1  | Any valid filename |
| minInterval        | Minimum interval between thunders (s) | 2         | 0.1–60        |
| maxInterval        | Maximum interval between thunders (s) | 10        | 0.1–60        |
| minVolume          | Minimum volume level                  | 30        | 0–100         |
| maxVolume          | Maximum volume level                  | 90        | 0–100         |
| minPan             | Minimum stereo pan                    | -30       | -100 to 100   |
| maxPan             | Maximum stereo pan                    | 30        | -100 to 100   |
| minPitch           | Minimum pitch level                   | 80        | 50–150        |
| maxPitch           | Maximum pitch level                   | 120       | 50–150        |
| realisticMode      | Enable distance-based realism         | true      | true/false    |
| enableScreenFlash  | Enable screen flash effects           | true      | true/false    |
| flashIntensity     | Maximum flash intensity               | 200       | 0–255         |
| flashDuration      | Flash duration in frames              | 10        | 1–60          |

---

## 🎮 Plugin Commands

### Control Commands

```javascript
// Start random thunder playback
RandomThunderSound startThunder

// Stop thunder playback
RandomThunderSound stopThunder

// Play a single thunder sound
RandomThunderSound playThunderOnce
```

### Configuration Commands

```javascript
// Set volume range (0-100)
RandomThunderSound setVolumeRange min=30 max=90

// Set pan range (-100 to 100)
RandomThunderSound setPanRange min=-30 max=30

// Set pitch range (50-150)
RandomThunderSound setPitchRange min=80 max=120

// Toggle realistic mode
RandomThunderSound setRealisticMode enabled=true

// Toggle screen flash
RandomThunderSound setScreenFlash enabled=true

// Change sound effect file
RandomThunderSound setSEName name=Thunder2
```

### Utility Commands

```javascript
// Test sound system (plays 5 thunders)
RandomThunderSound testSound count=5

// Show debug information
RandomThunderSound debug
```

---

## 🎵 Audio Modes

### Realistic Mode

- **Volume:** Decreases with distance
- **Pitch:** Increases with distance (higher pitch for distant thunder)
- **Screen Flash:** Intensity scales with distance
- **Color:** Distant thunder has bluish tint

### Independent Mode

- All parameters are randomized independently
- No correlation between distance effects

---

## 🔧 Technical Features

### Error Handling

- Validates audio file names
- Catches and logs audio playback errors
- Checks parameter constraints

### Performance Optimizations

- Efficient random number generation
- Optimized timing functions
- Minimal memory footprint
- Proper resource cleanup

### Scene Management

- Automatically stops in battle scenes
- Clean termination on game exit
- Proper scene transition handling

---

## 📁 File Structure Requirements

```
audio/se/
  Thunder1.ogg    # Default thunder sound
  Thunder2.ogg    # Alternative sounds
  Thunder3.ogg    # Can use any name
```

---

## 🚀 Installation

1. Add `RandomThunderSound.js` to `js/plugins/`
2. Enable in Plugin Manager
3. Configure parameters as needed
4. Ensure audio files are in `audio/se/` folder

---

## 💡 Usage Examples

### Basic Weather System

```javascript
// When rain starts
RandomThunderSound startThunder

// When rain stops
RandomThunderSound stopThunder
```

### Dramatic Events

```javascript
// During intense story moments
RandomThunderSound playThunderOnce
RandomThunderSound setVolumeRange min=80 max=100
```

### Environment Variations

```javascript
// For forest environment
RandomThunderSound setVolumeRange min=20 max=60
RandomThunderSound setPitchRange min=90 max=110

// For mountains environment  
RandomThunderSound setVolumeRange min=40 max=80
RandomThunderSound setRealisticMode enabled=true
```

---
