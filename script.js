// ==========================================================================
// 1. 다크모드 (Dark Mode) 토글 기능
// ==========================================================================
const darkModeBtn = document.getElementById('darkModeBtn');

// 사용자가 이전에 방문했을 때 설정한 테마가 있는지 확인
const currentTheme = localStorage.getItem('theme');

// 만약 이전에 설정한 테마가 다크모드였다면 미리 적용
if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeBtn.textContent = '☀️'; // 버튼 모양을 해로 변경
}

// 버튼 클릭 시 테마 전환 이벤트
darkModeBtn.addEventListener('click', () => {
    // 현재 테마 속성 가져오기
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        // 다크모드 -> 라이트모드
        document.documentElement.removeAttribute('data-theme');
        darkModeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        // 라이트모드 -> 다크모드
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});

// ==========================================================================
// 2. 스크롤 시 헤더 스타일 변경 (선택 사항 - 더 깔끔한 연출용)
// ==========================================================================
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
        header.style.padding = '15px 8%'; // 스크롤 내리면 헤더가 살짝 슬림해짐
    } else {
        header.style.boxShadow = 'none';
        header.style.padding = '20px 8%'; // 원래 크기
    }
});