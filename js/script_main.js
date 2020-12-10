function startMap(self) {
    const subject = document.getElementById("text_subject").value;
    let alertText = document.getElementById('text_alert');

    // /^[A-Za-z][A-Za-z0-9]*$/
    const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-zA-Z]/;

    if (subject === "") {
        alertText.innerHTML = "마인드맵 시작 단어를 입력하세요.";
    } else {
        if (!regex.test(subject)) {
            alertText.innerHTML = "한글과 영어만 입력하세요.";
        } else {
            // subject 들고 다음 페이지로 이동
        }
    }
}