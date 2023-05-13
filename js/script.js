window.addEventListener("load", () => {
  const videoElement = document.querySelector("#video");
  const prevBtn = document.querySelector("#prev");
  const nextBtn = document.querySelector("#next");
  const h1 = document.querySelector("h1");
  const h5 = document.querySelector("h5");

  const videos = [
    {
      title: "Islands",
      src: "../videos/islands.mp4",
      description: "Це відео про мальовничі острови. Нажаль автор не відомий",
    },
    {
      title: "Mountains",
      src: "../videos/mountains.mp4",
      description: "Це відео про мальовничі гори. Нажаль автор не відомий",
    },
    {
      title: "Sample",
      src: "../videos/sample.mp4",
      description:
        "Це відео про мальовничі місця нашоги міста. Нажаль автор не відомий",
    },
  ];
  let curentVideoIndex = 0;

  setVideo(curentVideoIndex);

  document.body.addEventListener("click", () => {
    videoElement.play();
  });

  function setVideo(index, delay = 0) {
    const action = () => {
      const { title, src, description } = videos[index];
      videoElement.src = src;
      h1.textContent = title;
      h5.textContent = description
      videoElement.play();
    };
    delay ? setTimeout(() => action(), delay) : action();
  }

  prevBtn.addEventListener("click", function () {
    curentVideoIndex--;
    if (videos[curentVideoIndex]) {
      setVideo(curentVideoIndex, 1000);
    } else {
      curentVideoIndex = videos.at(-1);
      setVideo(curentVideoIndex, 1000);
    }
  });

  nextBtn.addEventListener("click", function () {
    curentVideoIndex++;
    if (videos[curentVideoIndex]) {
      setVideo(curentVideoIndex, 1000);
    } else {
      curentVideoIndex = 0;
      setVideo(curentVideoIndex, 1000);
    }
  });
});
