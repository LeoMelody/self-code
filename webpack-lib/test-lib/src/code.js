// 文件：index.js

// 创建一个 button
let btn = document.createElement("button");
btn.innerHTML = "click me";
document.body.appendChild(btn);

// 异步加载代码
async function getAsyncComponent() {
    var element = document.createElement('div');
    const { getData } = await import('./async');

    const { join } = await import('lodash-es');

    element.innerHTML = join(['Hello!', 'dynamic', 'imports', 'async'], ' ');

    element.innerHTML = await getData();

    return element;
}

// 点击 button 时，懒加载 lodash，在网页上显示 Hello! dynamic imports async
btn.addEventListener('click', () => {
    getAsyncComponent().then(component => {
        document.body.appendChild(component);
    })
})
