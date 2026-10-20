// Thời gian (ms) từ lúc hoa bắt đầu nở đến khi nở hết (animation dài nhất ~6.8s)
const BLOOM_DURATION = 7500;

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);

      // Hoa nở hết thì hiện phong thư
      setTimeout(() => {
        document.getElementById("envelope").classList.add("show");
      }, BLOOM_DURATION);
    }, 1000);

    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");

    envelope.addEventListener("click", () => {
      envelope.classList.remove("show");
      letter.classList.add("show");
    });

    document.getElementById("letter-close").addEventListener("click", () => {
      letter.classList.remove("show");
      envelope.classList.add("show");
    });
  };