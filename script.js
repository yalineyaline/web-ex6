// 模拟加载进度逻辑
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');
    const loadingText = document.querySelector('.loading-text');
    let progress = 0;

    // 模拟加载过程
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            
            loadingText.textContent = '加载完成，即将跳转...';
            // setTimeout(() => {
            //     // 替换为你的目标页面地址
            //     window.location.href = 'https://yalineyaline.github.io/web-ex4/'; 
            // }, 1000);
        }

        progressBar.style.width = `${progress}%`;
        loadingText.textContent = `正在加载中... ${Math.floor(progress)}%`;
    }, 200);
});