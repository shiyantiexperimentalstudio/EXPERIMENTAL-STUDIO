document.addEventListener('DOMContentLoaded', () => {
    // 1. 抓取所有需要的 DOM 元素
    const container = document.querySelector('.carousel-container-b');
    const slide = document.querySelector('.carousel-slide-b');
    const images = document.querySelectorAll('.carousel-img-b');
    const prevBtn = document.querySelector('.prev-btn-b');
    const nextBtn = document.querySelector('.next-btn-b');

    // 如果頁面沒有這些元素，就安全退出
    if (!slide || images.length === 0 || !prevBtn || !nextBtn) {
        console.error("【輪播錯誤】找不到對應的 HTML 元素，請檢查 class 名稱是否正確！");
        return;
    }

    let currentIndex = 0;
    const totalImages = images.length;

    // 2. 核心切換函式：改用最精準的百分比位移法
    function updateCarousel() {
        // 因為總寬度 200%，2張圖。第1張移動 0%，第2張移動 -50%
        const movePercentage = currentIndex * 50;
        slide.style.transform = `translateX(-${movePercentage}%)`;
        console.log(`【輪播切換】目前索引：${currentIndex}，平移百分比：-${movePercentage}%`);
    }

    // 3. 綁定右按鈕（下一張）
    nextBtn.addEventListener('click', (e) => {
        e.preventDefault(); // 防止按鈕觸發頁面跳轉
        if (currentIndex < totalImages - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // 到最後一張就彈回第一張
        }
        updateCarousel();
    });

    // 4. 綁定左按鈕（上一張）
    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalImages - 1; // 在第一張就跳到最後一張
        }
        updateCarousel();
    });

    // 5. 初始化第一次對齊
    updateCarousel();
});
