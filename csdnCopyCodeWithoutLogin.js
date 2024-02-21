// ==UserScript==
// @name         免登录复制csdn代码
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  免登录复制csdn代码
// @author       zhuiyi
// @match        https://blog.csdn.net/*/article/details/*
// @icon         https://img-home.csdnimg.cn/images/20201124032511.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //获取所有代码块
    let codes = document.quertSelectorAll("code");
    //循环遍历所有代码块
    codes.forEach(c => {
        c.contentEditable = "true"
    })
})();
