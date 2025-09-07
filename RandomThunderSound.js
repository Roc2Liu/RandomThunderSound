/*:
 * @target MZ
 * @plugindesc 随机播放雷声音效，可设置随机音量、声道平衡和音调模拟真实雷声效果，并带有画面闪烁
 * @author Roc2Liu
 * @url https://github.com/Roc2Liu/RandomThunderSound
 *
 * @param thunderSeName
 * @text 音效名称
 * @desc 要播放的雷声音效名称
 * @default Thunder1
 * @type file
 * @dir audio/se
 *
 * @param minInterval
 * @text 最小间隔
 * @desc 两次雷声之间的最小间隔时间（秒）
 * @default 2
 * @min 1
 * @max 60
 *
 * @param maxInterval
 * @text 最大间隔
 * @desc 两次雷声之间的最大间隔时间（秒）
 * @default 10
 * @min 1
 * @max 60
 *
 * @param minVolume
 * @text 最小音量
 * @desc 雷声的最小音量（0-100）
 * @default 30
 * @min 0
 * @max 100
 *
 * @param maxVolume
 * @text 最大音量
 * @desc 雷声的最大音量（0-100）
 * @default 90
 * @min 0
 * @max 100
 *
 * @param minPan
 * @text 最小声道平衡
 * @desc 声道平衡的最小值（-100到100）
 * @default -30
 * @min -100
 * @max 100
 *
 * @param maxPan
 * @text 最大声道平衡
 * @desc 声道平衡的最大值（-100到100）
 * @default 30
 * @min -100
 * @max 100
 *
 * @param minPitch
 * @text 最小音调
 * @desc 音调的最小值（50-150）
 * @default 80
 * @min 50
 * @max 150
 *
 * @param maxPitch
 * @text 最大音调
 * @desc 音调的最大值（50-150）
 * @default 120
 * @min 50
 * @max 150
 *
 * @param realisticMode
 * @text 真实模式
 * @desc 启用真实模式，让音量、音调和声道平衡相互关联
 * @default true
 * @type boolean
 *
 * @param enableScreenFlash
 * @text 启用画面闪烁
 * @desc 是否启用雷声时的画面闪烁效果
 * @default true
 * @type boolean
 *
 * @param flashIntensity
 * @text 闪烁强度
 * @desc 画面闪烁的基准强度（0-255）
 * @default 200
 * @min 0
 * @max 255
 *
 * @param flashDuration
 * @text 闪烁持续时间
 * @desc 画面闪烁的持续时间（帧数）
 * @default 10
 * @min 1
 * @max 60
 *
 *
 * @command startThunder
 * @text 开始播放雷声
 * @desc 开始随机播放雷声音效
 *
 * @command stopThunder
 * @text 停止播放雷声
 * @desc 停止播放雷声音效
 *
 * @command playThunderOnce
 * @text 播放一次雷声
 * @desc 立即播放一次雷声音效
 *
 * @command setVolumeRange
 * @text 设置音量范围
 * @desc 设置雷声音量的随机范围
 *
 * @arg min
 * @text 最小音量
 * @desc 设置最小音量（0-100）
 * @type number
 * @min 0
 * @max 100
 * @default 30
 *
 * @arg max
 * @text 最大音量
 * @desc 设置最大音量（0-100）
 * @type number
 * @min 0
 * @max 100
 * @default 90
 *
 * @command setPanRange
 * @text 设置声道平衡范围
 * @desc 设置雷声道平衡的随机范围
 *
 * @arg min
 * @text 最小声道平衡
 * @desc 设置最小声道平衡（-100到100）
 * @type number
 * @min -100
 * @max 100
 * @default -30
 *
 * @arg max
 * @text 最大声道平衡
 * @desc 设置最大声道平衡（-100到100）
 * @type number
 * @min -100
 * @max 100
 * @default 30
 *
 * @command setPitchRange
 * @text 设置音调范围
 * @desc 设置雷声音调的随机范围
 *
 * @arg min
 * @text 最小音调
 * @desc 设置最小音调（50-150）
 * @type number
 * @min 50
 * @max 150
 * @default 80
 *
 * @arg max
 * @text 最大音调
 * @desc 设置最大音调（50-150）
 * @type number
 * @min 50
 * @max 150
 * @default 120
 *
 * @command setRealisticMode
 * @text 设置真实模式
 * @desc 启用或禁用真实模式
 *
 * @arg enabled
 * @text 启用
 * @desc 是否启用真实模式
 * @type boolean
 * @default true
 *
 * @command setScreenFlash
 * @text 设置画面闪烁
 * @desc 启用或禁用画面闪烁效果
 *
 * @arg enabled
 * @text 启用
 * @desc 是否启用画面闪烁
 * @type boolean
 * @default true
 *
 * @help
 * 随机间隔雷声音效插件 v1.6
 * 随机间隔播放雷声音效，可设置随机音量、声道平衡和音调模拟真实雷声效果，并带有画面闪烁。
 * 
 * 真实模式：
 * - 低音调+高音量 = 近处的大雷声（强烈闪烁）
 * - 高音调+低音量 = 远处的闪电声（微弱闪烁）  
 * - 中等音调+中等音量 = 中等距离的雷声（中等闪烁）
 * 
 * 闪烁效果根据距离：
 * - 极近：强烈白色闪烁
 * - 近：较强白色闪烁
 * - 中等：中等白色闪烁
 * - 远：较弱蓝色闪烁
 * - 极远：微弱蓝色闪烁
 * 
 * 使用方法：
 * 1. 在插件参数中设置音效名称、间隔时间、音量范围、声道平衡范围和音调范围
 * 2. 使用插件命令控制雷声播放
 */

(() => {
    'use strict';
    
    // 配置管理器
    const Config = {
        parameters: PluginManager.parameters('RandomThunderSound'),
        get thunderSeName() { return this.parameters['thunderSeName'] || 'Thunder1'; },
        get minInterval() { return Number(this.parameters['minInterval']) || 2; },
        get maxInterval() { return Number(this.parameters['maxInterval']) || 10; },
        get minVolume() { return Number(this.parameters['minVolume']) || 30; },
        get maxVolume() { return Number(this.parameters['maxVolume']) || 90; },
        get minPan() { return Number(this.parameters['minPan']) || -30; },
        get maxPan() { return Number(this.parameters['maxPan']) || 30; },
        get minPitch() { return Number(this.parameters['minPitch']) || 80; },
        get maxPitch() { return Number(this.parameters['maxPitch']) || 120; },
        get realisticMode() { return String(this.parameters['realisticMode']) === 'true'; },
        get enableScreenFlash() { return String(this.parameters['enableScreenFlash']) !== 'false'; },
        get flashIntensity() { return Number(this.parameters['flashIntensity']) || 200; },
        get flashDuration() { return Number(this.parameters['flashDuration']) || 10; }
    };
    
    // 状态管理器
    const State = {
        thunderTimer: null,
        isPlaying: false,
        currentMinVolume: Config.minVolume,
        currentMaxVolume: Config.maxVolume,
        currentMinPan: Config.minPan,
        currentMaxPan: Config.maxPan,
        currentMinPitch: Config.minPitch,
        currentMaxPitch: Config.maxPitch,
        currentRealisticMode: Config.realisticMode,
        currentEnableScreenFlash: Config.enableScreenFlash,
        thunderSeName: Config.thunderSeName
    };
    
    // 常量定义
    const DISTANCE_TYPES = [
        { name: '极近', intensity: 1.0, color: [255, 255, 255] },
        { name: '近', intensity: 0.8, color: [255, 255, 255] },
        { name: '中等', intensity: 0.6, color: [255, 255, 255] },
        { name: '远', intensity: 0.4, color: [200, 200, 255] },
        { name: '极远', intensity: 0.2, color: [150, 150, 255] }
    ];
    
    const CONSTRAINTS = {
        VOLUME: { min: 0, max: 100 },
        PAN: { min: -100, max: 100 },
        PITCH: { min: 50, max: 150 }
    };

    // 工具函数
    const Utils = {
        getRandomInRange(min, max) {
            return Math.random() * (max - min) + min;
        },
        
        getRandomIntInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        
        clamp(value, min, max) {
            return Math.max(min, Math.min(max, value));
        },
        
        isValidAudioFile(name) {
            return name && name.trim() !== '';
        }
    };

    // 音频管理器
    const AudioManagerEx = {
        playThunderSound() {
            if (!Utils.isValidAudioFile(State.thunderSeName)) {
                console.warn('雷声音效文件未设置或无效');
                return;
            }
            
            try {
                const params = State.currentRealisticMode ? 
                    this.getRealisticThunderParams() : 
                    this.getIndependentThunderParams();
                
                const se = { 
                    name: State.thunderSeName, 
                    volume: params.volume, 
                    pitch: params.pitch, 
                    pan: params.pan 
                };
                
                AudioManager.playSe(se);
                this.executeScreenFlash(params.distanceType);
                
            } catch (error) {
                console.error('雷声音效播放失败：', error);
            }
        },
        
        getRealisticThunderParams() {
            const distance = Math.random();
            const volume = Math.floor(State.currentMinVolume + 
                (State.currentMaxVolume - State.currentMinVolume) * (1 - distance));
            const pitch = Math.floor(State.currentMinPitch + 
                (State.currentMaxPitch - State.currentMinPitch) * distance);
            const pan = Utils.getRandomIntInRange(State.currentMinPan, State.currentMaxPan);
            const distanceIndex = Math.min(
                DISTANCE_TYPES.length - 1, 
                Math.floor(distance * DISTANCE_TYPES.length)
            );
            
            return { 
                volume: volume, 
                pitch: pitch, 
                pan: pan, 
                distanceType: DISTANCE_TYPES[distanceIndex] 
            };
        },
        
        getIndependentThunderParams() {
            return {
                volume: Utils.getRandomIntInRange(State.currentMinVolume, State.currentMaxVolume),
                pitch: Utils.getRandomIntInRange(State.currentMinPitch, State.currentMaxPitch),
                pan: Utils.getRandomIntInRange(State.currentMinPan, State.currentMaxPan),
                distanceType: DISTANCE_TYPES[Utils.getRandomIntInRange(0, DISTANCE_TYPES.length - 1)]
            };
        },
        
        executeScreenFlash(distanceType) {
            if (!State.currentEnableScreenFlash || !$gameScreen) return;
            
            const intensity = Math.floor(Config.flashIntensity * distanceType.intensity);
            const color = distanceType.color;
            
            $gameScreen.startFlash(
                [color[0], color[1], color[2], intensity],
                Config.flashDuration
            );
        }
    };

    // 定时器管理器
    const TimerManager = {
        getRandomInterval() {
            return Utils.getRandomInRange(Config.minInterval, Config.maxInterval) * 1000;
        },
        
        startPlayback() {
            if (State.isPlaying) return;
            
            State.isPlaying = true;
            AudioManagerEx.playThunderSound();
            
            const nextInterval = this.getRandomInterval();
            State.thunderTimer = setTimeout(() => this.scheduleNext(), nextInterval);
        },
        
        scheduleNext() {
            if (!State.isPlaying) return;
            
            AudioManagerEx.playThunderSound();
            
            const nextInterval = this.getRandomInterval();
            State.thunderTimer = setTimeout(() => this.scheduleNext(), nextInterval);
        },
        
        stopPlayback() {
            if (!State.isPlaying) return;
            
            State.isPlaying = false;
            if (State.thunderTimer) {
                clearTimeout(State.thunderTimer);
                State.thunderTimer = null;
            }
        },
        
        playOnce() {
            AudioManagerEx.playThunderSound();
        }
    };

    // 配置设置器
    const ConfigManager = {
        setVolumeRange(min, max) {
            const newMin = Utils.clamp(Number(min) || State.currentMinVolume, CONSTRAINTS.VOLUME.min, CONSTRAINTS.VOLUME.max);
            const newMax = Utils.clamp(Number(max) || State.currentMaxVolume, CONSTRAINTS.VOLUME.min, CONSTRAINTS.VOLUME.max);
            
            if (newMin <= newMax) {
                State.currentMinVolume = newMin;
                State.currentMaxVolume = newMax;
            }
        },
        
        setPanRange(min, max) {
            const newMin = Utils.clamp(Number(min) || State.currentMinPan, CONSTRAINTS.PAN.min, CONSTRAINTS.PAN.max);
            const newMax = Utils.clamp(Number(max) || State.currentMaxPan, CONSTRAINTS.PAN.min, CONSTRAINTS.PAN.max);
            
            if (newMin <= newMax) {
                State.currentMinPan = newMin;
                State.currentMaxPan = newMax;
            }
        },
        
        setPitchRange(min, max) {
            const newMin = Utils.clamp(Number(min) || State.currentMinPitch, CONSTRAINTS.PITCH.min, CONSTRAINTS.PITCH.max);
            const newMax = Utils.clamp(Number(max) || State.currentMaxPitch, CONSTRAINTS.PITCH.min, CONSTRAINTS.PITCH.max);
            
            if (newMin <= newMax) {
                State.currentMinPitch = newMin;
                State.currentMaxPitch = newMax;
            }
        },
        
        setRealisticMode(enabled) {
            State.currentRealisticMode = String(enabled) === 'true';
        },
        
        setScreenFlash(enabled) {
            State.currentEnableScreenFlash = String(enabled) === 'true';
        },
        
        setSEName(name) {
            if (name && name.trim() !== '') {
                State.thunderSeName = name;
            }
        }
    };

    // 调试工具
    const DebugTools = {
        showInfo() {
            console.log('=== 雷声插件调试信息 ===');
            console.log('播放状态:', State.isPlaying);
            console.log('音效文件:', State.thunderSeName);
            console.log('真实模式:', State.currentRealisticMode);
            console.log('屏幕闪烁:', State.currentEnableScreenFlash);
            console.log('音量范围:', `${State.currentMinVolume}-${State.currentMaxVolume}`);
            console.log('音调范围:', `${State.currentMinPitch}-${State.currentMaxPitch}`);
            console.log('声道范围:', `${State.currentMinPan}-${State.currentMaxPan}`);
        },
        
        testSystem(count = 5) {
            console.log(`测试雷声音效系统，播放${count}次...`);
            for (let i = 0; i < count; i++) {
                setTimeout(() => {
                    AudioManagerEx.playThunderSound();
                }, i * 1000);
            }
        }
    };

    // 场景管理器
    const SceneHandler = {
        init() {
            const originalOnSceneStart = SceneManager.onSceneStart;
            const originalTerminate = SceneManager.terminate;
            
            SceneManager.onSceneStart = function() {
                originalOnSceneStart.call(this);
                if (this._scene.constructor === Scene_Battle) {
                    TimerManager.stopPlayback();
                }
            };
            
            SceneManager.terminate = function() {
                TimerManager.stopPlayback();
                originalTerminate.call(this);
            };
        }
    };

    // 插件命令注册
    const PluginCommands = {
        registerAll() {
            if (!PluginManager.registerCommand) return;
            
            const commands = {
                startThunder: function(args) {
                    TimerManager.startPlayback();
                },
                stopThunder: function(args) {
                    TimerManager.stopPlayback();
                },
                playThunderOnce: function(args) {
                    TimerManager.playOnce();
                },
                setVolumeRange: function(args) {
                    ConfigManager.setVolumeRange(args.min, args.max);
                },
                setPanRange: function(args) {
                    ConfigManager.setPanRange(args.min, args.max);
                },
                setPitchRange: function(args) {
                    ConfigManager.setPitchRange(args.min, args.max);
                },
                setRealisticMode: function(args) {
                    ConfigManager.setRealisticMode(args.enabled);
                },
                setScreenFlash: function(args) {
                    ConfigManager.setScreenFlash(args.enabled);
                },
                setSEName: function(args) {
                    ConfigManager.setSEName(args.name);
                },
                testSound: function(args) {
                    DebugTools.testSystem(Number(args.count) || 5);
                },
                debug: function(args) {
                    DebugTools.showInfo();
                }
            };
            
            Object.entries(commands).forEach(([command, handler]) => {
                PluginManager.registerCommand('RandomThunderSound', command, handler);
            });
        }
    };

    // 主初始化
    function initialize() {
        SceneHandler.init();
        PluginCommands.registerAll();
        
        console.log('🚀 随机雷声音效插件已加载 - 优化版');
        console.log('📊 配置:', { 
            interval: `${Config.minInterval}-${Config.maxInterval}s`,
            volume: `${Config.minVolume}-${Config.maxVolume}%`,
            mode: Config.realisticMode ? '真实模式' : '普通模式'
        });
    }
    
    // 启动插件
    initialize();
    
})();
