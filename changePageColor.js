// ==UserScript==
// @name         设置浏览器背景颜色为定时变化
// @version      1.0
// @description  设置浏览器背景颜色为定时变化
// @author       ziyi
// @match        *://*/*
// ==/UserScript==

(function() {
    'use strict';

    // 定时器间隔时间（单位：毫秒）
    const interval = 2000;

    // 随机生成颜色,不保证颜色代码符合标准，只能保证代码格式和位数为#****** 格式
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // 设置背景颜色
    function setBackgroundColor() {
        document.body.style.backgroundColor = getRandomColor();
    }

    // 定时变化背景颜色
    setInterval(setBackgroundColor, interval);
})();
