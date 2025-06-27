import React, { useState } from 'react';
// 需要 import React，因为这是 React 项目。
// { useState } 是 React 的“状态 Hook”，让你能在函数组件里存/改变量。

import logo from './logo.svg';
import './App.css';
// 引入 logo 图片和样式，保证页面显示和风格。

// UserSearch 组件 —— 用 const 定义一个“函数组件”
// 括号里的 { onSearch, onChange } 是“解构赋值”，接收父组件传来的 props
const UserSearch = ({ onSearch, onChange }) => {
  // const 定义函数，是 ES6 的箭头函数写法（lambda风格），现在用得很普遍。
  // 用 const 而不是 function，方便配合箭头函数简洁写法，也能避免 this 指向混乱。
  // 这是个匿名函数（有名字 UserSearch），写成 const xxx = () => {...}

  const [inputValue, setInputValue] = useState('');
  // 这不是数组，是“解构赋值”——useState 返回一个“数组”，
  // 第一项是当前状态值（inputValue），第二项是改状态的方法（setInputValue）
  // 作用：你能通过 setInputValue(新值) 来更新 inputValue，页面会自动刷新

  const handleInputChange = (e) => {
    // handleXxx 是“处理某个事件”的常用命名风格
    // 这里的 (e) 是事件对象 event，不是 exception（和 Java/C# 不一样！）
    // 每次 input 输入变动，事件对象 e 会带有本次事件的全部信息
    const value = e.target.value;
    // e.target 指的是触发事件的 input 元素，.value 就是它当前内容
    setInputValue(value);
    // 更新 inputValue 状态，让页面内容和输入同步
    onChange(value); // 通知父组件输入值变化（如果父组件需要响应）
  };

  const handleSubmit = () => {
    // 提交时触发（比如点按钮或回车），处理本次“搜索”
    if (inputValue.trim()) {
      // .trim() 去掉首尾空格，判断不是空输入
      onSearch(inputValue.trim()); // 把输入的用户名传给父组件（让父组件做后续处理，比如查询）
    }
  };

  const handleKeyPress = (e) => {
    // 每次按键时触发
    if (e.key === 'Enter') {
      // 只有按下回车键才触发“提交”
      handleSubmit();
    }
  };

  // 函数组件必须有 return，用于“返回”组件的 UI 结构（虚拟DOM）
  // 这里是返回一段嵌套的 JSX（看起来像 HTML），会被渲染成页面内容
  return (
    <div className="user-search">
      <div className="input-container">
        {/* “@” 符号 */}
        <span className="at-symbol">@</span>
        {/* 输入框，绑定了当前 inputValue 作为值，onChange 响应输入变化 */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="输入Twitter用户名"
          className="username-input"
          onKeyPress={handleKeyPress}
        />
        {/* 提交按钮，点了就执行 handleSubmit */}
        <button onClick={handleSubmit} className="flush-button">
          🚽
        </button>
      </div>
    </div>
  );
};
// 注意这不是“返回”到调用者（像 return 42），而是 React 规定组件必须 return 一段“JSX”，告诉页面要渲染啥

export default UserSearch;
// 导出这个组件，方便被 App.js 或其它文件 import 使用
