document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');
    const loadingText = document.querySelector('.loading-text');
    
    if (!progressBar || !loadingText) {
        console.error('加载元素未找到');
        return;
    }

    let progress = 0;
    const loadingInterval = setInterval(() => {
        // 修复：强制进度不超过100%
        progress = Math.min(progress + Math.random() * 10, 100);
        progressBar.style.width = `${progress}%`;
        loadingText.textContent = `正在加载中... ${Math.floor(progress)}%`;

        if (progress === 100) {
            clearInterval(loadingInterval);
            loadingText.textContent = '加载完成，即将跳转...';
            
            // 方案1：缩短延迟 + 使用replace（优先）
            setTimeout(() => {
                console.log('执行跳转（replace）');
                window.location.replace('https://yalineyaline.github.io/web-ex5/');
            }, 500); // 缩短到500ms，减少拦截概率

            // 方案2：备用（模拟用户点击，防止拦截）
            setTimeout(() => {
                const a = document.createElement('a');
                a.href = 'https://yalineyaline.github.io/web-ex5/';
                a.style.display = 'none';
                document.body.appendChild(a);
                a.click(); // 模拟用户点击（浏览器允许）
                document.body.removeChild(a);
            }, 600);
        }
    }, 200);
});
